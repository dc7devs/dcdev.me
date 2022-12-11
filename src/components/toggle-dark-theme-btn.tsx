import { useTheme } from "next-themes";
import { CircleDashed, MoonStars, SunDim } from "phosphor-react";
import { useLayoutEffect, useState } from "react";

export default function ToggleThemeBtn() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const [effect, setEffect] = useState(false);

    useLayoutEffect(() => {
        setMounted(true);
        setEffect(true);
    }, [])

    function isDark() {return theme == "dark"}
    
    return (
        <>{
            mounted ?
            <button
                className={`text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70 ${effect && 'animate-effect-2'}`} 
                onClick={() => {
                    setTheme(isDark() ? "light" : "dark")
                }}
                onAnimationEnd={() => setEffect(false)}
            >
                {isDark() ? <MoonStars size={25} /> : <SunDim size={26} />}
            </button>: <CircleDashed size={25} />
        }</>
    )
}