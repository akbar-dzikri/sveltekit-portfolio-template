<script lang="ts">
	import { initializeStores, AppShell } from '@skeletonlabs/skeleton';
	import * as settings from '$lib/content/setting/settings.json';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	initializeStores();
</script>

<svelte:head>
	<title>{settings.title}</title>
	<meta name="description" content={settings.description} />
</svelte:head>

<AppShell>
	<Navbar />

	<main class="container mx-auto min-h-[calc(100vh-64px-80px)] px-4">
		<slot />
	</main>

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
