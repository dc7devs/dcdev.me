'use client'
import { ReactNode } from "react";

import NextProgress from "next-progress";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";

import Header from "./header";
import Footer from "./footer";

export function LayoutDefault({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <Provider>
                <div className={""}>
                    <NextProgress color="rgb(139 92 246)" delay={500} />

                    <Header />

                    <main className={"h-auto px-4 pb-7 pt-20 sm:px-0 sm:pt-24 mt-5 sm:w-5/6 md:w-3/4 mx-auto"}>
                        {children}
                    </main>

                    <Footer />
                </div>
            </Provider>
        </ThemeProvider>
    )
}