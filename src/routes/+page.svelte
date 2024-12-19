<script lang="ts">
	import * as settings from '$lib/content/setting/settings.json';
	import { ProgressBar } from '@skeletonlabs/skeleton';

	let { data } = $props();
	const { featuredPosts } = data;
</script>

<div class="space-y-16">
	<!-- Hero Section -->
	<section class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<div class="space-y-4">
			<h1 class="h1 font-serif">
				Hi, I'm <span class="font-bold underline">{settings.name}</span>
			</h1>
			<p class="text-surface-700-200-token text-xl">{settings.description}</p>
			<div class="flex gap-4">
				<a href="/projects" class="variant-filled btn">Projects</a>
				<a href="/contact" class="variant-soft btn">Contact</a>
			</div>
		</div>
		<div class="aspect-square">
			<img
				src="https://placehold.co/600x600/png"
				alt="Profile"
				class="h-full w-full rounded-lg object-cover"
			/>
		</div>
	</section>

	<!-- About Section -->
	<section class="card variant-glass p-8">
		<h2 class="h2 mb-6 font-serif">About Me</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each settings.skills as skill}
				<div class="space-y-4">
					<h3 class="h3">{skill.name}</h3>
					<p class="text-surface-700-200-token">{skill.description}</p>
					<ProgressBar value={skill.percentage} />
				</div>
			{/each}
		</div>
	</section>

	<section class="card variant-glass p-8">
		<h2 class="h2 mb-6 font-serif">Featured Blogs</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each featuredPosts as post}
				<div class="card variant-glass overflow-hidden">
					<header>
						<img src={post.thumbnail} alt={post.title} class="aspect-video w-full object-cover" />
					</header>
					<div class="space-y-4 p-6">
						<h3 class="h3">{post.title}</h3>
						<p class="text-surface-700-200-token">{post.description}</p>
						<a href="/blog/{post.slug}" class="variant-ghost btn">Read More</a>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
