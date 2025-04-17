import Typography from "@/components/ui/typography";

export default function SiteFooter() {
    return (
        <footer className="border-t bg-muted text-muted-foreground">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center">
                <Typography variant="p" className="text-sm">
                    © {new Date().getFullYear()} xplaind. All rights reserved.
                </Typography>
            </div>
        </footer>
    );
}
