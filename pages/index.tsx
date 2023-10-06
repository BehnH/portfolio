import Image from "next/image";
import { ContainerBlock } from "../components/Base";

export default function Page() {
    return (
        <>
            <ContainerBlock
                title={"Behn Hayhoe | Software Engineer"}
                description={"Hey 👋, I'm Behn - a passionate Software Engineer."}
            >
                <div className="flex flex-row justify-center items-start overflow-hidden">
                    <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 font-semibold text-gray-800">
                        <h1 className="text-4xl md:text-8xl my-2">
                            Software Engineer.
                        </h1>
                        <h1 className="text-4xl md:text-8xl my-2">
                            Breaker of things.
                        </h1>
                        <h1 className="text-4xl md:text-8xl my-2">
                            Consumer of coffee.
                        </h1>
                    </div>
                    {/* Image container */}
                    <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
                        <div className="w-3/4 ">
                            <Image src="/wordmark.png" alt="avatar" className="shadow" width={475.5} height={475.5} />
                            <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-row space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-arrow-90deg-up"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                                        />
                                    </svg>
                                    <p className="font-roboto-mono">Hey, I recognise that name!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerBlock>
        </>
    )
}