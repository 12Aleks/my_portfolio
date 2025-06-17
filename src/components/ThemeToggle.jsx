import {MoonIcon, SunIcon} from "lucide-react";

function ThemeToggle() {
    // const {theme, setTheme} = useTheme();

    return (
        <button
            className="theme-toggle"
            // style={{background: theme !== 'light' ? '#5c5c5c' : '#678893'}}
            // // variant={theme !== 'light' ? 'outline-dark' : 'outline-light'}
            // onClick={() => setTheme(theme === 'light' ? 'dimmed' : 'light')}
        >
            {/*{theme !== 'light' ? <MoonIcon className="w-6"/> : <SunIcon className="w-6"/>}*/}
        </button>
    );
}

export default ThemeToggle;