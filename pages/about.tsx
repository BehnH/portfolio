/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ContainerBlock } from "../components/Base";

export default function Page() {
    return (
        <>
            <ContainerBlock
                title={"Behn Hayhoe | About Me"}
                description={undefined}
            >
                <section className="bg-white">
                    <div className="max-w-6xl mx-auto h-48 bg-white">
                        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            About Me.
                        </h1>
                    </div>
                    <div>
                        <div className="text-container max-w-6xl mx-auto pt-20">
                            <p
                                className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
                                style={{ lineHeight: "3rem" }}
                            >
                                Hey 👋, I&apos;m Behn - a Software Engineer with a strong history in the SaaS technology sector.
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                            {/* Social Buttons */}
                            <div className="inline-flex flex-col">
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-700 underline decoration-[#bbf7d0] decoration-4">
                                        Contact
                                    </h1>
                                    <p className="text-lg text-gray-500 mt-4">
                                        For any sort of enquiry, shoot me an {" "}
                                        <a
                                            href={`mailto:hello@behn.dev?subject=Hey`}
                                            className="text-gray-800 border-b-2 border-gray-800 font-bold"
                                        >
                                            email
                                        </a>{" "}
                                        and I&apos;ll get back. I swear.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h1 className="text-xl font-semibold text-gray-700 underline decoration-[#bbf7d0] decoration-4">
                                        Job Opportunities
                                    </h1>
                                    <p className="text-lg text-gray-500 mt-4">
                                        I&apos;m currently working for LaunchDarkly, however I&apos;m always open to discussion.
                                        Check out my{" "}
                                        <Link
                                            href="/experience"
                                            className="text-gray-800 border-b-2 border-gray-800 font-bold"
                                        >
                                            history and experience
                                        </Link>{", "}
                                        and shoot me an email if you&apos;re interested in working together.
                                    </p>
                                </div>
                                {/* Social Links */}
                                <h1 className="text-xl font-semibold text-gray-700 mt-8 underline decoration-[#bbf7d0] decoration-4">
                                    Social Links
                                </h1>
                                <div className="mt-4 ml-4">
                                    <div className="flex flex-row justify-start items-center">
                                        <a
                                            href="https://go.behn.dev/github"
                                            className="flex flex-row items-center space-x-4 group"
                                        >
                                            <div className="my-4">&rarr;</div>
                                            <p className="text-lg text-gray-500 font-mono relative overflow-hidden">
                                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                                GitHub
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-start items-center">
                                        <a
                                            href="https://go.behn.dev/linkedin"
                                            className="flex flex-row items-center space-x-4 group"
                                        >
                                            <div className="my-4">&rarr;</div>
                                            <p className="text-lg text-gray-500 font-mono relative overflow-hidden">
                                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                                LinkedIn
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-start items-center">
                                        <a
                                            href="https://go.behn.dev/keybase"
                                            className="flex flex-row items-center space-x-4 group"
                                        >
                                            <div className="my-4">&rarr;</div>
                                            <p className="text-lg text-gray-500 font-mono relative overflow-hidden">
                                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                                Keybase
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-start items-center">
                                        <a
                                            href="https://go.behn.dev/spotify"
                                            className="flex flex-row items-center space-x-4 group"
                                        >
                                            <div className="my-4">&rarr;</div>
                                            <p className="text-lg text-gray-500 font-mono relative overflow-hidden">
                                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                                Spotify
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-start items-center">
                                        <a
                                            href="https://go.behn.dev/lastfm"
                                            className="flex flex-row items-center space-x-4 group"
                                        >
                                            <div className="my-4">&rarr;</div>
                                            <p className="text-lg text-gray-500 font-mono relative overflow-hidden">
                                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                                Last.FM
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Text area */}
                            <div className="col-span-1 md:col-span-2">
                                <p className="text-xl text-gray-700 mb-4">
                                    I&apos;m an experienced Software engineer - I&apos;ve been really interested in emerging technologies since a very young age, which has helped me to develop a broad range of skills across many different technical disciplines.<br /><br />
                                    I&apos;m commonly found writing code in Go or Typescript. I also spend a lot of time working in and around Terraform, Docker, Kubernetes, and other DevOps tools.
                                    I&apos;ve developed applications which use MongoDB, MySQL, PostgreSQL, RabbitMQ, Apache Kafka, Redis and many more tools, across many different platforms, such as AWS, Oracle Cloud, Self-hosted Docker and more.<br /><br />
                                    Outside of work, I listen to copious amounts of music, read, play games, and spend time with my dog. Feel free to check out what I&apos;m listening to by heading to my <Link href={'/listening'}>Listening Dashboard</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ContainerBlock>
        </>
    )
}