import { Navbar } from "@/components/navigation/navbar";

const hires = [
  { id: "1", worker: "Lucía Díaz", status: "accepted", event: "Boda en Viñedo" },
  { id: "2", worker: "Marco Silva", status: "pending", event: "Lanzamiento fintech" },
];

export default function HostHiresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <h1 className="text-3xl font-semibold">Contrataciones</h1>
        <div className="grid gap-4">
          {hires.map((hire) => (
            <div key={hire.id} className="p-5 rounded-xl border border-border bg-card flex items-center justify-between">
              <div>
                <p className="font-semibold">{hire.worker}</p>
                <p className="text-sm text-muted-foreground">Evento: {hire.event}</p>
              </div>
              <span className="text-xs uppercase text-muted-foreground">{hire.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
