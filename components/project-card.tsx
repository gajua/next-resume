"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  index: number
  link: string
}

export default function ProjectCard({ title, description, tags, image, index, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-3xl backdrop-blur-md bg-background/50 border border-border/50 p-1 max-w-96 h-[500px] "
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      <div className="rounded-[22px] overflow-hidden">
        <div className="overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="p-6">
          <h3 id={`project-title-${index}`} className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
          <Button onClick={() => window.open(link, "_blank")} variant="ghost" className="group/btn">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

