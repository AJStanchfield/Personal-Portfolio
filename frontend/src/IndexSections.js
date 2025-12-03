function Sections({ activeSection, scrollToSection }) {
    return (
        <div className="app-container">
      {/* Navigation */}
        <div className="section-nav">
        <button
          className={activeSection === "title-section" ? "active" : ""}
          onClick={() => scrollToSection("Title")}
        >
          Home
        </button>
        <button
          className={activeSection === "hero-section" ? "active" : ""}
          onClick={() => scrollToSection("hero")}
        >
          Projects
        </button>
        <button
          className={activeSection === "about-section" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={activeSection === "contact-section" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Find Me
        </button>
      </div>

    {/* Sections */}
  <section className="section" data-section-id="title-section" page-id="Title">
        <div className="section-content">
            <style>{`
                .icon-image {
                    width: 150px;
                    height: 150px;
                    position: center;
                    align-items: flex-start;
                }
            `}</style>
            <img src="Icon.png" alt="Icon" className="icon-image"/>
            <h1 style={{fontWeight: "bold"}}>Welcome!</h1>
            </div>
    </section>
  <section className="section" data-section-id="hero-section" page-id="hero">
        <div className="section-content">
          <h1>Projects</h1>
          <p>Links to different projects and info</p>
        </div>
      </section>

  <section className="section" data-section-id="about-section" page-id="about">
        <div className="section-content">
          <h1>About</h1>
          <p>Explain something</p>
        </div>
      </section>

  <section className="section" data-section-id="contact-section" page-id="contact">
        <div className="section-content">
          <h1>Contact me Here!</h1>
          <p>Email</p>
          <p>Linkedin</p>
          <p>Github</p>
          
        </div>
      </section>
    </div>
    )
}

export default Sections;