"use client"
import "../styles/maps.css"
import { Phone, MapPin} from "lucide-react";
import {IconBrandInstagram, IconBrandWhatsapp} from "@tabler/icons-react";
import React from "react";

export default function Maps() {
    return (
        <div className="maps-main-container">

            <div className="maps-title"> ENCUENTRANOS </div>
            <div className="maps-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0915123143195!2d-73.0609881250028!3d6.998504193002696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68470cdba56ca3%3A0x2e52ae0aebcbf9d!2sSmash%20Point!5e0!3m2!1ses-419!2sco!4v1749160381726!5m2!1ses-419!2sco"
                    width="800" height="600" loading="lazy"
                    className="map"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div  className="maps-dock">
                <div className="maps-dock-container">
                    <h3 className="">Sigamos en contacto</h3>
                    <div className="maps-dock-container-div">
                        <ul className="space-y-2 text-base maps-list">
                            <li className="flex items-center gap-3 justify-center">
                                <Phone size={20} className="text-[#4A5745]" />
                                <a
                                    href="tel:+573159554304"
                                    className="underline hover:text-[#7a8a72] transition"
                                >
                                    +57 (315) 9554304
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center">
                                <IconBrandInstagram size={20} className="text-[#4A5745]" />
                                <a
                                    href="https://www.instagram.com/burger.smashpoint?igsh=eGF0cDRhMXNuMmhm&utm_source=qr"
                                    className="underline hover:text-[#7a8a72] transition"
                                >
                                    Burger.SmashPoint
                                </a>
                            </li>
                        </ul>
                        <a href="https://api.whatsapp.com/send?phone=573159554304&text=%C2%A1Hola%2C%20Smash%20Point!%20%F0%9F%8D%94%20Quiero%20hacer%20un%20pedido.%20%C2%BFMe%20pueden%20mostrar%20la%20carta%2C%20por%20favor%3F%20%F0%9F%98%8A" target="_blank" className="flex max-h-10 items-center gap-2 px-6 py-3 bg-emerald-600 text-[#F5E3C5] rounded-2xl shadow-md hover:bg-emerald-700 transition-colors duration-300 text-lg font-medium">
                            <IconBrandWhatsapp className="whatsapp-logo" />
                            Pide Aqui
                        </a>
                    </div>
                    <div className="flex items-center gap-3 justify-center maps-footer">
                            <MapPin size={20} className="text-[#4A5745]" />
                            <a href="https://maps.app.goo.gl/HfMDCQVe8av1VXNJ8" target="_blank" >
                                Ver el mapa
                            </a>
                    </div>
                </div>
            </div>
        </div>

    );
}
