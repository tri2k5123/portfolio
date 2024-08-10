import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

// import resume from '../assets/CV Mai Trương Trọng Minh Trí - cv in english-TopCV.vn.pdf' ;

const listSociety = [
    {
        link: "https://www.linkedin.com/in/tr%C3%AD-mai-1146b1283/",
        icon: <FaLinkedin />
    },
    {
        link: "https://github.com/tri2k5123",
        icon: <FaGithub />
    },
    {
        link: "https://www.facebook.com/minhtri270605/",
        icon: <FaFacebook />
    }
]

export default function Header() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className='mx-2 w-20' alt="" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                {listSociety.map((item, i) => (
                    <a className='cursor-pointer transition-all duration-300 hover:text-purple-800' key={i} href={item.link} target="_blank">
                        {item.icon}
                    </a>
                ))}
                <a
                    href="https://drive.google.com/file/d/1VYd3MExMlnPIoQbrH2b20CDWfI2-2JU1/view"
                    target="display"
                    className='hidden md:block text-sm py-3 px-4 rounded-full bg-purple-800 hover:bg-purple-900 transition-all duration-300'
                >
                    View Resume
                </a>
                {/* <a href={resume} download={'dowload-resume'}> download resume</a> */}
            </div>
        </nav>
    )
}