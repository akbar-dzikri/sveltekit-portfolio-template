<script lang="ts">
  export let data;
  const { title, date, content: Content, thumbnail } = data;
</script>

<article class="prose prose-lg dark:prose-invert mx-auto py-8">
  <header class="text-center mb-12 space-y-4 not-prose">
    <h1 class="h1 font-serif">{title}</h1>
    <time class="text-sm text-surface-600-300-token">Published on {date}</time>
    
  </header>

  <div class="card p-8 variant-glass">
    {#if thumbnail}
      <img 
        src={thumbnail} 
        alt={title} 
        class="w-full h-full object-cover"
      />
    {/if}
    <svelte:component this={Content} />
  </div>
</article>
