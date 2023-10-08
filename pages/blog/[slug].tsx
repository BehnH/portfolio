import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { ContainerBlock } from "../../components/Base";
import MDXComponents from "../../components/MdxComps";
import { getPostBySlug, getPostDir } from "../../utils/mdx";

const Blogpost = ({ mdxSource, frontMatter }: any) => {
    const { title, date, readingTime, description, slug } = frontMatter;

    return (
        <>
            <Head>
                <meta property="og:description" content={description} />
                <meta property="og:title" content={`Behn's Ramblings | ${title}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://behn.dev/blog/${slug}`} />
                <meta property="og:locale" content="en_GB" />
                <meta
                    property="og:published_date"
                    content={format(parseISO(date), "yyyy-MM-ddTHH:mm:sszzz")}
                />
            </Head>
            <ContainerBlock
                title={`Behn's Ramblings | ${title}`}
                description={description}
            >
                <link rel="stylesheet" href={"/styles/github-dark.min.css"} />
                <div className="max-w-4xl mx-auto pb-5">
                    <h1 className="text-3xl font-semibold underline decoration-[#bbf7d0] decoration-wavy decoration-2">{title}</h1>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 mt-2">
                            <i className="ri-calendar-2-line ri-md"></i>
                            <p className="text-gray-500 text-md">
                                {format(parseISO(date), "MMMM dd, yyyy")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto prose prose-violet pb-10">
                    <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
                </div>
            </ContainerBlock>
        </>
    )
};

export default Blogpost;

export async function getStaticPaths() {
    let posts = await getPostDir();
    posts = posts.filter((post) => post.endsWith(".mdx")); // Filter out non-mdx files
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ""),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: any) {
    const post = await getPostBySlug(slug);
    return {
        props: {
            ...post,
        },
    };
}

