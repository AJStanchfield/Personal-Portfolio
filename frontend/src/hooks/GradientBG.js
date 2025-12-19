import { useEffect, useState } from "react";

export default function useScrollGradient(gradientsBySection) {
  const defaultKey = Object.keys(gradientsBySection)[0];
  const [activeSection, setActiveSection] = useState(defaultKey);

  useEffect(() => {
    const sections = document.querySelectorAll("[page-id]");

    if (!sections || sections.length === 0) {
      // If no sections are present yet, ensure we have a sensible default
      setActiveSection((prev) => prev || defaultKey);
      return;
    }

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
          if (id) setActiveSection(id);
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
    const allClasses = Object.values(gradientsBySection || {});
    allClasses.forEach((cls) => {
      if (cls) body.classList.remove(cls);
    });

    // Determine the class to add: prefer the current activeSection mapping,
    // fall back to the first available gradient class.
    const classToAdd = (gradientsBySection && gradientsBySection[activeSection]) || allClasses[0];
    if (classToAdd) body.classList.add(classToAdd);
  }, [activeSection, gradientsBySection]);

  // Return scrollTo function + section state
  // Scroll should target the element with `page-id` so that
  // color (which uses `data-section-id`) can be independent.
  const scrollToSection = (id) => {
    const el = document.querySelector(`[page-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return { activeSection, scrollToSection };
}
