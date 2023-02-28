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
            <ContainerBlock>
                <section className="bg-white">
                    <div className="max-w-6xl mx-auto h-48 bg-white">
                        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            Ramblings
                        </h1>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
                            {/* Experience card */}
                            {posts.length === 0 && (
                                <>
                                    <h1 className="text-2xl font-semibold text-gray-700">
                                        There&apos;s nothing here yet!
                                    </h1>
                                </>
                            )}
                        </div>
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
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold text-gray-700">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-500 mt-4">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}