import type { PageLoad } from './$types';
import posts from '$lib/posts.json';

export const load: PageLoad = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  return { post };
}; 