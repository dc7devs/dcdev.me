'use client';
import { useTheme } from "next-themes";
import cx from "clsx";

export default function ToggleThemeBtn() {
    const {theme, setTheme} = useTheme();

    function isDark() { return theme == "dark"}
    
    return (
        <button
            className={cx("text-2xl hover:text-violet-900/80 dark:hover:text-violet-300/70")}
            onClick={() => {
                setTheme(isDark() ? "light" : "dark")
            }}
        >
            {isDark() ? "Mom" : "Sun"}
        </button>
    )
}