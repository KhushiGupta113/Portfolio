"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { links } from "@/components/header/config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: "transparent",
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className={cn(styles.bar, "flex items-center justify-between")}> 
        <div className={styles.brand}>
          <Link href="/" className="flex items-center justify-center">
            <Button variant={"link"} className="text-md">
              {config.author}
            </Button>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              {link.title}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <FunnyThemeToggle className="w-6 h-6" />
          {process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
