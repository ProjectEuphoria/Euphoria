import { type FC } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import LiquidEther from "../../Components/Effects/LiquidEther";
import CharacterCard from "../../Components/Cards/CharacterCard";
import SectionHeading from "../../Components/SectionHeading";
import MiloImage from "../../assets/Milo_Poster.png";
import KaiImage from "../../assets/Kai_Poster.png";
import LunaImage from "../../assets/Luna_Poster.png";
import SophieImage from "../../assets/Sophie_Poster.png";
import HelenaImage from "../../assets/Helena_Poster.png";
import { useNavigate } from "react-router-dom";
import { buildChatUrl } from "../../utils/url";


const Hero: FC = () => {
  return (
    <section id="home" className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 opacity-80 mix-blend-screen" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <h1 className="font-bold tracking-tight text-6xl text-white sm:text-7xl md:text-7xl lg:text-8xl">
          Welcome to the world
          <br className="hidden sm:block" />
          <span className="block mt-3 bg-clip-text text-white drop-shadow">of Euphoria</span>
        </h1>
        <h4 className="text-white text-3xl px-6 py-12 gap-3 opacity-70 flex flex-col ">
          <span>Choose your very own personal character</span>
          <span>which will help you get over your problems.</span>
        </h4>
      </div>
    </section>
  );
};



const LandingPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: "#040026" }}>
      <div className="pointer-events-none fixed inset-0 ">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={1}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={100}
          autoRampDuration={0.6}
        />
      </div>
      <Navbar />

      <main>

        <Hero />
        <SectionHeading>Choose your Character</SectionHeading>
        <div className="flex max-w-7xl flex-wrap mx-auto  justify-center" style={{ rowGap: "50px", columnGap: "100px", marginTop: "70px" }}>
<CharacterCard 
  name="Helena" 
  description="Sharp mind, chill energy. Helena’s the one who solves stuff before you even realize it’s a problem. She doesn’t talk much — but when she does, it’s worth listening." 
  imageSrc={HelenaImage} 
  onClick={() => { navigate(buildChatUrl("Helena")) }} 
/>

<CharacterCard 
  name="Milo" 
  description="Smart mouth, faster brain. Milo’s the guy who jokes his way through chaos and somehow still gets it all done. He’ll roast you — but also make you laugh while doing it." 
  imageSrc={MiloImage} 
  onClick={() => { navigate(buildChatUrl("Milo")) }} 
/>

<CharacterCard 
  name="Kai" 
  description="All focus, zero drama. Kai’s that ‘get your shit together’ voice you actually need sometimes. Cool-headed, confident, and allergic to half-hearted effort." 
  imageSrc={KaiImage} 
  onClick={() => { navigate(buildChatUrl("Kai")) }} 
/>

<CharacterCard 
  name="Sophie" 
  description="Soft tone, sneaky motivator. Sophie keeps things light but somehow makes you do the work anyway. She’s chill, funny, and always down for a short break — or a deep talk." 
  imageSrc={SophieImage} 
  onClick={() => { navigate(buildChatUrl("Sophie")) }} 
/>

<CharacterCard 
  name="Luna" 
  description="Total tsundere energy. Luna acts like she doesn’t care, then gets mad when you don’t notice. She’ll tease you, mock you, and maybe — just maybe — smile when you win." 
  imageSrc={LunaImage} 
  onClick={() => { navigate(buildChatUrl("Luna")) }} 
/>

        </div>

      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
