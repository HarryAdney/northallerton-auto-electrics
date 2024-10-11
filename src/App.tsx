import React from 'react';
import { Phone, Mail, MapPin, Car, Battery, Wrench, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Northallerton-Auto-Electrics</h1>
          <p className="text-xl">Your Trusted Auto Electrical Specialists</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard icon={<Car className="w-12 h-12" />} title="Diagnostics" description="Advanced vehicle diagnostics for all makes and models" />
            <ServiceCard icon={<Battery className="w-12 h-12" />} title="Battery Services" description="Battery testing, replacement, and charging system repairs" />
            <ServiceCard icon={<Wrench className="w-12 h-12" />} title="Electrical Repairs" description="Comprehensive auto electrical repairs and installations" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Over 20 years of experience in auto electrics</li>
            <li>State-of-the-art diagnostic equipment</li>
            <li>Skilled technicians for all vehicle types</li>
            <li>Competitive pricing and excellent customer service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ContactInfo icon={<MapPin />} text="Unit 3, County Business Park, Darlington Road, Northallerton, North Yorkshire, DL6 2NQ" />
            <ContactInfo icon={<Phone />} text="01609 777628" />
            <ContactInfo icon={<Mail />} text="autoelectricsdave@gmail.com" />
            <ContactInfo icon={<Clock />} text="Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM, Sun: Closed" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Northallerton-Auto-Electrics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-start mb-4">
      <div className="mr-4 mt-1">{icon}</div>
      <p>{text}</p>
    </div>
  );
}

export default App;