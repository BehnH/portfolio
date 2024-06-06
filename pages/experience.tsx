import { ContainerBlock } from "../components/Base";

const jobHistory = [
    {
        company: "LaunchDarkly",
        role: "Platform Engineer",
        date: "May '24 - Present",
        companyUrl: "https://launchdarkly.com/",
        description: [
            "I'm currently working as a Platform Engineer for LaunchDarkly, a feature management & experimentation platform that allows you to manage, measure and control your software across your entire stack.",
            "I work closely with fellow engineering teams on deploying, maintaining, and scaling our infrastructure, and help drive improvement across our product and documentation.",
            "I spend most of my day head down in Terraform, AWS and CI/CD pipelines, and have driven significant improvements in our infrastructure and deployment processes."
        ]
    },
    {
        company: "LaunchDarkly",
        role: "Senior Support Engineer",
        date: "April '24 - May '24",
        companyUrl: "https://launchdarkly.com/",
        description: [
            "From April '24 to May '24, I was a Senior Support Engineer for LaunchDarkly. Day-to-day, my responsibilities focused on driving improvements in our support processes and documentation, and delivering training to our team.",
            "I worked closely with our engineering teams on a variety of deeply complex customer issues, and help drive improvement across our product and documentation.",
            "My work tends to specialise on complex issues in the Identity and Access Management space - working on integrations with SAML and OAuth2. I have made significant contributions to the resources available to our customers and internal teams in the space.",
        ]
    },
    {
        company: "LaunchDarkly",
        role: "Support Engineer",
        date: "January '22 - April '24",
        companyUrl: "https://launchdarkly.com/",
        description: [
            "From January '22 to April '24 I worked as a Support Engineer for LaunchDarkly, a feature management  & experimentation platform that allows you to manage feature flags across your entire stack.",
            "I'm responsible for helping customers with their implementation and maintenance of our SDKs, and their use of our Web App & APIs.",
            "I work with a variety of languages and frameworks, including React, Node, Python, Ruby, Java, GoLang, and more.",
        ]
    },
    {
        company: "Amirion Studios",
        role: "Software Engineer",
        date: "September '20 - January '22",
        companyUrl: "https://amirion.org/",
        description: [
            "I worked as a Software Engineer for Amirion Studios, a small indie game studio based in the US - working remotely from the UK.",
            "Primarily, I worked on Node.JS projects, with a focus on their Discord Bot project, and their website.",
            "I also worked on a variety of other projects, managing and maintaining a large network of bare-metal servers using automation as much as possible.",
        ],
    },
    {
        company: "Linklaters LLP",
        role: "IT Support Analyst",
        date: "July '20 - January '22",
        companyUrl: "https://www.linklaters.com/",
        description: [
            "I worked as an IT Support Analyst for Linklaters LLP, a global law firm headquarted in the UK, dealing with a global network of partners and internal stakeholders.",
            "During my time, I worked on a variety of projects, including the replacement of their internal Service Desk automation system and the creation of highly detailed contact information.",
            "I also worked on a variety of other projects such as the management and tracking of physical assets, and the rollout of new hardware during the COVID-19 pandemic.",
        ],
    }
]

export default function Page() {
    return (
        <>
            <ContainerBlock
                title={"Behn Hayhoe | Experience"}
                description={"Learn a little bit more about my experience in the Software Engineering industry."}
            >
                <section className="bg-white">
                    <div className="max-w-6xl mx-auto h-48 bg-white">
                        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            Experience
                        </h1>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
                            {/* Experience card */}
                            {jobHistory.map((exp, idx) => (
                                <>
                                    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white z-10 mx-4">
                                        <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-black font-bold">
                                            {exp.date}
                                        </h1>
                                        <h1 className="font-semibold text-xl">{exp.role}</h1>
                                        <a href={exp.companyUrl} className="text-gray-500">
                                            {exp.company}
                                        </a>
                                        <div className="my-2">
                                            <ul className="list-disc ml-4">
                                                {exp.description && exp.description.map((d, idx) => (
                                                    // eslint-disable-next-line react/jsx-key
                                                    <li className="text-gray-600"> {d}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    {idx === jobHistory.length - 1 ? null : (
                                        <div className="divider-container flex flex-col items-center -mt-2">
                                            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                            </div>
                                            <div className="w-1 h-24 bg-gray-200 rounded-full -mt-2"></div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </section>
            </ContainerBlock>
        </>
    )
}