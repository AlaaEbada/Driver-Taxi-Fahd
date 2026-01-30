'use client';

import { motion } from 'framer-motion';
import { Plane, Map, ShoppingBag, Mountain, Globe, Briefcase, Users, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Plane,
      title: language === 'ar' ? 'استقبال وتوديع المطارات' : 'VIP Airport Transfer',
      desc: language === 'ar' ? 'استقبال خاص من مطارات ميلانو (مالبينسا MXP) بلوحة تحمل اسمك. المساعدة في حمل الأمتعة وإنهاء إجراءات الفندق بسيارات حديثة ونظيفة.' : 'Private meet & greet with name sign at Malpensa (MXP), luggage assistance, and hotel check-in help in luxury cars.',
    },
    {
      icon: Map,
      title: language === 'ar' ? 'جولات سياحية بسيارات خاصة' : 'Private City Tours',
      desc: language === 'ar' ? 'جولات يومية إلى أجمل البحيرات (كومو، لوغانو، غاردا)، رحلات إلى جبال الألب السويسرية والفرنسية (شامونيه، إنترلاكن)، وزيارة المدن التاريخية (فينيسيا، فلورنسا).' : 'Daily trips to Lakes (Como, Lugano, Garda), Swiss/French Alps (Chamonix, Interlaken), and historic cities (Venice, Florence).',
    },
    {
      icon: ShoppingBag,
      title: language === 'ar' ? 'رحلات التسوق' : 'Shopping Express',
      desc: language === 'ar' ? 'التوصيل والانتظار في أشهر "الأوت ليت" مثل سيرافالي، فوكس تاون، وفيدنزا فيلاج، مع توضيح إجراءات استرداد الضرائب Tax Free.' : 'Transfers to major outlets (Serravalle, FoxTown, Fidenza) with waiting service and Tax Free explanation.',
    },
    {
      icon: Car,
      title: language === 'ar' ? 'سائقون عرب بخبرة واحترافية' : 'Pro Arabic Drivers',
      desc: language === 'ar' ? 'نخبة من السائقين الذين يتحدثون العربية والإيطالية. معرفة تامة بالطرق المختصرة، أماكن الجذب، والمطاعم الحلال. التزام تام بالمواعيد وخصوصية للعائلات.' : 'Elite Arabic & Italian speaking drivers knowing shortcuts, Halal food, and tourist spots with full privacy for families.',
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'خدمات رجال الأعمال والوفود' : 'Business & VIP',
      desc: language === 'ar' ? 'تأمين سيارات فاخرة للمؤتمرات والمعارض في ميلانو. توفر خدمة "السائق تحت الطلب" لعدة أيام بمرونة عالية.' : 'Luxury cars for conferences and exhibitions in Milan. Flexible "Driver on Demand" service for multiple days.',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'التوصيل بين المدن والدول' : 'Intercity & Europe Transfers',
      desc: language === 'ar' ? 'توصيل مريح وآمن إلى المدن الإيطالية الأخرى (روما، فينيسيا) أو الدول الأوروبية المجاورة مثل سويسرا، فرنسا، والنمسا.' : 'Comfortable transfers to other Italian cities (Rome, Venice) or neighboring countries like Switzerland, France, and Austria.',
    },
    {
      icon: Mountain,
      title: language === 'ar' ? 'جولات داخل ميلانو' : 'Milan City Tours',
      desc: language === 'ar' ? 'استكشاف معالم ميلانو الساحرة مثل الدومو، غاليريا فيتوريو إيمانويل، ودار الأوبرا مع سائق خبير يعرف أفضل أماكن التصوير.' : 'Explore Milan landmarks like Duomo and Galleria with an expert driver knowing best photo spots.',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'نقل العائلات والمجموعات' : 'Family & Group Transfers',
      desc: language === 'ar' ? 'أسطول من الفانات العائلية الحديثة (Mercedes V-Class) تتسع لجميع أفراد العائلة وحقائبهم براحة تامة وأمان.' : 'Modern family vans (Mercedes V-Class) accommodating the whole family and luggage with comfort and safety.',
    }
  ];

  return (
    <section className="py-16 bg-background relative">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6 border border-primary/10">
            <span className="text-xs font-bold uppercase tracking-wider">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'ar' ? 'خدماتنا المميزة' : 'Our Premium Services'}
          </h2>
          <div className="divider-luxury mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'استمتع برحلة مريحة وآمنة مع سائق عربي محترف يقدم لك جميع خدمات التنقل'
              : 'Enjoy a comfortable and safe journey with a professional Arabic driver providing all transfer services'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-luxury p-8 text-center group hover:border-gold/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary shadow-md">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

