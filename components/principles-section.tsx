"use client"
/**
 * MVP (Minimum Viable Product) section — where you list at least 4 things your product
 * will do first. Each MVP can have a highlighted word (e.g. "LEARNING", "MENTORSHIP")
 * via titleParts with highlight: true. Edit the `mvps` array to match your project;
 * "align" alternates left/right for a zigzag layout.
 */
import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  /** Your MVP list. titleParts lets you mark which word gets the fancy highlight effect. */
  const mvps = [
    {
      number: "01",
      titleParts: [
        { text: "MVP 1: Quick Expense ", highlight: false },
        { text: "ENTRY", highlight: true },
      ],
      description: "Amount • Category (Food, Travel, Bills, Shopping, Misc) • Optional note • Date (defaults to today)",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "MVP 2: Expense ", highlight: false },
        { text: "HISTORY", highlight: true },
      ],
      description: "View expenses in chronological order • Filter by category • Filter by date range",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "MVP 3: Category ", highlight: false },
        { text: "BREAKDOWN", highlight: true },
      ],
      description: "Visual summary of spending per category • Simple chart or list-based visualization • Identify spending patterns",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "MVP 4: Daily & Weekly ", highlight: false },
        { text: "SUMMARY", highlight: true },
      ],
      description: "\"You spent ₹450 today\" • \"Top category this week: Food\" • \"Total weekly spend: ₹2,300\"",
      align: "right",
    },
    {
      number: "05",
      titleParts: [
        { text: "MVP 5 (Bonus): Budget ", highlight: false },
        { text: "INDICATOR", highlight: true },
      ],
      description: "Set a daily spending limit • UI warning when limit is crossed • Encourages mindful spending",
      align: "left",
    },
  ]

  /**
   * Scroll animations: header slides in, then each MVP block slides in from left or right
   * depending on its "align" value. principlesRef is the container so we can querySelectorAll
   * the articles inside and animate them one by one.
   */
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      /* Header slide in */
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      /* Each MVP block slides in from its aligned side (left or right from mvps[].align). */
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = mvps[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header — id="principles" is used by the side nav for "MVP". */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / MVP</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">MINIMUM VIABLE PRODUCT (MVP)</h2>
      </div>

      {/* Staggered MVP blocks — ref used by GSAP to find and animate each article. */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {mvps.map((mvp, index) => (
          <article
            key={index}
            className={`flex flex-col ${mvp.align === "right" ? "items-end text-right" : "items-start text-left"
              }`}
          >
            {/* Annotation label — e.g. "01 / MVP". */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {mvp.number} / {mvp.titleParts[0].text.split(" ")[0]}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none">
              {mvp.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description — bullet points or short line; change per MVP. */}
            <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground leading-relaxed">
              {mvp.description}
            </p>

            {/* Decorative line under each block. */}
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${mvp.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
