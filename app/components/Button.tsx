import Link from 'next/link';
import React from 'react'

const Button = ({theme, children, className, href}) => {
    const baseClasse = "text-white hover:text-white"
    const themeClasses = 
    theme === "primary" ? "bg-[#0059F7] hover:bg-[#689EFF]" 
    : 
    theme === "secondary" ? "bg-[#162044] hover:bg-[#CCD2E9]" : "";

    const renderButton = () => (
        <button className={`font-sora text-xs sm:text-sm lg:text-base font-normal tracking-wider animate py-4 px-2 rounded-lg lg:py-4 lg:px-6 ${baseClasse} ${themeClasses} ${className}`}>
            {children}
        </button>
    )

    const renderLink = () => (
        <Link href={href}
        className={`font-sora text-xs sm:text-sm lg:text-base font-normal tracking-wider animate px-4 py-2 rounded-lg lg:py-4 lg:px-6 ${baseClasse} ${themeClasses} ${className}`}
        >
            {children}
        </Link>
    )
     

  return href ? renderLink() : renderButton()
}

export default Button