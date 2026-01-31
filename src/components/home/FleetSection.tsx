'use client';

import { motion } from 'framer-motion';
import { Users, Fuel, Briefcase, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fleet = [
  {
    name: { ar: 'مرسيدس S-Class', en: 'Mercedes S-Class' },
    type: { ar: 'سيدان فاخرة', en: 'Luxury Sedan' },
    passengers: 3,
    luggage: 3,
    features: ['WiFi', 'Water', 'Charger'],
  },
  {
    name: { ar: 'مرسيدس V-Class', en: 'Mercedes V-Class' },
    type: { ar: 'فان فاخر', en: 'Luxury Van' },
    passengers: 7,
    luggage: 6,
    features: ['WiFi', 'Water', 'Charger'],
  },
  {
    name: { ar: 'BMW 7 Series', en: 'BMW 7 Series' },
    type: { ar: 'سيدان تنفيذية', en: 'Executive Sedan' },
    passengers: 3,
    luggage: 3,
    features: ['WiFi', 'Water', 'Charger'],
  },
];

const FleetSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('fleet.title')}
          </h2>
          <div className="divider-luxury mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('fleet.subtitle')}
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car, index) => (
            <motion.div
              key={car.name.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-luxury overflow-hidden group h-full"
            >
              {/* Car Image Placeholder */}
              <div className="h-48 bg-gradient-navy flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gold font-serif text-2xl font-bold">{car.name[language]}</p>
                  <p className="text-white/60 text-sm mt-1">{car.type[language]}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center justify-around mb-6 py-4 border-y border-border">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">
                      {car.passengers} {language === 'ar' ? 'ركاب' : 'Passengers'}
                    </p>
                  </div>
                  <div className="text-center">
                    <Briefcase className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">
                      {car.luggage} {language === 'ar' ? 'حقائب' : 'Luggage'}
                    </p>
                  </div>
                  <div className="text-center">
                    <Wifi className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">WiFi</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
