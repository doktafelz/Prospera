import { Fragment, ReactNode } from "react"

const Animate = ({ children, delay, className }: { children: ReactNode, delay?: string, className?: string }) => {
    return (
        <div data-aos="fade-up" data-aos-delay={delay} className={className}>
            {children}
        </div>
    )
}

export default Animate