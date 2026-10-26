export const postsQuery = `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc){
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
  _updatedAt,
  body
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc){
  "slug": slug.current,
  _updatedAt,
  publishedAt
}`;
