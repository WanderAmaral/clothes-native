import { View, Text, StyleSheet } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../../drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

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
    <View style={style.container}>
      <Text className="text-5xl font-extrabold">ruan guei</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
