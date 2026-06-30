"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

function handleNavClick() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-white dark:bg-black"
        >
          <div className="flex items-center justify-end p-6">
            <button
              onClick={onClose}
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { onClose(); handleNavClick(); }}
                className="text-2xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
