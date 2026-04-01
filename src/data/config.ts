const config = {
  title: "Khushi Gupta | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Khushi, a full-stack developer specializing in interactive web experiences and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Khushi, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Khushi Gupta",
    "portfolio",
    "full-stack developer",
    "web development",
    "interactive websites",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  author: "Khushi Gupta",
  email: "khushigupta7340@gmail.com",
  site: "https://khushigupta113.github.io",

  // for github stars button
  githubUsername: "KhushiGupta113",
  githubRepo: "Portfolio-main",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/khushigupta13/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/KhushiGupta113/",
  },
};
export { config };
