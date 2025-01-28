import React from 'react';
import './App.css';

const logo = "https://imgur.com/usOsLpl.jpg";
const background = "https://imgur.com/yFesOhI.jpg";
const vasilios = "https://imgur.com/VF5N3e1.jpg";
const brian = "https://imgur.com/ur5ArT9.jpg";
const simon = "https://imgur.com/N4EWIEl.jpg";
const han = "https://imgur.com/uG5OpxZ.jpg";
const jason = "https://imgur.com/7ljRECT.jpg";
const dylan = "https://imgur.com/cIKvdKT.jpg";
const sydwell = "https://imgur.com/p1vjbgB.jpg";
const ricardo = "https://imgur.com/MoL3DNP.jpg";
const nathaniel = "https://imgur.com/kr8Pvrm.jpg";
const larry = "https://imgur.com/XvIOB5N.jpg";
const kim = "https://imgur.com/XnKzuoz.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Streamline Logo" className="App-logo" />
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <h1>CRE Streamline</h1>
        <nav>
          {/* <a href="#about">About</a> */}
          {/* <a href="#problem">Problem</a> */}
          <a href="#team">Team</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${background})` }}>
        <h1>MATCHING OFF-MARKET BUYERS AND SELLERS TO BROKER EXCLUSIVE REAL ESTATE DEALS</h1>
        {/* <a href="#about" className="cta">Learn More</a> */}
      </section>

      {/* <section id="about" className="section">
        <h2>Why Streamline?</h2>
        <p>In 2020, our founder and CEO, Vasilios Kambouras, moved to Houston, Texas to manage a substantial portfolio of shopping centers. During his work in commercial real estate, he discovered inefficiencies in the off-market transaction space.</p>
        <h3>Key Insight</h3>
        <p>Off-market properties and buyers often remain unconnected, missing out on potential deals simply because there’s no centralized platform to capture and match their motives. Realizing this, Vasilios envisioned a platform that would onboard buyer/seller objectives and map these motives into a comprehensive matching engine.</p>
        <h3>From Idea to Platform</h3>
        <p>Alongside his sales partner, Dylan Blue, Vasilios launched Streamline to tackle this challenge head-on. Our team developed a CRM-integrated platform designed to identify and connect off-market buyers and sellers efficiently.</p>
        <h3>What’s Next?</h3>
        <p>With production now underway, Streamline aims to gain traction and close its first matched deal in Houston’s retail sector. This milestone will set the stage for national expansion.</p>
      </section>

      <section id="problem" className="section">
        <h2>The Challenge in Off-Market Commercial Real Estate</h2>
        <p>The off-market real estate sector is vast but disjointed, with limited exposure for available properties and no public platforms that reveal buyer motives.</p>
        <h3>Core Issues</h3>
        <ul>
          <li>Off-market properties aren’t publicly listed, leaving potential buyers uninformed.</li>
          <li>Existing platforms lack transparency around buyer objectives.</li>
          <li>The market has never been fully mapped, leaving opportunities unconnected.</li>
        </ul>
        <h3>Consequences</h3>        <p
        >This lack of connectivity results in potential deals that go unfulfilled. Without a system to match off-market buyers and sellers, these opportunities remain untapped, keeping market data fragmented.</p>
      </section> */}

      <section id="team" className="section">
        <h2>Team</h2>
        <div className="team-container first-row">
          <div className="card">
            <img src={vasilios} alt="Vasilios Kambouras" />
            <h3>Vasilios Kambouras</h3>
            <span className="position-title">Co-Founder & CEO</span>
            <ul>
              <li>10 Years of Brokerage Experience</li>
            </ul>
          </div>
          <div className="card">
            <img src={brian} alt="Brian Chetram" />
            <h3>Brian Chetram</h3>
            <span className="position-title">Co-Founder & CTO</span>
            <ul>
              <li>25 Years of Product Development</li>
              <li>Ex-GS, JPMC, Bloomberg</li>
            </ul>
          </div>
          <div className="card">
            <img src={simon} alt="Simon" />
            <h3>Simon Marus</h3>
            <span className="position-title">COO</span>
            <ul>
              <li>15+ Years in Strategy & Operations</li>
              <li>Ex-GS, JPMC, Bloomberg</li>
            </ul>
          </div>
          <div className="card">
            <img src={dylan} alt="Dylan Blue" />
            <h3>Dylan Blue</h3>
            <span className="position-title">Co-Founder & Partner</span>
            <ul>
              <li>10 Years of CRE Sales</li>
            </ul>
          </div>
          <div className="card">
            <img src={han} alt="Han Ju Lee" />
            <h3>Han Ju Lee</h3>
            <span className="position-title">VP of Finance</span>
            <ul>
              <li>Bain & Company: M&A strategy</li>
              <li>National Defense Ministry</li>
            </ul>
          </div>
        
          <div className="card">
            <img src={jason} alt="Jason Ezer" />
            <h3>Jason Ezer</h3>
            <span className="position-title">Operating Broker</span>
            <ul>
              <li>Houston Astros: 19 property acquisitions</li>
              <li>Closed $400M+ assets</li>
            </ul>
          </div>
          <div className="card">
            <img src={sydwell} alt="Sydwell Hajicek" />
            <h3>Sydwell Hajicek</h3>
            <span className="position-title">Sr. Full Stack Developer</span>
            <ul>
              <li>10 Years of Full Stack Development</li>

            </ul>
          </div>
          <div className="card">
            <img src={ricardo} alt="Ricardo Zavala" />
            <h3>Ricardo Zavala</h3>
            <span className="position-title">Sr. Full Stack Developer</span>
            <ul>
              <li>10 Years of Full Stack Development</li>
            </ul>
          </div>
          {/* <div className="card">
            <img src={nathaniel} alt="Nathaniel Eliot" />
            <h3>Nathaniel Eliot</h3>
            <span className="position-title">Director of Infrastructure</span>
            <ul>
              <li>Indeed: Sr. Site Reliability Engineer</li>
              <li>Infochimps: Multi-cloud support deployment</li>
            </ul>
          </div> */}
          <div className="card">
            <img src={larry} alt="Larry Haber" />
            <h3>Larry Haber</h3>
            <span className="position-title">Legal Counsel</span>
            <ul>
              <li>CRE attorney with 30+ years</li>
              {/* <li>AGMB Law Managing Partner</li>
              <li>REality Check: Founder of CRE series</li> */}
            </ul>
          </div>
          <div className="card">
            <img src={kim} alt="Kim Petry" />
            <h3>Kim Petry</h3>
            <span className="position-title">Financial Advisor</span>
            <ul>
              <li>CFO for Fortune 100 companies</li>
              {/* <li>AMEX Corporate Cards CFO</li>
              <li>Paxos: Raised $300M</li> */}
            </ul>
          </div>

          </div>
      </section>

      <section id="contact" className="">
        <h2>Contact Us</h2>
        <br></br>
        <p>Phone: 516.902.5167 | Email: <a href="mailto:Streamline@kmgmt.co">Streamline@kmgmt.co</a></p>
        {/* <p>Phone: 516.902.5167</p> */}
        <p>Office: 5511 PARKCREST DR. SUITE 103, AUSTIN, TX 78731</p>
        <br></br>
        <p>CRE Streamline Inc. operates as a real estate technology platform and does not directly engage in brokerage activities.</p>

      </section>
<br></br>
      <footer className="footer">
        <p>© 2025 Kambouras Management Inc. All rights reserved.</p>
        <p>CRE Streamline Inc. is owned and operated by Kambouras Management Inc., both registered corporations in Texas, USA.</p>
      </footer>
    </div>
  );
}

export default App;
