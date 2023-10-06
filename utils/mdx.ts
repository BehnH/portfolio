import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime, { ReadTimeResults } from 'reading-time';
import { serialize } from "next-mdx-remote/serialize";
import { z } from 'zod';

// Rehype plugins
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import imageSize from "rehype-img-size";
import rehypePrettyCode from 'rehype-pretty-code';

const rootDir = process.cwd();

const PostLayout = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.string().array().default([])
});

export type Post = z.infer<typeof PostLayout> & {
    slug: string;
    readingTime: ReadTimeResults;
};

// Sort posts by date in descending order
export async function sortPosts(tag?: string): Promise<Post[]> {
    const postsDir = path.join(rootDir, 'blogposts');
    let files = fs.readdirSync(postsDir);
    const postList: Post[] = [];

    if (!files) return postList;

    files = files.filter((file) => file.endsWith('.mdx'))

    files.forEach((file) => {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);
        const layout = PostLayout.parse(data);

        postList.push({
            ...layout,
            slug: file.replace('.mdx', ''),
            readingTime: readingTime(content)
        });
    });

    // Sort the posts by date
    const sorted = postList.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
    });

    if (!tag) return sorted;
    return sorted.filter((post) => post.tags.includes(tag));
}

// Get the post type directory
export async function getPostDir(): Promise<string[]> {
    return fs.readdirSync(path.join(rootDir, 'blogposts'));
}

// Get post by slug
export async function getPostBySlug(slug: string) {
    // Get the post content
    const postContent = fs.readFileSync(path.join(rootDir, 'blogposts', `${slug}.mdx`), 'utf8');
    const { data, content } = matter(postContent);
    const layout = PostLayout.parse(data);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            development: process.env.NODE_ENV !== 'production' ? true : false,
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: "append",
                    },
                ],
                [imageSize, { dir: "public" }] as any,
                [
                    rehypePrettyCode,
                    {
                        theme: 'one-dark-pro',
                        defaultLang: {
                            block: 'plaintext',
                            inline: 'plaintext'
                        }
                    }
                ],
            ],
        },
    });

    return {
        mdxSource,
        frontMatter: {
            readingTime: readingTime(postContent),
            slug: slug || null,
            ...layout
        }
    }
}