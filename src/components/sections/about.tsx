import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="flex flex-col items-center justify-center min-h-[80vh] py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="The person behind the code."
          className="mb-12 md:mb-20 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "relative p-8 md:p-12 rounded-3xl border border-white/10 dark:border-white/5",
            "bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent",
            "backdrop-blur-xl shadow-2xl overflow-hidden"
          )}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-zinc-300 font-medium">
              I am a full-stack developer proficient in the MERN stack, with a solid foundation in Data Structures and Algorithms (DSA). 
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-zinc-400">
              I enjoy building scalable, user-friendly applications that solve real-world problems by applying efficient logic and optimized approaches. Beyond development, I am deeply interested in integrating AI into applications to create smarter and more impactful solutions, and I continuously strengthen my problem-solving skills through regular DSA practice.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-500 dark:text-zinc-400">
              I build more than just websites—I create experiences that seamlessly blend design, performance, and functionality. I actively explore new technologies, system design concepts, and modern frameworks to stay ahead in the evolving tech landscape. With a result-driven mindset and openness to new ideas, my goal is to craft solutions that not only work effectively but also leave a lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
