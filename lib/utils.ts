import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
let registered = false;

export function registerGSAPPlugins() {
  if (typeof window !== "undefined" && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export { gsap, ScrollTrigger };
