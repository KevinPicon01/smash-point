"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import "../styles/infinityCards.css"

export function InfiniteMovingCardsDemo() {
    return (
        <div className="review-main-container">
            <div className="review-title">LO QUE DICEN NUESTROS CLIENTES</div>
            <div className="infinite-moving-cards">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            </div>
            <a href="https://www.google.com/search?sca_esv=6cf83e9191071241&sxsrf=AE3TifOvFI7DcWgOSMvtSG0zb4DPxrKaQw:1749682312104&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E51R0U4vLJztIhA6z7xoUeIQ65-_0HodDTBxlRxXOdZfQ7NI9JO9g0nrPxCxfYxVw2LZ3L0q3YuCP8qvqACSnZOvf1Iw&q=Smash+Point+Reviews&sa=X&ved=2ahUKEwjk8rrFuuqNAxXySjABHe73CogQ0bkNegQIIBAD&biw=2560&bih=1352&dpr=1#lrd=0x8e68470cdba56ca3:0x2e52ae0aebcbf9d,3,,,,"
               target="_blank" className="review-button"> Cuentanos tu experiencia </a>
        </div>
    );
}

const testimonials = [
    {
        quote: "La mejor hamburguesa que he probado en Bucaramanga. El pan es suave, las papas crocanticas en la boca y la tartara... una locura total!",
        name: "Laura Méndez",
        title: "Cliente frecuente",
    },
    {
        quote: "Probé la Smash sencilla y terminé pidiendo otra. Siento que acabo de descubrir mi nuevo lugar favorito para comer.",
        name: "Julián Ríos",
        title: "Foodie & amante de las papas crocantes",
    },
    {
        quote: "No soy de dar opiniones, pero esto fue diferente. El tocino, la carne y sobre todo el queso... Smash Point merece aplausos.",
        name: "Camila Duarte",
        title: "Visitó por primera vez en abril 2025",
    },
    {
        quote: "Es como si cada mordisco tuviera un flow espacial. Brutales las hamburguesas, brutales.",
        name: "Andrés V.",
        title: "DJ & cliente nocturno fiel",
    }
];
