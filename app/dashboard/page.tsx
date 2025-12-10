import { Navbar } from "@/components/navigation/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground max-w-2xl">
          Accede a las herramientas de host o worker. La navegación completa está disponible según tu rol.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/dashboard/host/events">Panel host</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/dashboard/worker/profile">Panel worker</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
