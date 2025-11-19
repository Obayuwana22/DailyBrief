"use client";

import { Mic, Volume2, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <div className="sticky top-24 space-y-4 mt-8">
      {/* AI Assistant Card */}
      <div className="border border-border rounded-xl bg-card p-6 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary-foreground" />
          </div>
          <h3 className="font-serif font-bold">Voice Assistant</h3>
          <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>

        {/* Info */}
        <p className="text-sm text-muted-foreground mb-4">
          Ask me anything about today&apos;s news. I&apos;ll summarize, explain, or
          read stories aloud.
        </p>

        {/* Messages Preview */}
        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm">
            <p className="text-primary font-semibold mb-1">You</p>
            <p className="text-muted-foreground">Summarize today&apos;s tech news</p>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-sm">
            <p className="text-accent font-semibold mb-1">Nexus AI</p>
            <p className="text-muted-foreground">
              Today&apos;s tech headlines include quantum computing breakthroughs...
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mb-4">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isRecording
                ? "bg-destructive text-destructive-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            <Mic className="w-4 h-4" />
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>

          <button
            onClick={() => setIsSpeaking(!isSpeaking)}
            className="w-full py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Volume2 className="w-4 h-4" />
            {isSpeaking ? "Stop Playing" : "Listen to Summary"}
          </button>

          <button className="w-full py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-sm font-semibold">
            <Send className="w-4 h-4" />
            Ask Question
          </button>
        </div>

        {/* Status Indicator */}
        {isRecording && (
          <div className="p-2 bg-destructive/10 border border-destructive/20 rounded-lg text-xs text-destructive font-semibold text-center">
            🎙️ Recording in progress...
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition text-sm font-semibold text-center">
          📰 Daily Brief
        </button>
        <button className="p-3 rounded-lg border border-border hover:border-secondary hover:bg-secondary/10 transition text-sm font-semibold text-center">
          🔥 Trending Now
        </button>
      </div>

      {/* Info Card */}
      <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
        <p className="text-xs text-primary leading-relaxed">
          <strong>💡 Tip:</strong> Use voice commands like &quot;Tell me about tech
          news&quot; or &quot;What&apos;s trending today?&quot;
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
