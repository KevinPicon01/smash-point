"use client"
import React, { useState, useEffect } from 'react';
import '../styles/scrollButton.css';
import {
    IconBrandWhatsapp,
} from "@tabler/icons-react";

const ScrollButton = () => {
    // Estado para controlar la visibilidad del botón
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Función que maneja el evento de scroll
        const toggleVisibility = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Mostrar el botón si se ha scrolleado más de 100px y no estamos al final de la página
            if (scrollPosition > 600 && (scrollPosition + windowHeight < documentHeight - 300)) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        // Añadir un evento de scroll al montar el componente
        window.addEventListener('scroll', toggleVisibility);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const wppClick = () => {
        // Abre el enlace en una nueva pestaña
        window.open('https://api.whatsapp.com/send?phone=573159554304&text=%C2%A1Hola%2C%20Smash%20Point!%20%F0%9F%8D%94%20Quiero%20hacer%20un%20pedido.%20%C2%BFMe%20pueden%20mostrar%20la%20carta%2C%20por%20favor%3F%20%F0%9F%98%8A', '_blank');
    };

    return (
        <div className="scroll-container">
            <button
                title="whatsapp button"
                className={`wpp-button ${visible ? 'show' : 'show'} ` }
                onClick={wppClick}
            >
                <IconBrandWhatsapp className="icon-wpp"/>
            </button>
        </div>

    );
};

export default ScrollButton;
