import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';


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
          <p>Click on a Project to be directed to a demo</p>
          
            <Stack direction="row" spacing={2} align="center">
              <Link to="/analyticschart">
              <Chip sx={{backgroundColor:"#5470fe", color:"white"}} label="Analytics Dashboard Demo" clickable />
              </Link>
              <Link to="/eoyreview">
              <Chip sx={{backgroundColor:"#5470fe", color:"white"}} label="End of Year Review" clickable />
              </Link>
            </Stack>
          
        </div>
      </section>

  <section className="section" data-section-id="about-section" page-id="about">
        <div className="section-content">
          <h1>About</h1>
          <p>My name is AJ Stanchfield, and I am a student at Montclair State University, pursuing a dual major in Computer Science and Cybersecurity.
             I am currently working as a developer intern at Implse, a platform designed for food trucks and delivery services that focuses on simplifying 
             communication with customers by allowing them to place and manage orders directly through their messaging apps.
            During my internship, I have contributed to the development of an analytics dashboard that tracks revenue, order 
            details, and other key business metrics. I also created a customer dashboard demo, which lets users track their orders 
            in one place, including features such as real-time ETA, order status, cancellation options, a reorder button, and access to 
            our AI agent for any questions.
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
          <Stack spacing={2} direction="row" align="center">
          <Chip sx={{backgroundColor:"#d850c3", color:"white"}} icon={<EmailIcon color="white" />} label="Email" component = "a" href="mailto:ajstanchfield@gmail.com" clickable target="_blank"/> 

          <Chip sx={{backgroundColor:"#0A66C2", color:"white", marginLeft:"10px"}} icon={<LinkedInIcon color="white" />} label="LinkedIn" component = "a" href="https://www.linkedin.com/in/allan-stanchfield-475866316/" clickable target="_blank"/>

          <Chip sx={{backgroundColor:"#171515", color:"white", marginLeft:"10px"}} icon={<GitHubIcon color="white" />} label="GitHub" component = "a" href="https://github.com/AJStanchfield" clickable target="_blank"/>
          </Stack>
        </div>
      </section>
    </div>
    )
}

export default Sections;