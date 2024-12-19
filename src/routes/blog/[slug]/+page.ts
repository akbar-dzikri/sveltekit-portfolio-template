import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`/src/lib/content/blog/${params.slug}.md` /* @vite-ignore */);
    
    return {
      title: post.metadata.title,
      date: post.metadata.date,
      content: post.default,
      thumbnail: post.metadata.thumbnail
    };
  } catch (e) {
    throw error(404, `Could not find blog post '${params.slug}'\n\n${e}`);
  }
};
