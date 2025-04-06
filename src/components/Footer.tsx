import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Softacc</h3>
            <p className="mb-4 text-muted-foreground">
              Wir bieten innovative IT- und AI-Lösungen für moderne Unternehmen.
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Softacc. Alle Rechte vorbehalten.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">Softacc</p>
              <p className="mb-2">Fabrikstrasse 4</p>
              <p className="mb-2">8867 Niederurnen</p>
              <p className="mb-2">Schweiz</p>
              <p className="mb-2">
                <a href="mailto:info@softacc.ch" className="hover:text-primary transition-colors">
                  info@softacc.ch
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/leistungen" className="text-muted-foreground hover:text-primary transition-colors">
                Leistungen
              </Link>
              <Link href="/projekte" className="text-muted-foreground hover:text-primary transition-colors">
                Projekte
              </Link>
              <Link href="/ueber-uns" className="text-muted-foreground hover:text-primary transition-colors">
                Über uns
              </Link>
              <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 