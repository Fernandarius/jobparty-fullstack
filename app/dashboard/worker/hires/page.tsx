import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";

const requests = [
  { id: "1", host: "Agencia Nova", event: "Lanzamiento fintech", status: "pending" },
  { id: "2", host: "Boda en Viñedo", event: "Ceremonia", status: "accepted" },
];

export default function WorkerHiresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <h1 className="text-3xl font-semibold">Solicitudes recibidas</h1>
        <div className="grid gap-4">
          {requests.map((req) => (
            <div key={req.id} className="p-5 rounded-xl border border-border bg-card flex items-center justify-between">
              <div>
                <p className="font-semibold">{req.host}</p>
                <p className="text-sm text-muted-foreground">{req.event}</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs uppercase text-muted-foreground">{req.status}</span>
                <Button size="sm" variant="outline">
                  Aceptar
                </Button>
                <Button size="sm" variant="ghost">
                  Rechazar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
