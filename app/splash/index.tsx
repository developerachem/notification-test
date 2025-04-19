import LottieView from "lottie-react-native";
import { useWindowDimensions, View } from "react-native";

const Splash = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{ backgroundColor: "#008ce3", flex: 1 }}
      className="justify-center items-center"
    >
      <LottieView
        source={require("@/assets/json/splash.json")}
        autoPlay
        loop
        style={{ height: height, width: width }}
      />
    </View>
  );
};

export default Splash;
