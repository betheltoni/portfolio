import { projects } from "../utils/utils"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <div className="">
            {projects.map((item, index) => (
                <div >
                    <ProjectCard name={item.name} description={item.description} stack={item.stack} livePreview={item.livePreview} index={index} logo={item.logo}   />
                </div>
            ))}
        </div>
    )
}

export default Projects
