import { Navbar } from "@/components/navigation/navbar";
import { WorkerCard } from "@/components/cards/worker-card";

const mockWorkers = [
  {
    id: "1",
    name: "Lucía Díaz",
    skills: ["Bartender", "Mixología"],
    pricePerHour: 25,
    experience: 4,
    rating: 4.9,
  },
  {
    id: "2",
    name: "Marco Silva",
    skills: ["DJ", "Audio"],
    pricePerHour: 40,
    experience: 6,
    rating: 4.8,
  },
];

export default function WorkersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Talentos destacados</h1>
          <p className="text-muted-foreground">
            Filtra por habilidades, experiencia y disponibilidad. Próximamente: búsqueda en vivo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockWorkers.map((worker) => (
            <WorkerCard key={worker.id} {...worker} />
          ))}
        </div>
      </div>
    </div>
  );
}
