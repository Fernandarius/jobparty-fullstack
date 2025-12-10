import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  { id: "1", title: "Lanzamiento fintech", date: "2024-08-12", status: "borrador" },
  { id: "2", title: "Boda en Viñedo", date: "2024-09-01", status: "publicado" },
];

export default function HostEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Eventos</h1>
            <p className="text-muted-foreground">Crea, edita y monitorea tus eventos.</p>
          </div>
          <Button asChild>
            <Link href="/events/create">Crear evento</Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {events.map((event) => (
            <div key={event.id} className="p-5 rounded-xl border border-border bg-card flex items-center justify-between">
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xs uppercase text-muted-foreground">{event.status}</span>
                <Button variant="outline" asChild size="sm">
                  <Link href={`/events/${event.id}`}>Ver</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
