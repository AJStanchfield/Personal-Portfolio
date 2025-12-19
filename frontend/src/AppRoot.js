import React from 'react';
import useScrollGradient from './hooks/GradientBG';

// Define the gradient classes used across the site. Keep in sync with index.css
const gradients = {
  'title-section': 'bg-slide',
  'hero-section': 'bg-slide',
  'about-section': 'bg-slide',
  'contact-section': 'bg-slide',
};

export default function AppRoot({ children }) {
  // Initialize the gradient hook so it always applies a background class
  // even when route components (like Analytics) don't mount the sections.
  useScrollGradient(gradients);

  return <>{children}</>;
}
