import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"


const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <div
            className={`flex
                rounded-full
                border-[#dce3de]
                w-[160px]
                h-[60px]
            `}
            onClick={() => setIsDarkMode(!isDarkMode)}
        >
            <FontAwesomeIcon 
                className={`p-2 w-[100%] h-[100%] ${isDarkMode ? 'justify-left items-start scale-x-[-1]' : 'justify-right items-end'}`} 
                icon={faMoon} color={isDarkMode ? '#000' : '#fff'} 
                size="2x" 
            />
        </div>
    )
}

export default DarkMode