import { Divider, Drawer } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { AiFillGithub, AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai"
import { TfiLinkedin } from "react-icons/tfi"
import { MdDarkMode } from "react-icons/md"
import { FiSun } from "react-icons/fi"
import { IoLogoBitbucket } from "react-icons/io"

const Layout = ({
    children,
    darkMode,
    setDarkMode,
}: {
    children: ReactNode
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}) => {
    const [opened, { open, close }] = useDisclosure(false)
    return (
        <div className="h-screen relative ">
            <div className="w-full fixed right-0 z-20 bg-white-100 pb-3">
                <nav className=" flex justify-between bg-white dark:bg-nusery py-5 px-10 ">
                    <div>
                        <h3 className="font-sofia font-bold dark:text-secondary">
                            TONI__B
                        </h3>
                    </div>
                    <div className="lg:flex md:flex gap-10 hidden font-rubik">
                        <ul className="grid grid-cols-4 gap-10 dark:text-secondary ">
                            <a
                                href="#about"
                                className=" mx-2 transition ease-in-out duration-500 hover:text-final font-medium "
                            >
                                <li>About</li>
                            </a>
                            <a
                                href="#projects"
                                className=" mx-2 transition ease-in-out duration-500 hover:text-final font-medium "
                            >
                                <li>Projects</li>
                            </a>
                            <a
                                href="#contact"
                                className=" mx-2 transition ease-in-out duration-500 hover:text-final font-medium "
                            >
                                <li>Contact</li>
                            </a>
                            {darkMode === false ? (
                                <li onClick={() => setDarkMode(true)}>
                                    <MdDarkMode
                                        size={22}
                                        className="text-final dark:hover:text-tertiary cursor-pointer"
                                    />
                                </li>
                            ) : (
                                <li onClick={() => setDarkMode(false)}>
                                    <FiSun
                                        size={22}
                                        className="text-final dark:hover:text-tertiary cursor-pointer "
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="lg:hidden md:hidden flex gap-2">
                        <Drawer
                            opened={opened}
                            onClose={close}
                            overlayProps={{ opacity: 0.5, blur: 4 }}
                            position="right"
                            size="xs"
                            transitionProps={{
                                transition: "skew-down",
                                duration: 150,
                                timingFunction: "linear",
                            }}
                        >
                            <ul className="text-center leading-10 font-rubik dark:text-secondary">
                                <a
                                    className="transition ease-in-out duration-500 hover:text-final  py-5"
                                    href="#about"
                                >
                                    <li>About</li>
                                </a>
                                <a
                                    className="transition ease-in-out duration-500 hover:text-final  py-5"
                                    href="#projects"
                                >
                                    <li>Projects</li>
                                </a>
                                <a
                                    className="transition ease-in-out duration-500 hover:text-final  py-5"
                                    href="#contact"
                                >
                                    <li>Contact</li>
                                </a>
                            </ul>
                        </Drawer>
                        <AiOutlineMenu onClick={open} />
                        <div>
                            {darkMode === false ? (
                                <li
                                    onClick={() => setDarkMode(true)}
                                    className="list-none"
                                >
                                    <MdDarkMode
                                        size={18}
                                        className="text-final dark:hover:text-tertiary "
                                    />
                                </li>
                            ) : (
                                <li
                                    onClick={() => setDarkMode(false)}
                                    className="list-none"
                                >
                                    <FiSun
                                        size={18}
                                        className="text-final dark:hover:text-tertiary "
                                    />
                                </li>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
            <div className="relative h-full">
                <div className="hidden md:block fixed top-96 right-3 w-20 h-[100%]  overflow-hidden">
                    <a href="mailto:enunwabethel@gmail.com">
                        <p className="origin-center rotate-90 py-10 font-semibold text-sm font-mono lowercase hover:text-final dark:text-final dark:hover:text-tertiary cursor-pointer">
                            enunwabethel@gmail.com
                        </p>
                    </a>
                    <hr className="origin-center rotate-90 w-96" />
                </div>
                <div className="hidden md:block fixed top-24 left-3 w-20 h-[100%]  overflow-hidden dark:text-final  ">
                    <TfiLinkedin
                        className="my-6 dark:hover:text-tertiary hover:text-final cursor-pointer "
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/bethel-enunwa-ba8502187/"
                            )
                        }
                    />
                    <AiFillGithub
                        className="my-6 dark:hover:text-tertiary hover:text-final cursor-pointer "
                        onClick={() =>
                            window.open("https://github.com/betheltoni")
                        }
                    />
                    <IoLogoBitbucket
                        className="my-6 dark:hover:text-tertiary hover:text-final cursor-pointer "
                        onClick={() =>
                            window.open(
                                "https://bitbucket.org/iqubelabs/workspace/repositories"
                            )
                        }
                    />
                </div>
                <main className={`w-full h-full overflow-y-auto scrollbar `}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
