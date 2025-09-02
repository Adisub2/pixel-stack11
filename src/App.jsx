import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">PixelStack</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#records">Records</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>We Build Digital Future 🚀</h1>
          <p>
            At <b>PixelStack</b>, we craft websites, apps, and AI solutions to
            empower businesses worldwide.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <h2>Our Services</h2>
        <p>We deliver innovative and high-performing digital solutions.</p>
        <div className="services">
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>Responsive, fast, and SEO-friendly websites built on modern tech.</p>
          </div>
          <div className="service-card">
            <h3>📱 Mobile Apps</h3>
            <p>Cross-platform Android & iOS apps with stunning UI/UX design.</p>
          </div>
          <div className="service-card">
            <h3>🤖 AI & Automation</h3>
            <p>Smart AI tools, chatbots, and automation for future-ready businesses.</p>
          </div>
          <div className="service-card">
            <h3>🏫 ERP Development</h3>
            <p>Custom ERP solutions for schools, colleges, and organizations.</p>
          </div>
          <div className="service-card">
            <h3>☁️ Cloud Solutions</h3>
            <p>Scalable cloud hosting, deployment & DevOps services.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>About Us</h2>
        <p>
          PixelStack is a passionate team of developers, designers, and innovators.
          Our mission is to deliver modern digital solutions that empower businesses 
          to thrive in the digital age. We believe in <b>creativity, performance, and reliability</b>.
        </p>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFuMCleUUWLLQ/profile-displayphoto-scale_400_400/B56ZgMw4Y_G4Ag-/0/1752560798156?e=1759968000&v=beta&t=G4Bzkuj5PEkAoXa9hVtSmIFK8773oRQ_NbeWsDhcVCw" alt="CEO" />
            <h3>Aditya Shukla</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="CTO" />
            <h3>Manish tripathi</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Designer" />
            <h3>Ayushi Agrawal</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Developer" />
            <h3>Suresh Pokhriyal</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>Our Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Mainstream Player</h3>
            <p>A YouTube-like video streaming platform with unique features.</p>
          </div>
          <div className="project-card">
            <h3>Clinic Website</h3>
            <p>Online appointment & consultation system for healthcare.</p>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="section" id="records">
        <h2>Our Achievements</h2>
        <div className="records">
          <div className="record-card">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="record-card">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="record-card">
            <h3>10+</h3>
            <p>Industries Served</p>
          </div>
          <div className="record-card">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2>Contact Us</h2>
        <p>Let’s work together to build something amazing!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} PixelStack | Built with ❤️
        </p>
        <div>
          <a href="#">Facebook</a> | <a href="#">LinkedIn</a> |{" "}
          <a href="mailto:Pixelstack1@proton.me">Mail Us</a>
        </div>
      </footer>
    </>
  );
}

export default App;
