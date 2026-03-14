import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    <div className="absolute inset-0 bg-muted/30 pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold gradient-text">Gopal Yadav</span>
          <p className="text-xs text-muted-foreground mt-1">Flutter Developer · Backend Developer</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/gopal5587" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/gopal-yadav-b93747332/" },
            { icon: Mail, href: "mailto:5587gopalyadav@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              whileHover={{ scale: 1.15, y: -2 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gopal Yadav. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Made with <Heart size={12} className="text-destructive" /> using React & Tailwind
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
