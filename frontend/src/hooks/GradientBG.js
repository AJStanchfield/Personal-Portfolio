import { useEffect, useState } from "react";

export default function useScrollGradient(gradientsBySection) {
  const [activeSection, setActiveSection] = useState(Object.keys(gradientsBySection)[0]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section-id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry = null;

        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            (!mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio)
          ) {
            mostVisibleEntry = entry;
          }
        });

        if (mostVisibleEntry) {
          const id = mostVisibleEntry.target.getAttribute("data-section-id");
          setActiveSection(id);
        }
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Apply gradient
  useEffect(() => {
    const body = document.body;
    const allClasses = Object.values(gradientsBySection);
    allClasses.forEach((cls) => body.classList.remove(cls));
    body.classList.add(gradientsBySection[activeSection]);
  }, [activeSection, gradientsBySection]);

  // Return scrollTo function + section state
  const scrollToSection = (id) => {
    const el = document.querySelector(`[data-section-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return { activeSection, scrollToSection };
}
