export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  body
}`;
