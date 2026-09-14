import { useRef, useState } from "react";
import {
  X,
  Play,
  Pause,
  Sword,
  Shield,
  Zap,
  Users,
  Music,
  Map,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { Button } from "./ui/button";

interface DungeonLegendsModalProps {
  onClose: () => void;
}

const TECH_STACK = [
  { label: "Next.js 16", color: "bg-slate-700 text-white" },
  { label: "React 19", color: "bg-blue-900/60 text-blue-200" },
  { label: "TypeScript", color: "bg-blue-800/60 text-blue-300" },
  { label: "HTML5 Canvas", color: "bg-orange-900/60 text-orange-200" },
  { label: "Web Audio API", color: "bg-purple-900/60 text-purple-200" },
  { label: "Supabase", color: "bg-green-900/60 text-green-200" },
  { label: "PostgreSQL", color: "bg-sky-900/60 text-sky-200" },
  { label: "CSS Animations", color: "bg-pink-900/60 text-pink-200" },
];

const TABS = [
  { id: "combat", label: "⚔️ Combat", icon: Sword },
  { id: "ai", label: "🧠 Enemy AI", icon: Zap },
  { id: "npc", label: "🏘️ NPC & World", icon: Users },
  { id: "rpg", label: "📊 RPG Systems", icon: Shield },
  { id: "audio", label: "🎵 Audio & Visual", icon: Music },
  { id: "roadmap", label: "🗺️ Roadmap", icon: Map },
];

const TAB_CONTENT: Record<string, React.ReactNode> = {
  combat: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        A fluid, frame-perfect combat system running at a locked <span className="text-amber-400 font-semibold">60 FPS</span> using
        delta-time synchronization to ensure consistent gameplay regardless of hardware.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { title: "Movement", items: ["WASD 8-direction movement", "Delta-time frame sync", "Collision detection"] },
          { title: "Attacks", items: ["Sword combo system", "Damage feedback & screen effects", "Combat animations"] },
          { title: "Q — Dodge Roll", items: ["Fast movement ability", "Invulnerability frames", "Custom VFX"] },
          { title: "1 — Shadow Clone", items: ["Summons clone allies", "Clones auto-attack enemies"] },
          { title: "3 — Flash Triangle", items: ["High-speed triangular teleport", "Area damage & knockback", "Flash animation effects"] },
        ].map((block) => (
          <div key={block.title} className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
            <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">{block.title}</h4>
            <ul className="space-y-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),
  ai: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        Each monster is powered by a <span className="text-amber-400 font-semibold">Finite State Machine (FSM)</span> with
        unique behaviors, attack patterns, and loot tables.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { name: "🟢 Slime", desc: "Fast swarm behavior · Beginner enemy · Drops materials & coins" },
          { name: "🔴 Blood Monster", desc: "Aggressive melee attacker with close-range burst damage" },
          { name: "🔥 Infernal Demon", desc: "Ranged fire attacks — maintains distance from player" },
          { name: "💀 Skeleton", desc: "Sword combat with patrol and chase states" },
          { name: "🏹 Skeleton Archer", desc: "Long-range attacks with line-of-sight detection" },
          { name: "🐗 Goblin Beast", desc: "Fast charging enemy with ram attacks" },
          { name: "🐴 Goblin Rider", desc: "Mounted enemy with enhanced speed and collision" },
          { name: "🔮 Necromancer", desc: "Magic projectile attacks and AoE spells" },
          { name: "👑 Skeleton King", desc: "BOSS · Multi-stage attack patterns · Special abilities" },
        ].map((monster) => (
          <div key={monster.name} className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
            <h4 className="text-sm font-semibold text-white mb-1">{monster.name}</h4>
            <p className="text-xs text-slate-400">{monster.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  npc: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        A living village system with autonomous NPCs that have their own behavioral states and ally combat support.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">NPC States</h4>
          <ul className="space-y-1">
            {["Wander", "Chat", "Follow", "Fight back", "Return home", "Rest"].map((state) => (
              <li key={state} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {state}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Village Defense</h4>
          <ul className="space-y-1">
            {["Warrior guardians", "Outpost protection", "Ally combat support", "NPC villager behaviors", "Dynamic village events"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ),
  rpg: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        A deep RPG progression loop with character stats, a full inventory system, equipment rarity, and persistent save data.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Character Stats</h4>
          <ul className="space-y-1">
            {["HP & Mana", "Attack Power", "Defense", "Critical Chance", "Movement Speed", "Experience & Level"].map((stat) => (
              <li key={stat} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Equipment Slots</h4>
          <ul className="space-y-1">
            {["Weapons", "Armor", "Helmets", "Gloves & Boots", "Shields", "Rings & Amulets"].map((slot) => (
              <li key={slot} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {slot}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3 sm:col-span-2">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Inventory & Persistence</h4>
          <ul className="grid grid-cols-2 gap-1">
            {["Item management", "Equipment slots", "Item sorting", "Rarity system", "Browser localStorage", "Supabase database"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ),
  audio: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        Spatial audio system built on the <span className="text-amber-400 font-semibold">Web Audio API</span> with dynamic
        volume based on distance, stereo positioning, and adaptive music transitions.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Audio Systems</h4>
          <ul className="space-y-1">
            {["Spatial sound engine", "Dynamic volume by distance", "Stereo positioning", "Background music", "Combat music transition", "Sound effects"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
          <h4 className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Visual Systems</h4>
          <ul className="space-y-1">
            {["Custom 2D Canvas renderer", "Pixel-art sprite engine", "Minimap radar", "Screen effects & VFX", "CSS combat animations"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-slate-800/60 border border-amber-500/20 p-3 sm:col-span-2">
          <h4 className="text-xs font-bold text-amber-400 mb-1 uppercase tracking-wider">Volume Formula</h4>
          <code className="text-xs text-amber-300 font-mono">
            Volume = max(0, 1 − distance / hearingRadius)²
          </code>
        </div>
      </div>
    </div>
  ),
  roadmap: (
    <div className="space-y-4">
      <p className="text-slate-300 text-sm leading-relaxed">
        Planned features for the remaining <span className="text-amber-400 font-semibold">50% of development</span>:
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          {
            title: "🗺️ World & Content",
            items: ["Complete dungeon levels", "Expanded world map", "More boss encounters", "More quests & storyline"],
          },
          {
            title: "⚔️ Combat & Progression",
            items: ["More weapons & armor", "Crafting system", "Pet companion system", "Extended skill tree"],
          },
          {
            title: "👥 Social & Multiplayer",
            items: ["Multiplayer features", "More NPC interactions", "Guild / party system"],
          },
          {
            title: "🎨 Polish & Performance",
            items: ["Additional pixel-art assets", "Sound design pass", "Performance optimization", "Mobile support"],
          },
        ].map((section) => (
          <div key={section.title} className="rounded-lg bg-slate-800/60 border border-white/5 p-3">
            <h4 className="text-sm font-semibold text-white mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-slate-500 mt-0.5">◦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),
};

export function DungeonLegendsModal({ onClose }: DungeonLegendsModalProps) {
  const [activeTab, setActiveTab] = useState("combat");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Dungeon Legends Showcase"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Dungeon Legends showcase"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-red-500/80"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                  </span>
                  🚧 In Development · 50% Complete
                </span>
                <span className="rounded-full bg-slate-700/60 border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                  Game Development · Full Stack Web App
                </span>
              </div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sword className="h-5 w-5 text-amber-400 shrink-0" />
                Dungeon Legends: 2D Pixel RPG
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Solo Game Developer</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Video Player */}
          <div>
            <div ref={videoContainerRef} className="relative rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl">
              <video
                ref={videoRef}
                src="/dungeon.mp4"
                className="w-full aspect-video object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Video overlay controls */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div />
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition hover:bg-amber-500"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 fill-white" />
                    ) : (
                      <Play className="h-4 w-4 fill-white ml-0.5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition hover:bg-amber-500"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <div className="flex-1" />
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition hover:bg-amber-500"
                  >
                    <Maximize className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Initial play state overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/90 shadow-2xl shadow-amber-500/40 ring-4 ring-amber-400/30 transition hover:scale-110">
                      <Play className="h-7 w-7 text-slate-950 fill-slate-950 ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-400 text-center italic">
              Gameplay prototype showcasing the current development progress of Dungeon Legends, including combat systems, enemy AI, RPG progression, and pixel-art world design.
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed">
            A real-time 2D pixel-art Action-RPG web application built with <span className="text-amber-400 font-medium">Next.js 16</span>, <span className="text-amber-400 font-medium">React 19</span>, <span className="text-amber-400 font-medium">TypeScript</span>, and the <span className="text-amber-400 font-medium">HTML5 Canvas API</span>. Players explore monster-infested dungeons, fight enemies in real time, defend villages with NPC allies, unlock powerful skills, and collect loot to upgrade their character.
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.label}
                  className={`rounded-full px-3 py-1 text-xs font-medium border border-white/10 ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Tabs */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Systems & Features</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-1 mb-4 min-w-max">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-amber-500/20 border border-amber-500/40 text-amber-400"
                        : "bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-700/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/40 border border-white/5 p-4">
              {TAB_CONTENT[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

