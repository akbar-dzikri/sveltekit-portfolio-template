<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	import * as settings from '$lib/content/setting/settings.json';

	import type { PortfolioSettings } from '$lib/types';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="fixed left-0 right-0 top-0 z-50">
	<AppBar class="bg-surface-100-800-token border-b border-surface-500/10">
		<svelte:fragment slot="lead">
			<a href="/" class="text-xl font-bold hover:text-primary-700">{settings.title}</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-4 md:flex">
				<Navigation />
				<LightSwitch />
			</div>
			<!-- Mobile Navigation Button -->
			<div class="flex items-center gap-4 md:hidden">
				<LightSwitch />
				<button class="btn btn-sm" onclick={toggleMenu} aria-label="Menu">
					<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
						<rect width="100" height="10"></rect>
						<rect y="30" width="100" height="10"></rect>
						<rect y="60" width="100" height="10"></rect>
					</svg>
				</button>
			</div>
		</svelte:fragment>
	</AppBar>

	<!-- Mobile Navigation Menu -->
	{#if isMenuOpen}
		<div
			class="bg-surface-100-800-token absolute left-0 right-0 top-[64px] z-10 border-b border-surface-500/10 md:hidden"
		>
			<Navigation isMobile={true} on:click={() => (isMenuOpen = false)} />
		</div>
	{/if}
</div>

<!-- Spacer to prevent content from going under navbar -->
<div class="h-[64px]"></div>
