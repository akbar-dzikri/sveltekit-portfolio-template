<script lang="ts">
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1 and its key features.',
      image: 'https://placehold.co/800x400/png',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2 and its key features.',
      image: 'https://placehold.co/800x400/png',
      tags: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3 and its key features.',
      image: 'https://placehold.co/800x400/png',
      tags: ['SvelteKit', 'Python', 'MySQL']
    },
    {
      title: 'Project 4',
      description: 'A brief description of project 4 and its key features.',
      image: 'https://placehold.co/800x400/png',
      tags: ['Next.js', 'GraphQL', 'Firebase']
    }
  ];
</script>

<div class="space-y-8">
  <header class="text-center space-y-4">
    <h1 class="h1 font-serif">My Projects</h1>
    <p class="text-xl max-w-2xl mx-auto text-surface-700-200-token">Explore my latest projects and technical achievements.</p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each projects as project}
      <div class="card overflow-hidden variant-glass hover:variant-soft transition-all">
        <header>
          <img 
            src={project.image} 
            alt={project.title} 
            class="w-full aspect-video object-cover"
          />
        </header>
        <div class="p-6 space-y-4">
          <h2 class="h3">{project.title}</h2>
          <p class="text-surface-700-200-token">{project.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="badge variant-filled">{tag}</span>
            {/each}
          </div>
          <a href="#" class="btn variant-ghost">View Project</a>
        </div>
      </div>
    {/each}
  </div>
</div>
