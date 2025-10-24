import { type FC } from "react";
import { Card } from "../ui/card";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  persona?: string;
  timestamp?: Date;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, isUser, persona, timestamp }) => {
  const getPersonaColor = (name?: string) => {
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
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${getPersonaColor(persona)} flex items-center justify-center`}>
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}
      
      <Card className={`max-w-[70%] ${isUser ? 'bg-blue-600 text-white' : 'bg-white/10 text-white border-white/20'} backdrop-blur-sm`}>
        <div className="p-3">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
          {timestamp && (
            <div className="text-xs opacity-60 mt-2">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          )}
        </div>
      </Card>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
