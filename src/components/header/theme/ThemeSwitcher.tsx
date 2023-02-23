import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
    const themeElement = document.documentElement;
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (theme) {
            themeElement.classList.add('dark');
        } else {
            themeElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div>
            <button
                onClick={() => setTheme((prev) => !prev)}
                className=" h-12 w-12 rounded-full text-xl leading-9 text-white  hover:bg-primary-700 ">
                {theme && <FontAwesomeIcon icon={faMoon} />}
                {!theme && <FontAwesomeIcon icon={faSun} />}
            </button>

            {/* <FontAwesomeIcon icon={faMoon} /> */}
        </div>
    );
}

export default ThemeSwitcher;
