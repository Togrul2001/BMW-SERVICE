import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  index: number;
}

export function ServiceCard({ icon: Icon, title, items, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="glass-card relative h-full p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300 flex flex-col items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <ul className="space-y-2 mt-2 w-full">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm group-hover:text-gray-300 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
