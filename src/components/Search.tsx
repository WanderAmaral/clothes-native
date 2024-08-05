import { Ionicons } from "@expo/vector-icons";
import { View, TextInput } from "react-native";

export default function components() {
  return (
    <View className="flex-row items-center px-8 justify-center w-full">
      <View className="flex-row items-center bg-white rounded-full w-full h-16 px-4">
        <Ionicons name="search" size={24} className="mr-2" />
        <TextInput placeholder="Search" className="flex-1 h-full" />
      </View>
    </View>
  );
}
