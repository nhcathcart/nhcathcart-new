import { groq } from "next-sanity";

export const MOVIE_POSTS_QUERY = groq`*[_type == "moviePost" && defined(slug)]{
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

export const BLOG_POSTS_QUERY = groq`*[_type == "blogPost" && defined(slug)]{
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

export const WORK_POSTS_QUERY = groq`*[_type == "workPost"]`
export const BLOG_POST_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0]`;

export const MOVIE_POST_QUERY = groq`*[_type == "moviePost" && slug.current == $slug][0]`;

export const WElCOME_QUERY = groq`*[_type == "welcomeMessage"][0]`;
