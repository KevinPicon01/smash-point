"use client"
import Hero from "@/components/hero";
import { gsap, ScrollTrigger, registerGSAPPlugins } from "../lib/utils";
import {useEffect, useLayoutEffect} from "react";
import AboutUs from "@/components/aboutUs";
import Menu from "@/components/menu";
import {FloatingDockD} from "@/components/floatingDock";
import {InfiniteMovingCardsDemo} from "@/components/infinityCards";
import Maps from "@/components/maps";
import ScrollButton from "@/components/scrollButton";
registerGSAPPlugins();

export default function Home() {
    useEffect(() => {


        ScrollTrigger.matchMedia({
            // ✅ Escritorio
            "(min-width: 768px)": function () {
                const raf = requestAnimationFrame(() => {
                    {
                        //Hero-about
                        gsap.to(".hero-description-container", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                                onUpdate: (self: { progress: number }) => {
                                    const menuContainer = document.querySelector(".menu-main-container") as HTMLElement | null;

                                    if (menuContainer) {
                                        menuContainer.style.display = self.progress === 1 ? "flex" : "none";
                                    }
                                }
                            },
                            y: "300%",
                        });
                        gsap.to(".left-text", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            x: "-150%",
                        });
                        gsap.to(".right-text", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            x: "150%",
                        });
                        gsap.fromTo(".aboutUs-container", { opacity: 0 }, {
                            opacity: 1,
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "30vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            }
                        });
                        gsap.to(".bot", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            bottom: "30%",
                            top: "70%",
                            scale: 1.5,
                        });
                        gsap.to(".top", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            top: "38%",
                            scale: 1.5 ,
                        });
                    } // Hero to About
                    {
                        //About - Menu
                        gsap.fromTo(".aboutUs-container", { opacity: 1, scale: 1 }, {
                            opacity: 0,
                            scale: 0,
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#About",
                                start: "top top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true,
                                onUpdate: (self: { progress: number }) => {
                                    const reviewContainer = document.querySelector(".review-main-container") as HTMLElement | null;

                                    if (reviewContainer) {
                                        reviewContainer.style.display = self.progress === 1 ? "block" : "none";
                                    }
                                }
                            }
                        });
                        gsap.to(".bot",{
                            scrollTrigger: {
                                trigger: "#About",
                                start: "5% top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            top: "55%",
                            left: "25%",
                            immediateRender: false,
                        });
                        gsap.to(".top", {
                            scrollTrigger: {
                                trigger: "#About",
                                start: "5% top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            top: "45%",
                            left: "25%",
                            immediateRender: false,
                        });
                        gsap.to(".menu-main-container", {
                            scrollTrigger: {
                                trigger: "#About",
                                start: "5% top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                            },
                            bottom: "-3%",
                        });
                        gsap.to(".hero-dock-container", {
                            scrollTrigger: {
                                trigger: "#About",
                                start: "5% top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                            },
                            right: "20%",
                        });
                    } // About to Menu
                    {
                        // Menu - Review
                        gsap.fromTo(".hero-dock-container",{ right: "20%"},{
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true,
                                onUpdate: (self: { progress: number }) => {
                                    const mapsContainer = document.querySelector(".maps-main-container") as HTMLElement | null;

                                    if (mapsContainer) {
                                        mapsContainer.style.display = self.progress === 1 ? "block" : "none";
                                    }
                                }
                            },
                            immediateRender: false,
                            right : "0%",
                        })
                        gsap.to(".top", {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                            },
                            rotate: -90,
                            top: "50%",
                            left: "15%",
                            translateX: "0%",
                            translateY: "-50%",
                        });
                        gsap.fromTo(".bot", {
                            top: "55%",
                            left: "25%"
                        }, {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            left: "85%",
                            top: "50%",
                            translateX: "0%",
                            translateY: "-50%",
                            rotate: -90,
                        });
                        gsap.fromTo(".menu-main-container", {
                            bottom: "-3%",
                        },{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                            },
                            bottom: "-100%",
                        });
                        gsap.to(".infinite-moving-cards",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 1,
                            left: "50%",
                        });
                        gsap.to(".review-title",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 1,
                            left: "50%",
                        });
                        gsap.to(".review-button",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 1,
                            left: "50%",
                        });
                    } // Menu to Review
                    {
                        // Review - Maps
                        gsap.to(".top", {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 1,
                            },
                            rotate: 0,
                            top: "35%",
                            left: "70%",
                        });
                        gsap.fromTo(".bot", {
                            top: "50%",
                            left: "85%",
                            translateX: "0%",
                            translateY: "-50%",
                            rotate: -90,
                        }, {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            left: "70%",
                            top: "55%",
                            rotate: 0,
                        });
                        gsap.to(".infinite-moving-cards",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 0,
                            left: "100%",
                        });
                        gsap.to(".review-title",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 0,
                            left: "100%",
                        });
                        gsap.to(".review-button",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 0.2,
                            },
                            opacity: 0,
                            left: "100%",
                        });
                        gsap.to(".maps-main-container",{
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 1,
                            },
                            left: "50%",
                            opacity: 1,
                        });
                    } // Review to Maps

                    const sectionIds = ["#Home", "#About", "#Menu", "#Review", "#Maps"];

                    sectionIds.forEach((id, i) => {
                        const trigger = document.querySelector(id);

                        ScrollTrigger.create({
                            trigger,
                            start: "top 60%",
                            end: "bottom 60%",
                            onEnter: () => activateIcon(i),
                            onEnterBack: () => activateIcon(i),
                            scrub: false,
                        });
                    });
                    function activateIcon(index: number) {
                        const containers = gsap.utils.toArray<HTMLElement>(".icon-container");
                        containers.forEach((el, i) => {
                            const target = el.querySelector("div");
                            if (target instanceof HTMLElement) {
                                gsap.to(target, {
                                    backgroundColor: i === index ? "#C9282D" : "#000000",
                                    duration: 0.3,
                                });
                            }
                        });
                    }

                    ScrollTrigger.refresh();
                });
                return () => cancelAnimationFrame(raf);
            },

            // ❌ Móvil
            "(max-width: 767px)": function () {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }

        });

    }, []);
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

  return (
    <div>
        <div id="Home" className="white-space">
            <Hero/>
        </div>
        <div id="About" className="white-space">
            <AboutUs/>
        </div>
        <div id="Menu" className="white-space">
            <Menu/>
        </div>
        <div id="Review" className="white-space">
            <InfiniteMovingCardsDemo/>
        </div>
        <div id="Maps" className="white-space">
            <Maps/>
        </div>

        <div>
            <img className="burger top" alt="top"
                 src="/assets/images/burger/1714054457513.png"/>
            <img className="burger bot" alt="baja"
                 src="/assets/images/burger/1714054535711.png"/>
        </div>
        <FloatingDockD/>
        <ScrollButton/>
    </div>
  );
}
