
const defaultArticles = [
    {
        id: 1,
        title: "Sun'iy intellekt nima va u qanday ishlaydi?",
        category: "Texnologiya",
        icon: "🤖",
        description: "AI texnologiyalari va ularning kundalik hayotimizdagi o'rni.",
        content: `Sun'iy intellekt zamonaviy texnologiyaning eng muhim yo'nalishlaridan biridir.

U kompyuter tizimlariga ma'lumotlarni tahlil qilish, o'rganish va turli vazifalarni bajarish imkonini beradi.

Sun'iy intellekt ta'lim, tibbiyot, sanoat va biznes sohalarida keng qo'llanmoqda.

Kelajakda ushbu texnologiyaning imkoniyatlari yanada kengayishi kutilmoqda.`
    },
    {
        id: 2,
        title: "Internet orqali biznes boshlash",
        category: "Biznes",
        icon: "💼",
        description: "Internetda o'z biznesingizni rivojlantirish sirlari.",
        content: `Internet biznes uchun juda katta imkoniyatlar yaratadi.

Avvalo, qanday mahsulot yoki xizmat taklif qilishingizni aniqlang.

Keyin mijozlaringizni o'rganing, sifatli xizmat yarating va saytingizni rivojlantiring.

Muvaffaqiyat uchun sabr, reja va doimiy o'rganish muhim.`
    },
    {
        id: 3,
        title: "Veb dasturlashni noldan o'rganish",
        category: "Texnologiya",
        icon: "💻",
        description: "HTML, CSS va JavaScript asoslari.",
        content: `Veb dasturlash sayt va internet ilovalarini yaratish jarayonidir.

HTML saytning tuzilishini yaratadi.

CSS saytning ranglari, o'lchamlari va dizaynini belgilaydi.

JavaScript esa saytga interaktiv imkoniyatlar qo'shadi.

Ushbu uch texnologiyani o'rganish orqali birinchi saytingizni yaratishingiz mumkin.`
    },
    {
        id: 4,
        title: "Internet xavfsizligi qoidalari",
        category: "Internet",
        icon: "🔐",
        description: "Internetdan xavfsiz foydalanishning muhim qoidalari.",
        content: `Internetdan foydalanishda shaxsiy ma'lumotlarni himoya qilish muhim.

Har bir hisob uchun kuchli va alohida parol ishlating.

Ikki bosqichli tasdiqlashni yoqing.

Noma'lum havolalar va shubhali fayllardan ehtiyot bo'ling.`
    },
    {
        id: 5,
        title: "Raqamli marketing nima?",
        category: "Biznes",
        icon: "📈",
        description: "Internet orqali mahsulot va xizmatlarni tanitish.",
        content: `Raqamli marketing internet orqali mahsulot va xizmatlarni targ'ib qilish usulidir.

Bunga ijtimoiy tarmoqlar, qidiruv tizimlari, elektron pochta va boshqa raqamli kanallar kiradi.

Yaxshi marketing mijozlarga kerakli ma'lumotni to'g'ri yetkazishga yordam beradi.`
    },
    {
        id: 6,
        title: "Kelajak texnologiyalari",
        category: "Texnologiya",
        icon: "🚀",
        description: "Dunyoni o'zgartirishi mumkin bo'lgan texnologiyalar.",
        content: `Kelajak texnologiyalari inson hayotini o'zgartirishi mumkin.

Robototexnika, sun'iy intellekt, aqlli qurilmalar va qayta tiklanuvchi energiya shular jumlasidandir.

Ushbu yo'nalishlar yangi kasblar va imkoniyatlarni ham yaratmoqda.`
    },
    {
        id: 7,
        title: "Pulni to'g'ri boshqarish",
        category: "Biznes",
        icon: "💰",
        description: "Shaxsiy moliyani rejalashtirish asoslari.",
        content: `Pulni boshqarish moliyaviy savodxonlikning muhim qismidir.

Daromad va xarajatlarni yozib boring.

Maqsadlaringiz uchun budjet tuzing.

Xarid qilishdan oldin uning zarurligini baholang.

Moliyaviy qarorlarni shoshilmasdan qabul qiling.`
    },
    {
        id: 8,
        title: "Google qidiruv tizimi qanday ishlaydi?",
        category: "Internet",
        icon: "🔎",
        description: "Qidiruv tizimlari ma'lumotlarni qanday topadi?",
        content: `Qidiruv tizimlari internetdagi sahifalarni o'rganadi va ularni o'z indeksiga joylashtiradi.

Foydalanuvchi qidiruv so'zini yozganda, tizim mos sahifalarni tanlab ko'rsatadi.

Saytning foydali va sifatli mazmuni qidiruv natijalarida muhim ahamiyatga ega.`
    },
    {
        id: 9,
        title: "Kompyuter tezligini oshirish",
        category: "Texnologiya",
        icon: "⚡",
        description: "Kompyuterdan samarali foydalanish bo'yicha maslahatlar.",
        content: `Kompyuterning yaxshi ishlashi uchun tizimni muntazam yangilab turing.

Keraksiz dasturlarni olib tashlang.

Diskdagi bo'sh joyni nazorat qiling.

Ishonchli xavfsizlik dasturlaridan foydalaning.`
    },
    {
        id: 10,
        title: "YouTube kanalni rivojlantirish",
        category: "Internet",
        icon: "🎬",
        description: "Video kontent orqali auditoriya yig'ish.",
        content: `YouTube kanalini rivojlantirish uchun aniq mavzu tanlash muhim.

Tomoshabinlarga foydali va qiziqarli videolar tayyorlang.

Sarlavha va muqova rasmlariga e'tibor bering.

Muntazam kontent chiqarish auditoriya bilan aloqa o'rnatishga yordam beradi.`
    },
    {
        id: 11,
        title: "Freelancer kim?",
        category: "Biznes",
        icon: "🌐",
        description: "Mustaqil ishlash va masofaviy xizmatlar haqida.",
        content: `Freelancer — mustaqil ravishda turli mijozlarga xizmat ko'rsatuvchi mutaxassis.

U dizayn, dasturlash, tarjima, matn yozish kabi xizmatlarni taklif qilishi mumkin.

Bu yo'nalishda muvaffaqiyatga erishish uchun bilim, tajriba va mas'uliyat zarur.`
    },
    {
        id: 12,
        title: "Mobil ilovalar qanday yaratiladi?",
        category: "Texnologiya",
        icon: "📱",
        description: "Mobil dasturlash olamiga kirish.",
        content: `Mobil ilovalar telefon va planshetlarda ishlash uchun yaratiladi.

Android va iOS uchun turli dasturlash texnologiyalari mavjud.

Ilova yaratishda dizayn, qulaylik, tezlik va xavfsizlik muhim hisoblanadi.`
    }
];

// Maqolalarni brauzer xotirasidan olish

function getArticles() {
    try {
        const saved = localStorage.getItem("advision_articles");

        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (error) {
        console.error("Maqolalarni o'qishda xatolik:", error);
    }

    return defaultArticles;
}

// Maqolalarni saqlash

function saveArticles(articles) {
    localStorage.setItem(
        "advision_articles",
        JSON.stringify(articles)
    );
}
