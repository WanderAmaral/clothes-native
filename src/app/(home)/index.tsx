import { View, Text, FlatList, Image } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../../drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import CategoryList from "./components/category-list";

const DATABASE_NAME = "database.db";
const expoDB = openDatabaseSync(DATABASE_NAME);
const db = drizzle(expoDB);

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface DataProducts {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Home() {
  const { error } = useMigrations(db, migrations);
  const [products, setProducts] = useState<DataProducts[]>([]);

  useDrizzleStudio(expoDB);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: ApiProduct[] = await response.json();

        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        }));
        setProducts(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const renderItem = ({ item }: { item: DataProducts }) => (
    <View className="px-2 w-1/2">
      <View className="rounded px-4">
        <Image
          source={{ uri: item.image }}
          className="w-full h-48 rounded-3xl"
        />
        <Text className="text-lg font-bold mb-2">{item.name}</Text>
        <Text className="text-base text-gray-600 ">
          R$: {item.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <Text className="text-3xl font-medium px-6 py-5">Match Your Style</Text>
      <Search />
      <CategoryList />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={2}
      />
    </View>
  );
}
