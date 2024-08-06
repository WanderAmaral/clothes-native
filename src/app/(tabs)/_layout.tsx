import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import "@/app/global.css";
import { tokenCache } from "../storage/tokencache";
import { LinearGradient } from "expo-linear-gradient";


const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function TabLayout() {
  return (
    <ClerkProvider
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      
        <Header />
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: () => <Ionicons name="menu" />,
            }}
          />
        </Tabs>
    </ClerkProvider>
  );
}
