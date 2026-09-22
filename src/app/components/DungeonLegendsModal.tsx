import { useRef, useState, useEffect } from "react";
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
  Minimize,
  Github,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Flame,
  Crosshair,
  Award,
} from "lucide-react";
import { Button } from "./ui/button";

interface DungeonLegendsModalProps {
  onClose: () => void;
}

const TECH_STACK = [
  { label: "Next.js 16", color: "bg-slate-700/80 text-white border-slate-600" },
  { label: "React 19", color: "bg-blue-900/60 text-blue-200 border-blue-700/40" },
  { label: "TypeScript", color: "bg-blue-800/60 text-blue-300 border-blue-600/40" },
  { label: "HTML5 Canvas API", color: "bg-amber-900/60 text-amber-200 border-amber-700/40" },
  { label: "Web Audio API", color: "bg-purple-900/60 text-purple-200 border-purple-700/40" },
  { label: "Supabase", color: "bg-emerald-900/60 text-emerald-200 border-emerald-700/40" },
  { label: "PostgreSQL", color: "bg-sky-900/60 text-sky-200 border-sky-700/40" },
  { label: "Tailwind CSS", color: "bg-teal-900/60 text-teal-200 border-teal-700/40" },
];

const TABS = [
  { id: "combat", label: "⚔️ Combat Mechanics", icon: Sword },
  { id: "ai", label: "🧠 Monster AI (9 Types)", icon: Zap },
  { id: "npc", label: "🏘️ NPC & Village", icon: Users },
  { id: "rpg", label: "📊 RPG Progression", icon: Shield },
  { id: "audio", label: "🎵 Audio & Graphics", icon: Music },
  { id: "roadmap", label: "🗺️ 75% Progress & Roadmap", icon: Map },
];

