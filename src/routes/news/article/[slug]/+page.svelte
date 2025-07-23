<script lang="ts">
  export let data;
  const { post } = data;
</script>

<style>
.article {
  max-width: 700px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(99,102,241,0.08);
  padding: 2rem;
}
.date {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
h1 {
  margin-bottom: 1.5rem;
}
p {
  line-height: 1.7;
  margin-bottom: 1rem;
}
.not-found {
  text-align: center;
  color: #ef4444;
  margin-top: 3rem;
}
</style>

{#if post}
  <div class="article">
    <div class="date">{post.date}</div>
    <h1>{post.title}</h1>
    {#each post.content as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
{:else}
  <div class="not-found">
    <h2>Article not found</h2>
    <p>The article you are looking for does not exist.</p>
  </div>
{/if} 