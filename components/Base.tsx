import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navigation";

export function ContainerBlock({ children }: { children: React.ReactNode }) {
        // Fetch the router
        const router = useRouter();

        const meta = {
            title: "Behn Hayhoe - Developer, Systems Engineer, and Solutions Designer",
            description: "Hey 👋, I'm Behn - a passionate Software Engineer and Technology enthusiast.",
            image: "/avatar,png",
            type: "website",
        };

        return (
            <div>
                <Head>
                    {/* Standard Meta information */}
                    <title>{meta.title}</title>
                    <meta name="robots" content="index, follow" />
                    <meta name="description" content={meta.description} />
                    <meta property="og:url" content={`https://behn.cc${router.asPath}`} />
                    <link rel="canonical" href={`https://behn.cc${router.asPath}`} />

                    {/* Open Graph Meta information */}
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:image" content={meta.image} />
                    <meta property="og:type" content={meta.type} />

                    {/* Twitter Meta information */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                    <meta name="twitter:site" content="@BehnH" />
                </Head>
                <main className="w-full">
                    <Navbar />
                    <div>{children}</div>
                    <footer />
                </main>
            </div>
        );
}