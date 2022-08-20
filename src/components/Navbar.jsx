import React from "react";
import reactLogo from "../assets/kitty.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ねこ ちゃん ! !</h3>
            <h4 className="nav--title">Neko chan website</h4>
        </nav>
    )
}