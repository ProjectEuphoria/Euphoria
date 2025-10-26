// Enhanced Emotion Engine using AWS services
import { ComprehendClient, DetectSentimentCommand } from "@aws-sdk/client-comprehend";

export interface EmotionAnalysis {
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'MIXED';
  confidence: number;
  emotions: {
    joy?: number;
    sadness?: number;
    anger?: number;
    fear?: number;
    surprise?: number;
  };
}

export class EmotionEngine {
  private comprehend = new ComprehendClient({ region: "ap-south-1" });

  async analyzeText(text: string): Promise<EmotionAnalysis> {
    const response = await this.comprehend.send(new DetectSentimentCommand({
      Text: text,
      LanguageCode: "en"
    }));

    return {
      sentiment: response.Sentiment as any,
      confidence: response.SentimentScore?.Mixed || 0,
      emotions: {
        joy: response.SentimentScore?.Positive,
        sadness: response.SentimentScore?.Negative,
        anger: this.detectAnger(text),
        fear: this.detectFear(text),
        surprise: this.detectSurprise(text)
      }
    };
  }

  generateEmotionalSSML(text: string, emotion: EmotionAnalysis, persona: string): string {
    const intensity = emotion.confidence > 0.8 ? 'high' : 'medium';
    
    if (emotion.sentiment === 'POSITIVE') {
      return `<speak><amazon:emotion name="excited" intensity="${intensity}">${text}</amazon:emotion></speak>`;
    } else if (emotion.sentiment === 'NEGATIVE') {
      return `<speak><amazon:emotion name="disappointed" intensity="${intensity}">${text}</amazon:emotion></speak>`;
    }
    
    return `<speak><prosody rate="105%" pitch="+2st">${text}</prosody></speak>`;
  }

  private detectAnger(text: string): number {
    const angerWords = ['angry', 'mad', 'furious', 'hate', 'damn', 'stupid'];
    const matches = angerWords.filter(word => text.toLowerCase().includes(word));
    return Math.min(matches.length * 0.3, 1.0);
  }

  private detectFear(text: string): number {
    const fearWords = ['scared', 'afraid', 'worried', 'anxious', 'nervous'];
    const matches = fearWords.filter(word => text.toLowerCase().includes(word));
    return Math.min(matches.length * 0.3, 1.0);
  }

  private detectSurprise(text: string): number {
    const surpriseWords = ['wow', 'amazing', 'incredible', 'unbelievable', '!'];
    const matches = surpriseWords.filter(word => text.toLowerCase().includes(word));
    return Math.min(matches.length * 0.2, 1.0);
  }
}
