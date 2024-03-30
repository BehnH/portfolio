import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={"h-screen flex flex-col items-center justify-center"}>
        <div className="md:w-1/2 mx-auto text-center font-semibold text-gray-800">
          <h1 className="text-6xl font-bold my-2">Hey 👋, I&apos;m <span
            className="bg-gradient-to-r from-[#405bff] to-[#3dd6f5] bg-clip-text text-transparent">Behn.</span></h1>
          <h2 className="text-4xl font-bold my-2">I <span
            className="bg-gradient-to-r from-[#D34DEE] to-[#2AC9F9] bg-clip-text text-transparent">make things</span>,
            then <span className="bg-gradient-to-r from-[#FF57A2] to-[#FA2A69] bg-clip-text text-transparent">break things</span>.
            And I <span className="bg-gradient-to-r from-[#4CD455] to-[#78F74A] bg-clip-text text-transparent">drink a lot of coffee</span> while
            doing so.</h2>
        </div>
        <div className={"flex flex-row gap-5 justify-between font-semibold text-lg"}>
          <Link href={"/about"} passHref={true}>
            <p className={"hover:text-pink-700"}>About me</p>
          </Link>
          <Link href={"/blog"} passHref={true}>
            <p className={"hover:text-pink-700"}>Blog</p>
          </Link>
          <Link href={"/listening"} passHref={true}>
            <p className={"hover:text-pink-700"}>Listening History</p>
          </Link>
        </div>
      </div>
    </>
  )
}