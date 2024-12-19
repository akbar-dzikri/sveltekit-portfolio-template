import type { MarkdownPost } from '$lib/types';

export const load = async (): Promise<{ posts: MarkdownPost[]; featuredPosts: MarkdownPost[] }> => {
	const posts = import.meta.glob('/src/lib/content/blog/*.md');
	const loadedPosts = await Promise.all(
		Object.entries(posts).map(async ([path, resolver]) => {
			const post = await resolver();
			const slug = path.split('/').pop()?.replace('.md', '');
			return {
				slug,
				// @ts-expect-error metadata is optional
				...post!.metadata
			} as MarkdownPost;
		})
	);

	// Filter for featured posts
	const featuredPosts = loadedPosts.filter(
		(post) => post.featured
	);

	return {
		posts: loadedPosts,
		featuredPosts
	};
};