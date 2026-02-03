"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export default function ValentineTrap() {
  const [stage, setStage] = useState<"glitch" | "proposal" | "success">("glitch");

  // Auto-transition from glitch to proposal
  if (stage === "glitch") {
    setTimeout(() => setStage("proposal"), 5000);
  }

  const handleYes = () => {
    setStage("success");
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ec4899", "#f43f5e"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ec4899", "#f43f5e"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const moveButton = (e: any) => {
    const btn = e.target;
    const x = Math.random() * 80; // keep within 80% of screen
    const y = Math.random() * 80;
    btn.style.position = "absolute";
    btn.style.left = `${x}%`;
    btn.style.top = `${y}%`;
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center relative overflow-hidden p-4">
      
      {/* STAGE 1: THE GLITCH */}
      {stage === "glitch" && (
        <div className="space-y-2 text-left w-full max-w-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <p className="typing-effect">{`> ACCESSING RECIPE_DB...`}</p>
            <p className="typing-effect text-yellow-500">{`> WARNING: BISCOFF_PROTOCOL DETECTED`}</p>
            <p className="typing-effect text-red-500">{`> OVERRIDING SYSTEM UI...`}</p>
          </motion.div>
        </div>
      )}

      {/* STAGE 2: THE PROPOSAL */}
      {stage === "proposal" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center z-10"
        >
          <div className="mb-8 relative inline-block">
            <Heart className="w-24 h-24 text-pink-500 animate-pulse fill-pink-500" />
            <div className="absolute inset-0 blur-xl bg-pink-600 opacity-50"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Will you be my <br />
            <span className="text-pink-500">Valentine?</span>
          </h1>

          <p className="text-zinc-400 mb-12">
            (I promise to buy you the actual cake too)
          </p>

          <div className="flex gap-6 justify-center items-center h-20">
            <button
              onClick={handleYes}
              className="px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold text-xl shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all transform hover:scale-105"
            >
              YES
            </button>

            {/* THE IMPOSSIBLE BUTTON */}
            <button
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              className="px-8 py-3 border border-zinc-700 text-zinc-500 rounded-lg font-bold text-xl transition-all"
            >
              NO
            </button>
          </div>
        </motion.div>
      )}

      {/* STAGE 3: SUCCESS */}
      {stage === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">It's a Date! 🥂</h1>
        </motion.div>
      )}
    </div>
  );
}