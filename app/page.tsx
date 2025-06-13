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
                                start: "1vh top",
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
                                start: "1vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            x: "-150%",
                        });
                        gsap.to(".right-text", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "1vh top",
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

                        gsap.to(".top", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "1vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            top: "30%",
                        });
                        gsap.to(".bot", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "1vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                            },
                            top: "65%",
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
                        gsap.to(".top", {
                            scrollTrigger: {
                                trigger: "#About",
                                start: "5% top",
                                endTrigger: "#Menu",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            top: "40%",
                            left: "25%",
                            immediateRender: false,
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
                            top: "40%",
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
                        gsap.to(".top",{
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true,
                            },
                            rotate: -90,
                            top: "50%",
                            left: "15%",
                        });
                        gsap.to(".bot", {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Menu",
                                start: "15% top",
                                endTrigger: "#Review",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            rotate: -90,
                            top: "38%",
                            left: "85%",
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
                            bottom: "-130%",
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
                                invalidateOnRefresh: true,
                            },
                            top: "40%",
                            rotate: 0,
                            left: "70%",
                        });
                        gsap.to(".bot", {
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: "#Review",
                                start: "15% top",
                                endTrigger: "#Maps",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true
                            },
                            top: "40%",
                            left: "70%",
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

                const raf = requestAnimationFrame(() => {
                    gsap.to(".top", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,
                                invalidateOnRefresh: true,
                            },
                            top: "23%",
                            scale: 1.5 ,
                        });
                    gsap.to(".bot", {
                            scrollTrigger: {
                                trigger: ".hero-main-container",
                                start: "0vh top",
                                endTrigger: "#About",
                                end: "top top",
                                scrub: 1,

                            },
                            top: "73%",
                            scale: 1.5,
                        });
                    gsap.to([".screen"],{
                        scrollTrigger:{
                            trigger: "#About",
                            start: "top 99%",
                            scrub: 1,
                        },
                        display: "block"
                    });
                    gsap.to([".top-scr"],{
                        scrollTrigger:{
                            trigger: "#About",
                            start: "top 90%",
                            scrub: 1,
                        },
                        display: "block"
                    })
                    ScrollTrigger.refresh();
                });
                return () => cancelAnimationFrame(raf);
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
          <div className="top-scr"/>
          <div id="Home" className="white-space">
              <Hero/>
          </div>
          <div id="About" className="about-mob white-space ">
              <AboutUs/>
          </div>
          <div id="Menu" className="menu-mob white-space ">
              <Menu/>
          </div>
          <div id="Review" className="review-mob white-space">
              <InfiniteMovingCardsDemo/>
          </div>
          <div id="Maps" className="white-space ">
              <Maps/>
          </div>
          <div className="screen" ></div>
          <div>

              <img className="burger bot" alt="baja"
                   src="/assets/images/burger/bot.webp"/>
              <img className="burger top" alt="top"
                   src="/assets/images/burger/top.webp"/>
          </div>

          <FloatingDockD/>
          <ScrollButton/>
      </div>
  );
}
