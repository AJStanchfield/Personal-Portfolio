import useScrollGradient from "./hooks/GradientBG";
import Sections from "./IndexSections";

const gradients = {
  "title-section": "bg-slide",
  "hero-section": "bg-slide",
  "about-section": "bg-slide",
  "contact-section": "bg-slide",
};

function App() {
  const { activeSection, scrollToSection } = useScrollGradient(gradients);

  return (
      <Sections activeSection={activeSection} scrollToSection={scrollToSection} />
  );
}

export default App;
