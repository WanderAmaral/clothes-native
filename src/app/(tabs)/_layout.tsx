import Header from "@/components/Header";
import { Ionicons, Feather } from "@expo/vector-icons";
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
    <LinearGradient
      colors={["#e5c3bf", "#dddddd", "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <ClerkProvider
        publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
      >
        <Header />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 90,
              alignItems: "center",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={30}
                  color={focused ? "#E12727" : "#c0c0c0"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="menu"
            options={{
              title: "",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "menu" : "menu-outline"}
                  size={30}
                  color={focused ? "#E12727" : "#c0c0c0"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="cart"
            options={{
              title: "",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="cart"
                  size={30}
                  color={focused ? "#E12727" : "#c0c0c0"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              title: "",
              tabBarIcon: ({ focused, size }) => (
                <Feather
                  name="user"
                  size={size}
                  color={focused ? "#E12727" : "#c0c0c0"}
                />
              ),
            }}
          />
        </Tabs>
      </ClerkProvider>
    </LinearGradient>
  );
}
