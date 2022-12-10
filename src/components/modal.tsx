import { Link } from "phosphor-react";
import { useTheme } from "next-themes";

export default function Modal() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/10 backdrop-blur-sm z-40 transition-opacity ease-in-out">
            <div>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    Mudar Tema
                </button>
            </div>
        </div>
    )
}