import React from "react";
import "./index.css";

const d = new Date();

function Footer() {

    return(
        <footer>
            <p> Copyright &copy; {d.getFullYear()}</p>
        </footer>
    );
}

export default Footer;