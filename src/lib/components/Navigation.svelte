<script lang="ts">
    export let isMobile = false;

    const links = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' }
    ];
</script>

{#if isMobile}
    <nav class="p-4 space-y-2">
        {#each links as link}
            <a 
                href={link.href} 
                class="btn variant-ghost w-full justify-start"
                on:click
            >
                {link.label}
            </a>
        {/each}
    </nav>
{:else}
    <nav class="flex items-center space-x-4">
        {#each links as link}
            <a href={link.href} class="btn btn-sm variant-ghost">
                {link.label}
            </a>
        {/each}
    </nav>
{/if}
