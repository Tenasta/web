"use client";

import _ from "lodash";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";

const trackTopnav = (el: HTMLElement) => {
  const setSticky = _.debounce((element, enable) => {
    if (!enable) {
      element.classList.add("sticky-closing");
      setTimeout(() => {
        element.classList.remove("sticky-closing", "sticky");
        element.parentElement.style.paddingTop = "0";
      }, 500);
    } else {
      element.classList.add("sticky");
      element.parentElement.style.paddingTop = "90px";
    }
  }, 50);

  let lastScroll = 0;

  const navbarOffset = el.offsetHeight + 5;
  let navbarOpenedAt = 0;

  document.addEventListener("scroll", function (e) {
    let currentScroll = window.scrollY;
    if (currentScroll > navbarOffset) {
      setSticky(el, true);
    } else if (currentScroll <= navbarOffset / 2) {
      setSticky(el, false);
    }

    if (
      el.classList.contains("scroll-up") &&
      currentScroll > navbarOpenedAt + 200
    ) {
      el.classList.remove("scroll-up");
      el.classList.add("scroll-down");
    } else if (lastScroll > currentScroll) {
      el.classList.remove("scroll-down");
      el.classList.add("scroll-up");
      navbarOpenedAt = currentScroll;
    }
    lastScroll = currentScroll;
  });
};

export default function Nav({}) {
  const topNav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (topNav.current) {
      trackTopnav(topNav.current);
    }
  });

  return (
    <nav id="topnav" className="" ref={topNav}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1 flex-shrink-0">
          <a href="/">
            <span className="sr-only">Tenasta</span>
            <img
              className="h-8 w-auto sm:h-10 flex-shrink-0 logo-white"
              src="images/tenasta-logo-white.png"
              alt=""
            />
            <img
              className="h-8 w-auto sm:h-10 flex-shrink-0 logo-colour"
              src="images/tenasta-logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-10 text-white md:justify-center md:flex-1">
          <a
            href="#about"
            className="text-base font-medium hover:text-brand-purple"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-base font-medium hover:text-gray-900"
          >
            Projects
          </a>
        </div>
        <div className="flex items-center justify-end  lg:w-0">
          <a
            href="#contact"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-brand-purple hover:bg-brand-purple-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
