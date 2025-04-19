import { useNotification } from "@/context/Notification";
import { Text, View } from "react-native";

const DashboardScreen = () => {
  const { expoPushToken } = useNotification();
  console.log(expoPushToken);
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{expoPushToken}</Text>
    </View>
  );
};

export default DashboardScreen;
