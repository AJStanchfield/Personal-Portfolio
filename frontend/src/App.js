import useScrollGradient from "./hooks/GradientBG";
import Sections from "./IndexSections";

const gradients = {
  Title: "bg-slide",
  hero: "bg-grad-1",
  about: "bg-grad-2",
  contact: "bg-grad-3",
};

function App() {
  const { activeSection, scrollToSection } = useScrollGradient(gradients);

  return (
      <Sections activeSection={activeSection} scrollToSection={scrollToSection} />

      
  );
}

export default App;
