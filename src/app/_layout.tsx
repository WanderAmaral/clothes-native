import { Slot, Stack } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokenCache } from "./storage/tokencache";
import "@/app/global.css";
import Header from "@/components/Header";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const statusBarHeight = Constants.statusBarHeight;

// function InitialLayout() {
//   const { isSignedIn, isLoaded } = useAuth();

//   useEffect(() => {
//     if (!isLoaded) return;
//   }, [isSignedIn]);

//   return isLoaded ? (
//     <Slot />
//   ) : (
//     <ActivityIndicator
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     />
//   );
// }

export function Layout() {
  return (
    <LinearGradient
      colors={["#e5c3bf", "#dddddd", "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <View className="w-full px-5">
        <Stack>
          <Stack.Screen name="(tabs)" />
        </Stack>
        {/* <InitialLayout /> */}
      </View>
    </LinearGradient>
  );
}
