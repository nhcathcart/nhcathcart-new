import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "moviePost" && defined(slug)]{
    ...,
    author->{
      _id,
      name,
      image
    },
    categories[]->{
      _id,
      title
    }
  }`;

export const POST_QUERY = groq`*[_type == "moviePost" && slug.current == $slug][0]`;

export const WElCOME_QUERY = groq`*[_type == "welcomeMessage"][0]`;