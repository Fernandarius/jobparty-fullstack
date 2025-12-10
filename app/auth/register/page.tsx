import { Navbar } from "@/components/navigation/navbar";
import { RegisterForm } from "@/components/forms/auth-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 space-y-6">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-3xl font-semibold">Crea tu cuenta</h1>
          <p className="text-muted-foreground">
            Define si quieres contratar talento (host) o trabajar en eventos (worker).
          </p>
        </div>
        <Tabs defaultValue="host" className="max-w-3xl">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="host">Host</TabsTrigger>
            <TabsTrigger value="worker">Worker</TabsTrigger>
          </TabsList>
          <TabsContent value="host" className="p-6 border border-border rounded-2xl bg-card shadow-sm">
            <RegisterForm role="host" />
          </TabsContent>
          <TabsContent value="worker" className="p-6 border border-border rounded-2xl bg-card shadow-sm">
            <RegisterForm role="worker" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
