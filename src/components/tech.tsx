import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TechProps {
  tech: string;
  href: string;
  icon: JSX.Element;
}

export async function Tech({ tech, href, icon }: TechProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} target="_blank" className="hover:opacity-90">
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tech}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
