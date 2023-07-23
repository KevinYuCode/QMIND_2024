import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#161616] min-h-[100vh]">
      <div className="home-text-container">
        <h1 className=" font-gothic font-bold text-[70px]">
          Empowering future leaders to <br />
          <span className="text-[#F0B542]">disrupt technology</span>
        </h1>
        <p>
          265 undergraduate students building, researching, and exploring
          artificial intelligence, machine learning, blockchain and quantum
          computing.
        </p>

        <div className="flex gap-[24px]">
          <button className="bg-[#F7F7F7] tertiary-colour font-bold">WORK WITH US</button>
          <button className="bg-[#F7F7F7] tertiary-colour font-bold">OUR PROJECTS</button>
        </div>
      </div>
    </main>
  );
}
