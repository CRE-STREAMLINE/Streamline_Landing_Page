import React from 'react';
import './App.css';

// Imgur image URLs
const logo = "https://imgur.com/usOsLpl.jpg";
const background = "https://imgur.com/yFesOhI.jpg";
const solution = "https://imgur.com/YnL7S12.jpg";
const fundraising = "https://imgur.com/0jSo3t2.jpg";
const vasilios = "https://imgur.com/VF5N3e1.jpg";
const scott = "https://imgur.com/Iymy1Wv.jpg";
const brian = "https://imgur.com/8aIAkqF.jpg";
const dylan = "https://imgur.com/OuJAtyV.jpg";
const larry = "https://imgur.com/XvIOB5N.jpg";
const tony = "https://imgur.com/v4xL6pk.jpg";
const kim = "https://imgur.com/XnKzuoz.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Streamline Logo" className="App-logo" />
        <h1>Streamline</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#team">Team</a>
          {/* <a href="#advisors">Advisors</a> */}
          <a href="#fundraising">Fundraising</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${background})` }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Mapping and connecting off-market real estate</h1>
        <h1>buyers and sellers to broker exclusive deals.</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href="#about" className="cta">Learn More</a>
      </section>

      <section id="about" className="section">
        <h2>Why Streamline?</h2>
        <p>Back in 2020, founder and CEO Vasilios Kambouras moved to Houston, Texas to manage a substantial CRE portfolio of shopping centers. 

Being involved on the transaction side, he got an inside look at his principles off-market strategy - trading like-kind properties in the same region.

If other players were using the same strategy.. then buy/sell motives could be onboarded into a matching engine to streamline deals. 
 
However, there was no platform to find buyer motives and available off-market properties, making it difficult to efficiently connect them.</p>
<br></br>
<p>Vasilios and his sales partner, Dylan Blue went on to found Streamline, bringing together an incredible team of industry experts. 

They began development on a CRM-integrated matching platform to find, capture and connect off-market buyers and sellers. 

Going into production, the startup is preparing  for major traction and proof of concept.

Once Streamline’s first deal is matched and closed in the retail sector of Houston, the process can be implemented across the US.
</p>
      </section>

      <section id="problem" className="section">
        <h2>The Challenge in Off-Market Commercial Real Estate</h2>
        <p>The current market lacks an efficient way to find and connect non-institutional buyers with available off-market properties, leading to missed opportunities and unrealized potential.</p>
        <ul>
          <li>Real estate owners don’t list off-market available properties.</li>
          <li>Real estate platforms don’t show buyer motives.</li>
          <li>No one has mapped out and matched an entire real estate market.</li>
        </ul>
        <br></br>
        <p>You can go on just about any widely used real estate platform - you won't find any publicly listed buyers. As for available off-market properties, the whole point is that they're off market so the only way you would find out is through a real estate agent.. but even they don't know all the available off-market properties in a given niche market. The limited exposure results in buyers and sellers who could be in the same market, but may never find each other. 

An additional thing to consider, since the off-market sector has never been fully mapped out, we don't know how big it is and how many potential transactions remain unaccounted for. </p>
      </section>

      <section id="solution" className="section">
        <h2>Our Innovative Solution</h2>
        <img src={solution} alt="Solution Image" />
        <p>Our CRM-integrated matching platform aggregates data, captures buy and sell objectives, and matches them based on comparable criteria. Our brokers then negotiate and close deals, ensuring efficient transactions.</p>
      </section>

      <section id="team" className="section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="card">
            <img src={vasilios} alt="Vasilios Kambouras" />
            <h3>Vasilios Kambouras (CEO)</h3>
            <ul>
              <li>VP for $300M AUM CRE Portfolio</li>
              <li>NB Elite Realty: <a href="https://nbeliterealty.com/Vasilios-Kambouras/"> CA Broker</a>* </li>
              <li>Full-Stack Development Cert.</li>
            </ul>
            <br></br>
            <p>Vasilios is a seasoned executive with almost a decade of experience in commercial real estate, successfully managing substantial CRE portfolios and leading brokerage sales teams.</p>
          </div>
          <div className="card">
            <img src={scott} alt="Scott Landers" />
            <h3>Scott Landers (Operating Broker)</h3>
            <ul>
              <li>$1 Billion sourced and closed in Commercial real estate sales</li>
              <li>Capview Partners: VP of Real Estate Created a scalable acquisitions platform for investment funds.</li>
              <li>Kodiak Capital Advisors:
                Exec. VP Handled all aspects of the full-cycle investment process for TX portfolio </li>
              <li>Gaedeke Holdings: 
              Vice President & Director of Acquisitions/Disposition</li>
            </ul>
            {/* <p>Scott has extensive experience in commercial real estate sales, with a proven track record of closing high-value deals. His expertise and leadership are invaluable to our team.</p> */}
          </div>
          <div className="card">
            <img src={brian} alt="Brian Chetram" />
            <h3>Brian Chetram (CTO)</h3>
            <ul>
              <li>FalconX: Global technology leader responsible for the strategic vision and build out of next-generation platforms (+$8 Billion valuation - Series D)</li>
              <li>Thomson Reuters (Acquired FXAll) Sr. Director / Head of Trading Tech.</li>
              <li>VP/Sr. Technical leadership: Goldman Sachs, JP Morgan Chase, Bear Stearns, Morgan Stanley, Bloomberg (Chief Architect)</li>
              <li>MIT Class of `48 Scholarship</li>

            </ul>
            {/* <p>Brian is a technology visionary who has led major projects at FalconX. His technical acumen and strategic thinking drive our innovative solutions.</p> */}
          </div>
          <div className="card">
            <img src={dylan} alt="Dylan Blue" />
            <h3>Dylan Blue (Founding Partner)</h3>
            <ul>
              <li>CRE sales agent +7 years</li>
              <li>10M+ in sales volume</li>
              <li>Extensive creative project  management experience</li>
              <li>BA Marketing & Consumer Psych, St. Joseph's University</li>
            </ul>
            {/* <p>Dylan is a dynamic sales agent with a knack for closing deals. His passion for real estate and dedication to clients set him apart in the industry.</p> */}
          </div>
        </div>
      {/* </section>

      <section id="advisors" className="section">
        <h2>Our Advisors</h2> */}
        <div className="advisor-container">
          <div className="card">
            <img src={larry} alt="Larry Haber" />
            <h3>Larry Haber (Legal Counsel)</h3>
            <ul>
              <li>CRE attorney with 30+ years</li>
              <li>AGMB Law Managing Partner: Commercial Real Estate Department</li>
              <li>REality Check: Founder of influential real estate interview series.</li>
              <li>Co-founded a full service CRE firm, specializing in the development, ownership, management, turn-around and leasing of commercial properties</li>
            </ul>            
            {/* <p>Larry is a highly respected attorney with decades of experience in real estate law. His legal expertise provides crucial guidance for our operations.</p> */}
          </div>
          <div className="card">
            <img src={kim} alt="Kim Petry" />
            <h3>Kim Petry (Financial Advisor)</h3>
            <ul>
              <li>Extensive background as an influential CFO for Fortune 100 Companies and startups</li>
              <li>AMEX: Controller of Global Credit & CFO Corporate Cards</li>
              <li>Paxos: CFO, raised 300M</li>
              <li>RTFKT: CFO, ~1 billion acquisition by Nike</li>
              <li>CFO for Yuga Labs and Doodles</li>
            </ul>
            {/* <p>Kim is an influential CFO with a track record of success in both large corporations and startups. Her financial insights help us navigate complex financial landscapes.</p> */}
          </div>
          <div className="card">
            <img src={tony} alt="Tony Konstant" />
            <h3>Tony Konstant (Strategy Advisor)</h3>
            <ul>
              <li>$2.5 Billion sourced and closed in Commercial real estate sales</li>
              <li>HoneyBricks: Head of Real Estate  Tokenized Real Estate Startup</li>
              <li>Ashland Capital: Vice President</li>
              <li>CRE Portfolio Leadership: LivCor, Magnolia Capital,Tishman Speyer, Waterton Assoc.</li>
              <li>First non-Phd. selected to represent Dr. Norm Miller and USD at the Real Estate Research Institute</li>
              <li>USD: MS, Real Estate</li>

            </ul>
            {/* <p>Tony is a strategic mastermind with extensive experience in commercial real estate. His guidance helps shape our strategic direction and growth plans.</p> */}
          </div>
        </div>
        <div className="why-winning-team">
          <h3>Why This is a Winning Team</h3>
          <p>This is a team that knows how to execute. Co-founders, Vasilios and Dylan have managed substantial commercial real estate, providing deep industry insight and leadership. Chief Operating Broker Scott Landers brings a track record of $1 billion in commercial real estate sales and experience in creating a scalable acquisition platform. CTO Brian Chetram's expertise in developing next-gen tech platforms at leading financial institutions ensures a solid technical foundation. While Tony Konstant has also closed a tremendous amount of commercial real estate ($2.5 billion), his unique experience at institutional and tech-driven real estate startups align perfectly with Streamline. With Kim Petry's financial acumen, demonstrated by her early involvement at successful startups like RTFKT (~$1 billion acquisition by Nike) - she knows how to take a team from 0 to 100. Larry Haber is a widely respected legal advisor in the CRE space,  ensuring best legal oversight for Streamline.</p>
        </div>
      </section>

      <section id="fundraising" className="section">
        <h2>Financial Projections</h2>
        <img src={fundraising} alt="Fundraising Image" />
        <p>Based on a $2.5M average deal size and 4% commission in Texas retail, with 88% of total commission being netted to the company - we would make $88,000 per deal at a cost of roughly $1,000 per deal. Our first year of revenue depends on how many leads can be converted into deals, price-point, and commission rate. Once traction is established, it comes down to how fast we can bring on more data and increase our sales team. If we can achieve around a 1% conversion rate (Which should increase as more buy/sell criteria is aggregated into the CRM-matching engine), it's possible to achieve over 70M net revenue in a 1 year timeframe.</p>
        <br></br>
        <h3>Support Our Growth</h3>
        <p>As a bare minimum, we're aiming for $45,000 in funding to reach profitability - assuming it takes six months for our first deals to close. Once we're a few months in, we're looking to raise upwards of 1.5M from VCs to start salarying our executives, technical team, increase data aggregation, and onboard more dedicated agents/brokers. We anticipate geometric growth potential after proof of concept - as a disruptive competitor in the real estate brokerage industry, and are working on streamlining the lead procurement process to automatically convert vast amounts of real estate data into valuable leads, without much manual effort.</p>
        <ul>
          {/* <li>Lead conversion rate: ~1%</li>
          <li>Average deal size: $2.5M</li>
          <li>Commission rate: 4%</li>
          <li>Net capture: 88% of total commission</li> */}
        </ul>

        <br></br>

        <h3>Milestones</h3>
        <div className="milestone">
          <h4>Milestone 1: Testing and Production</h4>
          {/* <p>We just finished testing the application and will be going into production next week with our Chief Operating Broker, Scott Landers, as the first user on the platform.</p> */}
        </div>
        <div className="milestone">
          <h4>Milestone 2: First Deals</h4>
          {/* <p>We are looking to raise funds to establish traction, proof of concept, and reach profitability after closing our first deals.</p> */}
        </div>
        <div className="milestone">
          <h4>Milestone 3: Scaling Operations</h4>
          {/* <p>We aim to raise $1.5M from VCs to start salarying our executives, technical team, increase data aggregation, and onboard more dedicated agents/brokers.</p> */}
        </div>
      </section>

      <section id="blog" className="section">
        <h2>Blog</h2>
        <div className="blog-post">
          <h3>Exciting Milestone: Testing and Production</h3>
          <p><small>Posted on July 8, 2024</small></p>
          <p>We just finished testing the application and now going into production with our Chief Operating Broker, Scott Landers as the first user on the platform.</p>
        </div>
        {/* <div className="blog-post">
          <h3>Streamlining Off-Market Real Estate Transactions</h3>
          <p><small>Posted on July 10, 2024</small></p>
          <p>We're pioneering a scalable closed platform to streamline off-market real estate transactions. Our secret sauce is the ability to procure targeted leads from property data, capture and onboard buyer/seller motives, and broker untapped value.</p>
        </div> */}
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:Streamline@kmgmt.co">Streamline@kmgmt.co</a></p>
        <p>Phone: 516.902.5167</p>
      </section>

      <section id="newsletter" className="section">
        <h2>Sign Up for Our Newsletter</h2>
        <div className="form-container">
          <form action="https://formspree.io/YOUR_FORM_ID" method="POST">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" required />
            <label htmlFor="investorType">Investor Type</label>
            <input type="text" id="investorType" name="investorType" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone Number (optional)</label>
            <input type="tel" id="phone" name="phone" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Kambouras Management inc. All rights reserved.</p>
        <p>CRE Streamline Inc is owned and operated by Kambouras Management Inc, registered corperations in Texas, USA.</p>
        {/* <p>All rights to this website and its content are owned by Kambouras Management Inc.</p> */}
      </footer>
    </div>
  );
}

export default App;