import { Fragment } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import DarkMode from "../Utilities/DarkMode";

export default function Header() {
    const navigate = useNavigate();
    
    function handleSearch(event) {
        event.preventDefault();
        const keyword = event.target.search.value;
        if (keyword.trim() !== "") {
            navigate(`/search?s=${encodeURIComponent(keyword.trim())}`);
        }
        else {
            alert("fuck you");
        }
    }

    return (
        <Fragment>
            <header className="header">
                <div className="web-title">COUNTRIES.ALL</div>
                <form onSubmit={handleSearch} name="header-form">
                    <input type="search" name="search" placeholder="enter country name..." required />
                    <button type="submit">Find it</button>
                    <DarkMode/>
                </form>
            </header>
        </Fragment>
    )
}
