import { type FC, useState, useEffect, useRef } from "react";
import Navbar from "../../Components/Layout/Navbar";
import Footer from "../../Components/Layout/Footer";
import LiquidEther from "../../Components/Effects/LiquidEther";
import CharacterCard from "../../Components/Cards/CharacterCard";
import SectionHeading from "../../Components/SectionHeading";
import { Button } from "../../Components/ui/button";
import { Sparkles, MessageCircle, Users, Zap } from "lucide-react";
import MiloImage from "../../assets/Milo_Poster.png";
import KaiImage from "../../assets/Kai_Poster.png";
import LunaImage from "../../assets/Luna_Poster.png";
import SophieImage from "../../assets/Sophie_Poster.png";
import HelenaImage from "../../assets/Helena_Poster.png";
import { useNavigate } from "react-router-dom";
import { buildChatUrl } from "../../utils/url";

const Hero: FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();
  const charactersRef = useRef<HTMLElement>(null);
  
  const texts = [
    "AI companions that feel human",
    "Conversations that adapt to you", 
    "Your personal growth journey"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCharacters = () => {
    charactersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="relative isolate min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Experience the future of AI conversation</span>
          </div>
          
          <h1 className="font-bold tracking-tight text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Euphoria
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl transition-all duration-500">
              {texts[currentText]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="xl" variant="persona" className="group" onClick={scrollToCharacters}>
              <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Start Chatting
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={() => navigate('/about')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section ref={charactersRef} />
    </>
  );
};

const Features: FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "5 Unique Personas",
      description: "Each with distinct personalities, from calm mentors to energetic optimists"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Adaptation",
      description: "AI that responds to your emotional state and adjusts its approach"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Human-like Conversations",
      description: "Natural dialogue that feels authentic, not robotic"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Euphoria?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience AI conversation that adapts, understands, and grows with you
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage: FC = () => {
  const navigate = useNavigate();
  const charactersRef = useRef<HTMLElement>(null);
  
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: "#040026" }}>
      <div className="pointer-events-none fixed inset-0">
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
        <Features />
        
        <section className="py-20 px-6" ref={charactersRef}>
          <SectionHeading>Choose Your AI Companion</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto mt-16">
            <CharacterCard 
              name="Helena" 
              description="Sharp mind, chill energy. Helena's the one who solves stuff before you even realize it's a problem. She doesn't talk much — but when she does, it's worth listening." 
              imageSrc={HelenaImage} 
              onClick={() => navigate(buildChatUrl("Helena"))} 
            />
            <CharacterCard 
              name="Milo" 
              description="Smart mouth, faster brain. Milo's the guy who jokes his way through chaos and somehow still gets it all done. He'll roast you — but also make you laugh while doing it." 
              imageSrc={MiloImage} 
              onClick={() => navigate(buildChatUrl("Milo"))} 
            />
            <CharacterCard 
              name="Kai" 
              description="All focus, zero drama. Kai's that 'get your shit together' voice you actually need sometimes. Cool-headed, confident, and allergic to half-hearted effort." 
              imageSrc={KaiImage} 
              onClick={() => navigate(buildChatUrl("Kai"))} 
            />
            <CharacterCard 
              name="Sophie" 
              description="Soft tone, sneaky motivator. Sophie keeps things light but somehow makes you do the work anyway. She's chill, funny, and always down for a short break — or a deep talk." 
              imageSrc={SophieImage} 
              onClick={() => navigate(buildChatUrl("Sophie"))} 
            />
            <CharacterCard 
              name="Luna" 
              description="Total tsundere energy. Luna acts like she doesn't care, then gets mad when you don't notice. She'll tease you, mock you, and maybe — just maybe — smile when you win." 
              imageSrc={LunaImage} 
              onClick={() => navigate(buildChatUrl("Luna"))} 
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
