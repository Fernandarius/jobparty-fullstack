"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/events", label: "Eventos" },
  { href: "/workers", label: "Talentos" },
  { href: "/dashboard/host/events", label: "Host" },
  { href: "/dashboard/worker/profile", label: "Worker" },
];

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-border bg-background/70"
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-lg">
          JobParty
        </Link>
        <nav className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${pathname.startsWith(link.href) ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ModeToggle />
          {session ? (
            <Button variant="secondary" onClick={() => signOut()}>
              Salir
            </Button>
          ) : (
            <Button asChild>
              <Link href="/auth/login">Ingresar</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
