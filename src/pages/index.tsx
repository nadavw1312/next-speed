import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const ParticlesContainerBrain = dynamic(() => import("../components/ParticlesContainerBrain"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col justify-center relative ${inter.className}`}>
      <ParticlesContainerBrain id="tsparticles" />
      <div>
        <h1>Testing</h1>
      </div>
    </main>
  );
}
