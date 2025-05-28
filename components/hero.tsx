"use client"
import "../styles/hero.css"
import {FloatingDockD} from "@/components/floatingDock";
export default function Hero() {
    return (
        <div className="hero-main-container">
            <div className="hero-logo-container">
                <img  alt="logo" className="logo"
                     src="/assets/images/isotipo.png"/>
            </div>
            <div className="hero-center-container">
                <div className="text-container">
                    <div className="left-text">BIENVENIDO A </div>
                </div>
                <div>
                    <img  alt="top"
                          src="/assets/images/burger/1714054457513.png"/>
                    <img  alt="mid"
                          src="/assets/images/burger/1714054488013.png"/>
                    <img  alt="baja"
                          src="/assets/images/burger/1714054535711.png"/>
                </div>
                <div className="text-container">
                    <div className="right-text">
                        The <img src="/assets/images/smash.svg" className="smash-img" alt="Smash"/> Point
                    </div>
                </div>
            </div>
            <div className="hero-description-container">
                <div className="hero-description-text">Smash Point es tu burger dealer de confianza en Piedecuesta. Hacemos una sola smash burger, enorme, con ingredientes de calidad y sabor real. Nada de inventos. Solo una, pero perfecta.</div>
            </div>
            <div  className="hero-dock-container">
                <FloatingDockD/>
            </div>
        </div>
    );
}
