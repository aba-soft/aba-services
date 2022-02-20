import { entityTypes } from "../../types";

const choices = [
  {
    label: "کاملا مخالفم",
    value: 0,
  },
  {
    label: "مخالفم",
    value: 1,
  },
  {
    label: "نظری ندارم",
    value: 2,
  },
  {
    label: "موافقم",
    value: 3,
  },
  {
    label: "کاملا موافقم",
    value: 4,
  },
];

export const testStructure: entityTypes.ITestStructure = {
  id: "NEOPIR",
  title: {
    fa: "پرسشنامه شخصیتی NEO",
    en: "NEO-Personality Inventory-Revised ( NEO-PI-R )",
  },
  description: "من آدم نگرانی نیستم.",
  fields: {
    "1": {
      question: "",
      choices,
    },
    "2": {
      question: "من بیشتر افرادی را که می شناسم واقعا دوست دارم.",
      choices
    },
    "3": {
      question: "من قدرت تخیل و تصور خیلی زنده و فعالی دارم.",
      choices
    },
    "4": {
      question: "من معمولا در مورد قصد و نیت دیگران بدبین و بدگمان هستم.",
      choices
    },
    "5": {
      question: "من به محتاط بودن و داشتن عقل سلیم مشهورم.",
      choices
    },
    "6": {
      question: "من اغلب از نحوه برخورد دیگران با خودم عصبانی می شوم.",
      choices
    }, 
    "7": {
      question: "من معمولا از جمعیت های بزرگ و شلوغ دوری و پرهیز می کنم.",
      choices
    },
    "8": {
      question: "مسائل و مطالب مربوط به هنر و زیبایی شناسی برای من چندان اهمیت ندارد.",
      choices
    },
    "9": {
      question: "من آدم حیله گر و مکاری نیستم.",
      choices
    },
    "10": {
      question: "من ترجیح می دهم که با ذهن باز به استقبال اتفاقات آینده بروم تا این که برای هر کاری طرح و نقشه قبلی داشته باشم.",
      choices
    },
    "11": {
      question: "من به ندرت احساس تنهایی و غمگینی می کنم.",
      choices
    },
    "12": {
      question: "من آدمی مسلط، قوی و قاطعی هستم.",
      choices
    },
    "13": {
      question: "بدون هیجانات قوی، زندگی برای من چیز جالبی نخواهد بود.",
      choices
    },
    "14": {
      question: "بعضی از مردم مرا آدمی خودخواه و خودمحور می دانند.",
      choices
    },
    "15": {
      question: "من سعی می کنم تا وظایف محوله را با صداقت و درستی انجام دهم.",
      choices
    },
    "16": {
      question: "من در معامله با مردم همیشه از این می ترسم که نکند مرتکب اشتباه بزرگی شوم.",
      choices
    },
    "17": {
      question: "من در موقع کار یا تفریح، عجله و شتاب به خرج نمی دهم.",
      choices
    },
    "18": {
      question: "من در کارهای خود از روش نسبتا ثابت و جا افتاده ای پیروی می کنم.",
      choices
    },
    "19": {
      question: "من ترجیح می دهم با دیگران همکاری کنم تا با آنها به رقابت بپردازم.",
      choices
    },
    "20": {
      question: "من آدم راحت طلب و تنبلی هستم.",
      choices
    },
    "21": {
      question: "من به ندرت در کاری زیاده روی می کنم.",
      choices
    },
    "22": {
      question: "من اغلب تشنه هیجان و تحریک هستم.",
      choices
    },
    "23": {
      question: "من اغلب از بازی کردن با نظریه ها و افکار انتزاعی لذت می برم.",
      choices
    },
    "24": {
      question: "من از لاف زدن درباره استعدادها و موفقیت های خود، بدم نمی آید.",
      choices
    },
    "25": {
      question: "من به خوبی می توانم وقت و فعالیت خود را طوری تنظیم کنم که کارهای محوله، به موقع تمام شود.",
      choices
    },
    "26": {
      question: "من اغلب احساس درماندگی و ناتوانی می کنم و میل دارم شخص دیگری مسایلم را حل کند.",
      choices
    },
    "27": {
      question: "من هرگز آنقدر احساس خوشحالی نکرده ام که به اصطلاح از خوشی به هوا بپرم.",
      choices
    },
    "28": {
      question: "من معتقدم اگر به دانشجویان اجازه داده شود تا به سخنرانی بحث انگیز و متناقض، گوش دهند فقط باعث سردرگمی و انحراف بیشتر آنها خواهد شد.",
      choices
    },
    "29": {
      question: "رهبران سیاسی باید درباره جنبه های انسانی برنامه های خود، آگاهی بیشتری داشته باشند.", 
      choices
    },
    "30": {
      question: "در طی سالها، من بعضی کارهای کاملا بی ربط انجام داده ام.",
      choices
    },
    "31": {
      question: "من به آسانی دچار ترس می شوم.",
      choices
    },
    "32": {
      question: "من از صحبت کردن با دیگران چندان لذت نمی برم.",
      choices
    },
    "33": {
      question: "من سعی می کنم همه افکارم را در راستای واقعیت ها هدایت کرده و از پناه بردن به عالم رویا و تخیل خودداری نمایم.",
      choices
    },
    "34": {
      question: "من معتقدم که اکثر مردم اساسا دارای قصد و نیت خوب و دوستانه ای هستند.",
      choices
    },
    "35": {
      question: "من مسئولیت های اجتماعی از قبیل رای دادن را خیلی جدی نمی گیرم.",
      choices
    },
    "36": {
      question: "خلق و خوی من بیشتر وقت ها ثابت بوده و زیاد بالا و پایین نمی رود.",
      choices
    },
    "37": {
      question: "من دوست دارم همیشه افراد زیادی دور و برم باشند.",
      choices
    },
    "38": {
      question: "من بعضی مواقع کاملا در موسیقی که گوش میدهم، غرق می شوم.",
      choices
    },
    "39": {
      question: "اگر نیاز باشد، من حاضرم از افراد دیگر برای رسیدن به مقاصد خود سوء استفاده کنم.",
      choices
    },
    "40": {
      question: "من اشياء متعلق به خود را تمیز و پاکیزه نگه می دارم.",
      choices
    },
    "41": {
      question: "من بعضی وقت ها کاملا احساس بی ارزشی می کنم.",
      choices
    },
    "42": {
      question: "من گاهی نمی توانم آن طور که باید از خود قاطعیت نشان دهم.",
      choices
    },
    "43": {
      question: "به ندرت دچار احساسات و عواطف قوی می گردم.",
      choices
    },
    "44": {
      question: "من سعی می کنم با همه افرادی که ملاقات می کنم، رفتاری مودب و با نزاکت داشته باشم.",
      choices
    },
    "45": {
      question: "گاه گاهی من آن طور که باید صادق و قابل اعتماد نیستم.",
      choices
    },
    "46": {
      question: "من وقتی با افراد دیگر هستم به ندرت احساس خجالت می کنم.",
      choices
    },
    "47": {
      question: "من وقتی کاری را انجام می دهم آن را با تمام علاقه و سرعت انجام می دهم.",
      choices
    },
    "48": {
      question: "من فکر می کنم یاد گرفتن و تمرین سرگرمی ها و کارهای ذوقی جدید، جالب است.",
      choices
    },
    "49":{
      question: "در مواردی که لازم باشد، من می توانم از دیگران ایراد گرفته و به آنها کنایه بزنم.",
      choices
    },
    "50": {
      question: "من دارای اهداف روشن و مشخصی هستم و برای دستیابی به آنها طبق برنامه منظمی عمل می کنم.",
      choices
    },
    "51": {
      question: "مقاومت در برابر خواست ها و هوس های آنی، برای من آسان نیست.",
      choices
    },
    "52": {
      question: "من از گذراندن تعطیلات خود در جاهای شلوغ و پرهیجان لذت نمی برم.",
      choices
    },
    "53": {
      question: "من بحث و استدلال درباره مطالب فلسفی را کاری بی فایده و کسل کننده می دانم.", 
      choices
    },
    "54": {
      question: "من ترجیح می دهم که در مورد خودم و موفقیت هایم حرفی نزنم.",
      choices
    },
    "55": {
      question: "من قبل از شروع به هر کاری مقدار زیادی وقت تلف می کنم.",
      choices
    },
    "56": {
      question: "احساس می کنم قادر هستم با بسیاری از مشکلات خود کنار بیایم.",
      choices
    },
    "57": {
      question: "من بعضی وقت ها حالت های شادی یا نشاط بسیار شدیدی را تجربه کرده ام.",
      choices
    },
    "58": {
      question: "من معتقدم که قوانین و سیاست های اجتماعی باید تغییر کنند تا نیازهای یک دنیای در حال تغییر و تحول را به خوبی منعکس سازند.",
      choices
    },
    "59": {
      question: "من از لحاظ نگرش های اجتماعی آدمی سخت گیر و بی گذشت هستم.",
      choices
    },
    "60": {
      question: "من قبل از این که تصمیمی بگیرم در مورد جوانب مختلف مسئله به دقت فکر می کنم.", 
      choices
    },
    "61": {
      question: "من به ندرت احساس ترس و اضطراب می کنم.",
      choices
    },
    "62": {
      question: "من به آدمی خونگرم و خوشرو معروف هستم.",
      choices
    },
    "63": {
      question: "من زندگی تخیلی بسیار فعالی دارم.",
      choices
    },
    "64": {
      question: "من عقیده دارم که اکثر مردم، اگر به آنها اجازه داده شود، از آدم سوء استفاده خواهند کرد.", 
      choices
    },
    "65": {
      question: "من خود را درباره حوادث جاری مطلع نگه داشته و معمولا تصمیمات عاقلانه ای اتخاذ می کنم.",
      choices
    },
    "66": {
      question: "من به آدمی جوشی و عصبی معروف هستم.",
      choices
    },
    "67": {
      question: "من معمولا ترجیح می دهم کارها را به تنهایی انجام دهم.",
      choices
    },
    "68": {
      question: "تماشای صحنه های باله یا رقص های جدید مرا خسته و کسل می کند.",
      choices
    },
    "69": {
      question: "من حتی اگر بخواهم، نمیتوانم کسی را گول بزنم.",
      choices
    },
    "70": {
      question: "من آدم بسیار منظم و با برنامه ای نیستم.",
      choices
    },
    "71": {
      question: "من به ندرت افسرده یا غمگین می شوم.",
      choices
    },
    "72": {
      question: "من غالبا در گروه هایی که عضو بوده ام، نقش رهبری را بر عهده داشته ام.",
      choices
    },
    "73": {
      question: "احساس و عاطفه ای که اشیاء مختلف در من ایجاد می کنند برای من مهم است.",
      choices
    },
    "74": {
      question: "بعضی افراد فکر می کنند من آدم فاقد احساسات و حسابگری هستم.",
      choices
    },
    "75": {
      question: "من بدهی های خود را به موقع و به طور کامل می پردازم.",
      choices
    },
    "76": {
      question: "بعضی وقتها من طوری احساس خجالت کرده ام که دلم می خواست خود را از دیگران مخفی کنم.",
      choices
    },
    "77": {
      question: "کار من ممکن است کند باشد ولی با ثبات و یکنواخت است.",
      choices
    },
    "78": {
      question: "وقتی که روش صحیح انجام کاری را یافتم به همان روش می چسبم و ادامه میدهم.",
      choices
    },
    "79": {
      question: "من در نشان دادن خشم و عصبانیت درنگ و تامل می کنم حتی اگر احساس کنم حق با من است.",
      choices
    },
    "80": {
      question: "هرگاه برنامه ای را برای اصلاح پاره ای از رفتارهای خود شروع می کنم، معمولا بعد از چند روز آن را کنار می گذارم.",
      choices
    },
    "81": {
      question: "مقاومت در برابر وسوسه ها و خواهش های نفسانی برای من مشکل نیست.",
      choices
    },
    "82": {
      question: "من بعضی وقت ها کارهایی را انجام داده ام که هدف آنها فقط هیجان و لذت بردن است.",
      choices
    },
    "83": {
      question: "من از حل مسئله های مشکل یا معما لذت می برم.",
      choices
    },
    "84": {
      question: "من از بیشتر مردم بهتر هستم و این را می دانم.",
      choices
    },
    "85": {
      question: "من آدم سازنده و مولدی هستم که همیشه مسئولیت های خود را به انجام می رساند.",
      choices
    },
    "86": {
      question: "وقتی که تحت فشار و استرس زیادی هستم بعضی مواقع احساس می کنم که دارم از هم می پاشم.",
      choices
    },
    "87": {
      question: "من آدم خوشحال و امیدواری نیستم.",
      choices
    },
    "88": {
      question: "من معتقدم که برای اخذ تصمیم درباره امور اخلاقی، ما باید از رهبران مذهبی خود کسب تکلیف و تقلید کنیم.",
      choices
    },
    "89": {
      question: "هرچه در مورد افراد فقیر و سالمند انجام دهیم، باز هم کم است.",
      choices
    },
    "90": {
      question: "گاه گاهی من اول عمل می کنم و بعد می اندیشم.",
      choices
    },
    "91": {
      question: "من اغلب دچار تنش بوده و عصبی هستم.",
      choices
    },
    "92": {
      question: "بیشتر مردم مرا فردی کم و بیش سرد و غير اجتماعی می دانند.",
      choices
    },
    "93": {
      question: "من دوست ندارم وقتم را با خیال بافی تلف کنم.",
      choices
    },
    "94": {
      question: "فکر می کنم بیشتر مردمی که با آنها در تماس هستم افرادی درست کار و قابل اطمینان هستند.",
      choices
    },
    "95": {
      question: "من غالبا بدون آمادگی کافی در موقعیت های مختلف حاضر می شوم.",
      choices
    },
    "96": {
      question: "بیشتر مردم مرا آدمی زودرنج و بد اخلاق نمی دانند.",
      choices
    },
    "97": {
      question: "اگر برای مدت طولانی تنها باشم واقعا احساس می کنم به افراد دیگر نیازمند هستم.",
      choices
    },
    "98": {
      question: "نظم و ترتیب خاصی که در هنر و طبیعت می بینم برای من بسیار جالب و شوق انگیز است.",
      choices
    },
    "99": {
      question: "کاملا صادق و درست کار بودن برای تجارت و کاسبی خوب نیست.",
      choices
    },
    "100": {
      question: "من دوست دارم هر چیزی را در جای مخصوص آن نگه دارم تا جای آن را به خوبی بدانم.",
      choices
    },
    "101": {
      question: "من گاهی دچار احساس پشیمانی و گناهکاری شدیدی شده ام.",
      choices
    },
    "102": {
      question: "در جلسات جمعی من می گذارم دیگران بیشتر حرف ها را بزنند.",
      choices
    },
    "103": {
      question: "به ندرت به احساسات آنی خود توجه می کنم.",
      choices
    },
    "104": {
      question: "من غالبأ سعی می کنم نسبت به افکار و احساسات دیگران آگاهی و احترام نشان دهم.",
      choices
    },
    "105": {
      question: "من گاهی در بازی شطرنج یا ورزش تقلب می کنم.",
      choices
    },
    "106": {
      question: "اگر مردم مرا دست اندازند و مسخره کنند، من زیاد احساس ناراحتی و خجالت نمی کنم.",
      choices
    },
    "107": {
      question: "من اغلب احساس می کنم که سرشار از نیرو و انرژی هستم.",
      choices
    },
    "108": {
      question: "من اغلب غذاهای جدید و نا آشنا را امتحان می کنم.",
      choices
    },
    "109": {
      question: "من اگر اشخاصی را دوست نداشته باشم، آن را از آنها مخفی نمی کنم.",
      choices
    },
    "110": {
      question: "من برای دستیابی به اهداف خود، سخت تلاش می کنم.",
      choices
    },
    "111": {
      question: "وقتی به غذای مورد علاقه ام دسترسی پیدا کنم غالبا بیشتر از حد می خورم.",
      choices
    },
    "112": {
      question: "من معمولا از تماشای فیلم های منزجر کننده یا وحشتناک خودداری می کنم.",
      choices
    },
    "113": {
      question: "بعضی مواقع که مردم در مورد مسایل خیلی انتزاعی و نظری صحبت می کنند من علاقه ام را از دست میدهم.",
      choices
    },
    "114": {
      question: "من سعی می کنم آدم افتاده و فروتنی باشم.",
      choices
    },
    "115": {
      question: "من به زحمت می توانم خود را وادار به کاری کنم که باید انجام دهم.",
      choices
    },
    "116": {
      question: "من در مواقع اضطراری می توانم خونسردی خود را حفظ کنم.",
      choices
    },
    "117": {
      question: "من گاهی بیش از اندازه احساس خوشبختی می کنم.",
      choices
    },
    "118": {
      question: "من معتقدم که عقاید متفاوت افراد جوامع دیگر در مورد حق و ناحق از نظر خود آنها معتبر است.",
      choices
    },
    "119": {
      question: "من در مورد آدم هایی که در خیابان ها گدایی می کنند، هیچ گونه احساس همدردی نمی کنم.",
      choices
    },
    "120": {
      question: "من همیشه قبل از این که دست به عملی بزنم، پیامدهای آن را مورد توجه قرار میدهم.",
      choices
    },
    "121": {
      question: "من به ندرت درباره آینده احساس ترس و نگرانی می کنم.",
      choices
    },
    "122": {
      question: "من واقعا از صحبت کردن با دیگران لذت می برم.",
      choices
    },
    "123": {
      question: "من از تمرکز حواس روی یک موضوع خیالی یا رؤیا در بیداری و بررسی امکانات مختلف ناشی از آن لذت می برم، و به آن اجازه می دهم رشد کرده و شاخ و برگ پیدا کند.",
      choices
    },
    "124": {
      question: "هر وقت کسی در مورد من کار خوبی انجام دهد، من احساس بدگمانی و سوء ظن می کنم.",
      choices
    },
    "125": {
      question: "من به خاطر درستی قضاوتم به خود می بالم.",
      choices
    },
    "126": {
      question: "من اغلب نسبت به افرادی که با آنها سر و کار دارم احساس تنفر و بیزاری می کنم.",
      choices
    },
    "127": {
      question: "من کارهایی را ترجیح می دهم که بتوانم به تنهایی و بدون تحمل مزاحمت دیگران، انجام دهم.",
      choices
    },
    "128": {
      question: "شعر تاثیر چندانی روی من ندارد.",
      choices
    },
    "129": {
      question: " از این که به عنوان آدم ریا کاری شناخته شوم، متنفرم.",
      choices
    }, 
    "130": {
      question: "به نظر نمی رسد هرگز بتوانم کارهای خود را نظم و ترتیب دهم.",
      choices
    },
    "131": {
      question: "هرگاه اشتباهی رخ دهد (یا عیب و ایرادی پیش بیاید من خود را سرزنش می کنم.",
      choices
    },
    "132": {
      question: "افراد دیگر اغلب در تصمیم گیری خود از من کسب تکلیف (یا به عنوان الگو) استفاده می کنند.",
      choices
    },
    "133": {
      question: "هیجانات و احساسات گوناگونی به من دست می دهند.",
      choices
    },
    "134": {
      question: "من به سخاوت و دست و دلبازی مشهور نیستم.",
      choices
    },
    "135": {
      question: "همیشه وقتی قول انجام کاری را بدهم، مردم می توانند به انجام آن کار اطمینان کنند.",
      choices
    },
    "136": {
      question: "من اغلب نسبت به دیگران احساس حقارت می کنم.",
      choices
    },
    "137": {
      question: "من به اندازه دیگران چابک و سرزنده نیستم.", 
      choices
    },
    "138": {
      question: "ترجیح می دهم وقتم را در محیط های مأنوس و آشنا بگذرانم.",
      choices
    },
    "139": {
      question: "وقتی کسی به من توهین کند، من فقط سعی می کنم او را ببخشم و فراموش کنم.",
      choices
    },
    "140": {
      question: "من احساس نمی کنم که مجبورم با دیگران رقابت نموده و از آنها بهتر عمل کنم.",
      choices
    },
    "141": {
      question: "من به ندرت در مقابل خواست های آنی خود، تسلیم می شوم.",
      choices
    },
    "142": {
      question: "من ترجیح می دهم در جاهایی باشم که کانون فعالیت و عمل است.",
      choices
    },
    "143": {
      question: "من از سر و کله زدن با مسایل یا معماهایی که ذهن آدم را به کوشش و چالش وادار می کند، لذت می برم.",
      choices
    },
    "144": {
      question: "در مورد خودم نظر بسیار مثبتی دارم.",
      choices
    },
    "145": {
      question: "من وقتی کاری را شروع می کنم، همیشه آن را به اتمام می رسانم.",
      choices
    },
    "146": {
      question: "تصمیم گرفتن و اتخاذ یک روش قطعی، غالبا برای من مشکل است.",
      choices
    },
    "147": {
      question: "من خودم را آدم خیلی شنگول و سرزنده ای نمی دانم.",
      choices
    },
    "148": {
      question: "من معتقدم که وفاداری به ایده آل ها و اصول مورد قبول خود، بیش از آزادمنشی و خالی از تعصب بودن اهمیت دارد.",
      choices
    },
    "149": {
      question: "نیازهای انسانی افراد همیشه باید بر ملاحظات اقتصادی دولت، اولویت داده شوند.",
      choices
    },
    "150": {
      question: "من غالب کارها را بدون تأمل قبلی و به خاطر یک انگیزه آنی انجام می دهم.",
      choices
    },
    "151": {
      question: "من اغلب نگران این هستم که مبادا کارها طبق نقشه و به درستی پیش نروند.",
      choices
    },
    "152": {
      question: "لبخند زدن به افراد غریبه و ایجاد ارتباط با آنها برای من آسان است.",
      choices
    },
    "153": {
      question: "من هر وقت احساس می کنم ذهنم در جهت خیال پردازی می رود معمولا خود را به کار من می کنم و به جای خیال پردازی، حواس خود را روی آن کار متمرکز می سازم.",
      choices
    },
    "154": {
      question: "واکنش اولیه من به مردم آن است که به آنها اعتماد کنم.",
      choices
    },
    "155": {
      question: "من ظاهرا در هیچ کاری موفق نمی شوم.",
      choices
    },
    "156": {
      question: "من خیلی به ندرت واقعا عصبانی می شوم.",
      choices
    },
    "157": {
      question: "ترجیح می دهم تعطیلات خود را در یک ساحل عمومی شلوغ بگذرانم تا در یک کلبه جنگلی دور افتاده.",
      choices
    },
    "158": {
      question: "انواع خاصی از موسیقی بیش از اندازه برای من شورانگیز هستند.",
      choices
    },
    "159": {
      question: "بعضی وقتها من مردم را با چرب زبانی و تقلب به انجام کارهای مورد نظر خود، وادار می کنم.",
      choices
    },
    "160": {
      question: "من معمولا آدمی کم و بیش سخت گیر و پرتوقع هستم.",
      choices
    },
    "161": {
      question: "من نسبت به خودم نظری منفی دارم .",
      choices
    },
    "162": {
      question: "من ترجیح می دهم دنبال کارهای خود را بگیرم، تا این که رهبر دیگران باشم.",
      choices
    },
    "163": {
      question: "من به ندرت متوجه خلق و عواطفی که محیط های مختلف به وجود می آورند، می شوم.",
      choices
    },
    "164": {
      question: "بیشتر مردمی که می شناسم مرا دوست دارند.",
      choices
    },
    "165": {
      question: "من دقیقا از اصول اخلاقی پیروی می کنم.",
      choices
    },
    "166": {
      question: "من در حضور رؤسای خود و دیگر افراد مهم و صاحب قدرت، احساس آرامش و راحتی می کنم.",
      choices
    },
    "167": {
      question: "من معمولا در حال عجله به نظر می رسم.",
      choices
    },
    "168": {
      question: "بعضی مواقع تنها برای این که کار تازه ای انجام داده باشم، محل اثاثیه خانه را تغییر می دهم.",
      choices
    },
    "169": {
      question: "اگر کسی با من شروع به دعوا و مرافعه کند، من هم آماده ام، جواب او را با دعوا بدهم.",
      choices
    },
    "170": {
      question: "من تلاش می کنم تمام چیزهایی را که می توانم، به دست آورم.",
      choices
    },
    "171": {
      question: "من گاهی آنقدر غذا می خورم که بالا می آورم.",
      choices
    },
    "172": {
      question: "من عاشق ترس و هیجانی هستم که معمولا سوار شدن به چرخ فلک یا کارهای خطرناک دیگر ایجاد می کند.",
      choices
    },
    "173": {
      question: "من علاقه ای به تأمل و تفکر جدی درباره سرنوشت جهان یا انسان ندارم.",
      choices
    },
    "174": {
      question: "من احساس می کنم که مزیتی بر افراد دیگر ندارم (صرف نظر از موقعیت و وضع افراد).",
      choices
    },
    "175": {
      question: "وقتی که اجرای یک طرح یا نقشه با مشکل روبرو می شود، من تمایل پیدا می کنم طرح دیگری را شروع کنم.",
      choices
    },
    "176": {
      question: "من در یک موقعیت بحرانی به خوبی می توانم خود را کنترل و اداره کنم.",
      choices
    },
    "177": {
      question: "من آدم خوش مشرب، شاد و با روحیه ای هستم.",
      choices
    },
    "178": {
      question: "من خود را آدمی با سعه صدر میدانم که می تواند راه و رسم زندگی و طرز فکر دیگران را به خوبی قبول و تحمل نماید.",
      choices
    },
    "179": {
      question: "من معتقدم که همه انسانها با ارزش و قابل احترامند.",
      choices
    },
    "180": {
      question: "من به ندرت تصمیمی عجولانه می گیرم.",
      choices
    },
    "181": {
      question: "در مقایسه با بیشتر مردم، من از چیزهای کمتری می ترسم.",
      choices
    },
    "182": {
      question: "من به دوستان خود وابستگی عاطفی زیادی دارم.",
      choices
    },
    "183": {
      question: "بچه که بودم هرگز از بازی هایی که مستلزم تقلید نقش دیگران باشد، لذت نمی بردم.",
      choices
    },
    "184": {
      question: "من معمولا در مورد افراد دیگر خوش بین و خوش باور هستم.",
      choices
    },
    "185": {
      question: "من فرد بسیار شایسته و کارآیی هستم.",
      choices
    },
    "186": {
      question: "بعضی وقتها من نسبت به دیگران احساس خصومت و آزردگی کرده ام.",
      choices
    },
    "187": {
      question: "معاشرت و گردهمایی های اجتماعی معمولا برای من ناخوشایند و کسل کننده هستند.",
      choices
    },
    "188": {
      question: "بعضی مواقع که شعری را می خوانم یا به یک اثر هنری نگاه می کنم، موجی از احساس افسردگی یا هیجان مرا در بر می گیرد.",
      choices
    },
    "189": {
      question: "من بعضی وقت ها با اعمال زور یا تملق و خوش آمد گویی مردم را به انجام کارهای مورد نظر خود وادار می کنم.",
      choices
    },
    "190": {
      question: "من در مورد تمیز کردن چیزها وسواس ندارم.",
      choices
    },
    "191": {
      question: "بعضی وقت ها زندگی به نظرم تیره و نومید کننده می آید.",
      choices
    },
    "192": {
      question: "در موقع صحبت با دیگران، من غالبا بیشتر از دیگران حرف می زنم.",
      choices
    },
    "193": {
      question: "هم حس شدن با دیگران، یعنی داشتن همان احساس که دیگران دارند، برای من آسان است.",
      choices
    },
    "194": {
      question: "من خود را آدم خیر و نیکوکاری می دانم.",
      choices
    },
    "195": {
      question: "من سعی می کنم کارهای خود را با دقت انجام دهم تا انجام مجدد آنها، لزوم پیدا نکند.",
      choices
    },
    "196": {
      question: "اگر در مورد کسی حرف بدی زده یا کار غلطی انجام داده باشم، به سختی می توانم بار دیگر به روی او نگاه کنم.",
      choices
    },
    "197": {
      question: "همه زندگی و کارهای من با سرعت انجام می گیرد.",
      choices
    },
    "198": {
      question: "در موقع استفاده از تعطیلات، من ترجیح میدهم به جاهایی بروم که قبلا آنها را امتحان کرده و به درستی شناخته ام.",
      choices
    },
    "199": {
      question: "من آدم کله شق و سرسختی هستم.",
      choices
    },
    "200": {
      question: "من سعی می کنم همه کارهای خود را به بهترین نحو انجام دهم.",
      choices
    },
    "201": {
      question: "من بعضی مواقع کارهایی را بدون تأمل انجام می دهم که بعدا پشیمان می شوم.",
      choices
    },
    "202": {
      question: "من از رنگ های روشن و لباس های پر زرق و برق خوشم می آید.",
      choices
    },
    "203": {
      question: "من کنجکاوی فکری بسیار زیادی دارم.",
      choices
    },
    "204": {
      question: "من ترجیح می دهم از دیگران تمجید کنم تا این که خودم مورد تمجید قرار گیرم.",
      choices
    },
    "205": {
      question: "آنقدر خرده کاری برای انجام دادن وجود دارد که من گاهی همه آنها را نادیده می گیرم.",
      choices
    },
    "206": {
      question: "در شرایطی که به نظر می رسد همه چیز به طور غلط پیش می رود، من باز هم می توانم تصمیمات خوبی اتخاذ کنم.",
      choices
    },
    "207": {
      question: "من به ندرت برای توصیف تجارب خود از کلماتی چون فوق العاده با جنجالیاستفاده می کنم.",
      choices
    },
    "208": {
      question: "من فکر می کنم اگر کسی در سن ۲۵ سالگی هنوز نداند به چه چیزهایی اعتقاد دارد، باید در سلامت عقل او شک کرد.",
      choices
    },
    "209": {
      question: "من نسبت به افرادی که کمتر از من خوشبخت هستند، احساس همدردی می کنم.",
      choices
    },
    "210": {
      question: "من قبل از رفتن به یک مسافرت به دقت برنامه ریزی می کنم.",
      choices
    },
    "211": {
      question: "بعضی مواقع افکار ترسناکی به ذهن من می آیند.",
      choices
    },
    "212": {
      question: "من نسبت به همه همکاران خود نوعی علاقه و مسئولیت شخصی احساس می کنم.",
      choices
    },
    "213": {
      question: "من نمی توانم بگذارم افکارم در هر جهتی که می خواهند سیر کنند.",
      choices
    },
    "214": {
      question: "من به طبیعت و ذات انسان بسیار اعتماد دارم.",
      choices
    },
    "215": {
      question: "من در کار خود فردی مؤثر و کارآمد هستم.",
      choices
    },
    "216": {
      question: "حتى آزردگی ها و ناراحتی های خیلی کوچک می توانند در من احساس ناکامی و محرومیت کنند.",
      choices
    },
    "217": {
      question: "من از مهمانی های بزرگ و پرجمعیت لذت می برم.",
      choices
    },
    "218": {
      question: "من از خواندن اشعاری که روی احساسات و تخیلات تأکید می کند، بیشتر لذت می برم تا اشعاری که داستان خاصی را بیان می کنند.",
      choices
    },
    "219": {
      question: "من از زیرکی خود در کنترل و اداره مردم به خود می بالم.",
      choices
    },
    "220": {
      question: "من وقت زیادی را برای پیدا کردن چیزهایی که در جای اشتباه گذاشته ام می گذارم.",
      choices
    },
    "221": {
      question: "بیشتر وقت ها که کارها طبق نقشه پیش نمی رود یا اشتباه از آب در می آیند، احساس دلسردی می کنم و می خواهم آنها را ناتمام رها کنم.",
      choices
    },
    "222": {
      question: "قبول مسئولیت اداره یا رهبری یک موقعیت برای من آسان نیست.",
      choices
    },
    "223": {
      question: "اشیاء غیر عادی از قبیل بعضی عطرها یا اسامی مکانهای دور می توانند احساسات و عواطف شدیدی در من ایجاد نمایند.",
      choices
    },
    "224": {
      question: "من اگر بتوانم به دیگران کمک کنم، به آسانی و بدون درخواست آنها آن کار را می کنم.",
      choices
    },
    "225": {
      question: "من واقعا باید مريض باشم تا یک روز سر کار نروم.",
      choices
    },
    "226": {
      question: "وقتی افراد آشنای من کار احمقانه ای انجام می دهند به جای آنها احساس خجالت می کنم.",
      choices
    },
    "227": {
      question: "من شخص بسیار فعالی هستم.",
      choices
    },
    "228": {
      question: "من وقتی به جایی می روم، از همان مسیر همیشگی استفاده می کنم.",
      choices
    },
    "229": {
      question: "من اغلب با اعضای خانواده و همکارانم بگو مگو دارم.",
      choices
    },
    "230": {
      question: "من از جمله افرادی هستم که نمی توانند هرگز بیکار بنشینند.",
      choices
    },
    "231": {
      question: "من همیشه می توانم احساساتم را کنترل کنم.",
      choices
    },
    "232": {
      question: "در حوادث ورزشی، من دوست دارم جزیی از جمعیت باشم و مثل بقیه رفتار کنم.",
      choices
    },
    "233": {
      question: "من علایق فکری وسیع و متنوعی دارم.",
      choices
    },
    "234": {
      question: "من آدم مهم و برتری هستم.",
      choices
    },
    "235": {
      question: "من آدم بسیار با انضباطی هستم و می توانم خود را خوب کنترل کنم.",
      choices
    },
    "236": {
      question: "من از لحاظ عاطفی آدم کاملا با ثبات و متعادلی هستم.",
      choices
    },
    "237": {
      question: "من زود خنده ام می گیرد.",
      choices
    },
    "238": {
      question: "به عقیده من فلسفه جدید «آزادی فردی» فلسفه قابل قبولی نیست.",
      choices
    },
    "239": {
      question: "من ترجیح میدهم دیگران مرا فرد دل رحم و خطابخش بشناسند تا صرفا طرفدار اجرای عدالت.",
      choices
    },
    "240": {
      question: "من قبل از پاسخ دادن به هر سؤال به دقت درباره آن فکر می کنم.",
      choices
    }
  },
};