const TAB_CONTENT: Record<string, React.ReactNode> = {
  combat: (
    <div className="space-y-4">
      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
          Engineered from scratch using raw <span className="text-amber-400 font-semibold">HTML5 Canvas 2D Context</span> and <span className="text-amber-400 font-semibold">delta-time physics</span>. Renders at a locked 60 FPS with pixel-perfect hitboxes and responsive action-RPG mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            key: "WASD",
            title: "8-Directional Movement",
            desc: "Full omnidirectional movement with delta-time synchronization, fluid acceleration, and terrain collision detection.",
            tag: "Core Physics",
          },
          {
            key: "SPACE / LMB",
            title: "Sword Combo System",
            desc: "Multi-stage weapon slash combos with screen-shake feedback, dynamic knockback physics, and damage numbers.",
            tag: "Combat",
          },
          {
            key: "Q",
            title: "Dodge Roll",
            desc: "Tactical invulnerability frames (i-frames) allowing players to evade enemy charge attacks and projectile barrages.",
            tag: "Defense",
          },
          {
            key: "1",
            title: "Shadow Clone Technique",
            desc: "Summons autonomous shadow duplicates that identify nearby targets and mirror offensive attacks.",
            tag: "Special Skill",
          },
          {
            key: "3",
            title: "Flash Triangle Teleport",
            desc: "Instant high-velocity triangular warp sequence dealing high-voltage AoE damage along the perimeter.",
            tag: "Ultimate",
          },
          {
            key: "PASSIVE",
            title: "Hit Feedback & I-Frames",
            desc: "Visual flash shaders, particle sparks, camera impulse shakes, and momentary stagger states on critical impacts.",
            tag: "Feedback",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-slate-800/60 border border-white/5 p-3.5 hover:border-amber-500/30 transition-colors">
            <div className="flex items-center justify-between mb-1.5">
              <span className="inline-block px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {item.key}
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                {item.tag}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),

  ai: (
    <div className="space-y-4">
      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-start gap-3">
        <Flame className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
          Monsters operate on an autonomous <span className="text-purple-300 font-semibold">Finite State Machine (FSM)</span> architecture:
          <span className="text-slate-400 font-mono text-xs ml-1.5">[Idle → Patrol → Alert → Chase → Attack → Flee / Enrage]</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          {
            name: "Slime Swarm",
            emoji: "🟢",
            role: "Swarm Enemy",
            badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            desc: "Rapid erratic hops; groups together to encircle players. Drops crafting materials and coins.",
          },
          {
            name: "Blood Monster",
            emoji: "🔴",
            role: "Brute Melee",
            badge: "bg-red-500/20 text-red-400 border-red-500/30",
            desc: "Relentless aggressive pursuit with high close-quarters burst damage and stagger resistance.",
          },
          {
            name: "Infernal Demon",
            emoji: "🔥",
            role: "Ranged Caster",
            badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
            desc: "Maintains standoff distance; launches curved fireball projectiles that leave burning residual zones.",
          },
          {
            name: "Skeleton Warrior",
            emoji: "💀",
            role: "Tactical Melee",
            badge: "bg-slate-500/20 text-slate-300 border-slate-500/30",
            desc: "Sword-and-shield combatant that raises shields to block incoming front slashes.",
          },
          {
            name: "Skeleton Archer",
            emoji: "🏹",
            role: "Sniper",
            badge: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            desc: "Raycast line-of-sight detection with lead-prediction targeting and retreat evasions.",
          },
          {
            name: "Goblin Beast",
            emoji: "🐗",
            role: "Charger",
            badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            desc: "Winds up a high-speed ramming charge across the screen that knocks players backward.",
          },
          {
            name: "Goblin Rider",
            emoji: "🐴",
            role: "Flanker",
            badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
            desc: "Fast cavalry unit executing hit-and-run passes around the perimeter of combat.",
          },
          {
            name: "Necromancer",
            emoji: "🔮",
            role: "Support / Summoner",
            badge: "bg-violet-500/20 text-violet-400 border-violet-500/30",
            desc: "Channels dark ritual spells to summon skeleton minions and project homing curse orbs.",
          },
          {
            name: "Skeleton King",
            emoji: "👑",
            role: "World Boss",
            badge: "bg-pink-500/20 text-pink-400 border-pink-500/30",
            desc: "Multi-phase boss encounter with ground shockwaves, summon waves, and enraged phase transitions.",
          },
        ].map((monster) => (
          <div key={monster.name} className="rounded-xl bg-slate-800/60 border border-white/5 p-3 flex flex-col justify-between hover:border-purple-500/30 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl">{monster.emoji}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${monster.badge}`}>
                  {monster.role}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{monster.name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{monster.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  npc: (
    <div className="space-y-4">
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        Beyond dungeons, the world features a living village ecosystem where autonomous villagers and armed town guardians interact with the player, defend gates, and provide ongoing quests.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <Users className="h-4 w-4" />
            Autonomous NPC States
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {[
              { state: "Wandering & Day-Night Routine", desc: "NPCs follow schedules between homes, market stalls, and campfires." },
              { state: "Dynamic Dialogue & Quests", desc: "Contextual dialogue trees offering dungeon bounties and lore." },
              { state: "Ally Follow & Formation", desc: "Recruitable companion villagers that escort the player into combat." },
              { state: "Retreat & Self-Preservation", desc: "Unarmed villagers seek shelter inside buildings when monsters invade." },
            ].map((item) => (
              <li key={item.state} className="flex items-start gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white font-medium">{item.state}:</strong> {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Town Defense Systems
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {[
              { title: "Armed Outpost Sentries", desc: "Guards hold choke points and engage approaching monsters automatically." },
              { title: "Dynamic Siege Raids", desc: "Periodic monster hordes march from dungeons toward the village perimeter." },
              { title: "Shared Agro & AI Comms", desc: "Villagers alert nearby guards when threatened, triggering defensive rallies." },
              { title: "Village Restoration", desc: "Clearing dungeon boss encounters triggers village celebrations and trade buffs." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white font-medium">{item.title}:</strong> {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ),

  rpg: (
    <div className="space-y-4">
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        A complete RPG core featuring real-time stat calculation formulas, equipment paperdoll slots, randomized item rarity, and cloud persistence via Supabase PostgreSQL.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="h-4 w-4" />
            Character Attributes
          </h4>
          <div className="space-y-2">
            {[
              { name: "Hit Points (HP)", val: "100 / 100", bar: "w-full bg-red-500" },
              { name: "Mana (MP)", val: "60 / 60", bar: "w-3/4 bg-blue-500" },
              { name: "Attack Power", val: "45 (+12)", bar: "w-4/5 bg-amber-500" },
              { name: "Physical Defense", val: "28 (+8)", bar: "w-1/2 bg-emerald-500" },
              { name: "Critical Rate", val: "18.5%", bar: "w-1/3 bg-purple-500" },
              { name: "Movement Speed", val: "240 px/s", bar: "w-3/5 bg-sky-500" },
            ].map((stat) => (
              <div key={stat.name}>
                <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                  <span>{stat.name}</span>
                  <span className="font-mono font-semibold text-white">{stat.val}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${stat.bar}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            6 Equipment Slots
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {[
              { slot: "Main Hand", item: "Iron Greatsword (Rare)" },
              { slot: "Off Hand", item: "Knight's Heater Shield" },
              { slot: "Helmet", item: "Shadow Hood of Agility" },
              { slot: "Body Armor", item: "Reinforced Leather Tunic" },
              { slot: "Boots", item: "Windwalker Striders" },
              { slot: "Ring / Amulet", item: "Ruby Talisman of Power" },
            ].map((item) => (
              <li key={item.slot} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-900/60 border border-white/5">
                <span className="text-slate-400 font-medium text-[11px]">{item.slot}</span>
                <span className="text-amber-300 font-semibold text-[11px]">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="h-4 w-4" />
            Cloud & Storage
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Supabase Cloud Sync:</strong> Persistent character stats, inventory JSON, and unlocked checkpoints.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Instant Local Fallback:</strong> Seamless offline gaming with browser localStorage cache.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Tiered Rarity RNG:</strong> Common, Uncommon, Rare, Epic, and Legendary roll rates.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),

  audio: (
    <div className="space-y-4">
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
        Audio is calculated dynamically with the <span className="text-amber-400 font-semibold">Web Audio API</span>, featuring true distance-attenuated 2D spatial positioning, stereo panning, and layered combat sound effects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-2.5 uppercase tracking-wider flex items-center gap-2">
            <Music className="h-4 w-4" />
            Spatial Audio Pipeline
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">GainNode Distance Attenuation:</strong> Monster growls and sword swings soften as distance increases.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">StereoPannerNode:</strong> Sounds to the left or right of the screen dynamically pan across audio channels.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Adaptive Combat BGM:</strong> Smooth crossfade from peaceful ambient village music to high-tempo battle themes.
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-white/5 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-2.5 uppercase tracking-wider flex items-center gap-2">
            <Crosshair className="h-4 w-4" />
            2D Canvas Renderer Specs
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Sprite Sheet Slicing:</strong> High-performance texture atlas slicing with zero memory leaks.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Minimap Radar:</strong> Real-time Canvas overlay displaying enemy markers, village gates, and player position.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white">Pixel-Perfect Scaling:</strong> Crisp nearest-neighbor integer scaling preserving retro pixel aesthetic.
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-amber-500/20 p-3.5 sm:col-span-2">
          <h4 className="text-xs font-bold text-amber-400 mb-1 uppercase tracking-wider">Spatial Falloff Formula</h4>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <code className="text-xs text-amber-300 font-mono bg-slate-900/80 px-3 py-1.5 rounded-lg border border-amber-500/30">
              Volume = Math.max(0, 1 − distance / hearingRadius)²
            </code>
            <span className="text-[11px] text-slate-400">Quadratic falloff mimics natural acoustic decay</span>
          </div>
        </div>
      </div>
    </div>
  ),

  roadmap: (
    <div className="space-y-4">
      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
          <span className="text-emerald-400 font-bold">75% Core Development Completed:</span> Combat engine, 9 enemy FSM archetypes, character progression, inventory, Web Audio, and Supabase cloud persistence are fully implemented and playable in beta.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-800/60 border border-emerald-500/20 p-4">
          <h4 className="text-xs font-bold text-emerald-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Implemented Systems (75%)
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {[
              "Real-time 60 FPS HTML5 Canvas engine",
              "WASD 8-directional movement & dodge roll i-frames",
              "Special skills: Shadow Clone & Flash Triangle",
              "9 Monster AI archetypes with FSM behaviors",
              "Skeleton King multi-phase boss fight",
              "Autonomous village NPCs with day-night routines",
              "Dynamic Web Audio API spatial sound & music",
              "Character stats & equipment inventory system",
              "Supabase PostgreSQL cloud authentication & save data",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-amber-500/20 p-4">
          <h4 className="text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Final Milestone Roadmap (Remaining 25%)
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {[
              "Additional dungeon biome floor generations",
              "Weapon crafting & enchantment forge system",
              "Pet & summon companion leveling tree",
              "Multiplayer dungeon co-op via WebSockets",
              "Expanded quest dialogue storylines & cutscenes",
              "Custom mobile touch virtual d-pad controls",
              "Steam / PWA desktop packaging optimization",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="h-3.5 w-3.5 rounded-full border border-amber-400/80 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                </span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
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

  // Lock body scroll and handle Escape key to dismiss
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
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
      videoContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-3 sm:p-5 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Dungeon Legends Showcase"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-amber-500/20 shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
          {/* Top row: Badges on left, Action buttons + Close on right */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Playable Beta · 75% Complete
              </span>
              <span className="hidden sm:inline-flex rounded-full bg-slate-800/80 border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
                Full-Stack Web App
              </span>
              <span className="hidden md:inline-flex rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-400">
                HTML5 Canvas Engine
              </span>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <Button
                size="sm"
                className="hidden xs:inline-flex bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm shadow-amber-500/25 rounded-lg text-xs h-8 px-3"
                asChild
              >
                <a href="https://dungeon-legends-psi.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Play Live
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="hidden sm:inline-flex border-white/20 text-white hover:bg-white/10 rounded-lg text-xs h-8 px-3"
                asChild
              >
                <a href="https://github.com/jayjay1424/dungeon-legends" target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5 mr-1.5" />
                  GitHub
                </a>
              </Button>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="rounded-full bg-white/10 p-1.5 sm:p-2 text-white transition hover:bg-red-500/80 hover:scale-105 shrink-0"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Bottom row: Clean title with sword icon & clear subtitle */}
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-xl font-bold text-white flex items-center gap-2 leading-tight">
                <Sword className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
                <span>Dungeon Legends: 2D Pixel RPG</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Full-Stack Real-Time Canvas RPG · Procedural Combat · Supabase Cloud Save
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-6">
          {/* Video Showcase Player */}
          <div>
            <div
              ref={videoContainerRef}
              className="group relative rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl"
            >
              <video
                ref={videoRef}
                src="/dungeon.mp4"
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover cursor-pointer"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Center Play Button Overlay when Paused */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-slate-950/40 backdrop-blur-[1px] transition-all"
                  onClick={togglePlay}
                >
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-2xl shadow-amber-500/50 ring-4 ring-amber-400/30 transition-transform duration-200 hover:scale-110">
                      <Play className="h-6 sm:h-7 w-6 sm:w-7 fill-slate-950 ml-0.5" />
                    </div>
                    <span className="text-xs font-semibold text-white/95 bg-slate-900/80 px-3 py-1 rounded-full border border-white/15 shadow-sm">
                      Click to Play Gameplay Demo
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Control Bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition hover:bg-amber-500 hover:text-slate-950"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition hover:bg-amber-500 hover:text-slate-950"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <span className="text-[11px] font-medium text-white/80 hidden xs:inline ml-1">
                    {isPlaying ? "Playing 60 FPS Demo" : "Paused"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-amber-400/90 bg-slate-900/80 px-2 py-0.5 rounded border border-amber-500/30 hidden sm:inline">
                    1080p Gameplay Capture
                  </span>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Toggle fullscreen"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition hover:bg-amber-500 hover:text-slate-950"
                  >
                    {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-400 text-center italic">
              Actual gameplay footage captured from the live browser build, showcasing combat, AI behaviors, and RPG progression.
            </p>
          </div>

          {/* 4 Architecture Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { title: "Locked 60 FPS", desc: "HTML5 Canvas loop & delta-time physics", icon: Zap, color: "text-amber-400" },
              { title: "9 Monster AIs", desc: "Finite State Machine state trees", icon: Flame, color: "text-red-400" },
              { title: "Combat Combos", desc: "WASD, Dash i-frames & Ultimates", icon: Sword, color: "text-blue-400" },
              { title: "Supabase Cloud", desc: "User accounts, loot & cloud saves", icon: Shield, color: "text-emerald-400" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="p-3 rounded-xl bg-slate-800/50 border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                    <h4 className="text-xs font-bold text-white">{stat.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{stat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Dungeon Legends</strong> is a real-time 2D pixel-art Action-RPG web application engineered with <span className="text-amber-400 font-semibold">Next.js 16</span>, <span className="text-amber-400 font-semibold">React 19</span>, <span className="text-amber-400 font-semibold">TypeScript</span>, and the <span className="text-amber-400 font-semibold">HTML5 Canvas API</span>. Players battle through monster-filled dungeons, utilize frame-perfect combat combos, defend village settlements with allied NPCs, unlock abilities, and manage persistent inventories stored in <span className="text-emerald-400 font-semibold">Supabase PostgreSQL</span>.
          </p>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Core Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.label}
                  className={`rounded-full px-3 py-1 text-xs font-medium border ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Features Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Systems & Architecture</h3>
              <span className="text-[11px] text-slate-400">Select system to inspect:</span>
            </div>

            {/* Scrollable Tab Bar */}
            <div className="overflow-x-auto pb-1.5 scrollbar-thin">
              <div className="flex gap-1.5 min-w-max">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                        : "bg-slate-800/80 border border-white/5 text-slate-300 hover:text-white hover:bg-slate-700/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Tab Content Card */}
            <div className="rounded-xl bg-slate-800/40 border border-white/10 p-4 mt-2">
              {TAB_CONTENT[activeTab]}
            </div>
          </div>
        </div>

        {/* Sticky Footer with Quick Actions */}
        <div className="shrink-0 px-4 sm:px-6 py-3 border-t border-white/10 bg-slate-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Experience the 75% complete playable beta right in your web browser.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Button
              size="sm"
              className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm shadow-amber-500/25 rounded-lg text-xs h-9 px-4"
              asChild
            >
              <a href="https://dungeon-legends-psi.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1.5" />
                Play Beta Live
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-lg text-xs h-9 px-4"
              asChild
            >
              <a href="https://github.com/jayjay1424/dungeon-legends" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                GitHub Code
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="text-slate-400 hover:text-white rounded-lg text-xs h-9 px-3"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
