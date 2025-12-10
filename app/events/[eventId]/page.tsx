import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";

interface EventPageProps {
  params: { eventId: string };
}

export default function EventDetail({ params }: EventPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <p className="text-sm text-muted-foreground">Evento #{params.eventId}</p>
        <h1 className="text-3xl font-semibold">Lanzamiento fintech</h1>
        <p className="text-muted-foreground max-w-3xl">
          Evento corporativo con invitados VIP. Se requieren bartenders, DJs y equipo de producción.
        </p>
        <div className="flex gap-4 items-center">
          <div>
            <p className="text-sm text-muted-foreground">Fecha</p>
            <p className="font-semibold">12 ago 2024</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Presupuesto</p>
            <p className="font-semibold">$8,500</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Personal</p>
            <p className="font-semibold">6</p>
          </div>
          <Button>Enviar hire</Button>
        </div>
      </div>
    </div>
  );
}
