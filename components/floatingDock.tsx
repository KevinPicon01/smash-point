import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandWhatsapp,
    IconBrandInstagram,
} from "@tabler/icons-react";
import { FaHome } from "react-icons/fa";
import { PiHamburgerLight } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineRateReview } from "react-icons/md";

export function FloatingDockD() {
    const links = [
        {
            title: "Inicio",
            icon: (
                <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#Home",
        },

        {
            title: "Acerca de nosotros",
            icon: (
                <img alt="isotipo" src="/assets/images/isotipo.png" className="p-0.5 h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#About",
        },
        {
            title: "Menu",
            icon: (
                <PiHamburgerLight className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#Menu",
        },
        {
            title: "Reseñas",
            icon: (
                <MdOutlineRateReview className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#Review",
        },
        {
            title: "Visitanos",
            icon: (

                <SiGooglemaps className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#Maps",
        },

        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/burger.smashpoint?igsh=eGF0cDRhMXNuMmhm&utm_source=qr",
        },
        {
            title: "Whatsapp",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://api.whatsapp.com/send?phone=573159554304&text=%C2%A1Hola%2C%20Smash%20Point!%20%F0%9F%8D%94%20Quiero%20hacer%20un%20pedido.%20%C2%BFMe%20pueden%20mostrar%20la%20carta%2C%20por%20favor%3F%20%F0%9F%98%8A",
        },
    ];
    return (
        <div className="hero-dock-container flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
