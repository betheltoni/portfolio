import ff from "../assets/ff.png"
import vc from "../assets/vc.png"
import treepz from "../assets/treepz.png"
import iqube from "../assets/iqube.png"

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: "Treepz Admin",
        description:
            "Treepz app is a platform to Easily find the ideal vehicle for any trip with diverse range of options, including sedans, SUVs, trucks, vans, and buses  all available to rent with no paperwork hassle. Treepz admin app provides treepz staff the platform to monitor and manage all treepz activity from signing up user to payments",
        stack: ["Tailwind CSS", "TypeScript", "Vite + React"],
        // sourceCode: 'https://github.com',
        livePreview: "https://treepz-web-app.vercel.app",
        logo: treepz
    },
    {
        name: "Finder's Force",
        description:
            "A solution to the pain points of hiring temporary staff within the Traffic Management Industry. A platform that connects Depots with quality Operatives using Artificial Intelligence. A bespoke SaaS solution designed to cut costs, outperform competitors, be paperless and boost recruitment.",
        stack: ["Tailwind CSS", "TypeScript", "Vite + React"],
        // sourceCode: 'https://github.com',
        livePreview: "",
        logo: ff
    },
    {
        name: "Voriancorelli matching app",
        description:
            "Voriancorelli is a agric/food commodities value chain aggregator platform (like a marketplace) to match Commodities Aggregators/Large Scale farmers/Food suppliers (Like Thrive Agric) with Food Processors that need their Supplies (Honeywell, Dangote, Flourmills, etc).",
        stack: ["Tailwind CSS", "TypeScript", "NextJS"],
        // sourceCode: 'https://github.com',
        livePreview: "https://voriancorelli-frontend-two.vercel.app",
        logo: vc
    },
    {
        name: "Sales Funnel",
        description:
            "Sales Funnel is an in-house software for iQubeLabs for monitoring and managing all business information of operation(revenue, leeds, projects).",
        stack: ["SASS", "TypeScript", "React"],
        // sourceCode: 'https://github.com',
        livePreview: "",
        logo: iqube
    },
]

const skills = [
    "JavaScript (ES6+)",
    "Typescript",
    "React",
    "NextJS",
    "Tailwind CSS",
    "Node.JS",
    "Git",
    "HTML 5",
    "CSS 3",
    "SASS",
    "Redux",
    "Wordpress",
]

export { projects, skills }
