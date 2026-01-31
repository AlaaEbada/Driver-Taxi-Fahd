import Image from 'next/image';
import { MapPin, Clock, Star, Phone, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourProgramsServerProps {
    language: 'ar' | 'en';
}

export default function TourProgramsServer({ language }: TourProgramsServerProps) {
    const programs = [
        {
            title: language === 'ar' ? '1. برنامج "كلاسيكيات إيطاليا" التاريخ والفن' : '"Italy Classics" Program (History & Art)',
            description: '', // Handled by dangerouslySetInnerHTML below
            duration: language === 'ar' ? '7 ليالي' : '7 Nights',
            image: '/assets/cities/italy-classics.webp',
            highlights: language === 'ar'
                ? ['الكولوسيوم ف روما', 'برج بيزا المائل', 'قنوات فينيسيا', 'محبي الآثار والتصوير']
                : ['Colosseum in Rome', 'Leaning Tower of Pisa', 'Venice Canals', 'Archaeology & Photography Lovers'],
        },
        {
            title: language === 'ar' ? '2. برنامج شمال إيطاليا والبحيرات الطبيعة والاسترخاء' : 'North Italy & Lakes Program (Nature & Relaxation)',
            description: '', // Handled by dangerouslySetInnerHTML below
            duration: language === 'ar' ? '7-10 أيام' : '7-10 Days',
            image: '/assets/cities/northern-italy-and-the-lakes.jpg',
            highlights: language === 'ar'
                ? ['ساحة الدومو في ميلانو', 'قرية "بيلاجيو" في كومو', 'مدينة ألعاب جاردا لاند" للأطفال', 'بيت جوليت فيرونا']
                : ['Duomo Square in Milan', 'Bellagio Village in Como', 'Gardaland for Children', 'Juliet\'s House in Verona'],
        },
        {
            title: language === 'ar' ? '3 برنامج "الألب والدولوميت" العشاق الأجواء الجبلية' : '"Alps & Dolomites" Program (Mountain Lovers)',
            description: '', // Handled by dangerouslySetInnerHTML below
            duration: language === 'ar' ? '5-7 أيام' : '5-7 Days',
            image: '/assets/cities/alps.jpg',
            highlights: language === 'ar'
                ? ['بحيرة كاريزا الملونة', 'قمم سيسيليا الصخرية', 'السيارة الخاصة ضرورية', 'أبرد نقطة في إيطاليا']
                : ['Colorful Lake Carezza', 'Seceda Rock Peaks', 'Private Car is Essential', 'Coolest Point in Italy'],
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/cities/milan-city/milan-1.jpg"
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
                            {language === 'ar' ? 'البرامج السياحية' : 'Tour Packages'}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                            {language === 'ar'
                                ? 'مع ابو فهد إليك مخططاً سياحياً احترافياً لمدة 10 أيام، مصمماً ليكون ميلانو هي قلب الرحلة نقطة الانطلاق والعودة، مما يوفر عليك عناء نقل الحقائب المتكرر ويجعل استخدام السائق الخاص فعالاً ومريحاً جداً.'
                                : 'With Abu Fahd, here is a professional 10-day tourism plan, designed with Milan as the heart of the journey (start and end point), saving you the hassle of frequent luggage transfers and making the use of a private driver very efficient and comfortable.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* 10-Day Itinerary Section Header */}
            <section className="py-20">
                <div className="container-luxury mb-16">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            {language === 'ar' ? 'جدول روائع الشمال والجمال السويسري 10 أيام' : 'Northern Wonders & Swiss Beauty (10 Days)'}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {language === 'ar'
                                ? 'مع ابو فهد إليك مخططاً سياحياً احترافياً لمدة 10 أيام، مصمماً ليكون ميلانو هي قلب الرحلة نقطة الانطلاق والعودة، مما يوفر عليك عناء نقل الحقائب المتكرر ويجعل استخدام السائق الخاص فعالاً ومريحاً جداً.'
                                : 'With Abu Fahd, here is a professional 10-day tourism plan, designed with Milan as the heart of the journey (start and end point), saving you the hassle of frequent luggage transfers and making the use of a private driver very efficient and comfortable.'}
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
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الأولى: أناقة ميلانو وبحيراتها' : 'Phase One: Milan Elegance & Its Lakes'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'أناقة ميلانو وبحيراتها' : 'The elegance of Milan and its surrounding lakes'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">1</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 1 الوصول إلى ميلانو' : 'Day 1: Arrival in Milan'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'الاستقرار في الفندق، جولة هادئة في ساحة "الدومو وتناول العشاء في منطقة نافلي" المائية.' : 'Settling into the hotel, a quiet tour of "Duomo Square," and having dinner in the "Navigli" waterfront area.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">2</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 2 رحلة لؤلؤة البحيرة كومو وبيلاجيو.' : 'Day 2: Lake Pearl Trip - Como & Bellagio'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'مع السائق التوجه لكومو، ثم ركوب العبارة لبيلاجيو العودة الميلانو مساء.ً' : 'With the driver, head to Como, then take the ferry to Bellagio. Return to Milan in the evening.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">3</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم :3 رحلة عشرة عمر لوجانو السويسرية.' : 'Day 3: Swiss Lugano Trip'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'زيارة لوجانو والاستمتاع ببحيراتها وشوكولاته سويسرا، ثم العودة لميلانو ساعة واحدة بالسيارة.' : 'Visit Lugano, enjoy its lakes and Swiss chocolate, then return to Milan (only one hour by car).'}</p>
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
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الثانية سحر الشرق فينيسيا وفيرونا' : 'Phase Two: Oriental Charm - Venice & Verona'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'سحر الشرق فينيسيا وفيرونا' : 'The magic of the East - Venice and Verona'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">4</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 4 فيرونا وبحيرة جاردا.' : 'Day 4: Verona & Lake Garda'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'التوجّه شرقاً، زيارة بيت جوليت في فيرونا، ثم قضاء المساء في قرية سيرميوني على بحيرة جاردا. يمكن المبيت في فيرونا أو العودة لميلانو.' : 'Heading east, visit Juliet\'s House in Verona, then spend the evening in the village of Sirmione on Lake Garda. You can stay overnight in Verona or return to Milan.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">5</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 5 فينيسيا البندقية.' : 'Day 5: Venice (The City of Canals)'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'رحلة نهارية لمدينة القنوات. يتركك السائق عند مدخل المدينة Piazzale Roma لأن المدينة مائية، وينتظرك للعودة مساءً.' : 'A day trip to the city of canals. The driver will drop you off at the entrance of the city (Piazzale Roma) because it\'s a water-based city, and wait for you to return in the evening.'}</p>
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
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الثالثة الانطلاق لفرنسا شامونيه وميجيف' : 'Phase Three: Off to France - Chamonix & Megeve'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'الانطلاق لفرنسا شامونيه وميجيف' : 'Departure to France - Chamonix and Megeve'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">6</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 6 التوجه إلى شامونيه فرنسا.' : 'Day 6: Heading to Chamonix, France'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'الانطلاق صباحاً عبر نفق "المون بلان الصعود لقمة "إيغوي دي ميدي" ومشاهدة أعلى قمم أوروبا.' : 'Departure in the morning through the "Mont Blanc" tunnel, ascending to the "Aiguille du Midi" peak to witness the highest peaks in Europe.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">7</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 7 ميجيف والريف الفرنسي' : 'Day 7: Megeve & the French Countryside'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'زيارة قرية ميجيف الهادئة ركوب عربات الخيول، والاستمتاع بغداء فرنسي ريفي، ثم العودة لميلانو ليلا.ً' : 'Visit the quiet village of Megeve, ride horse carriages, and enjoy a rural French lunch, then return to Milan at night.'}</p>
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
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الرابعة قلب سويسرا انترلاكن' : 'Phase Four: Heart of Switzerland - Interlaken'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'قلب سويسرا انترلاكن' : 'The heart of Switzerland, Interlaken'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">8</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم :8 انترلاكن يوم الطبيعة.' : 'Day 8: Interlaken - Nature Day'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'رحلة طويلة قليلاً ساعتين ونصف لكنها تستحق زيارة شلالات لوتر برونين وبحيرة براينز.' : 'A slightly long journey (two and a half hours) but well worth it; visit the Lauterbrunnen falls and Lake Brienz.'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">9</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 9 قمة هاردير كولم أو التسوق السويسري.' : 'Day 9: Harder Kulm Peak or Swiss Shopping'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'استكمال جولة انترلاكن أو زيارة مصنع شوكولاتة في الطريق والعودة لميلانو.' : 'Complete the Interlaken tour or visit a chocolate factory on the way and return to Milan.'}</p>
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
                                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{language === 'ar' ? 'المرحلة الخامسة الختام الملكي' : 'Phase Five: Royal Finale'}</h3>
                                        <p className="text-lg lg:text-xl text-gold">{language === 'ar' ? 'الختام الملكي' : 'The Royal Finale'}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] border-4 border-background z-20 hidden lg:block" />
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-card border border-border rounded-[2rem] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold shrink-0">10</div>
                                                <div className="text-right rtl:text-right ltr:text-left">
                                                    <h4 className="font-bold text-foreground text-lg mb-1">{language === 'ar' ? 'اليوم 10 شوبنج سيرافالي والمطار' : 'Day 10: Serravalle Shopping & the Airport'}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ar' ? 'التوجه صباحاً الأوت لت سير افالي لإنهاء مشتريات الهدايا والماركات ومن ثم التوجه مباشرة للمطار مالبينسا للمغادرة.' : 'Head in the morning to the Serravalle Outlet to finish gift and brand shopping, then proceed directly to Malpensa Airport for departure.'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips for Success Section */}
            <section className="py-20 bg-primary/5">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">{language === 'ar' ? 'نصائح لإنجاح هذا البرنامج' : 'Tips for a Successful Program'}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: language === 'ar' ? 'السائق الخاص' : 'Private Driver',
                                    text: language === 'ar'
                                        ? 'السائق الخاص هذا البرنامج يعتمد بنسبة 80% على السائق. تأكد من الاتفاق معه على سعر شامل" لكل هذه الرحلات قبل البدء.'
                                        : 'The Private Driver: This program depends 80% on the driver. Make sure to agree with him on an "all-inclusive" price for all these trips before starting.'
                                },
                                {
                                    title: language === 'ar' ? 'تذاكر القمم' : 'Summit Tickets',
                                    text: language === 'ar'
                                        ? 'تذاكر القمم في عام 2026، أصبحت الحجوزات الرقمية ضرورية. احجز تذاكر قمة ميدي" في شامونيه و"الدومو" في ميلانو عبر الإنترنت قبل السفر.'
                                        : 'Summit Tickets: In 2026, digital bookings have become essential. Book tickets for the "Midi" peak in Chamonix and the "Duomo" in Milan online before traveling.'
                                },
                                {
                                    title: language === 'ar' ? 'المرونة' : 'Flexibility',
                                    text: language === 'ar'
                                        ? 'المرونة الجميل في وجود سائق هو "المرونة". إذا أعجبكم مكان يمكنكم البقاء فيه لفترة أطول، أو تغيير الوجهة إذا كان الطقس ماطرا.ً'
                                        : 'Flexibility: The beautiful thing about having a driver is "flexibility." If you like a place, you can stay longer, or change the destination if the weather is rainy.'
                                }
                            ].map((tip, i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border">
                                    <h4 className="font-bold text-gold mb-3">{tip.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-20 mt-24">
                <div className="container-luxury space-y-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            {language === 'ar' ? 'نبذة مختصرة عن أكثر 3 برامج سياحية شهرة وطلباً لعام 2026' : 'Overview of Top 3 Programs 2026'}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {language === 'ar'
                                ? 'البرامج السياحية في إيطاليا متنوعة جداً، وتعتمد بشكل أساسي على نقطة الدخول و الاهتمامات طبيعة، تاريخ، أو تسوق. إليك نبذة مختصرة عن أكثر 3 برامج سياحية شهرة وطلباً لعام 2026'
                                : 'Tourism programs in Italy are very diverse and primarily depend on your entry point and interests (nature, history, or shopping). Here is a brief overview of the top 3 most popular and requested tourism programs for 2026.'}
                        </p>
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
                                    <p
                                        className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
                                        dangerouslySetInnerHTML={{
                                            __html: language === 'ar' && index === 0 ? (
                                                `<strong>المسار</strong> روما 3 ليالي - فلورنسا ليلتان - فينيسيا ليلتان.
                                                <br />يناسب محبي الآثار التصوير، والقصص التاريخية.
                                                <br /><strong>أهم المعالم</strong> الكولوسيوم في روما، برج بيزا المائل رحلة نهارية من فلورنسا، وقنوات فينيسيا المائية.
                                                <br /><strong>التنقل</strong> يفضل في هذا البرنامج القطار السريع Italo أو Trenitalia لأنه يربط مراكز هذه المدن ببعضها في وقت قصير جداً.`
                                            ) : language === 'ar' && index === 1 ? (
                                                `<strong>المسار</strong> ميلانو نقطة الانطلاق - بحيرة كومو - بحيرة جاردا - فيرونا.
                                                <br />يناسب العائلات العرسان، ومحبي الهدوء والمناظر الطبيعية.
                                                <br /><strong>أهم المعالم</strong> ساحة الدومو في ميلانو، قرية "بيلاجيو" في كومو، ومدينة ألعاب جاردا لاند" للأطفال.
                                                <br /><strong>التنقل</strong> هنا السائق الخاص هو الخيار الأفضل بامتياز، لأن جمال هذا البرنامج يكمن في التنقل بين القرى الصغيرة التي لا تصلها القطارات بسهولة.`
                                            ) : language === 'ar' && index === 2 ? (
                                                `<strong>المسار:</strong> فينيسيا - كورتينا دامبيتزو (الدولوميت) - بحيرة برايس الفيروزية.
                                                <br />مناسب لعشاق الهايكنج والتزلج، والباحثين عن أبرد نقطة في إيطاليا صيفاً.
                                                <br /><strong>أهم المعالم</strong> بحيرة كاريزا الملونة وقمم سيسيليا الصخرية.
                                                <br /><strong>التنقل:</strong> السيارة الخاصة ضرورية جداً بسبب الطرق الجبلية المتعرجة التي تحتاج الخبرة في القيادة.`
                                            ) : language === 'en' && index === 0 ? (
                                                `<strong>Route:</strong> Rome (3 nights) - Florence (2 nights) - Venice (2 nights).
                                                <br />Suitable for photography lovers, archaeology enthusiasts, and those interested in historical stories.
                                                <br /><strong>Key Landmarks:</strong> The Colosseum in Rome, the Leaning Tower of Pisa (a day trip from Florence), and the Venice water canals.
                                                <br /><strong>Transportation:</strong> The high-speed train (Italo or Trenitalia) is preferred in this program as it connects the centers of these cities in a very short time.`
                                            ) : language === 'en' && index === 1 ? (
                                                `<strong>Route:</strong> Milan (Starting Point) - Lake Como - Lake Garda - Verona.
                                                <br />Suitable for families, honeymooners, and lovers of quiet and natural scenery.
                                                <br /><strong>Key Landmarks:</strong> Duomo Square in Milan, Bellagio Village in Como, and the Gardaland theme park for children.
                                                <br /><strong>Transportation:</strong> A private driver is by far the best choice here, as the beauty of this program lies in moving between small villages that are not easily reached by trains.`
                                            ) : language === 'en' && index === 2 ? (
                                                `<strong>Route:</strong> Venice - Cortina d'Ampezzo (Dolomites) - turquoise Lake Braies.
                                                <br />Suitable for hiking and skiing lovers, and those looking for the coolest spot in Italy during summer.
                                                <br /><strong>Key Landmarks:</strong> Colorful Lake Carezza and the rocky Seceda peaks.
                                                <br /><strong>Transportation:</strong> A private car is very essential due to the winding mountain roads that require driving experience.`
                                            ) : program.description
                                        }}
                                    />
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

            {/* Selection Advice */}
            <section className="py-20 bg-muted/30 mt-24">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">{language === 'ar' ? 'نصيحة عند اختيار برنامجك' : 'Advice for Choosing Your Program'}</h2>
                        <div className="grid gap-6">
                            {[
                                {
                                    title: language === 'ar' ? 'موسم السفر' : 'Travel Season',
                                    desc: language === 'ar'
                                        ? 'موسم السفر إذا كانت رحلتك في الصيف يونيو - أغسطس، اتجه شمالاً ميلانو والبحيرات هرباً من حرارة روما والجنوب.'
                                        : 'Travel Season: If your trip is in summer (June - August), head north to Milan and the lakes to escape the heat of Rome and the south.'
                                },
                                {
                                    title: language === 'ar' ? 'مدة الرحلة' : 'Trip Duration',
                                    desc: language === 'ar'
                                        ? 'مدة الرحلة: أقل مدة لتغطية برنامج واحد بشكل مريح هي 7 إلى 10 أيام.'
                                        : 'Trip Duration: The minimum duration to cover one program comfortably is 7 to 10 days.'
                                },
                                {
                                    title: language === 'ar' ? 'التسوق' : 'Shopping',
                                    desc: language === 'ar'
                                        ? 'التسوق دائماً اجعل ميلانو هي المحطة الأخيرة في أي برنامج لتتمكن من التسوق في سيرافالي" وشحن الحقائب مباشرة للمطار.'
                                        : 'Shopping: Always make Milan the last stop in any program to be able to shop at "Serravalle" and ship bags directly to the airport.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                                        <Star className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Design Section */}
            <section className="py-20 relative overflow-hidden bg-primary mt-24">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                </div>
                <div className="container-luxury relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{language === 'ar' ? 'كيف أصمم لك برنامجاً خاصاً؟' : 'How Do I Design a Custom Program for You?'}</h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {language === 'ar'
                            ? 'بما أنك تبحث عن سائق عربي وتستكشف المناطق، يمكنني صياغة جدول يومي دقيق لك إذا أخبرتني بـ:'
                            : 'I can formulate a precise daily schedule if you tell me:'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">{language === 'ar' ? 'عدد الأيام الإجمالي لرحلتك.' : 'Total number of days for your trip.'}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">{language === 'ar' ? 'تاريخ الرحلة الأعرف حالة الطقس والقمم الجبلية.' : 'Trip Date: To know the weather conditions and state of mountain peaks.'}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <Users className="w-8 h-8 text-gold mx-auto mb-4" />
                            <p className="font-bold">
                                {language === 'ar'
                                    ? 'هل تفضل السكن في مدينة واحدة والانطلاق منها يوميا،ً أم التنقل بين المدن والمبيت في كل محطة؟'
                                    : 'Accommodation Preference: Do you prefer staying in one city and departing from it daily, or moving between cities and staying overnight at each stop?'}
                            </p>
                        </div>
                    </div>
                    <Button asChild variant="luxury" size="lg" className="text-primary font-bold rounded-full px-12">
                        <a href="https://wa.me/393888248473">
                            <Phone className="w-5 h-5 ml-2" />
                            {language === 'ar' ? 'تواصل معي الآن لتصميم جدولك' : 'Contact Me to Design Your Schedule'}
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
