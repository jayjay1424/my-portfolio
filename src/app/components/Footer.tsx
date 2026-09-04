import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="font-heading font-bold text-lg">Jayrald.Dev</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-right flex items-center gap-1">
          © {new Date().getFullYear()} Jayrald Bonucan. Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> and React.
        </p>
      </div>
    </footer>
  );
}
