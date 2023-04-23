import "./globals.css";

export const metadata = {
  title: "Teo Narte",
  description:
    "Restoranti me ushqimin me tradicional dhe shijen me origjinale ne te gjithe plazhin e Zvernecit. Ndodhemi ne Vlore ne plazhin e Zvernecit",
  keywords:
    "Restorant, ushqim tradicional, vlore, zvernec, ushqim cilesor, teo narte, peshk zgare, pica furre druri, plazh familjar, pershtatshem per femije, plazh per te gjetur qetesine, Restaurant, food quality, traditional food, grilled fish, pizza, Albania, Vlore, zvernec, Teo Narte, beach for family, peace beach, magic beach, beach for childrens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
