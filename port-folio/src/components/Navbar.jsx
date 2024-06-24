// import { navData } from '../constants';
import { HiUser, HiPresentationChartLine, HiOutlineCubeTransparent, HiOutlineBriefcase, HiDevicePhoneMobile } from 'react-icons/hi2';

const navData = [
    { name: "About", path: "#about", icon: <HiUser/> },
    { name: "Technologies", path: "#technologies", icon: <HiOutlineCubeTransparent/> },
    { name: "Experience", path: "#experience", icon: <HiOutlineBriefcase/> },
    { name: "Projects", path: "#projects", icon: <HiPresentationChartLine/> },
    { name: "Contact", path: "#contact", icon: <HiDevicePhoneMobile/> },
  ]

export default function Navbar() {
    return (
        <nav className='flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[2%] z-50 top-0 w-full md:w-16 md:max-w-md md:h-screen'>
            <div className='flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-8 md:px-0 h-[80px] md:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl md:text-xl md:rounded-full '>
                {navData.map((item, index) => (
                    <a key={index} href={item.path} className='relative flex items-center group hover:text-purple-800 transition-all duration-300'>
                        <div className="absolute pr-14 right-0 hidden md:group-hover:flex">
                            <div className="bg-white relative flex text-[#131424] items-center p-1.5 rounded">
                                <div className="text-sm leading-none font-semibold capitalize">{item.name}</div>
                                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                            </div>
                        </div>
                        {item.icon}
                    </a>
                ))}
            </div>
        </nav>
    )
}