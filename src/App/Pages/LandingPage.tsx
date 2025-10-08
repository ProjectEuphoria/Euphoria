import { type FC } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import LiquidEther from "../../Components/Effects/LiquidEther";
import CharacterCard from "../../Components/Cards/CharacterCard";
import SectionHeading from "../../Components/SectionHeading";
import heroImage from "../../assets/9006.jpg_wh860.jpg";
import helenaImg from "../../assets/give a good anime background which is subjected to no copyright.jpg"
import miloImg from "../../assets/Milo_bg.jpg"
import sophieImg from "../../assets/Sophie_bg.jpg"
import kaiImg from "../../assets/Kai_bg.jpg"
import lunaImg from "../../assets/Luna_bg.jpg"
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
          <CharacterCard name="Helena" description="She is good" imageSrc={heroImage} onClick={() => { navigate(buildChatUrl("Helena", helenaImg)) }}></CharacterCard>
          <CharacterCard name="Milo" description="He is good " imageSrc={heroImage} onClick={() => { navigate(buildChatUrl("Milo", miloImg)) }}></CharacterCard>
          <CharacterCard name="Kai" description="She is good " imageSrc={heroImage} onClick={() => { navigate(buildChatUrl("Kai", kaiImg)) }} ></CharacterCard>
          <CharacterCard name="Sophie" description="She is good " imageSrc={heroImage} onClick={() => { navigate(buildChatUrl("Sophie", sophieImg)) }} ></CharacterCard>
          <CharacterCard name="Luna" description="She is good " imageSrc={heroImage} onClick={() => { navigate(buildChatUrl("Luna", lunaImg)) }} ></CharacterCard>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;