import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tyroo",
    description: "Landing page for Tyroo"
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <link
                    href='https://fonts.cdnfonts.com/css/avenir'
                    rel='stylesheet'
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
