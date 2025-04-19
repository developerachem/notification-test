import { NotificationProvider } from "@/context/Notification";
import { store } from "@/store/store";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as TaskManager from "expo-task-manager";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

TaskManager.defineTask(
  BACKGROUND_NOTIFICATION_TASK,
  async ({ data, error, executionInfo }) => {
    console.log("✅ Received a notification in the background!", {
      data,
      error,
      executionInfo,
    });
    // Do something with the notification data
  }
);

Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      {/* <Slot /> */}
      <NotificationProvider>
        <RootLayoutNav />
      </NotificationProvider>
    </Provider>
  );
}

function RootLayoutNav() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    router.push("/splash");
    setTimeout(() => {
      // router.push("/(tabs)/dashboard");
      router.push("/auth/Login");
    }, 4000);
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="splash"
        options={{ title: "Splash", headerShown: false }}
      />
    </Stack>
  );
}

// export default Slot;
