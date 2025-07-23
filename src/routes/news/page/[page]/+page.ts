import type { PageLoad } from './$types';
import posts from '$lib/posts.json';

const pageSize = 10;

export const load: PageLoad = ({ params }) => {
  const page = parseInt(params.page, 10) || 1;
  const totalPages = Math.ceil(posts.length / pageSize);
  const paginatedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice((page - 1) * pageSize, page * pageSize);
  return { paginatedPosts, currentPage: page, totalPages };
}; 