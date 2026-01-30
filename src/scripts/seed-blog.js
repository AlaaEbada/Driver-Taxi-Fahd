const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const posts = [
    {
        slug: 'serravalle-outlet-shopping-guide',
        title_ar: 'دليل التسوق في سيرفالي أوت لت: أكبر وجهة للماركات العالمية',
        title_en: 'Serravalle Outlet Shopping Guide: Italy\'s Best Luxury Brands',
        excerpt_ar: 'تعرف على كيفية الوصول إلى سيرفالي أوت لت، وأهم الماركات المتوفرة، ونصائح للحصول على أفضل الخصومات.',
        excerpt_en: 'Learn how to reach Serravalle Outlet, the best brands available, and tips for getting the biggest discounts.',
        content_ar: 'يعد سيرفالي أوت لت أكبر مركز تسوق في أوروبا، حيث يضم أكثر من 230 متجراً لماركات عالمية مثل قوتشي، وبرادا، وفيرزاتشي. يقع على بعد حوالي ساعة من ميلانو. نحن نوفر لك سائقاً خاصاً ينتظرك طوال فترة التسوق ويساعدك في تحميل المشتريات بأمان.',
        content_en: 'Serravalle Designer Outlet is Europe\'s largest shopping center, featuring over 230 stores of international brands like Gucci, Prada, and Versace. Located about an hour from Milan, we provide a private driver who waits for you throughout your shopping trip and helps load your purchases securely.',
        featured_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        is_published: true,
        is_featured: true,
        category_id: '9b3f748e-61d6-42f7-a257-44db5872bcb6', // Destinations
        published_at: new Date().toISOString()
    },
    {
        slug: 'rome-3-days-itinerary',
        title_ar: 'روما في 3 أيام: المخطط المثالي لزيارة عاصمة التاريخ',
        title_en: 'Rome in 3 Days: The Perfect Itinerary for the Eternal City',
        excerpt_ar: 'خطوات يومية لزيارة الكولوسيوم، نافورة تريفي، والفاتيكان مع نصائح لتجنب الزحام.',
        excerpt_en: 'A daily guide to visiting the Colosseum, Trevi Fountain, and the Vatican with tips to avoid crowds.',
        content_ar: 'اليوم الأول: الكولوسيوم والمنتدى الروماني. اليوم الثاني: الفاتيكان وكنيسة القديس بطرس. اليوم الثالث: نافورة تريفي والبانثيون. استمتع بالتنقل بين هذه المعالم بسيارة خاصة لتوفير الوقت والجهد.',
        content_en: 'Day 1: Colosseum and Roman Forum. Day 2: Vatican and St. Peter\'s Basilica. Day 3: Trevi Fountain and Pantheon. Enjoy moving between these landmarks with a private car to save time and effort.',
        featured_image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800',
        is_published: true,
        is_featured: false,
        category_id: '9b3f748e-61d6-42f7-a257-44db5872bcb6', // Destinations
        published_at: new Date().toISOString()
    },
    {
        slug: 'best-arabic-drivers-milan',
        title_ar: 'لماذا يفضل السياح العرب استئجار سائق خاص في ميلانو؟',
        title_en: 'Why Arab Tourists Prefer Private Drivers in Milan',
        excerpt_ar: 'مميزات الخصوصية والراحة وتوفير الوقت عند اختيار سائق عربي يرافقك في جولاتك السياحية.',
        excerpt_en: 'The benefits of privacy, comfort, and time-saving when choosing an Arabic-speaking driver for your tours.',
        content_ar: 'ميلانو مدينة مزدحمة ونظام القيادة فيها قد يكون صعباً بسبب مناطق ZTL. السائق العربي لا يوفر لك القيادة فحسب، بل يعمل كمترجم ومساعد لك في التواصل مع الإيطاليين وفهم الثقافة المحلية.',
        content_en: 'Milan is a busy city and its driving system can be challenging due to ZTL zones. An Arabic-speaking driver doesn\'t just provide driving service, but acts as a translator and assistant in communicating with Italians and understanding the local culture.',
        featured_image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=80&w=800',
        is_published: true,
        is_featured: false,
        category_id: '260adbca-0de5-48d0-bcc6-d20cd92fb6a9', // Travel Tips
        published_at: new Date().toISOString()
    },
    {
        slug: 'como-vs-garda-lakes-guide',
        title_ar: 'مقارنة بين بحيرة كومو وبحيرة جاردا: أيهما تختار لرحلتك القادمة؟',
        title_en: 'Lake Como vs Lake Garda: Which One to Choose for Your Next Trip?',
        excerpt_ar: 'تحليل شامل للفوارق بين البحيرتين من حيث الأنشطة، الطبيعة، والمناسبة للعائلات أو العرسان.',
        excerpt_en: 'A comprehensive comparison between the two lakes in terms of activities, nature, and suitability for families or couples.',
        content_ar: 'كومو تتميز بالفيلات التاريخية والجو الرومانسي الهادئ، بينما جاردا تعتبر أكبر ومناسبة أكثر للعائلات بفضل مدن الملاهي مثل جاردالاند. القرار يعتمد على ما تبحث عنه في عطلتك.',
        content_en: 'Como is known for its historic villas and quiet romantic atmosphere, while Garda is larger and more family-friendly thanks to theme parks like Gardaland. The decision depends on what you are looking for in your holiday.',
        featured_image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=800',
        is_published: true,
        is_featured: false,
        category_id: '9b3f748e-61d6-42f7-a257-44db5872bcb6', // Destinations
        published_at: new Date().toISOString()
    }
];

async function seed() {
    const { data, error } = await supabase.from('blog_posts').insert(posts);
    if (error) {
        console.error('Error seeding data:', error);
    } else {
        console.log('Successfully seeded 4 blog posts!');
    }
}

seed();
