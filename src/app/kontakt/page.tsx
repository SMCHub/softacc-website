'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    nachricht: '',
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Hier würde normalerweise der API-Aufruf stattfinden
      // z.B. mit fetch oder axios
      // Für die Demo simulieren wir eine erfolgreiche Übermittlung
      
      // Simulierte Wartezeit
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        error: false
      }));
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        error: true
      }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl md:text-2xl">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Schreiben Sie uns</h2>
              
              {formState.submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Vielen Dank für Ihre Nachricht!</h3>
                  <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formState.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="unternehmen" className="block text-sm font-medium text-gray-700 mb-1">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="unternehmen"
                      name="unternehmen"
                      value={formState.unternehmen}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={5}
                      value={formState.nachricht}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  {formState.error && (
                    <div className="text-red-600">
                      Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.
                    </div>
                  )}
                  
                  <div>
                    <button type="submit" className="btn-primary">
                      Nachricht senden
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Softacc</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>
                      Fabrikstrasse 4<br />
                      8867 Niederurnen<br />
                      Schweiz
                    </span>
                  </p>
                  
                  <p className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>
                      <a href="mailto:info@softacc.ch" className="text-primary hover:underline">
                        info@softacc.ch
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Geschäftszeiten</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>08:30 - 17:30 Uhr</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Samstag - Sonntag:</span>
                    <span>Geschlossen</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 