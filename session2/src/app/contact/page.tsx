import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <section className="space-y-10">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight ">Get In Touch</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Feel free to reach out if you have any questions or collaboration ideas.
                        I'm always open to discussing new projects and opportunities.
                    </p>
                </div>

                <Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 md:p-10">
                        <div className="grid gap-10">
                            {/* Contact Information */}
                            <div className="space-y-6">
                                <div className="border-b pb-2">
                                    <h3 className="text-2xl font-semibold">Contact Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-lg">Email</p>
                                            <a href="mailto:christofle.tjhai@binus.ac.id" className="text-primary hover:underline">
                                                christofle.tjhai@binus.ac.id
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-lg">Phone</p>
                                            <a href="tel:+6281234567890" className="text-primary hover:underline">
                                                +62 812 3456 7890
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="space-y-6">
                                <div className="border-b pb-2">
                                    <h3 className="text-2xl font-semibold">Social Media</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <Button variant="outline" asChild className="h-14 border-2 hover:bg-primary/5 transition-colors">
                                        <Link href="https://github.com/christolx/" rel="noreferrer noopener" target="_blank" className="gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                                <path d="M9 18c-4.51 2-5-2-7-2"/>
                                            </svg>
                                            <span className="font-medium">GitHub</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="pt-4 flex flex-col items-center">
                                <p className="text-muted-foreground text-center">
                                    Prefer direct communication? Send me an email and I'll get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
