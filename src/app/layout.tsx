import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import PrimaryLoader from "./components/loader";

const Particle = dynamic(() => import("@/app/components/particles"), {
  loading: () => <PrimaryLoader />,
  ssr: false,
});

export const metadata: Metadata = {
  title: "Oonzoo Product Platform",
  description:
    "Take your Business Online Embrace the convenience of online shopping With Oonzoo, you can explore various sales, compare prices, and discover the best deals &#8211; all without stepping out of your home. Get the scoop on all your favorite shops and the cheapest goods, all with a single click. With Oonzoo, you don&#8217;t need to &hellip; main Read More &raquo;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Particle />
        {children}
        <script src="tsparticles.engine.min.js" async></script>
      </body>
    </html>
  );
}
