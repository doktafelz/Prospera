"use client"

import { useEffect, type ReactNode } from "react"

interface NoCopyGuardProps {
    children: ReactNode
}

export default function NoCopyGuard({ children }: NoCopyGuardProps) {
    useEffect(() => {
        const handleCopy = (event: ClipboardEvent) => {
            event.preventDefault()
        }

        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault()
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase()
            if ((event.ctrlKey || event.metaKey) && ["c", "x", "a", "u"].includes(key)) {
                event.preventDefault()
            }
        }

        document.addEventListener("copy", handleCopy)
        document.addEventListener("contextmenu", handleContextMenu)
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("copy", handleCopy)
            document.removeEventListener("contextmenu", handleContextMenu)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return <div>{children}</div>
}
