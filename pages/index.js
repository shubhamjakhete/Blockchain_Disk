import Navbar from '../components/Navbar'; // Adjust the path as needed
import Hero from '../components/Hero'; // Import your Hero component
import React from 'react';



export default function Home() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component here */}
      {/* The rest of your page content */}
      <Hero /> {/* Render the Hero component */}
    </div>
  );
}

