import React from "react";
import { Link } from "react-router-dom";
import {
    FiArrowDown,
    FiArrowLeft,
    FiArrowUp,
    FiArrowRight
} from "react-icons/fi";

import "./style.css";

export default function Home() {
    return (
        <div className="home-container">
            <section className="intro">
                <p>
                    Hi, I'm Felipe Alves. Backend and (wanna be) Game Developer.
                </p>
            </section>
            <section className="navigation-images">
                <FiArrowUp size={16} color="#FFAF00"></FiArrowUp>
                <FiArrowLeft size={16} color="#FFAF00"></FiArrowLeft>
                <FiArrowDown size={16} color="#FFAF00"></FiArrowDown>
                <FiArrowRight size={16} color="#FFAF00"></FiArrowRight>
            </section>
        </div>
    );
}
