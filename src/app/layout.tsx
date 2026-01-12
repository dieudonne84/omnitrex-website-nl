import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omnitrex Nederland | Software & Diensten",
  description:
    "Nederlandse software oplossingen: De Vermogenskluis voor digitale estate planning en advies & consultancy voor op maat gemaakte software.",
  keywords: [
    "Omnitrex",
    "Nederland",
    "Vermogenskluis",
    "estate planning",
    "notaris software",
    "consultancy",
    "software ontwikkeling",
    "Nederlandse software",
  ],
  authors: [{ name: "Omnitrex" }],
  openGraph: {
    title: "Omnitrex Nederland | Software & Diensten",
    description:
      "Nederlandse software oplossingen: De Vermogenskluis en advies & consultancy.",
    url: "https://omnitrex.nl",
    siteName: "Omnitrex Nederland",
    locale: "nl_NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Omnitrex Nederland",
    url: "https://omnitrex.nl",
    description:
      "Nederlandse software oplossingen voor estate planning en consultancy.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@omnitrex.nl",
      contactType: "customer service",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Omnitrex",
      url: "https://omnitrex.eu",
    },
  };

  return (
    <html lang="nl" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {isComingSoon ? <ComingSoon /> : children}
      </body>
    </html>
  );
}
