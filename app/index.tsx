import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-zinc-900 text-3xl">Hello World!</Text>
    </SafeAreaView>
  );
}
