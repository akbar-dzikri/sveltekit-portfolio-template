<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
</script>

<div class="mx-auto max-w-2xl space-y-8">
	<header class="space-y-4 text-center">
		<h1 class="h1 font-serif">Contact Me</h1>
		<p class="text-xl">Have a question or want to work together? Let's get in touch!</p>
	</header>

	<form class="card variant-glass-surface space-y-6 p-8">
		<label class="label">
			<span>Name</span>
			<input class="input" type="text" placeholder="John Doe" required />
		</label>

		<label class="label">
			<span>Email</span>
			<input class="input" type="email" placeholder="john@example.com" required />
		</label>

		<label class="label">
			<span>Message</span>
			<textarea class="textarea" rows="6" placeholder="Your message here..." required></textarea>
		</label>

		<button type="submit" class="variant-filled-primary btn w-full"> Send Message </button>
	</form>

	<div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
		<a
			href="mailto:john@example.com"
			class="card variant-soft flex flex-col items-center justify-center p-6 transition-all hover:variant-soft-primary"
		>
			<span class=" mb-2"><Mail width="24" height="24" /></span>
			<p>Email</p>
		</a>
		<a
			href="https://github.com/johndoe"
			target="_blank"
			rel="noopener noreferrer"
			class="card variant-soft flex flex-col items-center justify-center p-6 transition-all hover:variant-soft-primary"
		>
			<span class=" mb-2"><Github width="24" height="24" /></span>
			<p>GitHub</p>
		</a>
		<a
			href="https://linkedin.com/in/johndoe"
			target="_blank"
			rel="noopener noreferrer"
			class="card variant-soft flex flex-col items-center justify-center p-6 transition-all hover:variant-soft-primary"
		>
			<span class=" mb-2"><Linkedin width="24" height="24" /></span>
			<p>LinkedIn</p>
		</a>
	</div>
</div>
