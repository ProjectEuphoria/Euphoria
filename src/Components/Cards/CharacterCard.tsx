import { type FC, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export type CharacterCardProps = {
  name: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
};

const CharacterCard: FC<CharacterCardProps> = ({ name, description, imageSrc, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPersonaColor = (name: string) => {
    const colors = {
      Helena: "from-purple-500 to-indigo-600",
      Milo: "from-orange-500 to-red-600", 
      Kai: "from-blue-500 to-cyan-600",
      Sophie: "from-pink-500 to-rose-600",
      Luna: "from-violet-500 to-purple-600"
    };
    return colors[name as keyof typeof colors] || "from-purple-500 to-pink-600";
  };

  return (
    <Card 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getPersonaColor(name)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {isHovered && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 animate-pulse" />
          </div>
        )}
      </div>
      
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
        <div className="space-y-2 sm:space-y-3">
          <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${getPersonaColor(name)} bg-clip-text text-transparent`}>
            {name}
          </h3>
          
          <div className={`transition-all duration-300 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {description}
            </p>
            
            <Button 
              variant="ghost" 
              size="sm"
              className={`w-full bg-gradient-to-r ${getPersonaColor(name)} text-white hover:opacity-90 transform transition-all duration-200 text-xs sm:text-sm`}
            >
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Chat with {name}
            </Button>
          </div>
          
          {!isHovered && (
            <div className="text-white/60 text-xs">
              <span className="hidden sm:inline">Hover to learn more</span>
              <span className="sm:hidden">Tap to learn more</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
