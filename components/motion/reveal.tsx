"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const
const MAX_STAGGER_DELAY = 0.4

interface RevealProps {
  children: ReactNode
  index?: number
  className?: string
  y?: number
}

// Scroll-triggered entrance for section content and list/grid siblings.
// Stagger delay is capped so long lists don't drag out the reveal.
export function Reveal({ children, index = 0, className, y = 24 }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const delay = Math.min(index * 0.08, MAX_STAGGER_DELAY)

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.3 : 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
