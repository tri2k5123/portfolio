import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div id="projects" className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-col md:flex-row items-center md:items-start  md:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full md:w-1/4"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='mb-6 rounded w-full h-full md:w-[150px] md:h-[150px] float'
                                />

                            </a>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="md:w-3/4 max-w-xl w-full"
                        >
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}