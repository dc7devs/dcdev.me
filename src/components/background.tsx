import { ReactNode } from "react"

type PropsChildren = {
    children: ReactNode
}

export default function Bg({children}: PropsChildren) {
    return(
        <div className="h-screen bg-gray/[.7] bg-paper-pattern bg-paper-pattern-size bg-paper-pattern-position">
            {children}
        </div>
    )
}