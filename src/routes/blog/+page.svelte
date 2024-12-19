<script lang="ts">
  export let data;
  const { posts } = data;
</script>

<div class="space-y-8">
  <header class="text-center space-y-4">
    <h1 class="h1 font-serif">Blog</h1>
    <p class="text-xl max-w-2xl mx-auto text-surface-700-200-token">Thoughts, tutorials, and insights about web development.</p>
  </header>

  <div class="grid grid-cols-1 gap-8">
    {#each posts as post}
      <article class="card overflow-hidden grid grid-cols-1 md:grid-cols-3 variant-glass hover:variant-soft transition-all">
        <img 
          src="https://placehold.co/800x400/png" 
          alt={post.title} 
          class="w-full h-full object-cover md:col-span-1"
        />
        <div class="p-6 space-y-4 md:col-span-2">
          <div class="space-y-2">
            <h2 class="h3">{post.title}</h2>
            <time class="text-sm text-surface-600-300-token">Published on {post.date}</time>
          </div>
          <p class="text-surface-700-200-token">{post.description}</p>
          <a href={`/blog/${post.slug}`} class="btn variant-ghost">
            Read More
          </a>
        </div>
      </article>
    {/each}
  </div>
</div>
