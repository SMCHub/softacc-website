import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Seite nicht gefunden</h2>
        <p className="text-xl text-gray-600 mb-8">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
} 