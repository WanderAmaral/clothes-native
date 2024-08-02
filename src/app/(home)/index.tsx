import { View, Text, ScrollView } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../../drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import Header from "@/components/Header";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

const DATABASE_NAME = "database.db";
const expoDB = openDatabaseSync(DATABASE_NAME);
const db = drizzle(expoDB);

export default function Home() {
  const { error } = useMigrations(db, migrations);

  useDrizzleStudio(expoDB);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-5" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
      </View>
    </ScrollView>
  );
}
