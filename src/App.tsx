import { BiLinkExternal } from "react-icons/bi"
import avi from "./assets/avi.jpg"
import Layout from "./component/Layout"
import Projects from "./component/Projects"
import { skills } from "./utils/utils"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { useState } from "react"
import Typical from "react-typical"
import resume from "./utils/resume.pdf"

function App() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <main className="p-5 lg:p-10 md:p-10 bg-white dark:bg-nusery">
                    <section className="min-h-screen font-rubik " id="top">
                        <div className="py-10 mt-20 max-w-xl text-primary dark:text-secondary lg:mx-[15%] mx-[5%]">
                            <p className="text-lg py-7  ">Hi, my name is</p>
                            <p className="md:text-6xl lg:text-7xl text-4xl py-5 font-bold text-final">
                                Bethel Enunwa
                            </p>
                            <div className="flex">
                                <p className="lg:text-4xl md:text-3xl text-2xl pt-5 font-bold">
                                    I'm a{" "}
                                </p>
                                <span className="lg:text-4xl md:text-3xl text-2xl pt-5 font-bold pl-1">
                                    <Typical
                                        steps={[
                                            "Frontend Engineer.",
                                            2000,
                                            "Support Engineer.",
                                            2000,
                                        ]}
                                        wrapper="p"
                                        loop={Infinity}
                                    />
                                </span>
                            </div>
                            <p className="py-5 text-base">
                                Building{" "}
                                <span className="text-final font-semibold">
                                    accessible, scalable and extensive solutions
                                </span>{" "}
                                for commercial and service based businesses is
                                my main focus.
                            </p>
                            <div className="mt-5">
                                <a href={resume} target="_blank" rel="noreferrer" className="rounded py-1 px-3 font-medium shadow-md dark:border dark:border-final hover:bg-final dark:hover:border-tertiary hover:text-secondary transition ease-in-out duration-500">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </section>
                    <section
                        className="lg:mx-[15%] md:mx-[15%] mx-[5%] lg:px-10 mt-20 min-h-screen font-rubik text-primary"
                        id="about"
                    >
                        <div className="lg:flex gap-6 my-20">
                            <p className="text-3xl font-bold text-nusery dark:text-secondary">
                                About Me
                            </p>
                            <hr className="lg:w-[20%] md:w-[20%] w-[40%] lg:my-auto md:my-auto my-2" />
                        </div>
                        <div className="lg:flex gap-20">
                            <div className="basis-[60%] text-justify dark:text-secondary">
                                <p className="leading-8 py-2 text-md font-bold">
                                    I'm just a text away and I'm available to work and collaborate on exciting projects.
                                </p>
                                <p className="leading-8 py-2">
                                    I worked with iQubeLabs as a
                                    Frontend Engineer developing{" "}
                                    <span className="text-final font-semibold">
                                        innovative and market-ready solutions
                                        that adhere to web standards for several
                                        clients across the world
                                    </span>
                                    , and a support engineer for{" "}
                                    <a href="https://heritagemensclinic.ng/">
                                        <span className="text-final font-semibold cursor-pointer">
                                            Heritage men's clinic
                                        </span>
                                    </a>{" "}
                                    and{" "}
                                    <a href="https://healthfacts.ng/">
                                        <span className="text-final font-semibold cursor-pointer">
                                            healthfacts
                                        </span>
                                    </a>{" "}
                                    I appreciate being engaged by projects that
                                    require me to think outside the box and pick
                                    up new skills. I have excellent
                                    collaborative and organizational skills, I
                                    am hardworking and I pay attention to
                                    details.
                                </p>
                                <div>
                                    <p className="leading-8 py-2">
                                        Here are some of the technologies i've
                                        been working with recently;
                                    </p>
                                    <ul className="grid grid-cols-2 gap-x-5 gap-y-2 list-disc lg:px-10 px-5 leading-8">
                                        {skills.map((item) => (
                                            <li className="font-semibold text-final">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="basis-[40%] my-10 lg:my-32  dark:rounded ">
                                <img src={avi} alt="" className="" />
                            </div>
                        </div>
                    </section>
                    <section
                        className="lg:mx-[15%] md:mx-[15%] mx-[5%]  mt-20 min-h-screen font-rubik text-primary"
                        id="projects"
                    >
                        <div className="lg:flex gap-6 my-20">
                            <p
                                className="text-3xl font-bold text-nusery dark:text-secondary
                            "
                            >
                                Some things I've worked on
                            </p>
                            <hr className="lg:w-[20%] md:w-[20%] w-[40%] lg:my-auto md:my-auto my-2" />
                        </div>
                        <Projects />
                    </section>
                    <section
                        className="mx-auto max-w-xl text-center mt-72 min-h-screen font-rubik dark:text-secondary"
                        id="contact"
                    >
                        <p className="text-3xl font-bold mb-10">Get In Touch</p>
                        <p className="leading-8 text-base mb-10">
                            Got a question or proposal, or just want to say
                            hello? Go ahead.
                        </p>
                        <a href="mailto:enunwabethel@gmail.com">
                            <button className="rounded py-4 px-8 text-xl font-medium shadow-md dark:border dark:border-final hover:bg-final dark:hover:border-tertiary transition ease-in-out duration-500">
                                Say Hello
                            </button>
                        </a>
                    </section>
                    <footer>
                        <hr />
                        <div className="my-10 flex justify-center gap-4">
                            <AiOutlineCopyrightCircle
                                size={25}
                                className="text-final"
                            />
                            <p className="text-primary dark:text-secondary font-mono">
                                Created and Designed by <br />
                                <span className="font-sofia font-semibold text-final">
                                    Bethel Tonito Enunwa
                                </span>
                            </p>
                        </div>
                    </footer>
                </main>
            </Layout>
        </div>
    )
}

export default App
