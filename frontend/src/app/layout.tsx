// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
            </ul>
          </nav>
        </header>

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
