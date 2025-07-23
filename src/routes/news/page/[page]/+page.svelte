<script lang="ts">
  export let data;
  const { paginatedPosts, currentPage, totalPages } = data;
</script>

<style>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
}
.news-link {
  background: #f3f4f6;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #1e293b;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.news-link:hover {
  box-shadow: 0 4px 16px rgba(99,102,241,0.15);
  background: #e0e7ff;
}
.date {
  font-size: 0.9rem;
  color: #64748b;
}
.pagination {
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0 0 0;
  justify-content: center;
}
.page-btn {
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}
.page-btn.active, .page-btn:hover {
  background: #60a5fa;
}
</style>

<h1>All Articles</h1>
<div class="news-list">
  {#each paginatedPosts as post}
    <a class="news-link" href="/news/article/{post.slug}">
      <div class="date">{post.date}</div>
      <div class="title"><strong>{post.title}</strong></div>
    </a>
  {/each}
</div>
<div class="pagination">
  {#each Array(totalPages) as _, i}
    <a class="page-btn {currentPage === i + 1 ? 'active' : ''}" href="/news/page/{i + 1}">{i + 1}</a>
  {/each}
</div> 