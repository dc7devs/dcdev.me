import { ReactNode } from "react"

type PropsChildren = {
    children: ReactNode
}

export default function Bg({children}: PropsChildren) {
    return(
        <div className="h-screen bg-gray/[.7] dark:bg-black bg-paper-pattern bg-paper-pattern-size bg-paper-pattern-position dark:bg-paper-pattern-dark">
            {children}
        </div>
    )
}