"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
    const pathname = usePathname();

    const routes = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center">
                <NavigationMenu className="mx-auto">
                    <NavigationMenuList>
                        {routes.map((route) => (
                            <NavigationMenuItem key={route.href}>
                                <Link
                                    href={route.href}
                                    className={cn(
                                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                                        pathname === route.href && "font-medium text-foreground"
                                    )}
                                >
                                    {route.label}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
