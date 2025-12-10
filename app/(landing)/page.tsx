import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Cómo funciona",
    content:
      "Publica tus eventos, conecta con el mejor talento y gestiona cada contratación con flujos claros y seguros.",
  },
  {
    title: "Servicios",
    content:
      "Bartenders, mozos, DJs, fotógrafos, modelos, personal de apoyo y más. Una red cuidada con perfiles verificados.",
  },
  {
    title: "Por qué elegirnos",
    content:
      "Experiencia premium, pagos seguros, comunicación centralizada y dashboards diseñados para velocidad.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navbar />
      <main className="container py-16 space-y-20">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Contrata talento en minutos
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold">
              JobParty es la plataforma premium para personal de eventos.
            </h1>
            <p className="text-lg text-muted-foreground">
              Diseñada para hosts exigentes y workers profesionales. Flujos claros, pagos
              seguros, experiencias impecables.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/auth/register">Empieza ahora</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/workers">Ver talento</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-card rounded-3xl shadow-xl border border-border"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Dashboard en vivo</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-muted-foreground">Eventos activos</p>
                  <p className="text-2xl font-semibold">12</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-muted-foreground">Talentos disponibles</p>
                  <p className="text-2xl font-semibold">142</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-muted-foreground">Solicitudes</p>
                  <p className="text-2xl font-semibold">48</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-muted-foreground">Satisfacción</p>
                  <p className="text-2xl font-semibold">4.9★</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="grid gap-8 lg:grid-cols-3">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-card border border-border rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-muted-foreground">{section.content}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
