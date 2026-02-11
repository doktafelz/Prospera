"use client"

import { ReactNode, useEffect } from "react"
import "aos/dist/aos.css"
import AOS from "aos"


const ClientLayout = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-out",
            once: true,
            mirror: false,
        })
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default ClientLayout