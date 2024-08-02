import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="w-full items-center justify-between flex flex-row">
      <Pressable className="w-10 h-10 bg-white items-center flex justify-center rounded-full">
        <Ionicons name="menu" size={24} color={"#121212"} />
      </Pressable>

      <Pressable className="w-10 h-10 bg-white items-center flex justify-center rounded-full">
        <Feather name="bell" size={24} color={"#121212"} />
      </Pressable>
    </View>
  );
};

export default Header;
