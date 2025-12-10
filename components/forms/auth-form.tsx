"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema, loginSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type RegisterFields = z.infer<typeof registerSchema>;
type LoginFields = z.infer<typeof loginSchema>;

export function RegisterForm({ role }: { role: "host" | "worker" }) {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role,
      skills: [],
      images: [],
    },
  });

  const onSubmit = async (values: RegisterFields) => {
    setMessage(null);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Error registrando usuario");
      return;
    }
    setMessage("Cuenta creada. Ahora puedes iniciar sesión.");
    form.reset({ role });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Nombre</Label>
          <Input {...form.register("name")} />
          <p className="text-xs text-destructive">{form.formState.errors.name?.message}</p>
        </div>
        <div>
          <Label>Apellido</Label>
          <Input {...form.register("lastName")} />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" {...form.register("email")} />
        </div>
        <div>
          <Label>Teléfono</Label>
          <Input {...form.register("phone")} />
        </div>
        <div>
          <Label>Contraseña</Label>
          <Input type="password" {...form.register("password")} />
        </div>
      </div>
      {role === "worker" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Edad</Label>
            <Input type="number" {...form.register("age", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Experiencia (años)</Label>
            <Input type="number" {...form.register("experience", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Habilidades (separadas por coma)</Label>
            <Input
              {...form.register("skills", {
                setValueAs: (v) =>
                  typeof v === "string"
                    ? v
                        .split(",")
                        .map((s: string) => s.trim())
                        .filter(Boolean)
                    : [],
              })}
            />
          </div>
          <div>
            <Label>Tarifa por hora</Label>
            <Input type="number" step="0.1" {...form.register("pricePerHour", { valueAsNumber: true })} />
          </div>
          <div className="md:col-span-2">
            <Label>Bio</Label>
            <Input {...form.register("bio")} />
          </div>
        </div>
      )}
      <input type="hidden" value={role} {...form.register("role")} />
      <Button type="submit" className="w-full">
        Crear cuenta {role === "host" ? "host" : "worker"}
      </Button>
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}

export function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<LoginFields>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginFields) => {
    setMessage(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Credenciales inválidas");
      return;
    }
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" {...form.register("email")} />
      </div>
      <div className="space-y-2">
        <Label>Contraseña</Label>
        <Input type="password" {...form.register("password")} />
      </div>
      <Button type="submit" className="w-full">
        Ingresar
      </Button>
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}
