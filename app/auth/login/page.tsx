import { Navbar } from "@/components/navigation/navbar";
import { LoginForm } from "@/components/forms/auth-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 max-w-xl space-y-6">
        <h1 className="text-3xl font-semibold">Inicia sesión</h1>
        <p className="text-muted-foreground">Accede a tu panel de host o worker.</p>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
