/* ============ TRILINGUAL I18N: EN / FA / KU ============ */
(function () {
  const LS_KEY = "mc_lang";
  const RTL = { fa: true, ku: true };

  /* ---- UI strings (alerts, statuses) used from JS ---- */
  const UI = {
    en: {
      "Uploading…": "Uploading…",
      "Uploaded ✓": "Uploaded ✓",
      "fileTooBig": '"{name}" is larger than 10 MB. Please compress it or upload a smaller file.',
      "uploadSubmitted": "Documents submitted! Our team will review them and contact you within one business day.",
      "subscribed": "Subscribed! (demo)",
    },
    fa: {
      "Uploading…": "در حال بارگذاری…",
      "Uploaded ✓": "بارگذاری شد ✓",
      "fileTooBig": 'فایل "{name}" بزرگ‌تر از ۱۰ مگابایت است. لطفاً آن را فشرده کنید یا فایل کوچک‌تری بارگذاری کنید.',
      "uploadSubmitted": "مدارک ارسال شد! تیم ما آن‌ها را بررسی کرده و در کمتر از یک روز کاری با شما تماس می‌گیرد.",
      "subscribed": "عضویت انجام شد! (نمونه)",
    },
    ku: {
      "Uploading…": "ئەمە کاتی بارکردنە…",
      "Uploaded ✓": "بارکرا ✓",
      "fileTooBig": 'فایلی "{name}" گەورەترە لە ١٠ مێگابایت. تکایە بیکە بچێکە یان فایلێکی بچووکتر باربکە.',
      "uploadSubmitted": "بەڵگەنامەکان نێردران! تیمەکەمان پشکنینیان دەکات و لە کەمتر لە یەک ڕۆژی کارکردن پەیوەندیت پێوە دەکات.",
      "subscribed": "تۆمارکرا! (نموونە)",
    },
  };

  /* ---- Page text dictionaries: English source -> translation ---- */
  const DICTS = {
    fa: {
      /* topbar / nav */
      "Track Order": "پیگیری سفارش",
      "Login / Sign Up": "ورود / ثبت‌نام",
      "Company Registration": "ثبت شرکت",
      "Brand Registration": "ثبت برند",
      "Newspaper Services": "خدمات روزنامه",
      "Tax Services": "خدمات مالیاتی",
      "Commercial Card": "کارت بازرگانی",
      "License": "جواز کسب",
      "Rank / Rating": "رتبه شرکت",
      "International": "بین‌الملل",
      "Company Establishment": "تاسیس شرکت",
      "Company Dissolution": "انحلال شرکت",
      "Liquidation Termination": "ختم تصفیه شرکت",
      "Changes": "تغییرات",
      "Board of Directors Renewal": "تمدید هیئت مدیره",
      "Auditor Renewal": "تمدید بازرس شرکت",
      "Address Change / Postal Code": "تغییر نشانی / کدپستی",
      "P&L Balance Approval": "تصویب تراز سود و زیان",
      "Industrial Design Registration": "ثبت طرح صنعتی",
      "Brand Renewal": "تمدید برند",
      "Industrial Design Renewal": "تمدید طرح صنعتی",
      "Official Gazette": "روزنامه رسمی",
      "Widely-Circulated Newspaper": "روزنامه پراثر",
      "Office Seal Acquisition": "اخذ مهر شرکت",
      "Tax Return Filing": "ارائه اظهارنامه مالیاتی",
      "Tax Registration": "ثبت مالیاتی",
      "Card Acquisition": "اخذ کارت بازرگانی",
      "Card Renewal": "تمدید کارت بازرگانی",
      "Company Registration — Oman": "ثبت شرکت — عمان",
      "Company Registration — UAE": "ثبت شرکت — امارات",

      /* footer */
      "Services": "خدمات",
      "Quick Links": "دسترسی سریع",
      "Follow Us": "ما را دنبال کنید",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.": "متن نمونه برای معرفی مجموعه؛ تمام خدمات ثبتی و شرکتی به صورت کامل آنلاین و بدون اتلاف وقت انجام می‌شود.",
      "📍 123 Business Ave, Suite 400, Metropolis": "📍 خیابان تجاری ۱۲۳، واحد ۴۰۰، متروپولیس",
      "Office Seal": "مهر شرکت",
      "Board Renewal / Change": "تمدید / تغییر هیئت مدیره",
      "Tax Return": "اظهارنامه مالیاتی",
      "About Us": "درباره ما",
      "Contact Us": "تماس با ما",
      "Terms & Conditions": "قوانین و مقررات",
      "Packages": "پکیج‌ها",
      "Mon–Fri: 9:00 – 17:00\nSat: 9:00 – 14:00": "شنبه تا چهارشنبه: ۹:۰۰ – ۱۷:۰۰\nپنجشنبه: ۹:۰۰ – ۱۴:۰۰",
      "© 2025 . All rights reserved.": "© ۲۰۲۵ . کلیه حقوق محفوظ است.",

      /* home: hero */
      "Trusted by 2,800+ businesses": "مورد اعتماد بیش از ۲٬۸۰۰ کسب‌وکار",
      "Company Registration & Trading,": "ثبت شرکت و امور تجاری،",
      "Made Simple.": "ساده و آسان.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — registration, licensing, and trade compliance handled end to end, online.": "تمام مراحل ثبت، صدور جواز و امور تجاری به صورت کامل آنلاین و از ابتدا تا انتها توسط ما انجام می‌شود.",
      "Book Free Consultation": "رزرو مشاوره رایگان",
      "Upload Documents": "بارگذاری مدارک",
      "Companies Registered": "شرکت ثبت‌شده",
      "Customer Satisfaction": "رضایت مشتری",
      "Average Turnaround": "میانگین زمان انجام",
      "How it works": "نحوه کار",
      "Place your order online": "ثبت سفارش آنلاین",
      "Lorem ipsum dolor sit amet, consectetur.": "متن نمونه برای توضیح مرحله.",
      "Consultant contact": "تماس کارشناس",
      "Sed do eiusmod tempor incididunt ut labore.": "متن نمونه برای توضیح مرحله.",
      "Documents collected & reviewed": "جمع‌آوری و بررسی مدارک",
      "Ut enim ad minim veniam, quis nostrud.": "متن نمونه برای توضیح مرحله.",
      "Final delivery & support": "تحویل نهایی و پشتیبانی",
      "Duis aute irure dolor in reprehenderit.": "متن نمونه برای توضیح مرحله.",

      /* home: process */
      "Our Process": "فرآیند ما",
      "Service steps at Meridian Corporate": "مراحل انجام خدمات در مریدیان",
      "Lorem ipsum dolor sit amet — simple, transparent, and without wasting your time.": "ساده، شفاف و بدون اتلاف وقت.",
      "Online Order": "ثبت سفارش آنلاین",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.": "متن نمونه برای توضیح این مرحله.",
      "Consultant Contact": "تماس کارشناس",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.": "متن نمونه برای توضیح این مرحله.",
      "Documents Review": "بررسی مدارک",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.": "متن نمونه برای توضیح این مرحله.",
      "Administrative Steps": "مراحل اداری",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.": "متن نمونه برای توضیح این مرحله.",
      "Delivery & Support": "تحویل و پشتیبانی",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.": "متن نمونه برای توضیح این مرحله.",

      /* home: consult band */
      "Ready to get started?": "آماده شروع هستید؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Register your request now or get a free consultation with our specialists.": "همین حالا درخواست خود را ثبت کنید یا از مشاوره رایگان کارشناسان ما بهره‌مند شوید.",
      "✅ Thank you! Your request has been received. A consultant will contact you shortly.": "✅ متشکریم! درخواست شما دریافت شد. به‌زودی کارشناسی با شما تماس می‌گیرد.",
      "Request a consultation": "درخواست مشاوره",
      "Full name *": "نام و نام خانوادگی *",
      "Full name is required.": "نام و نام خانوادگی الزامی است.",
      "Phone number *": "شماره تلفن *",
      "Please enter a valid phone number.": "لطفاً یک شماره تلفن معتبر وارد کنید.",
      "Select a subject *": "موضوع را انتخاب کنید *",
      "Brand": "برند",
      "Safety Permit": "پروانه ایمنی",
      "Engineering": "مهندسی",
      "Company Registration & Changes": "ثبت شرکت و تغییرات",
      "Buy / Sell Company or Brand": "خرید / فروش شرکت یا برند",
      "Please select a subject.": "لطفاً یک موضوع انتخاب کنید.",
      "Request Consultation": "درخواست مشاوره",

      /* home: why us */
      "Why Meridian": "چرا مریدیان",
      "Your trust is our greatest asset": "اعتماد شما بزرگ‌ترین سرمایه ماست",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "متن نمونه: با سال‌ها تجربه در امور ثبتی، تمام مراحل را به صورت آنلاین و با شفافیت کامل انجام می‌دهیم.",
      "Lorem ipsum dolor sit amet — all services fully online, no in-person visits": "تمام خدمات به صورت آنلاین، بدون مراجعه حضوری",
      "Consectetur adipiscing elit — dedicated support until the job is done": "پشتیبانی اختصاصی تا پایان کار",
      "Sed do eiusmod tempor — full transparency in costs and steps": "شفافیت کامل در هزینه‌ها و مراحل",
      "Incididunt ut labore — suitable for startups, SMEs and large companies": "مناسب برای استارتاپ‌ها، شرکت‌های متوسط و بزرگ",
      "Lorem ipsum dolor sit amet": "متن نمونه",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.": "متن نمونه برای توضیح بیشتر درباره خدمات و تجربه ما.",
      "Successful projects": "پروژه موفق",
      "Years of experience": "سال تجربه",
      "Some of our services": "برخی از خدمات ما",
      "Brand & Industrial Design": "برند و طرح صنعتی",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "متن نمونه برای معرفی این خدمت.",
      "Company Changes": "تغییرات شرکت",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.": "متن نمونه برای معرفی این خدمت.",
      "Tax Services & Office Seals": "خدمات مالیاتی و مهر شرکت",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.": "متن نمونه برای معرفی این خدمت.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.": "متن نمونه برای معرفی این خدمت.",
      "Dissolution & Liquidation": "انحلال و تصفیه",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.": "متن نمونه برای معرفی این خدمت.",
      "Learn more ←": "بیشتر بدانید ←",

      /* home: packages */
      "Pricing": "قیمت‌ها",
      "Lorem ipsum dolor sit amet — transparent pricing, no hidden fees.": "قیمت‌گذاری شفاف، بدون هزینه پنهان.",
      "Basic": "پایه",
      "Starter": "شروع",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.": "متن نمونه برای توضیح این پکیج.",
      "Company registration": "ثبت شرکت",
      "Economic code": "کد اقتصادی",
      "Office seal": "مهر شرکت",
      "Buy Package": "خرید پکیج",
      "Most Popular": "محبوب‌ترین",
      "Business": "تجاری",
      "Professional": "حرفه‌ای",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.": "متن نمونه برای توضیح این پکیج.",
      "VAT code": "کد مالی بر ارزش افزوده",
      "Workshop code": "کد کارگاه",
      "Letterhead design": "طراحی سربرگ",
      "Business card design": "طراحی کارت ویزیت",
      "Logo & trademark registration": "ثبت لوگو و نشان تجاری",
      "Premium": "پریمیوم",
      "Brand Builder": "برندساز",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.": "متن نمونه برای توضیح این پکیج.",
      "Everything in Professional": "همه امکانات پکیج حرفه‌ای",
      "E-permit acquisition": "اخذ پروانه الکترونیکی",
      "Custom website design": "طراحی وب‌سایت اختصاصی",

      /* home: stats */
      "Satisfied customers": "مشتری راضی",
      "Companies registered": "شرکت ثبت‌شده",

      /* home: blog */
      "Insights": "دانشنامه",
      "Articles": "مقالات",
      "View All": "مشاهده همه",
      "🏢 Company Registration": "🏢 ثبت شرکت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod": "عنوان نمونه مقاله اول",
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "چکیده نمونه از محتوای این مقاله.",
      "Read more ←": "ادامه مطلب ←",
      "Duis aute irure dolor in reprehenderit in voluptate velit": "عنوان نمونه مقاله دوم",
      "Excepteur sint occaecat cupidatat non proident sunt in culpa": "عنوان نمونه مقاله سوم",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem": "عنوان نمونه مقاله چهارم",

      /* home: cta */
      "Lorem ipsum dolor sit amet — a specialist will call you within one business day.": "کارشناسی در کمتر از یک روز کاری با شما تماس می‌گیرد.",

      /* service page */
      "Service": "خدمت",
      "Loading…": "در حال بارگذاری…",
      "Need help with this service?": "به این خدمت نیاز به کمک دارید؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get a free consultation with our specialists.": "از مشاوره رایگان کارشناسان ما بهره‌مند شوید.",
      "Book Consultation": "رزرو مشاوره",
      "Popular Packages": "پکیج‌های پرفروش",
      "View Packages": "مشاهده پکیج‌ها",
      "Related Services": "خدمات مرتبط",
      "Upload Your Documents": "مدارک خود را بارگذاری کنید",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "متن نمونه برای توضیح بیشتر.",
      "Upload Now": "بارگذاری کنید",
      "How the process works": "مراحل انجام کار",
      "Required documents": "مدارک مورد نیاز",
      "Frequently asked questions": "سؤالات متداول",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?": "سؤال نمونه اول؟",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.": "پاسخ نمونه برای سؤال اول.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna?": "سؤال نمونه دوم؟",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.": "پاسخ نمونه برای سؤال دوم.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco?": "سؤال نمونه سوم؟",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.": "پاسخ نمونه برای سؤال سوم.",
      "National ID / passport copy of all shareholders and the manager": "کپی کارت ملی / گذرنامه تمام سهامداران و مدیر",
      "Passport-size photographs": "عکس پرسنلی",
      "Proposed names (three alternatives)": "نام‌های پیشنهادی (سه گزینه)",
      "Proof of address / recent utility bill": "گواهی نشانی / قبض خدمات اخیر",
      "Residency permit or visa copy (if applicable)": "کپی اقامت یا ویزا (در صورت لزوم)",
      "Description of the business activity": "شرح فعالیت تجاری",

      /* packages page */
      "Company Registration Packages": "پکیج‌های ثبت شرکت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transparent pricing, no hidden fees — government fees are itemized separately.": "قیمت‌گذاری شفاف، بدون هزینه پنهان — هزینه‌های دولتی به صورت جداگانه اعلام می‌شود.",
      "Package comparison": "مقایسه پکیج‌ها",
      "Feature": "امکان",
      "Letterhead & business card design": "طراحی سربرگ و کارت ویزیت",
      "Not sure which package fits you?": "مطمئن نیستید کدام پکیج مناسب شماست؟",
      "Lorem ipsum dolor sit amet — talk to a specialist and get a tailored quote.": "با یک کارشناس صحبت کنید و استعلام قیمت اختصاصی بگیرید.",
      "Contact Us": "تماس با ما",

      /* blog page */
      "Articles & Insights": "مقالات و دانشنامه",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Guides and news on registration, licensing, and trade.": "راهنماها و اخبار ثبت، صدور جواز و تجارت.",
      "🏢 Registration": "🏢 ثبت",
      "🏷️ Brand": "🏷️ برند",
      "🛃 Trade": "🛃 تجارت",
      "📜 Licensing": "📜 مجوز",
      "🧮 Tax": "🧮 مالیات",
      "🌍 International": "🌍 بین‌الملل",
      "Categories": "دسته‌بندی‌ها",
      "Brand & Trademark": "برند و نشان تجاری",
      "Tax & Accounting": "مالیات و حسابداری",
      "Trade & Commercial Card": "تجارت و کارت بازرگانی",
      "Subscribe to our newsletter": "خبرنامه ما را دریافت کنید",
      "Subscribe": "عضویت",

      /* about page */
      "About Meridian Corporate": "درباره مریدیان",
      "Our Story": "داستان ما",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "متن نمونه: ما با هدف ساده‌سازی امور ثبتی و تجاری تاسیس شدیم و امروز به صدها کسب‌وکار خدمت می‌رسانیم.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.": "متن نمونه برای ادامه توضیح داستان مجموعه.",
      "Sed do eiusmod tempor": "متن نمونه",
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.": "متن نمونه برای توضیح بیشتر.",
      "Specialists": "متخصص",
      "Our values": "ارزش‌های ما",
      "Transparency": "شفافیت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.": "متن نمونه برای توضیح این ارزش.",
      "Speed": "سرعت",
      "Confidentiality": "حریم خصوصی",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.": "متن نمونه برای توضیح این ارزش.",
      "Accuracy": "دقت",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.": "متن نمونه برای توضیح این ارزش.",
      "Work with us": "با ما همکاری کنید",
      "Lorem ipsum dolor sit amet — book a free consultation today.": "امروز یک مشاوره رایگان رزرو کنید.",

      /* contact page */
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach us by phone, email, or the form below.": "از طریق تلفن، ایمیل یا فرم زیر با ما در تماس باشید.",
      "Address": "نشانی",
      "Phone / WhatsApp": "تلفن / واتس‌اپ",
      "Email": "ایمیل",
      "Working Hours": "ساعات کاری",
      "Mon–Fri: 9:00 – 17:00 · Sat: 9:00 – 14:00": "شنبه تا چهارشنبه: ۹:۰۰ – ۱۷:۰۰ · پنجشنبه: ۹:۰۰ – ۱۴:۰۰",
      "🗺️ Map placeholder": "🗺️ جایگاه نقشه",
      "Send us a message": "پیام خود را بفرستید",
      "Full Name": "نام و نام خانوادگی",
      "Please enter your name.": "لطفاً نام خود را وارد کنید.",
      "Please enter a valid email.": "لطفاً یک ایمیل معتبر وارد کنید.",
      "Message": "پیام",
      "Please enter a message.": "لطفاً پیامی بنویسید.",
      "Send Message": "ارسال پیام",
      "✅ Thank you! Your message has been sent. We'll get back to you within one business day.": "✅ متشکریم! پیام شما ارسال شد. در کمتر از یک روز کاری پاسخ می‌دهیم.",

      /* rule page */
      "1. Lorem ipsum dolor sit amet": "۱. متن نمونه",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "متن نمونه برای این بند از قوانین و مقررات.",
      "2. Sed do eiusmod tempor incididunt": "۲. متن نمونه",
      "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.": "متن نمونه برای این بند از قوانین و مقررات.",
      "3. Excepteur sint occaecat cupidatat": "۳. متن نمونه",
      "Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.": "متن نمونه برای این بند از قوانین و مقررات.",
      "4. Nemo enim ipsam voluptatem": "۴. متن نمونه",
      "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.": "متن نمونه برای این بند از قوانین و مقررات.",
      "5. Quis autem vel eum iure": "۵. متن نمونه",
      "Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.": "متن نمونه برای این بند از قوانین و مقررات.",

      /* track page */
      "Track Your Order": "پیگیری سفارش شما",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enter your order number to see the current status.": "برای مشاهده وضعیت فعلی، شماره سفارش خود را وارد کنید.",
      "Order Number": "شماره سفارش",
      "Please enter a valid order number.": "لطفاً یک شماره سفارش معتبر وارد کنید.",
      "Track": "پیگیری",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "متن نمونه برای توضیح سفارش.",
      "Order received": "سفارش دریافت شد",
      "Lorem ipsum dolor sit amet — Jan 02, 2025": "متن نمونه — ۱۲ دی ۱۴۰۳",
      "Documents under review": "بررسی مدارک",
      "Consectetur adipiscing elit — Jan 03, 2025": "متن نمونه — ۱۳ دی ۱۴۰۳",
      "Administrative steps in progress": "مراحل اداری در حال انجام",
      "Sed do eiusmod tempor incididunt — in progress": "متن نمونه — در حال انجام",
      "Final delivery & support": "تحویل نهایی و پشتیبانی",
      "Ut enim ad minim veniam — pending": "متن نمونه — در انتظار",

      /* auth page */
      "My Account": "حساب من",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Manage your orders and documents in one place.": "سفارش‌ها و مدارک خود را در یکجا مدیریت کنید.",
      "Login": "ورود",
      "Sign Up": "ثبت‌نام",
      "✅ Login successful! (demo)": "✅ ورود موفق بود! (نمونه)",
      "Password": "رمز عبور",
      "✅ Account created! (demo)": "✅ حساب ساخته شد! (نمونه)",
      "Phone": "تلفن",
      "Create Account": "ساخت حساب",
      "Lorem ipsum dolor sit amet, consectetur.": "متن نمونه.",

      /* upload page */
      "Upload Your Documents": "بارگذاری مدارک",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Drag & drop your files below — everything is encrypted in transit.": "فایل‌ها را در زیر بکشید و رها کنید — همه‌چیز در حین انتقال رمزگذاری می‌شود.",
      "✅ All documents uploaded successfully! Our team will review them and contact you within one business day.": "✅ تمام مدارک با موفقیت بارگذاری شد! تیم ما آن‌ها را بررسی کرده و در کمتر از یک روز کاری با شما تماس می‌گیرد.",
      "Drag & drop files here": "فایل‌ها را اینجا بکشید و رها کنید",
      "or": "یا",
      "browse your computer": "از رایانه خود انتخاب کنید",
      "PDF, JPG, PNG, DOC — up to 10 MB per file": "PDF، JPG، PNG، DOC — حداکثر ۱۰ مگابایت برای هر فایل",
      "Submit Documents": "ارسال مدارک",
      "Clear All": "پاک کردن همه",
      "🔒 Your files are transmitted securely and only used for your registration process.": "🔒 فایل‌های شما به صورت امن ارسال شده و فقط برای فرآیند ثبت شما استفاده می‌شود.",
      "📋 Documents you may need": "📋 مدارکی که ممکن است نیاز داشته باشید",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit": "متن نمونه برای مورد اول",
      "Sed do eiusmod tempor incididunt ut labore et dolore": "متن نمونه برای مورد دوم",
      "Ut enim ad minim veniam, quis nostrud exercitation": "متن نمونه برای مورد سوم",
      "Duis aute irure dolor in reprehenderit in voluptate": "متن نمونه برای مورد چهارم",
      "Excepteur sint occaecat cupidatat non proident": "متن نمونه برای مورد پنجم",
      "💬 Need help?": "💬 به کمک نیاز دارید؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Book a free consultation and we'll prepare a personalized checklist for you.": "یک مشاوره رایگان رزرو کنید تا چک‌لیست اختصاصی برای شما آماده کنیم.",

      /* consultation page */
      "Consultation": "مشاوره",
      "Book Your Consultation": "رزرو مشاوره",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell us about your plans and a specialist will call you within one business day.": "طرح خود را برای ما بگویید؛ کارشناسی در کمتر از یک روز کاری با شما تماس می‌گیرد.",
      "✅ Thank you! Your consultation request has been received. We'll call you within one business day.": "✅ متشکریم! درخواست مشاوره شما دریافت شد. در کمتر از یک روز کاری تماس می‌گیریم.",
      "Please enter your full name.": "لطفاً نام و نام خانوادگی خود را وارد کنید.",
      "Please enter a valid email address.": "لطفاً یک ایمیل معتبر وارد کنید.",
      "Service Needed": "خدمت مورد نیاز",
      "Select a service…": "یک خدمت انتخاب کنید…",
      "Brand & Industrial Design": "برند و طرح صنعتی",
      "Company Changes": "تغییرات شرکت",
      "License / Rank": "جواز / رتبه",
      "International Registration": "ثبت بین‌المللی",
      "Not sure — please advise": "مطمئن نیستم — راهنمایی کنید",
      "Please select a service.": "لطفاً یک خدمت انتخاب کنید.",
      "Preferred Call Date": "تاریخ مایل برای تماس",
      "Preferred Time": "ساعت مایل",
      "Any time": "هر ساعتی",
      "Morning (9:00 – 12:00)": "صبح (۹:۰۰ – ۱۲:۰۰)",
      "Afternoon (12:00 – 15:00)": "بعدازظهر (۱۲:۰۰ – ۱۵:۰۰)",
      "Evening (15:00 – 17:00)": "عصر (۱۵:۰۰ – ۱۷:۰۰)",
      "Tell us about your plans": "طرح خود را برای ما بگویید",
      "Request My Free Consultation": "درخواست مشاوره رایگان",
      "By submitting, you agree to be contacted about your request. We never share your details with third parties.": "با ارسال فرم، موافقت دارید درباره درخواست خود با شما تماس گرفته شود. اطلاعات شما با اشخاص ثالث به اشتراک گذاشته نمی‌شود.",
      "What happens next?": "بعداً چه می‌شود؟",
      "📞 We call you": "📞 با شما تماس می‌گیریم",
      "🗺️ We map your route": "🗺️ مسیر شما را ترسیم می‌کنیم",
      "📄 You get a checklist": "📄 چک‌لیست دریافت می‌کنید",
      "🚀 We start": "🚀 شروع می‌کنیم",
      "Prefer to reach us directly?": "مایلید مستقیماً با ما در تماس باشید؟",
      "Contact Page": "صفحه تماس",

      /* admin panel */
      "Admin Panel": "پنل مدیریت",
      "Sign in to manage your site": "برای مدیریت سایت وارد شوید",
      "Demo: any email + password \"admin\"": "نمونه: هر ایمیلی + رمز \"admin\"",
      "Sign In": "ورود",
      "Dashboard": "داشبورد",
      "Orders": "سفارش‌ها",
      "Articles": "مقالات",
      "Messages": "پیام‌ها",
      "Users": "کاربران",
      "Settings": "تنظیمات",
      "Logout": "خروج",
      "Total Orders": "کل سفارش‌ها",
      "Pending": "در انتظار",
      "Revenue": "درآمد",
      "New Messages": "پیام‌های جدید",
      "Recent Orders": "سفارش‌های اخیر",
      "Customer": "مشتری",
      "Service": "خدمت",
      "Status": "وضعیت",
      "Actions": "عملیات",
      "New": "جدید",
      "In Progress": "در حال انجام",
      "Completed": "تکمیل‌شده",
      "Cancelled": "لغو‌شده",
      "Add Service": "افزودن خدمت",
      "Title (EN)": "عنوان (انگلیسی)",
      "Title (FA)": "عنوان (فارسی)",
      "Title (KU)": "عنوان (کردی)",
      "Save": "ذخیره",
      "Delete": "حذف",
      "Add Article": "افزودن مقاله",
      "Date": "تاریخ",
      "Mark read": "خوانده شد",
      "Unread": "نخوانده",
      "Site Name": "نام سایت",
      "Phone": "تلفن",
      "Email": "ایمیل",
      "Working Hours": "ساعات کاری",
      "Save Settings": "ذخیره تنظیمات",
      "Settings saved!": "تنظیمات ذخیره شد!",
      "Saved!": "ذخیره شد!",
      "Customer satisfaction": "رضایت مشتری",
      "Home": "خانه",
      "Title": "عنوان",
      "Category": "دسته",
      "View Site": "مشاهده سایت",
      "Password must be \"admin\".": 'رمز عبور باید "admin" باشد.',
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.": "متن نمونه برای معرفی این خدمت.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur": "عنوان نمونه مقاله پنجم",
      "Neque porro quisquam est qui dolorem ipsum quia dolor": "عنوان نمونه مقاله ششم",
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.": "چکیده نمونه از محتوای این مقاله.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.": "متن نمونه برای پاسخ این سؤال.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.": "متن نمونه برای پاسخ این سؤال.",
      "Excepteur sint occaecat cupidatat non proident?": "سؤال نمونه؟",
      "123 Business Ave, Suite 400, Metropolis": "خیابان تجاری ۱۲۳، واحد ۴۰۰، متروپولیس",
      "(optional)": "(اختیاری)",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.": "متن نمونه برای توضیح این پکیج.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud.": "متن نمونه برای توضیح این پکیج.",
    },

    ku: {
      /* topbar / nav */
      "Track Order": "شوێنکەوتنی داواکاری",
      "Login / Sign Up": "چوونەژوورەوە / تۆمارکردن",
      "Company Registration": "تۆمارکردنی کۆمپانیا",
      "Brand Registration": "تۆمارکردنی براند",
      "Newspaper Services": "خزمەتگوزاری ڕۆژنامە",
      "Tax Services": "خزمەتگوزاری باج",
      "Commercial Card": "کارتی بازرگانی",
      "License": "مۆڵەت",
      "Rank / Rating": "پلەی کۆمپانیا",
      "International": "نێودەوڵەتی",
      "Company Establishment": "دامەزراندنی کۆمپانیا",
      "Company Dissolution": "داڕووخسڕانی کۆمپانیا",
      "Liquidation Termination": "تەواوکردنی تصفییە",
      "Changes": "گۆڕانکارییەکان",
      "Board of Directors Renewal": "نوێکردنەوەی ئەندامانی بەڕێوەبەرایەتی",
      "Auditor Renewal": "نوێکردنەوەی پشکنەری کۆمپانیا",
      "Address Change / Postal Code": "گۆڕینی ناونیشان / کۆدی پۆست",
      "P&L Balance Approval": "پەسەندکردنی تەوازی قازانج و زیان",
      "Industrial Design Registration": "تۆمارکردنی دیزاینی پیشەسازی",
      "Brand Renewal": "نوێکردنەوەی براند",
      "Industrial Design Renewal": "نوێکردنەوەی دیزاینی پیشەسازی",
      "Official Gazette": "ڕۆژنامەی فەرمی",
      "Widely-Circulated Newspaper": "ڕۆژنامەی فراوانپاڵاو",
      "Office Seal Acquisition": "بەردەستکردنی مۆری دامەزراوە",
      "Tax Return Filing": "پێشکەشکردنی ئایتمەنتی باج",
      "Tax Registration": "تۆمارکردنی باج",
      "Card Acquisition": "بەردەستکردنی کارتی بازرگانی",
      "Card Renewal": "نوێکردنەوەی کارتی بازرگانی",
      "Company Registration — Oman": "تۆمارکردنی کۆمپانیا — عومران",
      "Company Registration — UAE": "تۆمارکردنی کۆمپانیا — ئیمارات",

      /* footer */
      "Services": "خزمەتگوزارییەکان",
      "Quick Links": "بەستەرە خێراکان",
      "Follow Us": "بەدوایمان بکەوە",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.": "دەقی نموونە بۆ ناساندنی دامەزراوەکە؛ هەموو خزمەتگوزارییە تۆمارییەکان بە تەواوی ئۆنلاین جێبەجێ دەکرێن.",
      "📍 123 Business Ave, Suite 400, Metropolis": "📍 شەقامی بازرگانی ١٢٣، یەکەی ٤٠٠، مێترۆپۆلیس",
      "Office Seal": "مۆری دامەزراوە",
      "Board Renewal / Change": "نوێکردنەوە / گۆڕینی بەڕێوەبەرایەتی",
      "Tax Return": "ئایتمەنتی باج",
      "About Us": "دەربارەی ئێمە",
      "Contact Us": "پەیوەندیکردن",
      "Terms & Conditions": "مەرج و بڕوارییەکان",
      "Packages": "پاکێجەکان",
      "Mon–Fri: 9:00 – 17:00\nSat: 9:00 – 14:00": "شەممە تا پێنجشەممە: ٩:٠٠ – ١٧:٠٠\nهەینی: ٩:٠٠ – ١٤:٠٠",
      "© 2025 . All rights reserved.": "© ٢٠٢٥ . هەموو مافەکان پارێزراون.",

      /* home: hero */
      "Trusted by 2,800+ businesses": "متمانەی زیاتر لە ٢٬٨٠٠ بزنس",
      "Company Registration & Trading,": "تۆمارکردنی کۆمپانیا و بازرگانی،",
      "Made Simple.": "ئاسان و سادە.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — registration, licensing, and trade compliance handled end to end, online.": "هەموو قۆناغەکانی تۆمارکردن و مۆڵەت و بازرگانی بە تەواوی ئۆنلاین و لە سەرەتاوە تا کۆتایی جێبەجێ دەکرێن.",
      "Book Free Consultation": "مۆڵەت وەرگرتنی بەلاش",
      "Upload Documents": "بارکردنی بەڵگەنامەکان",
      "Companies Registered": "کۆمپانیای تۆمارکراو",
      "Customer Satisfaction": "ڕەزامەندی کڕیار",
      "Average Turnaround": "تێکڕای کاتی جێبەجێکردن",
      "How it works": "چۆنیەتی کارکردن",
      "Place your order online": "داواکارییەکەت ئۆنلاین تۆمار بکە",
      "Lorem ipsum dolor sit amet, consectetur.": "دەقی نموونە بۆ ڕوونکردنەوەی قۆناغەکە.",
      "Consultant contact": "پەیوەندییە کارسازەکان",
      "Sed do eiusmod tempor incididunt ut labore.": "دەقی نموونە بۆ ڕوونکردنەوەی قۆناغەکە.",
      "Documents collected & reviewed": "کۆکردنەوە و پشکنینی بەڵگەنامەکان",
      "Ut enim ad minim veniam, quis nostrud.": "دەقی نموونە بۆ ڕوونکردنەوەی قۆناغەکە.",
      "Final delivery & support": "گەیاندنی کۆتایی و پشتگیری",
      "Duis aute irure dolor in reprehenderit.": "دەقی نموونە بۆ ڕوونکردنەوەی قۆناغەکە.",

      /* home: process */
      "Our Process": "پرۆسەی ئێمە",
      "Service steps at Meridian Corporate": "قۆناغەکانی خزمەتگوزاری لە مێریدیان",
      "Lorem ipsum dolor sit amet — simple, transparent, and without wasting your time.": "سادە، ڕوون و بەبێ خەرجکردنی کاتی تۆ.",
      "Online Order": "داواکاری ئۆنلاین",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم قۆناغە.",
      "Consultant Contact": "پەیوەندییە کارسازەکان",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم قۆناغە.",
      "Documents Review": "پشکنینی بەڵگەنامەکان",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم قۆناغە.",
      "Administrative Steps": "قۆناغە ئیدارییەکان",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم قۆناغە.",
      "Delivery & Support": "گەیاندن و پشتگیری",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم قۆناغە.",

      /* home: consult band */
      "Ready to get started?": "ئامادەیت بۆ دەستپێکردن؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Register your request now or get a free consultation with our specialists.": "ئێستا داواکارییەکەت تۆمار بکە یان بەلاش لەگەڵ تایبەتمەندەکانمان ڕاوێژ بکە.",
      "✅ Thank you! Your request has been received. A consultant will contact you shortly.": "✅ سوپاس! داواکارییەکەت وەرگیرا. بەم زووانە کارسازێک پەیوەندیت پێوە دەکات.",
      "Request a consultation": "داواکردنی ڕاوێژ",
      "Full name *": "ناوی تەواو *",
      "Full name is required.": "ناوی تەواو پێویستە.",
      "Phone number *": "ژمارەی مۆبایل *",
      "Please enter a valid phone number.": "تکایە ژمارەیەکی دروست بنووسە.",
      "Select a subject *": "بابەتێک هەڵبژێرە *",
      "Brand": "براند",
      "Safety Permit": "مۆڵەتی ئاسایش",
      "Engineering": "ئەندازیاری",
      "Company Registration & Changes": "تۆمارکردنی کۆمپانیا و گۆڕانکارییەکان",
      "Buy / Sell Company or Brand": "کڕین / فرۆشتنی کۆمپانیا یان براند",
      "Please select a subject.": "تکایە بابەتێک هەڵبژێرە.",
      "Request Consultation": "داواکردنی ڕاوێژ",

      /* home: why us */
      "Why Meridian": "بۆچی مێریدیان",
      "Your trust is our greatest asset": "متمانەی تۆ گەورەترین سامانی ئێمەت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "دەقی نموونە: بە ساڵانە ئەزموون لە کارە تۆمارییەکان، هەموو قۆناغەکان بە شێوەیەکی ڕوون و ئۆنلاین جێبەجێ دەکەین.",
      "Lorem ipsum dolor sit amet — all services fully online, no in-person visits": "هەموو خزمەتگوزارییەکان بە تەواوی ئۆنلاین، بەبێ سەردانی ڕوو بە ڕوو",
      "Consectetur adipiscing elit — dedicated support until the job is done": "پشتگیری تایبەت تا تەواوبوونی کارەکە",
      "Sed do eiusmod tempor — full transparency in costs and steps": "ڕوونی تەواو لە تێچووەکان و قۆناغەکان",
      "Incididunt ut labore — suitable for startups, SMEs and large companies": "گونجاو بۆ ستارتاپەکان، کۆمپانیای ناوەند و گەورە",
      "Lorem ipsum dolor sit amet": "دەقی نموونە",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.": "دەقی نموونە بۆ ڕوونکردنەوەی زیاتر.",
      "Successful projects": "پرۆژەی سەرکەوتوو",
      "Years of experience": "ساڵ ئەزموون",
      "Some of our services": "هەندێک لە خزمەتگوزارییەکانمان",
      "Brand & Industrial Design": "براند و دیزاینی پیشەسازی",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Company Changes": "گۆڕانکارییە کۆمپانیایەکان",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Tax Services & Office Seals": "خزمەتگوزاری باج و مۆری دامەزراوە",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Dissolution & Liquidation": "داڕووخسڕان و تصفییە",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Learn more ←": "زیاتر بزانە ←",

      /* home: packages */
      "Pricing": "نرخەکان",
      "Lorem ipsum dolor sit amet — transparent pricing, no hidden fees.": "نرخە ڕوونەکان، بەبێ تێچووی شاراوە.",
      "Basic": "بنەڕەتی",
      "Starter": "دەستپێک",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم پاکێجە.",
      "Company registration": "تۆمارکردنی کۆمپانیا",
      "Economic code": "کۆدی ئابووری",
      "Office seal": "مۆری دامەزراوە",
      "Buy Package": "کڕینی پاکێج",
      "Most Popular": "زۆرترین هەڵبژێردراو",
      "Business": "بزنس",
      "Professional": "پیشەیی",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم پاکێجە.",
      "VAT code": "کۆدی باجی قیمەت",
      "Workshop code": "کۆدی کارگە",
      "Letterhead design": "دیزاینی سەرنووسە",
      "Business card design": "دیزاینی کارتی بازرگانی",
      "Logo & trademark registration": "تۆمارکردنی لۆگۆ و نیشانەی بازرگانی",
      "Premium": "پریمیوم",
      "Brand Builder": "دروستکەری براند",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم پاکێجە.",
      "Everything in Professional": "هەموو شتەکانی پاکێجی پیشەیی",
      "E-permit acquisition": "بەردەستکردنی مۆڵەتی ئەلیکترۆنی",
      "Custom website design": "دیزاینی وێبسایتی تایبەت",

      /* home: stats */
      "Satisfied customers": "کڕیاری ڕازیبوو",
      "Companies registered": "کۆمپانیای تۆمارکراو",

      /* home: blog */
      "Insights": "زانیاری",
      "Articles": "نوسراوەکان",
      "View All": "هەموو ببینە",
      "🏢 Company Registration": "🏢 تۆمارکردنی کۆمپانیا",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod": "ناونیشانی نموونەی نوسراوەکە ١",
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "کورتەی نموونە لە ناوەڕۆکی ئەم نوسراوە.",
      "Read more ←": "زیاتر بخوێنەوە ←",
      "Duis aute irure dolor in reprehenderit in voluptate velit": "ناونیشانی نموونەی نوسراوەکە ٢",
      "Excepteur sint occaecat cupidatat non proident sunt in culpa": "ناونیشانی نموونەی نوسراوەکە ٣",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem": "ناونیشانی نموونەی نوسراوەکە ٤",

      /* home: cta */
      "Lorem ipsum dolor sit amet — a specialist will call you within one business day.": "تایبەتمەندێک لە کەمتر لە یەک ڕۆژی کارکردن پەیوەندیت پێوە دەکات.",

      /* service page */
      "Service": "خزمەتگوزاری",
      "Loading…": "ئەمە کاتی بارکردنە…",
      "Need help with this service?": "پێویستت بە یارمەتی بۆ ئەم خزمەتگوزارییە هەیە؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get a free consultation with our specialists.": "بەلاش لەگەڵ تایبەتمەندەکانمان ڕاوێژ بکە.",
      "Book Consultation": "مۆڵەت وەرگرتنی ڕاوێژ",
      "Popular Packages": "پاکێجە باوەکان",
      "View Packages": "پاکێجەکان ببینە",
      "Related Services": "خزمەتگوزارییە پەیوەندیدارەکان",
      "Upload Your Documents": "بەڵگەنامەکانت باربکە",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "دەقی نموونە بۆ ڕوونکردنەوەی زیاتر.",
      "Upload Now": "ئێستا باربکە",
      "How the process works": "چۆنیەتی جێبەجێبوونی پرۆسەکە",
      "Required documents": "بەڵگەنامە پێویستەکان",
      "Frequently asked questions": "پرسیارە باوەکان",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit?": "پرسیاری نموونەی ١؟",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.": "وەڵامی نموونە بۆ پرسیاری ١.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna?": "پرسیاری نموونەی ٢؟",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.": "وەڵامی نموونە بۆ پرسیاری ٢.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco?": "پرسیاری نموونەی ٣؟",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.": "وەڵامی نموونە بۆ پرسیاری ٣.",
      "National ID / passport copy of all shareholders and the manager": "لەکۆڵی کارتی نەتەوەیی / پاسپۆرتی هەموو هاوبەش و بەڕێوەبەرەکە",
      "Passport-size photographs": "وێنەی قەبارەی پاسپۆرت",
      "Proposed names (three alternatives)": "ناونیشانە پێشنیارکراوەکان (سێ هەڵبژاردە)",
      "Proof of address / recent utility bill": "بەڵگەی ناونیشان / فاکتۆری خزمەتگوزارییە دوایینەکان",
      "Residency permit or visa copy (if applicable)": "لەکۆڵی مۆڵەتی نیشتەجێبوون یان ڤیزا (ئەگەر گونجاوبێت)",
      "Description of the business activity": "وەسفکردنی چالاکییە بازرگانییەکە",

      /* packages page */
      "Company Registration Packages": "پاکێجەکانی تۆمارکردنی کۆمپانیا",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transparent pricing, no hidden fees — government fees are itemized separately.": "نرخە ڕوونەکان، بەبێ تێچووی شاراوە — تێچووە حکومەتییەکان بەجیا ڕادەگەڕێن.",
      "Package comparison": "بەراوردکردنی پاکێجەکان",
      "Feature": "تایبەتمەندی",
      "Letterhead & business card design": "دیزاینی سەرنووسە و کارتی بازرگانی",
      "Not sure which package fits you?": "دڵنیایت کە کام پاکێج گونجاوتە؟",
      "Lorem ipsum dolor sit amet — talk to a specialist and get a tailored quote.": "لەگەڵ تایبەتمەندێک ڕاوێژ بکە و نرخنامەیەکی تایبەت وەربگرە.",
      "Contact Us": "پەیوەندیکردن",

      /* blog page */
      "Articles & Insights": "نوسراوەکان و زانیاری",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Guides and news on registration, licensing, and trade.": "ڕێنمایی و هەواڵ لەسەر تۆمارکردن، مۆڵەت و بازرگانی.",
      "🏢 Registration": "🏢 تۆمارکردن",
      "🏷️ Brand": "🏷️ براند",
      "🛃 Trade": "🛃 بازرگانی",
      "📜 Licensing": "📜 مۆڵەت",
      "🧮 Tax": "🧮 باج",
      "🌍 International": "🌍 نێودەوڵەتی",
      "Categories": "پۆلەکان",
      "Brand & Trademark": "براند و نیشانەی بازرگانی",
      "Tax & Accounting": "باج و ژمێریاری",
      "Trade & Commercial Card": "بازرگانی و کارتی بازرگانی",
      "Subscribe to our newsletter": "بەخبرنامەکەمان تۆماربە",
      "Subscribe": "تۆمارکردن",

      /* about page */
      "About Meridian Corporate": "دەربارەی مێریدیان",
      "Our Story": "چیرۆکەکەمان",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "دەقی نموونە: ئێمە بۆ ئاسانکردنەوەی کارە تۆمارییەکان دامەزراوین و ئێستا خزمەتگوزاری بۆ سەدان بزنس دەکەین.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.": "دەقی نموونە بۆ بەردەوامبوونی چیرۆکەکە.",
      "Sed do eiusmod tempor": "دەقی نموونە",
      "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.": "دەقی نموونە بۆ ڕوونکردنەوەی زیاتر.",
      "Specialists": "تایبەتمەند",
      "Our values": "بەهایەکانمان",
      "Transparency": "ڕوونی",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم بەها.",
      "Speed": "خێرایی",
      "Confidentiality": "نهێنی",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم بەها.",
      "Accuracy": "وردی",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم بەها.",
      "Work with us": "لەگەڵمان کار بکە",
      "Lorem ipsum dolor sit amet — book a free consultation today.": "ئەمڕۆ ڕاوێژێکی بەلاش مۆڵەت بکە.",

      /* contact page */
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach us by phone, email, or the form below.": "بە مۆبایل، ئیمەیڵ یان فۆڕمە خوارەوەکە پەیوەندیمان پێوە بکە.",
      "Address": "ناونیشان",
      "Phone / WhatsApp": "مۆبایل / واتسئاپ",
      "Email": "ئیمەیڵ",
      "Working Hours": "کاتەکانی کار",
      "Mon–Fri: 9:00 – 17:00 · Sat: 9:00 – 14:00": "شەممە تا پێنجشەممە: ٩:٠٠ – ١٧:٠٠ · هەینی: ٩:٠٠ – ١٤:٠٠",
      "🗺️ Map placeholder": "🗺️ شوێنی نەخشە",
      "Send us a message": "پەیامەکەت بنێرە",
      "Full Name": "ناوی تەواو",
      "Please enter your name.": "تکایە ناوت بنووسە.",
      "Please enter a valid email.": "تکایە ئیمەیڵێکی دروست بنووسە.",
      "Message": "پەیام",
      "Please enter a message.": "تکایە پەیامێک بنووسە.",
      "Send Message": "ناردنی پەیام",
      "✅ Thank you! Your message has been sent. We'll get back to you within one business day.": "✅ سوپاس! پەیامەکەت نێردرا. لە کەمتر لە یەک ڕۆژی کارکردن وەڵامت دەدەینەوە.",

      /* rule page */
      "1. Lorem ipsum dolor sit amet": "١. دەقی نموونە",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.": "دەقی نموونە بۆ ئەم بڕوارییە.",
      "2. Sed do eiusmod tempor incididunt": "٢. دەقی نموونە",
      "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.": "دەقی نموونە بۆ ئەم بڕوارییە.",
      "3. Excepteur sint occaecat cupidatat": "٣. دەقی نموونە",
      "Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.": "دەقی نموونە بۆ ئەم بڕوارییە.",
      "4. Nemo enim ipsam voluptatem": "٤. دەقی نموونە",
      "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.": "دەقی نموونە بۆ ئەم بڕوارییە.",
      "5. Quis autem vel eum iure": "٥. دەقی نموونە",
      "Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.": "دەقی نموونە بۆ ئەم بڕوارییە.",

      /* track page */
      "Track Your Order": "شوێنکەوتنی داواکارییەکەت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enter your order number to see the current status.": "بۆ بینینی دۆخی ئێستایی، ژمارەی داواکارییەکەت بنووسە.",
      "Order Number": "ژمارەی داواکاری",
      "Please enter a valid order number.": "تکایە ژمارەیەکی دروست بنووسە.",
      "Track": "شوێنکەوتن",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "دەقی نموونە بۆ ڕوونکردنەوەی داواکارییەکە.",
      "Order received": "داواکارییەکە وەرگیرا",
      "Lorem ipsum dolor sit amet — Jan 02, 2025": "دەقی نموونە — ٢ی کانوونی دووەمی ٢٠٢٥",
      "Documents under review": "بەڵگەنامەکان لەژێر پشکنیندان",
      "Consectetur adipiscing elit — Jan 03, 2025": "دەقی نموونە — ٣ی کانوونی دووەمی ٢٠٢٥",
      "Administrative steps in progress": "قۆناغە ئیدارییەکان لە جێبەجێکردن",
      "Sed do eiusmod tempor incididunt — in progress": "دەقی نموونە — لە جێبەجێکردن",
      "Final delivery & support": "گەیاندنی کۆتایی و پشتگیری",
      "Ut enim ad minim veniam — pending": "دەقی نموونە — چاوەڕوان",

      /* auth page */
      "My Account": "هەژوورەکەم",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Manage your orders and documents in one place.": "داواکارییەکان و بەڵگەنامەکانت لە یەک شوێن بەڕێوە ببە.",
      "Login": "چوونەژوورەوە",
      "Sign Up": "تۆمارکردن",
      "✅ Login successful! (demo)": "✅ چوونەژوورەوە سەرکەوتوو بوو! (نموونە)",
      "Password": "وشەی نهێنی",
      "✅ Account created! (demo)": "✅ هەژوورەکە دروستکرا! (نموونە)",
      "Phone": "مۆبایل",
      "Create Account": "دروستکردنی هەژوور",
      "Lorem ipsum dolor sit amet, consectetur.": "دەقی نموونە.",

      /* upload page */
      "Upload Your Documents": "بارکردنی بەڵگەنامەکان",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Drag & drop your files below — everything is encrypted in transit.": "فایلەکانت لە خوارەوە ڕابکێشە و دایبنێ — هەموو شتێک لەکاتی گواستنەوەدا شفرەکراوە.",
      "✅ All documents uploaded successfully! Our team will review them and contact you within one business day.": "✅ هەموو بەڵگەنامەکان بە سەرکەوتوویی بارکران! تیمەکەمان پشکنینیان دەکات و لە کەمتر لە یەک ڕۆژی کارکردن پەیوەندیت پێوە دەکات.",
      "Drag & drop files here": "فایلەکان لێرە ڕابکێشە و دایبنێ",
      "or": "یان",
      "browse your computer": "لە کۆمپیوتەرەکەت هەڵبژێرە",
      "PDF, JPG, PNG, DOC — up to 10 MB per file": "PDF، JPG، PNG، DOC — بەرەو ١٠ مێگابایت بۆ هەر فایلێک",
      "Submit Documents": "ناردنی بەڵگەنامەکان",
      "Clear All": "سڕینەوەی هەموو",
      "🔒 Your files are transmitted securely and only used for your registration process.": "🔒 فایلەکانت بە ئاسامانگ گواسترانەوە و تەنیا بۆ پرۆسەی تۆمارکردنەکەت بەکاردێن.",
      "📋 Documents you may need": "📋 بەڵگەنامەکان کە لەوانەیە پێویستت پێیان بێت",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit": "دەقی نموونە بۆ بڕگەی ١",
      "Sed do eiusmod tempor incididunt ut labore et dolore": "دەقی نموونە بۆ بڕگەی ٢",
      "Ut enim ad minim veniam, quis nostrud exercitation": "دەقی نموونە بۆ بڕگەی ٣",
      "Duis aute irure dolor in reprehenderit in voluptate": "دەقی نموونە بۆ بڕگەی ٤",
      "Excepteur sint occaecat cupidatat non proident": "دەقی نموونە بۆ بڕگەی ٥",
      "💬 Need help?": "💬 پێویستت بە یارمەتی هەیە؟",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Book a free consultation and we'll prepare a personalized checklist for you.": "ڕاوێژێکی بەلاش مۆڵەت بکە و چێکلیستێکی تایبەت بۆت ئامادە دەکەین.",

      /* consultation page */
      "Consultation": "ڕاوێژ",
      "Book Your Consultation": "ڕاوێژەکەت مۆڵەت بکە",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell us about your plans and a specialist will call you within one business day.": "پلانی خۆت بۆمان بگەڕێ؛ تایبەتمەندێک لە کەمتر لە یەک ڕۆژی کارکردن پەیوەندیت پێوە دەکات.",
      "✅ Thank you! Your consultation request has been received. We'll call you within one business day.": "✅ سوپاس! داواکاری ڕاوێژەکەت وەرگیرا. لە کەمتر لە یەک ڕۆژی کارکردن پەیوەندیت پێوە دەکەین.",
      "Please enter your full name.": "تکایە ناوی تەواوت بنووسە.",
      "Please enter a valid email address.": "تکایە ئیمەیڵێکی دروست بنووسە.",
      "Service Needed": "خزمەتگوزاری پێویست",
      "Select a service…": "خزمەتگوزارییەک هەڵبژێرە…",
      "Brand & Industrial Design": "براند و دیزاینی پیشەسازی",
      "Company Changes": "گۆڕانکارییە کۆمپانیایەکان",
      "License / Rank": "مۆڵەت / پلە",
      "International Registration": "تۆمارکردنی نێودەوڵەتی",
      "Not sure — please advise": "دڵنیانم — تکایە ڕێنمایی بکە",
      "Please select a service.": "تکایە خزمەتگوزارییەک هەڵبژێرە.",
      "Preferred Call Date": "بەرواری دڵخواز بۆ پەیوەندی",
      "Preferred Time": "کاتی دڵخواز",
      "Any time": "هەر کاتێک",
      "Morning (9:00 – 12:00)": "بەیانی (٩:٠٠ – ١٢:٠٠)",
      "Afternoon (12:00 – 15:00)": "نیوەڕۆ (١٢:٠٠ – ١٥:٠٠)",
      "Evening (15:00 – 17:00)": "ئێوارە (١٥:٠٠ – ١٧:٠٠)",
      "Tell us about your plans": "پلانی خۆت بۆمان بگەڕێ",
      "Request My Free Consultation": "داواکردنی ڕاوێژی بەلاش",
      "By submitting, you agree to be contacted about your request. We never share your details with third parties.": "بە ناردن، ڕازیت کە دەربارەی داواکارییەکەت پەیوەندیت پێوە بکرێت. زانیارییەکانت هەرگیز لەگەڵ لایەنی سێیەم هاوبەش ناکرێن.",
      "What happens next?": "دواتر چی ڕوودەدات؟",
      "📞 We call you": "📞 پەیوەندیت پێوە دەکەین",
      "🗺️ We map your route": "🗺️ ڕێگاکەت دیاری دەکەین",
      "📄 You get a checklist": "📄 چێکلیستێک وەردەگریت",
      "🚀 We start": "🚀 دەستپێدەکەین",
      "Prefer to reach us directly?": "دڵخوازیت بە ڕاستەوخۆ پەیوەندیمان پێوە بکەیت؟",
      "Contact Page": "پەڕەی پەیوەندی",

      /* admin panel */
      "Admin Panel": "پانێلی بەڕێوەبردن",
      "Sign in to manage your site": "بۆ بەڕێوەبردنی وێبسایتەکەت بچۆ ژوورەوە",
      "Demo: any email + password \"admin\"": "نموونە: هەر ئیمەیڵێک + وشەی نهێنی \"admin\"",
      "Sign In": "چوونەژوورەوە",
      "Dashboard": "داشبۆرد",
      "Orders": "داواکارییەکان",
      "Articles": "نوسراوەکان",
      "Messages": "پەیامەکان",
      "Users": "بەکارهێنەران",
      "Settings": "ڕێکخستنەکان",
      "Logout": "چوونەدەرەوە",
      "Total Orders": "کۆی داواکارییەکان",
      "Pending": "چاوەڕوان",
      "Revenue": "داهات",
      "New Messages": "پەیامی نوێ",
      "Recent Orders": "داواکارییە دوایینەکان",
      "Customer": "کڕیار",
      "Service": "خزمەتگوزاری",
      "Status": "دۆخ",
      "Actions": "کردارەکان",
      "New": "نوێ",
      "In Progress": "لە جێبەجێکردن",
      "Completed": "تەواوبوو",
      "Cancelled": "هەڵوەشایەوە",
      "Add Service": "زیادکردنی خزمەتگوزاری",
      "Title (EN)": "ناونیشان (ئینگلیزی)",
      "Title (FA)": "ناونیشان (فارسی)",
      "Title (KU)": "ناونیشان (کوردی)",
      "Save": "پاشەکەوت",
      "Delete": "سڕینەوە",
      "Add Article": "زیادکردنی نوسراو",
      "Date": "بەروار",
      "Mark read": "وەک خوێندراوە",
      "Unread": "نەخوێندراو",
      "Site Name": "ناوی وێبسایت",
      "Phone": "مۆبایل",
      "Email": "ئیمەیڵ",
      "Working Hours": "کاتەکانی کار",
      "Save Settings": "پاشەکەوتی ڕێکخستنەکان",
      "Settings saved!": "ڕێکخستنەکان پاشەکەوتکران!",
      "Saved!": "پاشەکەوتکرا!",
      "Customer satisfaction": "ڕەزامەندی کڕیار",
      "Home": "ماڵەوە",
      "Title": "ناونیشان",
      "Category": "پۆل",
      "View Site": "بینینی وێبسایت",
      "Password must be \"admin\".": 'وشەی نهێنی دەبێت "admin" بێت.',
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.": "دەقی نموونە بۆ ناساندنی ئەم خزمەتگوزارییە.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur": "ناونیشانی نموونەی نوسراوەکە ٥",
      "Neque porro quisquam est qui dolorem ipsum quia dolor": "ناونیشانی نموونەی نوسراوەکە ٦",
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.": "کورتەی نموونە لە ناوەڕۆکی ئەم نوسراوە.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.": "دەقی نموونە بۆ وەڵامی ئەم پرسیارە.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.": "دەقی نموونە بۆ وەڵامی ئەم پرسیارە.",
      "Excepteur sint occaecat cupidatat non proident?": "پرسیاری نموونە؟",
      "123 Business Ave, Suite 400, Metropolis": "شەقامی بازرگانی ١٢٣، یەکەی ٤٠٠، مێترۆپۆلیس",
      "(optional)": "(ئارەزوومەندانە)",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم پاکێجە.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud.": "دەقی نموونە بۆ ڕوونکردنەوەی ئەم پاکێجە.",
    },
  };

  /* ---- Placeholders ---- */
  const PH = {
    fa: {
      "e.g. John Smith": "مثلاً علی محمدی",
      "you@company.com": "شما@شرکت.com",
      "+1 555 000 0000": "+۹۸ ۹۱۲ ۰۰۰ ۰۰۰۰",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit…": "متن نمونه…",
      "Your name": "نام شما",
      "Your email": "ایمیل شما",
      "••••••••": "••••••••",
      "e.g. MC-2025-00123": "مثلاً MC-2025-00123",
      "Full name *": "نام و نام خانوادگی *",
      "Phone number *": "شماره تلفن *",
      "Select a subject *": "موضوع را انتخاب کنید *",
    },
    ku: {
      "e.g. John Smith": "بۆ نموونە ئارام ئاسۆ",
      "you@company.com": "تۆ@کۆمپانیا.com",
      "+1 555 000 0000": "+٩٦٤ ٧٥٠ ٠٠٠ ٠٠٠٠",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit…": "دەقی نموونە…",
      "Your name": "ناوی تۆ",
      "Your email": "ئیمەیڵی تۆ",
      "••••••••": "••••••••",
      "e.g. MC-2025-00123": "بۆ نموونە MC-2025-00123",
      "Full name *": "ناوی تەواو *",
      "Phone number *": "ژمارەی مۆبایل *",
      "Select a subject *": "بابەتێک هەڵبژێرە *",
    },
  };

  let current = "en";
  try { current = localStorage.getItem(LS_KEY) || "en"; } catch (e) {}
  if (!DICTS[current]) current = "en";

  let originals = new WeakMap();
  let phOriginals = new WeakMap();

  function directText(el) {
    let out = "";
    for (const n of el.childNodes) {
      if (n.nodeType === 3) out += n.textContent;
      else if (n.nodeName === "BR") out += "\n";
    }
    return out.trim();
  }

  function setDirectText(el, value) {
    const nodes = Array.from(el.childNodes).filter((n) => n.nodeType === 3);
    if (!nodes.length) return;
    const parts = value.split("\n");
    if (parts.length === nodes.length) nodes.forEach((n, i) => (n.textContent = parts[i]));
    else {
      nodes[0].textContent = value;
      nodes.slice(1).forEach((n) => (n.textContent = ""));
    }
  }

  function snapshot() {
    document.querySelectorAll("body *").forEach((el) => {
      if (!originals.has(el)) originals.set(el, directText(el));
      if (el.hasAttribute("placeholder") && !phOriginals.has(el)) phOriginals.set(el, el.placeholder);
    });
  }

  function resnapshot() {
    originals = new WeakMap();
    phOriginals = new WeakMap();
    snapshot();
  }

  function ensureFont() {
    if (RTL[current] && !document.getElementById("mcFaFont")) {
      const l = document.createElement("link");
      l.id = "mcFaFont";
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(l);
    }
  }

  function buildSwitcher() {
    document.querySelectorAll(".topbar-right, .lang-switch-host").forEach((right) => {
      if (!right || right.querySelector(".lang-switch")) return;
      const wrap = document.createElement("span");
      wrap.className = "lang-switch";
      [["en", "EN"], ["fa", "فا"], ["ku", "کوردی"]].forEach(([code, label]) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = label;
        b.dataset.lang = code;
        b.addEventListener("click", () => setLang(code));
        wrap.appendChild(b);
      });
      right.appendChild(wrap);
    });
  }

  function updateSwitcher() {
    document.querySelectorAll(".lang-switch button").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === current)
    );
  }

  let applying = false;
  function apply() {
    snapshot();
    const d = DICTS[current] || {};
    const p = PH[current] || {};
    const root = document.documentElement;
    root.lang = current;
    root.dir = RTL[current] ? "rtl" : "ltr";
    document.querySelectorAll("body *").forEach((el) => {
      const key = originals.get(el);
      if (key) {
        if (d[key]) setDirectText(el, d[key]);
        else if (directText(el) !== key) setDirectText(el, key);
      }
      if (el.hasAttribute("placeholder")) {
        const pk = phOriginals.get(el);
        if (p[el.placeholder]) el.placeholder = p[el.placeholder];
        else if (pk && el.placeholder !== pk) el.placeholder = pk;
      }
    });
    ensureFont();
    updateSwitcher();
    if (!applying) {
      applying = true;
      try { document.dispatchEvent(new window.Event("mc:langchange")); } catch (e) {}
      applying = false;
    }
  }

  function setLang(code) {
    if (!DICTS[code] && code !== "en") return;
    current = code;
    try { localStorage.setItem(LS_KEY, code); } catch (e) {}
    apply();
  }

  function t(str) {
    const u = UI[current] || UI.en;
    return u[str] || str;
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildSwitcher();
    apply();
  });

  window.MC_I18N = {
    get lang() { return current; },
    setLang,
    apply,
    resnapshot,
    t,
    isRTL: () => !!RTL[current],
  };
})();
