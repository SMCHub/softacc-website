import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// API-Endpunkt zum Empfangen von Kontaktformular-Daten
export async function POST(req: NextRequest) {
  try {
    // Daten aus der Anfrage extrahieren
    const formData = await req.json();
    const { name, email, telefon, unternehmen, nachricht } = formData;

    // Überprüfen, ob die erforderlichen Felder vorhanden sind
    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // SMTP-Konfiguration prüfen
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP-Konfiguration fehlt in den Umgebungsvariablen');
      return NextResponse.json(
        { error: 'Server-Konfigurationsfehler. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      );
    }

    // Nodemailer-Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true für Port 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Transporter testen
    try {
      await transporter.verify();
      console.log('SMTP-Verbindung erfolgreich verifiziert');
    } catch (verifyError) {
      console.error('SMTP-Verbindungsfehler:', verifyError);
      return NextResponse.json(
        { error: 'E-Mail-Server nicht erreichbar. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      );
    }

    // E-Mail-Optionen definieren
    const mailOptions = {
      from: `"Softacc Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'info@softacc.ch', // Die Ziel-E-Mail-Adresse
      replyTo: email, // Antwort geht direkt an den Absender
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}
Telefon: ${telefon || 'Nicht angegeben'}
Unternehmen: ${unternehmen || 'Nicht angegeben'}

Nachricht:
${nachricht}
      `,
      html: `
<h2>Neue Kontaktanfrage über das Webformular</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>E-Mail:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
<p><strong>Unternehmen:</strong> ${unternehmen || 'Nicht angegeben'}</p>
<p><strong>Nachricht:</strong></p>
<p>${nachricht.replace(/\n/g, '<br>')}</p>
      `
    };

    // E-Mail senden
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('E-Mail erfolgreich gesendet:', info.messageId);
      
      // Erfolgreiche Antwort
      return NextResponse.json(
        { success: true, message: 'Nachricht erfolgreich gesendet' },
        { status: 200 }
      );
    } catch (sendError) {
      console.error('Fehler beim Senden der E-Mail:', sendError);
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Unerwarteter Fehler:', error);
    return NextResponse.json(
      { error: 'Es ist ein Server-Fehler aufgetreten' },
      { status: 500 }
    );
  }
} 