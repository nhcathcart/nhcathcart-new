import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import moviePost from "./schemaTypes/moviePost";
import author from "./schemaTypes/author";
import restaurantPosts from "./schemaTypes/restaurantPosts";
import welcomeMessage from "./schemaTypes/welcomeMessage";
import blogPost from "./schemaTypes/blogPost";
import workPost from "./schemaTypes/workPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    moviePost,
    blockContent,
    author,
    category,
    restaurantPosts,
    welcomeMessage,
    blogPost,
    workPost,
  ],
};
