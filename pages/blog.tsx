import Link from "next/link";
import { useRouter } from "next/router";
import { ReadTimeResults } from 'reading-time';
import { ContainerBlock } from "../components/Base";
import generateRssFeed from "../utils/generateRssFeed";
import { Post, sortPosts } from "../utils/mdx";

export async function getStaticProps() {
    const postsData = await sortPosts();
    await generateRssFeed();
    return {
        props: {
            posts: postsData,
        }
    }
}

export default function Blog({ posts }: { posts: Post[] }) {
    const router = useRouter();
    const tag: string = router.query.tag as string;

    return (
        <>
            <ContainerBlock
                title={"Behn Hayhoe | Ramblings"}
                description={"A collection of my thoughts, ideas, and ramblings."}
            >
                <section className="bg-white max-w-6xl mx-auto">
                        <h1 className=" text-5xl md:text-9xl font-bold md:py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            Ramblings
                        </h1>
                        <div className="grid md:grid-cols-2 my-6 w-full px-2 md:mx-auto md:pt-20 md:px-5 gap-4">
                            {posts.length === 0 && (
                                <>
                                    <h1 className="text-2xl font-semibold text-gray-700">
                                        There&apos;s nothing here yet!
                                    </h1>
                                </>
                            )}
                            {posts.map((post) => {
                                return (
                                    <>
                                        <BlogCard
                                            key={post.slug}
                                            title={post.title}
                                            description={post.description}
                                            date={post.date}
                                            tags={post.tags}
                                            slug={post.slug}
                                            readingTime={post.readingTime}
                                        />
                                    </>
                                )
                            })}
                        </div>
                </section>
            </ContainerBlock>
        </>
    )
}

type BlogCardProps = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    readingTime: ReadTimeResults;
}

function BlogCard({ title, description, date, tags, slug, readingTime }: BlogCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-8 relative border-dashed border-gray-200 border-2">
            <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-2">
                        <i className="ri-calendar-2-line"></i>
                        <p className="text-gray-500 text-sm">
                            {date}
                        </p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <i className="ri-time-line"></i>
                        <p className="text-gray-500 text-sm">
                            {readingTime.text}
                        </p>
                    </div>
                </div>
                <Link href={'blog/' + slug} passHref>
                    <h1 className="text-xl font-semibold text-gray-700">
                        {title}
                    </h1>
                </Link>
                {/* Tags */}
                <div className="flex flex-row my-2 gap-3">
                    {tags.map((tag) => {
                        return (
                            <>
                                <button className="rounded-full px-3 outline outline-green-300 text-gray-700 drop-shadow-2xl" disabled>
                                    {tag}
                                </button>
                            </>
                        )
                    })}
                </div>
                <p className="text-lg text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    )
}