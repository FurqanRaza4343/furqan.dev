import { Globe, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Social: [
    { href: "https://github.com/FurqanRaza4343", label: "GitHub", icon: Globe },
    { href: "https://linkedin.com/in/muhammad-furqan-raza", label: "LinkedIn", icon: ExternalLink },
    { href: "https://www.instagram.com/furqanraza4343/", label: "Instagram", icon: ExternalLink },
    { href: "mailto:furqanraza978@gmail.com", label: "Email", icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Furqan.dev
            </a>
            <p className="mt-4 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              AI Engineer building intelligent agents, LLM applications, and automation solutions for the future.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Pages
            </h3>
            <ul className="space-y-3">
              {footerLinks.Pages.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Social
            </h3>
            <ul className="space-y-3">
              {footerLinks.Social.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Furqan.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
