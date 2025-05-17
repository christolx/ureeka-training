import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-12">
            {/* Header */}
            <section className="space-y-4 w-full">
                <h1 className="text-6xl font-bold tracking-tighter text-center">
                    Christofle Tjhai
                </h1>
                <p className="text-xl text-muted-foreground text-center">
                    Computer Science Student @ Binus University
                </p>
            </section>

            {/* Brief Introduction */}
            <section className="space-y-6 w-full">
                <p className="text-lg text-center">
                    Striving to expand my knowledge on modern software engineering technologies.
                </p>

                <div className="flex justify-center gap-4 pt-2">
                    <Button asChild>
                        <Link href="/projects">View Projects</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact Me</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
