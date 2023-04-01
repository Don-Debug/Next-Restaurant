import "./globals.css";

export const metadata = {
  title: "Teo Narte",
  description: "Created by Debug",
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
