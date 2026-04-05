// src/components/Hero.jsx
import { useState, useEffect } from "react";
import school from "../assets/images/school.jpg";
import classroom from "../assets/images/classroom.jpg";
import lab from "../assets/images/lab.jpg";

const images = [school, classroom, lab];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100vh-64px)] overflow-hidden">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition duration-700"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold drop-shadow-lg">BR SCHOOL</h1>
          <p className="text-xl mt-2 text-yellow-300">Building Future Leaders</p>
        </div>
      </div>
    </div>
  );
}