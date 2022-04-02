import { entityTypes } from "../../types";

export const testStructure: entityTypes.ITestStructure = {
  id: "mbti",
  title: {
    fa: "تیپ نمای مایرز-بریگز",
    en: "Myers-Briggs Type Indicator (MBTI)",
  },
  chartType: ["progress"],
  minutesToFill: 20,
  description: "",
  shortName: "MBTI",
  fields: {
    "1": {
      question: "شناختن شما:",
      questionHint: undefined,
      choices: [
        {
          label: " آسان است.",
          value: 1,
        },
        {
          label: "دشوار است.",
          value: 2,
        },
      ],
    },
    "2": {
      question: "آیا:",
      questionHint: undefined,
      choices: [
        {
          label: "  با هرکسی تا حدی که لازم می دانید به راحتی صحبت می کنید.",
          value: 1,
        },
        {
          label:
            "فقط با افراد خاصی آن هم در شرایط خاصی می توانید زیاد صحبت کنید؟",
          value: 2,
        },
      ],
    },
    "3": {
      question: "به طور معمول شما:",
      questionHint: undefined,
      choices: [
        {
          label: " زودجوش هستید.",
          value: 1,
        },
        {
          label: "آرام و درون گرا هستید.",
          value: 2,
        },
      ],
    },
    "4": {
      question: "روابط دوستانه شما:",
      questionHint: undefined,
      choices: [
        {
          label: "با افرادی معدود ولی عمیق است.",
          value: 1,
        },
        {
          label: "با تعداد بسیاری از افراد ولی سطحی است.",
          value: 2,
        },
      ],
    },
    "5": {
      question: "میتوانید به طور نامحدود ",
      questionHint: undefined,
      choices: [
        {
          label: "فقط با کسانی که علایق مشترکی با شما دارند صحبت کنید.",
          value: 1,
        },
        {
          label: "می توانید تقریبا با هرکسی صحبت کنید.",
          value: 2,
        },
      ],
    },
    "6": {
      question: "در صحبت کردن با دوستانتان:",
      questionHint: undefined,
      choices: [
        {
          label: "گاهی مسائل شخصی را به طور خصوصی به آنان می گویید.",
          value: 1,
        },
        {
          label: "تقریبا هرگز چیزی را که نمی خواهید بگویید بیان نمی کنید. ",
          value: 2,
        },
      ],
    },
    "7": {
      question: "به طور معمول:",
      questionHint: undefined,
      choices: [
        {
          label: "آزادانه احساسات خود را نشان می دهید.",
          value: 1,
        },
        {
          label: "احساسات خود را نشان نمی دهید.",
          value: 2,
        },
      ],
    },
    "8": {
      question: "وقتی غریبه ها به شما توجه می کنند:",
      questionHint: undefined,
      choices: [
        {
          label: " احساس ناراحتی می کنید.",
          value: 1,
        },
        {
          label: "اصلا ناراحت نمی شوید.",
          value: 2,
        },
      ],
    },
    "9": {
      question: "آیا عادت دارید:",
      questionHint: undefined,
      choices: [
        {
          label: " به هیچ کس اعتماد نکنید یا حداکثر به یک نفر اعتماد کنید.",
          value: 1,
        },
        {
          label: "تعدادی دوست دارید که به آنها اعتماد می کنید.",
          value: 2,
        },
      ],
    },
    "10": {
      question: "آیا:",
      questionHint: undefined,
      choices: [
        {
          label:
            " فکر می کنید همه ی کسانی را که دوست دارید می دانند که دوستشان دارید.",
          value: 1,
        },
        {
          label: "به بعضی افراد علاقه مند هستید بی آن که بگذارید آنها بدانند.",
          value: 2,
        },
      ],
    },
    "11": {
      question: "وقتی با گروهی از افراد هستید معمولا ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " به صحبت گروهی بپردازید.",
          value: 1,
        },
        {
          label: "هر بار فقط با یک فرد صحبت کنید.",
          value: 2,
        },
      ],
    },
    "12": {
      question: " شما در میان دوستانتان:",
      questionHint: undefined,
      choices: [
        {
          label: " یکی از آخرین کسانی هستید که خبرها را می شنوید.",
          value: 1,
        },
        {
          label: "همه نوع خبری در مورد هرکسی دارید.",
          value: 2,
        },
      ],
    },
    "13": {
      question: "در یک محفل اجتماعی:",
      questionHint: undefined,
      choices: [
        {
          label:
            " سعی می کنید کسی را که دوست دارید با او صحبت کنید به گوشه ای بکشید.",
          value: 1,
        },
        {
          label: "با گروه می جوشید.",
          value: 2,
        },
      ],
    },
    "14": {
      question: "در میهمانی ها:",
      questionHint: undefined,
      choices: [
        {
          label: " گاهی کسل می شوید.",
          value: 1,
        },
        {
          label: "همیشه به شما خوش میگذرد.",
          value: 2,
        },
      ],
    },
    "15": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: "  صحبت کردن",
          value: 1,
        },
        {
          label: "نوشتن ",
          value: 2,
        },
      ],
    },
    "16": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " آرام",
          value: 1,
        },
        {
          label: "سرزنده",
          value: 2,
        },
      ],
    },
    "17": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " ساکت",
          value: 1,
        },
        {
          label: "پرحرف",
          value: 2,
        },
      ],
    },
    "18": {
      question: "در یک مهمانی دوست دارید:",
      questionHint: undefined,
      choices: [
        {
          label: "کاری کنید که مراسم به خوبی برگزار شود.",
          value: 1,
        },
        {
          label: "می گذارید هرکسی به میل خودش خوش بگذراند.",
          value: 2,
        },
      ],
    },
    "19": {
      question: "هنگامی که با گروهی از دوستان نزدیک خودتان هستید:",
      questionHint: undefined,
      choices: [
        {
          label: "بیشتر از بقیه صحبت می کنید.",
          value: 1,
        },
        {
          label: "کمتر از بقیه صحبت می کنید",
          value: 2,
        },
      ],
    },
    "20": {
      question: "در یک گروه بزرگ اغلب:",
      questionHint: undefined,
      choices: [
        {
          label: " دیگران را معرفی می کنید.",
          value: 1,
        },
        {
          label: "معرفی می شوید.",
          value: 2,
        },
      ],
    },
    "21": {
      question: "زمانی که در مورد یک پیشامد فکر می کنید ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " در این مورد با شخصی صحبت کنید.",
          value: 1,
        },
        {
          label: "در مورد آن خوب فکر کنید.",
          value: 2,
        },
      ],
    },
    "22": {
      question:
        "به طور معمول افرادی که تازه با شما آشنا می شوند در چه مدت زمانی می توانند بگویند به چه چیزی علاقه دارید:",
      questionHint: undefined,
      choices: [
        {
          label: " خیلی سریع",
          value: 1,
        },
        {
          label: " تنها پس از آن که شما را خوب شناختند .",
          value: 2,
        },
      ],
    },
    "23": {
      question: "به طور معمول منظور شما از آنچه به زبان می آورید:",
      questionHint: undefined,
      choices: [
        {
          label: " بیشتر است.",
          value: 1,
        },
        {
          label: "کم تر است.",
          value: 2,
        },
      ],
    },
    "24": {
      question: "به هنگام ملاقات با غریبه ها:",
      questionHint: undefined,
      choices: [
        {
          label: "برای تان خوشایند یا دست کم راحت است.",
          value: 1,
        },
        {
          label: "زحمت زیادی برای تان دارد.",
          value: 2,
        },
      ],
    },
    "25": {
      question: "وقتی در جلسه ای راجع به چیزی نظری دارید که باید گفته شود:",
      questionHint: undefined,
      choices: [
        {
          label: "آن را مطرح می کنید.",
          value: 1,
        },
        {
          label: "در مورد گفتن آن تردید دارید.",
          value: 2,
        },
      ],
    },
    "26": {
      question: "ترجیح می دهید در نزد مردم  چگونه به نظر برسید؟",
      questionHint: undefined,
      choices: [
        {
          label: " فردی اهل عمل.",
          value: 1,
        },
        {
          label: "فردی مبتکر و خلاق.",
          value: 2,
        },
      ],
    },
    "27": {
      question: "زمانی که با هدف سرگرم شدن مطالعه می کنید:",
      questionHint: undefined,
      choices: [
        {
          label: " از شیوه بیان عجیب و ابتکاری مطالب لذت می برید.",
          value: 1,
        },
        {
          label: "نویسندگانی را دوست دارید که به روشنی منظور خود را می رسانند.",
          value: 2,
        },
      ],
    },
    "28": {
      question: "اگر معلم بودید ترجیح میدادید:",
      questionHint: undefined,
      choices: [
        {
          label: " واقعیتها را تدریس کنید.",
          value: 1,
        },
        {
          label: "نظریه ها را شرح دهید.",
          value: 2,
        },
      ],
    },
    "29": {
      question: " معمولا با کدام شخص راحت تر ارتباط برقرار می کنید:",
      questionHint: undefined,
      choices: [
        {
          label: " با فردی تخیلی.",
          value: 1,
        },
        {
          label: "با فردی واقع بین.",
          value: 2,
        },
      ],
    },
    "30": {
      question: "در انجام کاری که بسیاری از مردم انجام می دهند ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " آن را به شیوه پذیرفته شده انجام دهید.",
          value: 1,
        },
        {
          label: "روش خاص خود را برای انجام آن ابداع کنید.",
          value: 2,
        },
      ],
    },
    "31": {
      question: "در شیوه زندگی تان ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " متفاوت باشید.",
          value: 1,
        },
        {
          label: "به طور متعارف و معمول عمل کنید.",
          value: 2,
        },
      ],
    },
    "32": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " عبارت",
          value: 1,
        },
        {
          label: "مفهوم",
          value: 2,
        },
      ],
    },
    "33": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " ساختن",
          value: 1,
        },
        {
          label: "اختراع کردن",
          value: 2,
        },
      ],
    },
    "34": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " واقعی ",
          value: 1,
        },
        {
          label: "انتزاعی ",
          value: 2,
        },
      ],
    },
    "35": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " حروفي",
          value: 1,
        },
        {
          label: "ارقامی",
          value: 2,
        },
      ],
    },
    "36": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " تولید",
          value: 1,
        },
        {
          label: "طراحی",
          value: 2,
        },
      ],
    },
    "37": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " علامت",
          value: 1,
        },
        {
          label: "نماد",
          value: 2,
        },
      ],
    },
    "38": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " پذیرش",
          value: 1,
        },
        {
          label: "تغییر",
          value: 2,
        },
      ],
    },
    "39": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " شناخته شده",
          value: 1,
        },
        {
          label: "ناشناخته",
          value: 2,
        },
      ],
    },
    "40": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " واقعیت ها",
          value: 1,
        },
        {
          label: "ایده ها",
          value: 2,
        },
      ],
    },
    "41": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " زیربنا",
          value: 1,
        },
        {
          label: "روبنا",
          value: 2,
        },
      ],
    },
    "42": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " نظریه",
          value: 1,
        },
        {
          label: "تجربه",
          value: 2,
        },
      ],
    },
    "43": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " مایع",
          value: 1,
        },
        {
          label: "جامد",
          value: 2,
        },
      ],
    },
    "44": {
      question: "کدام یک تمجید بیشتری از یک فرد است:",
      questionHint: undefined,
      choices: [
        {
          label: "فردی که بصیرت دارد.",
          value: 1,
        },
        {
          label: "فردی که عقل سلیم دارد.",
          value: 2,
        },
      ],
    },
    "45": {
      question:
        "اگر بخواهید در همسایگی خود برای مسائلی مانند کمک به کمیته امداد به جمع آوری اعانه بپردازید:",
      questionHint: undefined,
      choices: [
        {
          label: "درخواست شما خلاصه و تجاری است.",
          value: 1,
        },
        {
          label: "دوستانه و اجتماعی است.",
          value: 2,
        },
      ],
    },
    "46": {
      question: "کدام گزاره تعریف و تمجید بیشتری از شما به شمار می آید:",
      questionHint: undefined,
      choices: [
        {
          label: "شخصی با احساسات واقعی",
          value: 1,
        },
        {
          label: "شخصی همیشه منطقی",
          value: 2,
        },
      ],
    },
    "47": {
      question: "در تصمیم گیری های شما بیشتر:",
      questionHint: undefined,
      choices: [
        {
          label: " احساساتتان بر عقلتان غلبه دارد.",
          value: 1,
        },
        {
          label: "عقلتان بر احساساتتان غلبه دارد.",
          value: 2,
        },
      ],
    },
    "48": {
      question: "هنگام گفت و گو بیشتر تمایل دارید:",
      questionHint: undefined,
      choices: [
        {
          label: " تمجید کنید.",
          value: 1,
        },
        {
          label: "سرزنش کنید.",
          value: 2,
        },
      ],
    },
    "49": {
      question: "احساس می کنید که کدام یک عیب بدتری به شمار می آید:",
      questionHint: undefined,
      choices: [
        {
          label: " همدردی نکردن",
          value: 1,
        },
        {
          label: "استدلال پذیر نبودن",
          value: 2,
        },
      ],
    },
    "50": {
      question:
        "اگر بخواهید عمل خاصی را انجام دهید، کدام یک از این دو گزینه در نظر شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " مردم خیلی دوست دارند که شما آن را انجام دهید.",
          value: 1,
        },
        {
          label: "این منطقی ترین کاری است که انجام می دهید.",
          value: 2,
        },
      ],
    },
    "51": {
      question: "فکر می کنید وحود کدام یک در فرد نقص بیشتری به حساب می آید:",
      questionHint: undefined,
      choices: [
        {
          label: " خیلی احساساتی بودن.",
          value: 1,
        },
        {
          label: "به اندازه کافی احساساتی نبودن.",
          value: 2,
        },
      ],
    },
    "52": {
      question: "احساس می کنید کدام یک عیب بدتری به شمار می آید:",
      questionHint: undefined,
      choices: [
        {
          label: " گرمی زیاد نشان دادن.",
          value: 1,
        },
        {
          label: "به اندازه کافی گرم نبودن.",
          value: 2,
        },
      ],
    },
    "53": {
      question: "شما به طور معمول:",
      questionHint: undefined,
      choices: [
        {
          label: " برای احساسات بیشتر از منطق ارزش قائل هستید.",
          value: 1,
        },
        {
          label: "برای منطق بیشتر از احساس ارزش قائل هستید.",
          value: 2,
        },
      ],
    },
    "54": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " متقاعد کردن",
          value: 1,
        },
        {
          label: "لمس کردن",
          value: 2,
        },
      ],
    },
    "55": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " موافقت کردن",
          value: 1,
        },
        {
          label: "پرسیدن",
          value: 2,
        },
      ],
    },
    "56": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " مزایا",
          value: 1,
        },
        {
          label: "برکت",
          value: 2,
        },
      ],
    },
    "57": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " تحلیل کردن",
          value: 1,
        },
        {
          label: "همدردی",
          value: 2,
        },
      ],
    },
    "58": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " نرم",
          value: 1,
        },
        {
          label: "سخت",
          value: 2,
        },
      ],
    },
    "59": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " پایبند به اندیشه خود",
          value: 1,
        },
        {
          label: "دلگرم",
          value: 2,
        },
      ],
    },
    "60": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " چه کسی؟",
          value: 1,
        },
        {
          label: "چه چیزی؟",
          value: 2,
        },
      ],
    },
    "61": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " محتاط",
          value: 1,
        },
        {
          label: "خوش خیال",
          value: 2,
        },
      ],
    },
    "62": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " ملایم",
          value: 1,
        },
        {
          label: "محکم",
          value: 2,
        },
      ],
    },
    "63": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " عدالت",
          value: 1,
        },
        {
          label: "بخشندگی",
          value: 2,
        },
      ],
    },
    "64": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " غیر انتقادی",
          value: 1,
        },
        {
          label: "انتقادی",
          value: 2,
        },
      ],
    },
    "65": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " متفکر ",
          value: 1,
        },
        {
          label: "احساسی",
          value: 2,
        },
      ],
    },
    "66": {
      question: "کدام لغت برای شما جذاب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: " دلسوزی",
          value: 1,
        },
        {
          label: "دوراندیشی",
          value: 2,
        },
      ],
    },
    "67": {
      question: "به کدام یک بیشتر اهمیت می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " احساسات افراد",
          value: 1,
        },
        {
          label: "حقوق افراد",
          value: 2,
        },
      ],
    },
    "68": {
      question: "به طور طبیعی",
      questionHint: undefined,
      choices: [
        {
          label: " به مردم بیشتر از اشیاء علاقه مندید.",
          value: 1,
        },
        {
          label:
            "به اشیاء و نحوه کار آن ها بیشتر از روابط انسان ها علاقه مندید.",
          value: 2,
        },
      ],
    },
    "69": {
      question: "برای انجام یک کار:",
      questionHint: undefined,
      choices: [
        {
          label:
            " آن را زود شروع می کنید، طوری که پس از پایان کار وقت اضافی داشته باشید.",
          value: 1,
        },
        {
          label:
            "آن را به لحظه آخر واگذار کرده و سعی می کنید هرچه سریع تر انجام دهید.",
          value: 2,
        },
      ],
    },
    "70": {
      question:
        "هنگامی که رخدادی پیش بینی نشده شما را مجبور به کنار گذاشتن برنامه روزانه تان می نماید:",
      questionHint: undefined,
      choices: [
        {
          label:
            " آیا به وجود آمدن وقفه در برنامه تان را مزاحمت تلقی می نمایید.",
          value: 1,
        },
        {
          label: "با تغییر وضعیت به وجود آمده با خوش رویی برخورد می کنید.",
          value: 2,
        },
      ],
    },
    "71": {
      question: "آیا مطابق برنامه عمل کردن:",
      questionHint: undefined,
      choices: [
        {
          label: "مورد رضایت شماست.",
          value: 1,
        },
        {
          label: "شما را در تنگنا قرار می دهد.",
          value: 2,
        },
      ],
    },
    "72": {
      question: "هنگام شرو یک پروژه بزرگ که تا یک هفته باید انجام شود:",
      questionHint: undefined,
      choices: [
        {
          label:
            "زمانی را برای تهیه فهرستی از کارهایی که می بایست انجام شوند بر اساس اولویت در نظر می گیرید.",
          value: 1,
        },
        {
          label: "دل به دریا می زنید و شروع می کنید.",
          value: 2,
        },
      ],
    },
    "73": {
      question:
        "اگر قرار باشد که کاری خاص را  طبق برنامه ریزی انجام شده و مشخصی انجام دهید:",
      questionHint: undefined,
      choices: [
        {
          label: "طبق برنامه عمل کردن برای شما خوشایند است.",
          value: 1,
        },
        {
          label: "از در چهارچوب قرار گرفتن احساس ناخوشایندی می کنید.",
          value: 2,
        },
      ],
    },
    "74": {
      question: "آیا ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: " قرار ملاقاتها وعده ها و میهمانی ها را از پیش تعیین کنید؟",
          value: 1,
        },
        {
          label:
            "فردی باشید که در لحظه آخر بتوانید آزادانه آن جایی را که تمایل دارید انتخاب کنید؟",
          value: 2,
        },
      ],
    },
    "75": {
      question: "آیا:",
      questionHint: undefined,
      choices: [
        {
          label: "ترجیح می دهید کارها را در دقیقه آخر انجام دهید. ",
          value: 1,
        },
        {
          label: "انجام دادن کارها در دقیقه آخر شما را عصبی می کند.",
          value: 2,
        },
      ],
    },
    "76": {
      question: "آیا فکر می کنید که داشتن یک برنامه روزانه:",
      questionHint: undefined,
      choices: [
        {
          label: "راحت ترین روش برای دادن کارهاست.",
          value: 1,
        },
        {
          label: "حتی اگر ضروری باشد رنج آور است.",
          value: 2,
        },
      ],
    },
    "77": {
      question: "وقتی که کار خاصی برای انجام دادن دارید آیا مایلید:",
      questionHint: undefined,
      choices: [
        {
          label: " پیش از آغاز کار، با دقت آن را سازماندهی کنید.",
          value: 1,
        },
        {
          label: "آنچه ضروری است را حین انجام کار متوجه شوید.",
          value: 2,
        },
      ],
    },
    "78": {
      question: "آیا:",
      questionHint: undefined,
      choices: [
        {
          label: "روزمره بودن برای تان ساده تر است.",
          value: 1,
        },
        {
          label: "متنوع بودن را ترجیح می دهید.",
          value: 2,
        },
      ],
    },
    "79": {
      question: "در زندگی شخصی وقتی به پایان آماده مسئولیتی میرسید:",
      questionHint: undefined,
      choices: [
        {
          label: "می دانید کار بعدی چیست و آماده درگیر شدن با آن هستید.",
          value: 1,
        },
        {
          label: "تا پیشامد بعدی از آرامش خود خوشنود هستید.",
          value: 2,
        },
      ],
    },
    "80": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: "وقت شناس",
          value: 1,
        },
        {
          label: "بی دغدغه",
          value: 2,
        },
      ],
    },
    "81": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: "منظبط",
          value: 1,
        },
        {
          label: "آسان گیر",
          value: 2,
        },
      ],
    },
    "82": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: "منظم",
          value: 1,
        },
        {
          label: "خودمانی",
          value: 2,
        },
      ],
    },
    "83": {
      question: "کدام لغت برای شما جالب تر است:",
      questionHint: undefined,
      choices: [
        {
          label: "برنامه ریز",
          value: 1,
        },
        {
          label: "بی برنامه",
          value: 2,
        },
      ],
    },
    "84": {
      question: "آیا به طور کلی ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: "برای دیدار کسی از قبل برنامه ریزی کنید.",
          value: 1,
        },
        {
          label: "آزاد باشید و لحظه ای عمل کنید.",
          value: 2,
        },
      ],
    },
    "85": {
      question: "وقتی برای یک روز جایی می روید، ترجیح می دهید:",
      questionHint: undefined,
      choices: [
        {
          label: "برای این که چه کاری و چه موقع انجام دهید برنامه ریزی کنید.",
          value: 1,
        },
        {
          label: "فقط بروید.",
          value: 2,
        },
      ],
    },
    "86": {
      question: "در مورد کارهای روزمره ترجیح می دهید.",
      questionHint: undefined,
      choices: [
        {
          label: "ابتدای صبح همه کارها را انجام دهید.",
          value: 1,
        },
        {
          label:
            "در ضمن فرصت پیش آمده حین انجام کارهای جالب آن ها را انجام می دهید.",
          value: 2,
        },
      ],
    },
    "87": {
      question: "به طور معمول:",
      questionHint: undefined,
      choices: [
        {
          label: "از اتمام کارها پیش از زمان موعد احساس رضایت می کنید.",
          value: 1,
        },
        {
          label: "از سرعت و کارآمدی خود در لحظات آخر انجام کار لذت می برید.",
          value: 2,
        },
      ],
    },
  },
};
