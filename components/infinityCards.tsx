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
            <a href="https://www.google.com/search?sca_esv=6cf83e9191071241&sxsrf=AE3TifMQu4zrp1GtvDylxhd7fFADJm90Bw:1749681785615&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E51R0U4vLJztIhA6z7xoUeI3IJVyYH7uXHh59R5iE1SLF9njXvfLRBoOIGH365Z6-2KumYG5aX5kHq7rUwGJjD_Q-9f7&q=Smash+Point+Opiniones&sa=X&ved=2ahUKEwiAzLTKuOqNAxWdTjABHdLxAp0Q0bkNegQIQBAD&biw=2560&bih=1305&dpr=1"
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
