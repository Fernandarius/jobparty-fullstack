import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface WorkerCardProps {
  id: string;
  name: string;
  skills: string[];
  pricePerHour: number;
  experience: number;
  rating?: number;
}

export function WorkerCard({ id, name, skills, pricePerHour, experience, rating }: WorkerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-3"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-muted-foreground text-sm">{experience} años de experiencia</p>
        </div>
        <p className="text-sm text-muted-foreground">{rating ?? 5}★</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full bg-muted px-3 py-1">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-medium">${pricePerHour}/hora</p>
        <Button asChild size="sm">
          <Link href={`/workers/${id}`}>Contratar</Link>
        </Button>
      </div>
    </motion.div>
  );
}
