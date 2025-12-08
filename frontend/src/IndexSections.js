import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



function Sections({ activeSection, scrollToSection }) {
  const contactButtonColors = styled(Chip)(({ theme }) => ({
  backgroundColor: '#4CAF50', // Custom green background
  color: 'white',
  '&:hover': {
    backgroundColor: '#388E3C', // Darker green on hover
  },
  // You can add more styles here, like border, padding, etc.
}));



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
          <p>My name is AJ Stanchfield, I am a student at Montclair State University, majoring in a dual major program of Computer Science and Cybersecurity.
            I am currently in an internshif as a developer at Implse. Implse is made for food trucks and other delivery services, prioritizing
            communication with the customers, givng them a simple way to other within their messaganger app. I have participated in development by
            helping to build an Analytics dashboard to track revenue, order details, and other important metrics for business owners. I also helped by
            creating a demo for a customer dashboard, where they would be able to track their order in one place, inlcuding important features such as ETA, order status, a cancellation option, reorder button, and access to our AI agent for any questions.
             </p>
             <h1>Languages, Frameworks, API's, and Libraries</h1>
             <p>Languages (In order of most used): Python, JavaScript, HTML, CSS, SQL, and Java. Currently learning Swift</p>
             <p>Frameworks: Django and React</p>
             <p>API's and Libraries: MUI, Chart.js, RestAPI, Zustand</p>
        </div>
      </section>

  <section className="section" data-section-id="contact-section" page-id="contact">
        <div className="section-content">
          <h1>Contact me Here!</h1>
          <Chip sx={{backgroundColor:"#d850c3", color:"white"}} icon={<EmailIcon color="white" />} label="Email" component = "a" href="mailto:ajstanchfield@gmail.com" clickable target="_blank"/> 
          <br/>
          <br/>
          <Chip sx={{backgroundColor:"#0A66C2", color:"white", marginLeft:"10px"}} icon={<LinkedInIcon color="white" />} label="LinkedIn" component = "a" href="https://www.linkedin.com/in/allan-stanchfield-475866316/" clickable target="_blank"/>
          <br/>
          <br/>
          <Chip sx={{backgroundColor:"#171515", color:"white", marginLeft:"10px"}} icon={<GitHubIcon color="white" />} label="GitHub" component = "a" href="https://github.com/AJStanchfield" clickable target="_blank"/>
          
        </div>
      </section>
    </div>
    )
}

export default Sections;