import React from 'react';
import ThemeSwitcher from './theme/ThemeSwitcher';
const Header = () => {
    return (
        <header className=" body-front bg-blur fixed top-0 z-30 hidden w-full justify-center md:flex">
            <div className=" container mx-3 mt-3 flex-col flex-wrap justify-between rounded-2xl bg-slate-800 bg-opacity-60 p-5 backdrop-blur-md md:mx-0 md:mt-4 md:flex md:flex-row">
                <div className="title-font flex font-medium text-gray-900 md:mb-0">
                    <span className=" text-3xl text-white">AI-Generator</span>
                </div>
                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default Header;
