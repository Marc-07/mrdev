import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Icons = () => {
    return (
        <>
            <div className="flex justify-center gap-4 mt-6 text-gray-600">
                <a href="https://github.com/Marc-07" className="hover:text-blue-700" target="_blank" rel="noreferrer">
                    <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/maria-ramos-57b95b258/" className="hover:text-blue-700" target="_blank" rel="noreferrer">
                    <FaLinkedin size={28} />
                </a>
                <a href="https://x.com/RCMarii07" className="hover:text-blue-700" target="_blank" rel="noreferrer">
                    <FaTwitter size={28} />
                </a>
            </div>
        </>
    )
}

export default Icons