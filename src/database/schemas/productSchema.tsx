import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const product = sqliteTable("products", {
  id: integer("id").primaryKey(), // Adicione autoIncrement se necessário
  name: text("name").notNull(),
  price: real("price").notNull(), // Usando 'real' para valores de ponto flutuante
  image: text("image").notNull(),
});
