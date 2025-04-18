"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";

export default function SiteHeader() {
    return (
        <header className="border-b bg-background shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">

                    <Typography
                        variant="h2"
                        className="text-2xl font-extrabold tracking-tight text-primary font-serif"
                    >
                        one<span className="text-muted-foreground">paper</span>
                    </Typography>

                </Link>
                <nav>
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        )}
                    >
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}
