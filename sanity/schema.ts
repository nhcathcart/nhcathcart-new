import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import moviePost from './schemaTypes/moviePost'
import author from './schemaTypes/author'
import restaurantPosts from './schemaTypes/restaurantPosts'
import welcomeMessage from './schemaTypes/welcomeMessage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [moviePost, blockContent, author, category, restaurantPosts, welcomeMessage],
}
