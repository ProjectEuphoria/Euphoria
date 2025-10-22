export type PersonaKey = "Sophie" | "Luna" | "Helena" | "Kai" | "Milo";

export type BreathType =
  | "soft-exhale"
  | "light-inhale"
  | "dry"
  | "smile-breath"
  | "half-chuckle";

export type ProsodyContour =
  | "encouraging"
  | "serene"
  | "composed"
  | "dynamic"
  | "grounded";

export interface VoiceGenerativeSpec {
  pitchSemitones: number;
  ratePct: number;
  eq: {
    lowShelfDb: number;
    presenceDb: number;
    airDb: number;
  };
  reverb: {
    mix: number;
    predelayMs: number;
    room: "small" | "hall" | "studio" | "booth";
  };
  breath: {
    prob: number;
    type: BreathType;
    maxPerUtterance: number;
  };
  prosody: {
    defaultContour: ProsodyContour;
    pauseMs: {
      comma: number;
      period: number;
      paragraph: number;
    };
    emphasis: {
      liftDb: number;
      tilt: "up" | "down" | "flat" | "slight-down";
    };
  };
}

export interface PersonaVoiceSpec {
  base: string;
  lang: string;
  engine: "neural";
  ageHint: string;
  generative: VoiceGenerativeSpec;
}

export interface VoiceCacheConfig {
  dir: string;
  keyStrategy: "hash(text|persona|style|params)";
  maxAgeSec: number;
}

export interface VoiceConfig {
  region: string;
  outputFormat: "mp3" | "ogg_vorbis" | "pcm";
  sampleRate: number;
  cache: VoiceCacheConfig;
  personas: Record<PersonaKey, PersonaVoiceSpec>;
}

export interface TtsRequestBody {
  persona: PersonaKey;
  text: string;
  style?: ProsodyContour | "neutral";
  sentiment?: "pos" | "neg" | "excited" | "calm" | "serious";
  seed?: number;
}

export interface TtsResponseMeta {
  persona: PersonaKey;
  baseVoice: string;
  engine: string;
  applied: {
    ssmlProsody: boolean;
    pollyNeural: boolean;
    dspPost: boolean;
  };
  generative: VoiceGenerativeSpec;
  request: {
    style?: ProsodyContour | "neutral";
    sentiment?: "pos" | "neg" | "excited" | "calm" | "serious";
    seed?: number;
  };
  analysis?: {
    durationMs: number;
    approxSpeechRate: number;
    meanVolumeDb?: number;
  };
  cache?: {
    key: string;
    hit: boolean;
    expiresAt: number;
  };
}
