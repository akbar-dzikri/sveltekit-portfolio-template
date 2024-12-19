<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';

    const projects = [
        {
            title: 'Project 1',
            description: 'A brief description of the project and its key features.',
            imageUrl: 'https://placehold.co/800x400/png'
        },
        {
            title: 'Project 2',
            description: 'A brief description of the project and its key features.',
            imageUrl: 'https://placehold.co/800x400/png'
        }
    ];
</script>

<section>
    <h2 class="h2 font-serif mb-6">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each projects as project}
            <ProjectCard {...project} />
        {/each}
    </div>
</section>
