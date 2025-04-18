import Typography from "@/components/ui/typography";

export default function SiteFooter() {
    return (
        <footer className="border-t bg-muted text-muted-foreground">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center">


                {/* <Typography variant="p" className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-foreground">one</span>
                    <span className="text-muted-foreground">paper</span>. All rights reserved.
                </Typography> */}



                <Typography variant="p" className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-muted-foreground">onepaper</span>. All rights reserved.
                </Typography>


            </div>
        </footer>
    );
}
