import { Slot } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { tokenCache } from "./storage/tokencache";
import "@/app/global.css";
import Header from "@/components/Header";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const statusBarHeight = Constants.statusBarHeight;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;
  }, [isSignedIn]);

  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}

export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <LinearGradient
        colors={["#e5c3bf", "#dddddd", "#FFFFFF"]}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          className=""
          showsVerticalScrollIndicator={false}
        >
          <View
            className="w-full px-5"
            style={{ marginTop: statusBarHeight + 8 }}
          >
            <Header />
            <InitialLayout />
          </View>
        </ScrollView>
      </LinearGradient>
    </ClerkProvider>
  );
}
