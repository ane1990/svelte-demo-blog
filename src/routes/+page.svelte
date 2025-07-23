<script lang="ts">
  import posts from '$lib/posts.json';
  // Sort posts by date descending and take the 5 most recent
  const recentPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
</script>

<style>
.banner {
  background: linear-gradient(90deg, #6366f1 0%, #60a5fa 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}
.articles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.article-link {
  background: #f3f4f6;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #1e293b;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.article-link:hover {
  box-shadow: 0 4px 16px rgba(99,102,241,0.15);
  background: #e0e7ff;
}
.date {
  font-size: 0.9rem;
  color: #64748b;
}
</style>

<div class="banner">
  <h1>Demo Blog</h1>
  <p>Modern SvelteKit SSR Blog Demo</p>
</div>

<section>
  <h2>Recent Articles</h2>
  <div class="articles">
    {#each recentPosts as post}
      <a class="article-link" href="/news/article/{post.slug}">
        <div class="date">{post.date}</div>
        <div class="title"><strong>{post.title}</strong></div>
      </a>
    {/each}
  </div>
</section>
