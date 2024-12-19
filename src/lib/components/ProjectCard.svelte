<script lang="ts">
    export let title: string;
    export let description: string;
    export let imageUrl: string;
</script>

<div class="card overflow-hidden variant-glass">
    <header>
        <img 
            src={imageUrl}
            alt={title}
            class="w-full aspect-video object-cover"
        />
    </header>
    <div class="p-6 space-y-4">
        <h3 class="h3">{title}</h3>
        <p class="text-surface-700-200-token">{description}</p>
        <a href="/projects" class="btn variant-ghost">View Project</a>
    </div>
</div>
