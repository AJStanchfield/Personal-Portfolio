import useScrollGradient from "./hooks/GradientBG";
import Sections from "./IndexSections";

const gradients = {
  home: "bg-slide",
};

function App() {
  const { activeSection, scrollToSection } = useScrollGradient(gradients);

  return (
      <Sections activeSection={activeSection} scrollToSection={scrollToSection} />

      
  );
}

export default App;
