'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  Mail, 
  User, 
  Phone, 
  Building2, 
  MessageSquare, 
  MapPin, 
  Clock
} from 'lucide-react';

// Formular-Schema mit Zod für Validierung
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  telefon: z.string().optional(),
  unternehmen: z.string().optional(),
  nachricht: z.string().min(5, {
    message: "Die Nachricht muss mindestens 5 Zeichen lang sein.",
  }),
});

export default function KontaktPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telefon: "",
      unternehmen: "",
      nachricht: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Tatsächliche API-Anfrage an unseren Backend-Endpunkt
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error('Fehler beim Senden der Nachricht:', result.error);
        // Hier könnte man einen Error-State setzen und dem Benutzer anzeigen
        alert('Fehler beim Senden der Nachricht: ' + (result.error || 'Unbekannter Fehler'));
        return;
      }

      // Erfolgreiche Übermittlung
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Fehler beim Absenden des Formulars:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <>
      {/* Hero Section mit verbessertem monochromem Design */}
      <section className="relative bg-gradient-to-br from-gray-950 to-black text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Wir freuen uns auf Ihre Anfrage und stehen Ihnen für alle Fragen zur Verfügung.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium shadow-lg hover:bg-white/15 transition-all"
            >
              <Mail className="w-5 h-5" />
              <a href="mailto:info@softacc.ch">info@softacc.ch</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Kontaktformular und Informationen */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Kontaktformular */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Schreiben Sie uns</h2>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 p-8 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-4">
                      <Send className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Vielen Dank für Ihre Nachricht!</h3>
                    <p className="mb-6">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      Neue Nachricht senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="relative">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                          <User className="w-4 h-4" />
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...form.register("name")}
                          className={`w-full px-4 py-3 rounded-lg border ${form.formState.errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors`}
                          placeholder="Ihr Name"
                        />
                        {form.formState.errors.name && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4" />
                          E-Mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          className={`w-full px-4 py-3 rounded-lg border ${form.formState.errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors`}
                          placeholder="ihre.email@beispiel.com"
                        />
                        {form.formState.errors.email && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="telefon" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4" />
                          Telefon
                        </label>
                        <input
                          id="telefon"
                          type="tel"
                          {...form.register("telefon")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors"
                          placeholder="+41 XX XXX XX XX"
                        />
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="unternehmen" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4" />
                          Unternehmen
                        </label>
                        <input
                          id="unternehmen"
                          type="text"
                          {...form.register("unternehmen")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="nachricht" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4" />
                          Ihre Nachricht *
                        </label>
                        <textarea
                          id="nachricht"
                          rows={5}
                          {...form.register("nachricht")}
                          className={`w-full px-4 py-3 rounded-lg border ${form.formState.errors.nachricht ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors`}
                          placeholder="Wie können wir Ihnen helfen?"
                        />
                        {form.formState.errors.nachricht && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{form.formState.errors.nachricht.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {form.formState.isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      Nachricht senden
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Kontaktinformationen */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Kontaktinformationen</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Adresse</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Fabrikstrasse 4<br />
                        8867 Niederurnen<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">E-Mail</h3>
                      <a href="mailto:info@softacc.ch" className="text-gray-700 dark:text-gray-300 hover:text-black hover:dark:text-white transition-colors">
                        info@softacc.ch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Geschäftszeiten</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-700 dark:text-gray-300">Montag - Freitag:</span>
                        <span className="font-medium text-gray-900 dark:text-white">08:30 - 17:30 Uhr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Samstag - Sonntag:</span>
                        <span className="font-medium text-gray-900 dark:text-white">Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Integration */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 aspect-[4/3]"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.2257178055984!2d9.014861015622761!3d47.11294587915456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785345ff32b0bf5%3A0xe8e289906b094b51!2sFabrikstrasse%204%2C%208867%20Niederurnen!5e0!3m2!1sde!2sch!4v1650450012345!5m2!1sde!2sch" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%)' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 