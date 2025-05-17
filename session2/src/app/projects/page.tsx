import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col w-full py-12">
            <section className="space-y-8 w-full">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-center">Featured Work</h1>
                    <p className="text-muted-foreground text-center mt-4">
                        A collection of my recent projects and experiments
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Luxury Brand Website</h3>
                                <p className="text-muted-foreground">
                                    Christian Wijaya, a luxury brand website made with pure HTML&CSS&JS.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <Link href={"https://christianwijaya.vercel.app/"} rel="noreferrer noopener"
                                      target={"_blank"}>
                                    View Project
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Donation Center Website</h3>
                                <p className="text-muted-foreground">
                                    FoodFund, a full-stack donation center website made with ReactJS & Asp.NET Core.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <Link href={"https://foodfund-frontend.vercel.app/"} rel="noreferrer noopener"
                                      target={"_blank"}>
                                    View Project
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
