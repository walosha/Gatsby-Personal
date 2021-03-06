import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const [isChecked, setChecked] = useState(true)
  const response = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className="navigation">
      <div className="logo-container">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="76.000000pt"
          height="76.000000pt"
          viewBox="0 0 136.000000 76.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M0 380 l0 -380 680 0 680 0 0 380 0 380 -680 0 -680 0 0 -380z m1328
              156 c3 -4 0 -59 -7 -124 -7 -64 -16 -154 -18 -200 l-5 -82 -71 0 -70 0 23 25
              c16 17 24 37 24 67 1 40 -1 42 -34 49 -61 13 -83 2 -113 -54 -68 -129 -136
              -188 -216 -189 -77 -1 -103 41 -69 109 24 48 127 67 142 26 11 -29 -14 -46
              -61 -39 -48 6 -70 -13 -52 -46 30 -55 146 25 203 140 15 29 25 64 24 79 -2 20
              4 30 27 42 20 12 44 43 72 96 23 44 39 83 37 87 -3 5 -14 8 -24 8 -20 0 -34
              15 -26 28 5 9 203 -12 214 -22z m-973 -6 c2 -4 -4 -15 -15 -25 -16 -15 -20
              -30 -19 -84 1 -86 11 -153 25 -158 6 -2 27 31 47 74 34 71 35 79 22 100 -11
              16 -12 24 -3 29 14 9 128 15 128 6 0 -3 -11 -18 -25 -32 -19 -20 -26 -40 -31
              -96 -7 -70 7 -127 26 -108 12 13 90 196 90 212 0 7 -6 21 -12 32 -11 17 -10
              22 0 29 19 12 142 34 149 27 4 -3 -5 -19 -19 -34 -44 -48 -64 -84 -122 -221
              -39 -93 -54 -137 -46 -145 5 -5 10 -16 10 -23 0 -11 -15 -13 -62 -11 l-62 3
              -2 67 c-3 104 -17 111 -59 28 -21 -42 -22 -50 -10 -60 25 -20 7 -30 -55 -30
              -63 0 -85 14 -55 36 16 12 17 23 4 179 -14 187 -17 192 -91 180 -50 -9 -78
              -36 -78 -75 0 -29 2 -30 45 -30 32 0 47 -5 51 -15 18 -46 -91 -65 -135 -24
              -42 40 -13 122 57 158 30 17 55 20 140 19 56 0 104 -4 107 -8z"
            />
            <path
              d="M1172 417 c-46 -81 -50 -96 -24 -98 67 -5 78 8 87 99 9 96 -8 96 -63
                 -1z"
            />
          </g>
        </svg>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <l1 className="nav-item">
            <a href="#me" className="nav-link">
              Me
            </a>
          </l1>
          <l1 className="nav-item">
            <a className="nav-link">Tools</a>
          </l1>
          <l1 className="nav-item">
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </l1>
          <l1 className="nav-item">
            <a className="nav-link">hire</a>
          </l1>
          <l1 className="nav-item">
            <a className="nav-link">Projects</a>
          </l1>
          <l1 className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </l1>

          <label class="switch">
            <input
              type="checkbox"
              onChange={() => setChecked(prev => !prev)}
              checked={isChecked}
            />
            <span class="slider round"></span>
          </label>
        </ul>
      </div>
    </header>
  )
}
