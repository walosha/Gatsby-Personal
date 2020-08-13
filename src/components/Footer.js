import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function Footer() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav .nav-link")
    const input = document.querySelector("input")
    const scrollToTop = document.querySelector(".scrollToTop")

    function toggleMode() {
      var element = document.querySelector("body")
      element.classList.toggle("dark-mode")
    }

    function smoothScroll(e) {
      e.preventDefault()
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        const offsetTop = document.querySelector(href).offsetTop
        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        })
        return
      }
    }

    function onScrollToTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }
    document.querySelector("body").onscroll = function () {
      if (window.scrollY > 86)
        //if scroll is 150px from top
        scrollToTop.style.display = "flex"
      //if they scroll down, show
      else scrollToTop.style.display = "none" //if they scroll up, hide
    }

    for (const link of links) {
      link.addEventListener("click", smoothScroll)
    }
    input.addEventListener("change", toggleMode)
    // scrollToTop.addEventListener("click", onScrollToTop)
  })

  return (
    <footer className="section-container">
      <div id="contact">
        <div className="contact-container">
          <h3 className="main-text">Get in Touch</h3>
          <div className="contact-box">
            <h4 className="paper-text-header">
              Want to work together or have any questions?
            </h4>
            <a className="btn inline-block" href="mailto:walosha@yahoo.com">
              Mail Me
            </a>
          </div>
          <div className="contact-list">
            <Link className="contact-link" to="/">
              Patreon
            </Link>
            <Link className="contact-link" to="/">
              Resume
            </Link>
            <Link className="contact-link" to="/">
              Github
            </Link>
          </div>
          <p className="footer-note">
            Color inspiration from
            <a href="https://www.happyhues.co/" className="text-highlight">
              Mackenzie Child
            </a>
            and Developed by
            <span className="text-highlight">Olawale Afuye</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
