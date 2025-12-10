import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";

interface WorkerPageProps {
  params: { workerId: string };
}

export default function WorkerDetail({ params }: WorkerPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Perfil profesional #{params.workerId}</p>
          <h1 className="text-3xl font-semibold">Lucía Díaz</h1>
          <p className="text-muted-foreground max-w-3xl">
            Especialista en mixología y barras premium para experiencias corporativas y sociales.
            Experiencia en festivales, bodas y lanzamientos de marca.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {["Bartender", "Mixología", "Eventos corporativos", "Open bar"].map((skill) => (
            <span key={skill} className="bg-muted px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Tarifa por hora</p>
            <p className="text-2xl font-semibold">$25</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Experiencia</p>
            <p className="text-2xl font-semibold">4 años</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Rating</p>
            <p className="text-2xl font-semibold">4.9★</p>
          </div>
          <Button>Enviar solicitud</Button>
        </div>
      </div>
    </div>
  );
}
