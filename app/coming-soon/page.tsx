"use client"

import Link from "next/link"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { ChevronLeft } from "lucide-react"

export default function ComingSoonPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden p-6">
            <AnimatedNoise opacity={0.05} />

            {/* Decorative Grid Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, oklch(0.2 0 0) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.2 0 0) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* Hackathon Badge */}
                <div className="mb-8 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent">
                        Fantastic-4 Hackathon • 13th Feb
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="font-[var(--font-bebas)] text-6xl md:text-9xl tracking-tight text-foreground mb-2 leading-none">
                    COMING <span className="text-accent">SOON</span>
                </h1>

                <p className="font-mono text-sm md:text-base text-muted-foreground max-w-md mb-12 leading-relaxed">
                    Our prototype is currently being polished for the hackathon submission. Check back soon for the live demo.
                </p>

                {/* Construction Tape Effect */}
                <div className="w-full h-12 bg-yellow-500/10 border-y border-yellow-500/20 mb-12 flex items-center justify-center overflow-hidden">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="font-mono text-xs text-yellow-500/60 uppercase tracking-widest">
                        // WORK IN PROGRESS //
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href="/"
                    className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                    <div className="p-2 rounded-full border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest">
                        <ScrambleTextOnHover text="Return to Home" as="span" />
                    </span>
                </Link>

            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-8 right-8 font-mono text-[10px] text-muted-foreground/30 uppercase tracking-widest">
                Build Iterate Ship
            </div>
        </main>
    )
}
