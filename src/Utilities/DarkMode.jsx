import { Fragment } from 'react';
import "./DarkMode.css";

export default function DarkMode() {
    function setDarkMode() {
        document.querySelector("body").setAttribute("web-theme","dark");
        localStorage.setItem("web-theme","dark");
    }

    function setLightMode() {
        document.querySelector("body").setAttribute("web-theme","light");
        localStorage.setItem("web-theme","light");
    }

    const webTheme = localStorage.getItem("web-theme");

    function changeTheme(event) {
        if (event.target.checked) {
            setDarkMode();
        }
        else {
            setLightMode();
        }
    }

    if (webTheme === "dark") {
        setDarkMode();
    }

    return (
        <Fragment>
            <input type="checkbox" id="toggle-theme" onChange={changeTheme} defaultChecked={webTheme === "dark"}/>
            <label htmlFor='toggle-theme'>
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
            </label>
        </Fragment>
    )
}
