import ToggleThemeBtn from "./toggle-theme-button";

export default function Modal() {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/10 dark:bg-black/10 backdrop-blur-sm z-40 transition-opacity ease-in-out">
            <ToggleThemeBtn />
        </div>
    )
}