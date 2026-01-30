import Image from 'next/image';
import { MapPin, Clock, Star, Shield, Car, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Program {
    title: string;
    description: string;
    duration: string;
    image: string;
    highlights: string[];
}

interface TourProgramsServerProps {
    language: 'ar' | 'en';
}

export default function TourProgramsServer({ language }: TourProgramsServerProps) {
    const programs: Program[] = [
        {
            title: language === 'ar' ? 'برنامج "كلاسيكيات إيطاليا" (التاريخ والفن)' : '"Italy Classics" Program (History & Art)',
            description: language === 'ar'
                ? 'المسار: روما (3 ليالي) - فلورنسا (ليلتان) - فينيسيا (ليلتان). بيناسب محبي الآثار، التصوير، والقصص التاريخية. يفضل التنقل بالقطار السريع.'
                : 'Route: Rome (3 nights) - Florence (2 nights) - Venice (2 nights). Perfect for lovers of monuments, photography, and historical stories.',
            duration: language === 'ar' ? '7 ليالي' : '7 Nights',
            image: '/assets/cities/Italy classics.webp',
            highlights: language === 'ar'
                ? ['الكولوسيوم في روما', 'برج بيزا المائل (رحلة نهارية)', 'قنوات فينيسيا المائية', 'ساحة الدومو في فلورنسا']
                : ['Colosseum in Rome', 'Leaning Tower of Pisa (Day trip)', 'Venice Canals', 'Duomo Square in Florence'],
        },
        {
            title: language === 'ar' ? 'برنامج شمال إيطاليا والبحيرات (الطبيعة والاسترخاء)' : 'North Italy & Lakes Program (Nature & Relaxation)',
            description: language === 'ar'
                ? 'المسار: ميلانو "نقطة الانطلاق" - بحيرة كومو - بحيرة جاردا - فيرونا. يناسب العائلات، العرسان، ومحبي الهدوء. التنقل بالسائق الخاص هو الأفضل.'
                : 'Route: Milan (Starting point) - Lake Como - Lake Garda - Verona. Suitable for families, couples, and peace seekers. Private driver is best.',
            duration: language === 'ar' ? '7-10 أيام' : '7-10 Days',
            image: '/assets/cities/Northern Italy and the lakes.jpg',
            highlights: language === 'ar'
                ? ['ساحة الدومو في ميلانو', 'قرية بيلاجيو في كومو', 'مدينة ألعاب جاردا لاند', 'بيت جوليت في فيرونا']
                : ['Duomo Square in Milan', 'Bellagio Village in Como', 'Gardaland Theme Park', 'Juliet\'s House in Verona'],
        },
        {
            title: language === 'ar' ? 'برنامج "الألب والدولوميت" (عشاق الأجواء الجبلية)' : '"Alps & Dolomites" Program (Mountain Lovers)',
            description: language === 'ar'
                ? 'المسار: فينيسيا - كورتينا دامبيزو (جبال الدولوميت) - بحيرة برايس الفيروزية. يناسب محبي الهايكنج، التزلج، والباحثين عن الأجواء الباردة.'
                : 'Route: Venice - Cortina d\'Ampezzo (Dolomites) - Lake Braies. Suits hiking, skiing enthusiasts, and those looking for cool weather.',
            duration: language === 'ar' ? '5-7 أيام' : '5-7 Days',
            image: '/assets/cities/alps.jpg',
            highlights: language === 'ar'
                ? ['بحيرة برايس الفيروزية', 'بحيرة كاريزا الملونة', 'قمم سيسيليا الصخرية', 'طرق جبلية بانورامية']
                : ['Lake Braies', 'Lake Carezza', 'Seceda Peaks', 'Panoramic Mountain Roads'],
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/cities/Milan/milan-1.jpg"
                            alt="Tour Programs Italy"
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/90" />
                </div>

                <div className="relative z-10 container-luxury text-center py-24">
                    <div>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold/30 to-gold/20 border border-gold/40 backdrop-blur-sm mb-8 shadow-lg">
                            <MapPin className="w-5 h-5 text-gold" />
                            <span className="text-gold text-base font-semibold tracking-wide">
                                {language === 'ar' ? 'البرامج السياحية' : 'Tour Packages'}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'اكتشف جمال إيطاليا' : 'Discover the Beauty of Italy'}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            {language === 'ar'
                                ? 'استمتع بتجربة سياحية لا تُنسى في إيطاليا مع برامجنا المصممة بعناية لتناسب جميع الأذواق والاحتياجات.'
                                : 'Enjoy an unforgettable tourist experience in Italy with our carefully designed programs to suit all tastes and needs.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* 10-Day Itinerary Section */}
            <section className="py-20">
                <div className="container-luxury mb-16">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-4 border border-gold/20">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-bold">{language === 'ar' ? 'البرنامج المميز' : 'Featured Program'}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            {language === 'ar' ? 'جدول روائع الشمال والجمال السويسري (10 أيام)' : 'Northern Wonders & Swiss Beauty (10 Days)'}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {language === 'ar'
                                ? 'مخطط سياحي احترافي مصمم لتكون ميلانو هي قلب الرحلة (نقطة الانطلاق والعودة)، مما يوفر عناء نقل الحقائب ويجعل استخدام السائق الخاص فعالاً ومريحاً جداً.'
                                : 'A professional tourist plan designed with Milan as the heart of the journey (start and end point), saving the hassle of moving luggage and making use of a private driver efficient and comfortable.'}
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent transform -translate-x-1/2" />
                        <div className="space-y-16 lg:space-y-24">
                            {/* Phase 1 */}
                            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                                <div className="w-full lg:w-1/2 text-center lg:text-start mb-6 lg:mb-0 mt-6 lg:mt-0">
                                    <span className="text-6xl lg:text-8xl font-serif font-black text-gold/5 leading-none absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-top-12 select-none">01</span>
                                    <div className="relative z-10 lg:pl-8">
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الأولى' : 'Phase One'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'أناقة ميلانو وبحيراتها' : 'Milan Elegance & Lakes'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">1</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'الوصول وميلانو' : 'Arrival & Milan'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'الاستقرار في الفندق، جولة هادئة في ساحة "الدومو" ومنطقة نافلي.' : 'Settling in, tour of Duomo and Navigli area.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">2-3</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'لؤلؤة البحيرة ولوجانو' : 'Lake Pearl & Lugano'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'رحلات يومية لكومو وبيلاجيو، وزيارة لوجانو السويسرية.' : 'Day trips to Como, Bellagio, and Swiss Lugano.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
                                <div className="w-full lg:w-1/2 text-center lg:text-right mb-6 lg:mb-0 mt-6 lg:mt-0">
                                    <span className="text-6xl lg:text-8xl font-serif font-black text-gold/5 leading-none absolute -top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:-top-12 select-none">02</span>
                                    <div className="relative z-10 lg:pr-8">
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الثانية' : 'Phase Two'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'سحر الشرق (فينيسيا وفيرونا)' : 'East Magic (Venice & Verona)'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">4</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'فيرونا وجاردا' : 'Verona & Garda'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'زيارة بيت جوليت في فيرونا وقرية سيرميوني الساحرة.' : 'Visit Juliet\'s House and Sirmione village.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">5</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'فينيسيا (البندقية)' : 'Venice'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'رحلة نهارية لمدينة القنوات والجولات المائية.' : 'Day trip to the city of canals.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                                <div className="w-full lg:w-1/2 text-center lg:text-start mb-6 lg:mb-0 mt-6 lg:mt-0">
                                    <span className="text-6xl lg:text-8xl font-serif font-black text-gold/5 leading-none absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-top-12 select-none">03</span>
                                    <div className="relative z-10 lg:pl-8">
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الثالثة' : 'Phase Three'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'الانطلاق لفرنسا (الألب)' : 'Alps Adventure (France)'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">6</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'شامونيه' : 'Chamonix'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'الصعود لقمة "إيغوي دي ميدي" وأعلى قمم أوروبا.' : 'Ascend to Aiguille du Midi and top of Europe.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">7</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'ميجيف والريف' : 'Megeve & Countryside'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'زيارة قرية ميجيف الهادئة وعربات الخيول.' : 'Visit Megeve village and horse carriages.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 4 */}
                            <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
                                <div className="w-full lg:w-1/2 text-center lg:text-right mb-6 lg:mb-0 mt-6 lg:mt-0">
                                    <span className="text-6xl lg:text-8xl font-serif font-black text-gold/5 leading-none absolute -top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:-top-12 select-none">04</span>
                                    <div className="relative z-10 lg:pr-8">
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الرابعة' : 'Phase Four'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'قلب سويسرا (انترلاكن)' : 'Heart of Switzerland'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">8-9</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'انترلاكن والطبيعة' : 'Interlaken & Nature'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'شلالات لوتر برونين، بحيرة براينز، ومصانع الشوكولاتة.' : 'Lauterbrunnen falls, Lake Brienz, and chocolate factories.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 5 */}
                            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                                <div className="w-full lg:w-1/2 text-center lg:text-start mb-6 lg:mb-0 mt-6 lg:mt-0">
                                    <span className="text-6xl lg:text-8xl font-serif font-black text-gold/5 leading-none absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-top-12 select-none">05</span>
                                    <div className="relative z-10 lg:pl-8">
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الخامسة' : 'Phase Five'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'الختام الملكي' : 'Royal Finale'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">10</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'التسوق والمطار' : 'Shopping & Airport'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'إنهاء المشتريات في "سيرافالي" والتوجه للمطار للمغادرة.' : 'Final shopping at Serravalle and transfer to Malpensa.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Programs Grid */}
                <div className="container-luxury space-y-24 mt-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{language === 'ar' ? 'أكثر البرامج طلباً لعام 2026' : 'Most Requested Programs 2026'}</h2>
                        <div className="w-20 h-1 bg-gold mx-auto" />
                    </div>

                    {programs.map((program, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                            <div className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="relative object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    {program.duration}
                                </div>
                            </div>

                            <div className="flex-1 space-y-8 text-right rtl:text-right ltr:text-left">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{program.title}</h2>
                                    <div className="w-20 h-1 bg-gold rounded-full mb-6" />
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {program.highlights.map((highlight, hIndex) => (
                                        <div key={hIndex} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium text-foreground">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button asChild variant="luxury" size="lg" className="text-primary hover:shadow-gold rounded-full px-8 font-bold">
                                        <a href="https://wa.me/393888248473" target="_blank" rel="noopener noreferrer">
                                            <Phone className="w-5 h-5 ml-2" />
                                            {language === 'ar' ? 'احجز هذا البرنامج' : 'Book This Program'}
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 border-gold text-gold hover:bg-gold hover:text-primary">
                                        {language === 'ar' ? 'طلب تخصيص رحلة' : 'Request Custom Trip'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reasons Section */}
            <section className="py-20 bg-muted/30">
                <div className="container-luxury text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">{language === 'ar' ? 'لماذا برامجنا هي الأفضل؟' : 'Why Our Programs?'}</h2>
                    <div className="w-24 h-1 bg-gold mx-auto" />
                </div>

                <div className="container-luxury grid md:grid-cols-3 gap-8">
                    <div className="bg-card p-8 rounded-3xl border border-border text-center shadow-lg transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{language === 'ar' ? 'خصوصية تامة' : 'Full Privacy'}</h3>
                        <p className="text-muted-foreground text-sm">
                            {language === 'ar' ? 'سيارة خاصة وسائق عربي محترف طوال فترة الرحلة لضمان راحتك وأمانك.' : 'Private car and professional Arabic driver throughout the trip to ensure your comfort and safety.'}
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-3xl border border-border text-center shadow-lg transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{language === 'ar' ? 'مرونة كاملة' : 'Full Flexibility'}</h3>
                        <p className="text-muted-foreground text-sm">
                            {language === 'ar' ? 'يمكنك تعديل أوقات الانطلاق والوجهات حسب رغبتك؛ أنت من يدير وقتك.' : 'You can modify departure times and destinations as you wish; you manage your own time.'}
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-3xl border border-border text-center shadow-lg transition-all hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
                            <Car className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{language === 'ar' ? 'سيارات حديثة' : 'Modern Cars'}</h3>
                        <p className="text-muted-foreground text-sm">
                            {language === 'ar' ? 'أسطول من أحدث السيارات الفاخرة المريحة والمناسبة لجميع أحجام العائلات.' : 'A fleet of the latest luxury cars, comfortable and suitable for all family sizes.'}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
