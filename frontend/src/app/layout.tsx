import Header from "./layoutComponents/header/Header";
import "./index.css";

// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-body font-body">
        <Header />

        <main>
          {children} {/* Questo è il contenuto specifico di ogni pagina */}
        </main>

        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
