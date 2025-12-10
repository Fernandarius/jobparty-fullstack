import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";

export default function WorkerProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Tu perfil</h1>
            <p className="text-muted-foreground">Actualiza habilidades, disponibilidad y tarifas.</p>
          </div>
          <Button>Guardar</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Habilidades</p>
            <p className="font-semibold">Bartender, Mixología, Open bar</p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Tarifa por hora</p>
            <p className="font-semibold">$25</p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Disponibilidad</p>
            <p className="font-semibold">Activa</p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">Rating</p>
            <p className="font-semibold">4.9★</p>
          </div>
        </div>
      </div>
    </div>
  );
}
