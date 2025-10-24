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
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black/40 border-white/10 backdrop-blur-sm overflow-hidden max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getPersonaColor(name)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {isHovered && (
          <div className="absolute top-4 right-4">
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
        )}
      </div>
      
      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="space-y-3">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${getPersonaColor(name)} bg-clip-text text-transparent`}>
            {name}
          </h3>
          
          <div className={`transition-all duration-300 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              {description}
            </p>
            
            <Button 
              variant="ghost" 
              size="sm"
              className={`w-full bg-gradient-to-r ${getPersonaColor(name)} text-white hover:opacity-90 transform transition-all duration-200`}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with {name}
            </Button>
          </div>
          
          {!isHovered && (
            <div className="text-white/60 text-xs">
              Hover to learn more
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
