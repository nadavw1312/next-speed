import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticlesContainerBrain = dynamic(() => import("../components/ParticlesContainerBrain"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual logic)
    setTimeout(() => {
      setParticlesVisible(true);
    }, 2000); // Delay in milliseconds
  }, []); // The empty dependency array ensures this effect runs once after initial render

  return (
    <main className={`min-h-screen flex flex-col justify-center relative ${inter.className}`}>
      {particlesVisible && <ParticlesContainerBrain id="tsparticles" />}
      <div>
        <h1>Testing</h1>
      </div>
    </main>
  );
}
