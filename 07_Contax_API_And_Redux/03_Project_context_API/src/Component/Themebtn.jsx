import React from 'react'
import { UseTheme } from '../Context/Context';


export default function ThemeBtn() {

    const { theme, lightTheme, darktheme } = UseTheme();

    const themeChange=(e)=>{
        const isChecked = e.target.checked;
        if (isChecked) darktheme();
        else lightTheme();
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer ">
            <input
                type="checkbox"
                value=''
                className="sr-only peer"
                onChange={themeChange}
                checked={theme=="dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.68px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Toggle Theme</span>
        </label>
    );
}