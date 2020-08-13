import React from "react"
import Layout from "../components/Layout"
import "../styles/main.css"

export default function Home() {
  return (
    <Layout>
      <div className="scrollToTop">
        <div className="arrow">
          <i className="lni lni-chevron-up"></i>
        </div>
      </div>
      <a id="nav-open-button" className="nav-button hide-md">
        <span></span>
      </a>
      <header className="header">
        <div className="flex">
          <div className="flex-item order1">
            <div className="bio-container">
              <h1 className="main-text">Olawale Tope Afuye</h1>
              <p className="sub-text">
                I’m a
                <span className="text-highlight">Full-stack Javascript</span>
                (Mobile & Web) engineer and
                <span className="text-highlight">
                  Chartered accountant{" "}
                </span>{" "}
                based in Lagos, Nigeria.
              </p>
              <div className="social-container">
                <ul className="social-list">
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-github"></i>
                    </a>
                  </li>
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-medium"></i>
                    </a>
                  </li>
                  <li className="social-list">
                    <a className="social-link" href="#">
                      <i className="lni lni-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div className="hero-image-container">
              <img className="hero-image" src="./assets/wale.jpeg" alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className="section-container">
        <div className="" id="me">
          <h2 className="about-main-text">A short Summary of Myself</h2>
          <p className="about-sub-text">
            Building a problem-solving web and mobile applications that aim to
            make life easy, ease of use and at the same time being scurity
            compliant has been what drove to the coding. I love to make business
            and communication happen easy even at a very resonable cost. I love
            creating that is exactly what made me seek this new found love after
            years of experience in accounting and finance in major industries
            because there is not place to building and affect human experience
            and see people use the tools built. Moreover i learning technology
            is the future and human would be replaced by machines in fields like
            accounting,law and etc. During my free time, I like reading new
            updated, watchmovies and hang out with friends
          </p>
        </div>
      </section>
      <section className="section-container">
        <div id="blog">
          <div className="article-container">
            <h2 className="about-main-text">Top Reads</h2>
            <div className="about-main-text-All">
              <a href="#">Other articles</a>
            </div>
            <div className="row">
              <a className="col-1-of-3 article-paper">
                <div className="article-paper-item">
                  <div className="artcle-paper-header">
                    <h4 className="paper-text-header">
                      How to get a get a domain name and deploy free!
                    </h4>
                  </div>
                  <div className="article-paper-excerpts">
                    <p className="paper-text-excerpts">
                      I wrote a short article on how i deploy my site free with
                      free hosting. You dont want to miss it
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="col-1-of-3 article-paper">
                <div className="article-paper-item">
                  <div className="artcle-paper-header">
                    <h4 className="paper-text-header">Gatsby vs Nextjs ?</h4>
                  </div>
                  <div className="article-paper-excerpts">
                    <p className="paper-text-excerpts">
                      Recently I have been playing with Gatsby and next, I want
                      to share with you when to use one over the other.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="col-1-of-3 article-paper">
                <div className="article-featured">
                  <span className="text-highlight">Featured</span>
                </div>

                <div className="article-paper-item">
                  <div className="artcle-paper-header">
                    <h4 className="paper-text-header">
                      Kayode Desmond - Modern Design Theory
                    </h4>
                  </div>
                  <div className="article-paper-excerpts">
                    <p className="paper-text-excerpts">
                      Color and designs are everywhere!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
