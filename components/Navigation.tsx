import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {

    // Fetch the router
    const router = useRouter();

    return (
        <div className="w-full mx-auto px-10 py-10 md:py-16 z-10">
            <div className="flex md:flex-row justify-between items-center select-none">
                <div className="flex flex-col">
                    <Link href="/" legacyBehavior>
                        <a>
                            <h1 className="text-xl">
                                Behn Hayhoe
                            </h1>
                            <p>
                                Software Engineer
                            </p>
                        </a>
                    </Link>
                </div>

                <div className="space-x-8 hidden md:block">
                    <Link href="/about" legacyBehavior>
                        <a
                            className={`text-base  ${router.asPath === "/about"
                                ? "font-bold"
                                : ""
                                }`}
                        >
                            About{" "}
                            {router.asPath === "/about" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/experience" legacyBehavior>
                        <a
                            className={`text-base  ${router.asPath === "/experience"
                                ? "font-bold"
                                : ""
                                }`}
                        >
                            Experience{" "}
                            {router.asPath === "/experience" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/blog" legacyBehavior>
                        <a
                            className={`text-base  ${router.asPath === "/blog"
                                ? "font-bold"
                                : ""
                                }`}
                        >
                            Blog{" "}
                            {router.asPath === "/blog" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                    <Link href="/listening" legacyBehavior>
                        <a
                            className={`text-base  ${router.asPath === "/listening"
                                ? "font-bold"
                                : ""
                                }`}
                        >
                            Listening
                            {router.asPath === "/listening" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-down inline-block h-3 w-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                    />
                                </svg>
                            )}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}