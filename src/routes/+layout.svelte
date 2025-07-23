<script>
  // No script needed for static header
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 12px rgba(99,102,241,0.10);
  padding: 0.7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e7eb;
}
.header-inner {
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}
.site-title {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #6366f1;
  letter-spacing: 1px;
  text-decoration: none;
  gap: 0.6rem;
}
.site-logo {
  width: 2.2rem;
  height: 2.2rem;
  background: linear-gradient(135deg, #6366f1 60%, #60a5fa 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  box-shadow: 0 2px 8px rgba(99,102,241,0.10);
}
.nav {
  display: flex;
  gap: 1.2rem;
}
.nav-link {
  color: #6366f1;
  background: #f3f4f6;
  border-radius: 999px;
  padding: 0.5rem 1.2rem;
  font-weight: 500;
  font-size: 1.08rem;
  text-decoration: none;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  box-shadow: 0 1px 4px rgba(99,102,241,0.04);
  border: 1px solid transparent;
}
.nav-link:hover, .nav-link.active {
  background: linear-gradient(90deg, #6366f1 0%, #60a5fa 100%);
  color: #fff;
  border: 1px solid #6366f1;
  box-shadow: 0 2px 8px rgba(99,102,241,0.10);
}
.main-content {
  padding: 2rem 0 0 0;
}
</style>

<header class="header">
  <div class="header-inner">
    <div class="site-title">
      <span class="site-logo">📰</span>
      Demo Blog
    </div>
    <nav class="nav">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/news">News</a>
    </nav>
  </div>
</header>
<main class="main-content">
  <slot />
</main> 