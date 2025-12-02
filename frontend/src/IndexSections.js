function Sections({ activeSection, scrollToSection }) {
    return (
        <div className="app-container">
      {/* Navigation */}
        <div className="section-nav">
        <button
          className={activeSection === "Title" ? "active" : ""}
          onClick={() => scrollToSection("Title")}
        >
          Home
        </button>
        <button
          className={activeSection === "hero" ? "active" : ""}
          onClick={() => scrollToSection("hero")}
        >
          Hero
        </button>
        <button
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>

    {/* Sections */}
    <section className="section" data-section-id="Title">
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
            <h1 style={{fontWeight: "bold", fontFamily: "Cement"}}>Welcome!</h1>
            </div>
    </section>
      <section className="section" data-section-id="hero">
        <div className="section-content">
          <h1>Hero Section</h1>
          <p>Scroll to watch the background gradient change.</p>
        </div>
      </section>

      <section className="section" data-section-id="about">
        <div className="section-content">
          <h1>About</h1>
          <p>This section uses the second gradient.</p>
        </div>
      </section>

      <section className="section" data-section-id="contact">
        <div className="section-content">
          <h1>Contact</h1>
          <p>Final gradient transitions here.</p>
        </div>
      </section>
    </div>
    )
}

export default Sections;