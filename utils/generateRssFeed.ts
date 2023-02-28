import fs from 'fs';
import { Feed, FeedOptions } from 'feed';
import { sortPosts } from './mdx';

export default async function generateRssFeed() {
    const allPosts = await sortPosts();
    const siteUrl = 'https://www.behn.dev';

    const feedOptions: FeedOptions = {
        title: 'Behn\'s Blog | RSS Feed',
        description: 'A blog about programming, coffe, life, and other things.',
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/wordmark.png`,
        favicon: `${siteUrl}/favicon/favicon.ico`,
        copyright: 'All rights reserved.',
        generator: 'Next.js using Feed for Node.js',
        feedLinks: {
            json: `${siteUrl}/feed.json`,
            atom: `${siteUrl}/feed.atom`,
            rss2: `${siteUrl}/feed.rss`,
        },
    };

    const feed = new Feed(feedOptions);

    allPosts?.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `${siteUrl}/blog/${post.slug}`,
            link: `${siteUrl}/blog/${post.slug}`,
            description: post.description,
            date: new Date(post.date),
        });
    });

    fs.writeFileSync("./public/feed.rss", feed.rss2());
    fs.writeFileSync("./public/feed.json", feed.json1());
    fs.writeFileSync("./public/feed.atom", feed.atom1());
}