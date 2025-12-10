import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold">Crear evento</h1>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Título</Label>
              <Input name="title" />
            </div>
            <div>
              <Label>Fecha</Label>
              <Input type="date" name="date" />
            </div>
            <div className="md:col-span-2">
              <Label>Descripción</Label>
              <Input name="description" />
            </div>
            <div className="md:col-span-2">
              <Label>Dirección</Label>
              <Input name="address" />
            </div>
            <div>
              <Label>Tipo de evento</Label>
              <Input name="eventType" />
            </div>
            <div>
              <Label>Personal requerido</Label>
              <Input type="number" name="requiredStaff" />
            </div>
            <div>
              <Label>Presupuesto</Label>
              <Input type="number" name="budget" />
            </div>
          </div>
          <Button type="submit">Publicar evento</Button>
        </form>
      </div>
    </div>
  );
}
