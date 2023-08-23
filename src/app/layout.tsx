import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { Analytics } from '@/components/analytics';
import { Search } from '@/components/search';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import Cursor from '@/components/ui/cursor';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const nunito = Nunito({ subsets: ['latin'] });

interface RootLayoutProps {
    children: React.ReactNode;
}

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: {
        default: "TSE",
        template: '%s | TSE',
    },
    description: 'Torrent Search Engine',
    metadataBase: new URL(siteURL),
    keywords: [
        "torrent",
        "search",
        "engine",
        "tse",
        "torrent search engine",
        "torrent search",
        "Nyaa",
        "Nyaa.si",
        "TypeScript",
        "Next.js",
    ],
    authors: [
        {
            name: "Sayed Ahmed",
            url: "https://iamahmed.me",
        },
    ],
    creator: "Sayed Ahmed",
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteURL,
        // site_name: 'TSE',
        title: 'TSE',
        description: 'Torrent Search Engine',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TSE',
        description: 'Torrent Search Engine',
        creator: 'Sayed Ahmed',
    },
};

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <html lang='en'>
            <head />
            <body
                className={cn(
                    'h-screen max-h-screen min-h-screen bg-background font-sans antialiased',
                    nunito.className,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {/* <Header /> */}
                    <Search />
                    {children}
                    {/* <Footer /> */}
                    <Cursor />
                    <Analytics />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}
