import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { ContainerBlock } from "../../components/Base";
import MDXComponents from "../../components/MdxComps";
import { getPostBySlug, getPostDir } from "../../utils/mdx";
import Link from "next/link";

const Blogpost = ({ mdxSource, frontMatter }: any) => {
    const { title, date, readingTime, description, slug, bannerfile } = frontMatter;

    return (
        <>
            <Head>
                <meta property="og:url" content={`https://behn.dev/blog/${slug}`} />
                <meta property="og:author" content="Behn Hayhoe" />
            </Head>
            <ContainerBlock
                title={`Behn's Ramblings | ${title}`}
                description={description}
                image={`https://behn.dev/blog-images/${bannerfile}`}
                type="article"
                publishedDate={format(parseISO(date), "yyyy-MM-ddTHH:mm:sszzz")}
            >
                <link rel="stylesheet" href={"/styles/github-dark.min.css"} />
                <div className="max-w-4xl mx-auto pb-5 text-center">
                    <div className="flex flex-row justify-between">
                        <Link
                          className={"flex flex-row gap-2 px-10 text-gray-500"}
                          href={"/blog"}
                          passHref={true}>
                            <i className="ri-arrow-left-line ri-md"></i>
                            <p>Go back to the list</p>
                        </Link>
                        <div className="flex flex-row gap-2 mb-2">
                            <i className="ri-calendar-2-line ri-md"></i>
                            <p className="text-gray-500 text-md">
                                {format(parseISO(date), "MMMM dd, yyyy")}
                            </p>
                        </div>
                        <div className={"flex flew-row gap-2 mb-2"}>
                            <i className="ri-time-line"></i>
                            <p className="text-gray-500 text-md">
                                {readingTime.text}
                            </p>
                        </div>
                    </div>
                    <h1
                      className="text-3xl font-semibold underline decoration-[#bbf7d0] decoration-wavy decoration-2">{title}</h1>
                </div>
                <div className="max-w-5xl mx-auto prose prose-violet pb-10">
                    <MDXRemote {...mdxSource} components={{...MDXComponents}}/>
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

