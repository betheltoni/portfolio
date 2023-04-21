import { BiLinkExternal } from "react-icons/bi"

export interface Props {
    name: string
    description: string
    stack: string[]
    livePreview: string
    index: number
    logo: string
    }
const ProjectCard = ({
    name,
    description,
    stack,
    livePreview,
    index,
    logo
}: Props) => {
    return (
        <div>
            {index % 2 !== 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 my-20 relative">
                    <div className="opacity-70 transition delay-250  hover:opacity-100">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>
                    <div className="p-5 lg:p-10 md:p-10 rounded-lg shadow-md dark:text-secondary">
                        
                        <p className="text-lg font-medium mb-4 text-center text-nusery dark:text-secondary">
                            {name}
                        </p>

                        <p className="leading-8 text-base lg:text-justify md:text-justify text-center">
                            {description}
                        </p>
                        {stack && (
                            <ul className="flex justify-between gap-2 lg:mx-6 md:mx-6 mx-1 mt-10">
                                {stack.map((item: string) => (
                                    <li
                                        key={item}
                                        className=" py-1 px-1 shadow-sm rounded lg:text-sm md:text-sm text-xs dark:border dark:border-final"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <BiLinkExternal
                            className="mx-auto mt-8 mb-4 hover:text-final dark:hover:border-tertiary cursor-pointer"
                            onClick={() => window.open(livePreview)}
                        />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 my-20 relative dark:text-secondary">
                    <div className="p-5 lg:p-10 md:p-10 rounded-lg shadow-md">
                        
                        <p className="text-lg font-medium mb-4 text-center text-nusery dark:text-secondary">
                            {name}
                        </p>
                        <p className="leading-8 text-base lg:text-justify md:text-justify text-center">
                            {description}
                        </p>
                        {stack && (
                            <ul className="flex justify-between gap-2 lg:mx-6 md:mx-6 mx-1 mt-10">
                                {stack.map((item: string) => (
                                    <li
                                        key={item}
                                        className=" py-1 px-1 shadow-sm rounded lg:text-sm md:text-sm text-xs dark:border dark:border-final"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <BiLinkExternal
                            className="mx-auto mt-8 mb-4 hover:text-final dark:hover:border-tertiary cursor-pointer"
                            onClick={() => window.open(livePreview)}
                        />
                    </div>
                    <div className="opacity-70 transition delay-250 hover:opacity-100">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectCard
