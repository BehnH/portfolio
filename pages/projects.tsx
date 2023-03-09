import Image from 'next/image'
import Link from "next/link";
import { ContainerBlock } from "../components/Base";

export default function Page() {
    return (
        <>
            <ContainerBlock>
                <section className="bg-white">
                    <div className="max-w-6xl mx-auto h-48 bg-white">
                        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            Projects
                        </h1>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 grid-rows-10 max-w-5xl mx-auto gap-y-5 py-8">
                            {/* Experience card */}
                            <ProjectCard
                                title="behn.dev"
                                description="This website! Built with Next.js, TailwindCSS, and TypeScript."
                                link="https://behn.dev/"
                                image="/projects/site.png"
                                github="https://github.com/behnh/portfolio"
                            />
                            <ProjectCard
                                title="behn.dev"
                                description="This website! Built with Next.js, TailwindCSS, and TypeScript."
                                link="https://behn.dev/"
                                image="/projects/site.png"

                            />
                        </div>
                    </div>
                </section>
            </ContainerBlock>
        </>
    )
}

type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image: string;
    github?: string;
}

function ProjectCard({ title, description, link, image, github }: ProjectCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="text-xl font-semibold text-gray-700">
                                {title}
                            </h1>
                            {github && (
                                <>
                                    <Link href={github} target={"_blank"} passHref>
                                        <i className="ri-github-fill ri-2x" />
                                    </Link>
                                </>
                            )}
                            {link && (
                                <>
                                    <Link href={link} target={"_blank"} passHref>
                                        <i className="ri-link ri-2x" />
                                    </Link>
                                </>
                            )}
                        </div>
                        <p className="text-lg text-gray-500 mt-4">
                            {description}
                        </p>
                        {image && (
                            <div className="mt-6">
                                <Image alt="Project card from GitHub" src={image} width={512} height={64} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}