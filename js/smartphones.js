var smartphones = [
    {
        id: 1,
        brand: "Xiaomi ",
        name: "Poco M3 64 ГБ",
        imgURL: "images/smartphones/1.jpg",
        price: 216,
        count: 1,
        info: "Xiaomi Poco M3 с улучшенным дисплеем, тройной камерой, ёмким аккумулятором на 6000 мА⋅ч и мощным процессором Qualcomm Snapdragon 662 идеально подходит для решения любых задач. Уникальный дизайн и эргономичная форма также придутся по вкусу любителям стильных гаджетов. Насыщенный 6.53-дюймовый экран FHD имеет высокую частоту обновления и обеспечивает плавную работу.\n" +
            "Основная камера имеет высокое разрешение (48 Мп) и делает фотографии отличного качества. Кроме того, камера для макросъемки позволит запечатлеть объекты с расстояния 2 см, а с помощью датчика глубины вы сможете делать потрясающие портреты с размытым задним фоном. Фронтальная камера разрешением 8 Мп сделает каждое ваше фото идеальным благодаря встроенным интеллектуальным алгоритмам, которые улучшают и подчеркивают фото.\n" +
            "Процессор данной модели прекрасно справляется с решением любых современных задач и оптимально поддерживает ресурсоемкие игры и приложения. Для хранения мультимедии предусмотрена встроенная память объёмом 64 ГБ. Ёмкий аккумулятор обеспечивает многочасовую работу устройства, а благодаря функции быстрой зарядки вам не придется долго ждать.",
    },
    {
        id: 2,
        count: 1,
        brand: "Xiaomi ",
        name: "Mi 10T 128 ГБ",
        imgURL: "images/smartphones/2.jpg",
        price: 595,
        info: "Xiaomi Mi 10T с улучшенным дисплеем, тройной камерой, возможностью съёмки видео в разрешении 8К и мощным процессором Qualcomm Snapdragon 865 идеально подойдет для решения любых задач. Приятный дизайн и эргономичная форма также придутся по вкусу любителям стильных девайсов. Насыщенный 6.67-дюймовый экран FHD+ Dot имеет высокую частоту обновления и обеспечивает плавную работу.\n" +
            "\n" +
            "Основная камера имеет высокое разрешение 64 Мп и делает фотографии практически профессионального уровня. Кроме того, с ультраширокоугольным сенсором на 13 Мп с углом съемки 123 градуса вы сможете делать потрясающие пейзажные фото и панорамы, а камера для макросъемки позволит запечатлеть объекты с расстояния 2 см. Фронтальная камера высокого разрешения (20 Мп) сделает каждое ваше фото идеальным благодаря встроенным интеллектуальным алгоритмам, которые улучшают и подчеркивают фото.\n" +
            "\n" +
            "Процессор данной модели прекрасно справляется с решением любых современных задач и оптимально поддерживает ресурсоемкие игры и приложения. Ёмкий аккумулятор на 5000 мА⋅ч обеспечивает многочасовую работу устройства, а благодаря функции быстрой зарядки вам не придется долго ждать.\n" +
            "\n",
    },
    {
        id: 3,
        brand: "Samsung ",
        name: "Galaxy S20 + ",
        imgURL: "images/smartphones/3.jpg",
        price: 2163,
        count: 1,

        info: "\n" +
            "Samsung Galaxy S20 + smartfonining ekrani tirnalishga chidamli maxsus Gorilla Glass 6 himoya oynasi bilan qoplangan. 6,7 dyumli Infinity-O displeyi eng to'yingan va batafsil tasvirni 3200x1440 piksel piksellar bilan yuqori sifatli formatda uzatadi. AMOLED ramkasiz ekrani smartfonning egasiga kino, o'yin va videolarning cheksiz dunyosiga to'liq sho'ng'ish imkonini beradi. Bundan tashqari, ekranga barmoq izi sensori o'rnatilgan bo'lib, u  bitta tegish bilan ochishga imkon beradi.\n" +
            "\n" +
            "\n" +
            "Qayilgan burchaklar bilan noyob dizayni tufayli, qurilma bir qo'lda ham barqaror turadi. Bunga qo'shimcha ravishda, u IP68 standartiga muvofiq chang va namlikdan himoyalangan. Shuning uchun u hatto 30 daqiqa davomida 1,5 metr chuqurlikdagi suv havzasiga chidamlidir. Shuning uchun, endi siz uning ustiga tasodifiy suyuqlik to’kilishidan qo'rqmasangiz ham bo’ladi.\n" +
            "\n" +
            "\n" +
            "Orqa tomonda smartfon to'rtta linzadan iborat noyob kamera bloki bilan jihozlangan. Ulardan ikkitasi 12 megapikselli - gibrid optik kattalashtirilgan va yuqori aniqlikdagi keng ekranli telefon optikasiga ega. Asosiy kamera 64 MP linzalari ajoyib va yuqori sifatli tasvirlarni yuqori formatda yaratadi. Yordamchi ToF sensori ajoyib portretlar uchun fonni ajratib olishga yordam beradi. Sun'iy intellekt tizimlarining qo'llashi tufayli tasvirlarning sifati har doim yuqori bo’ladi.\n" +
            "\n" +
            "\n" +
            "Old kamera moduli ekranning yuqori qismida joylashgan. Shu sababli, ekranning foydali maydoni sezilarli darajada oshdi. Portret suratga olish funksiyasiga ega 10 megapikselli old kamera ajoyib selfie olish, shuningdek, video chatlarda do'stlaringiz bilan onlayn suhbatlashish imkoniyatini beradi. \"Boke\" va \"Live Focus\" funksiyalaridan foydalanib, siz ekspressiv portretni olasiz. Bundan tashqari, endi o'zingizning yuz ifodalaringizni va imo-ishoralaringizni to'liq takrorlaydigan animatsion emojilarni yaratishingiz mumkin, keyin uni ijtimoiy tarmoqlar yoki xabarlar orqaliga yuborish mumkin.\n" +
            "\n" +
            "\n" +
            "Ushbu model zamonaviy 8 yadroli Exynos 990 protsessori asosida ishlaydi va eng so'nggi Mali-G77 apparati va video-tezlashtiruvchisi bilan jihozlangan bo'lib, ular zamonaviy o'yinlarni qo'llashga juda yaxshi yordam beradi. Shu bilan birga, One UI ning xususiy grafik qobig'i Android 10 operatsion tizimi asosida ishlaydi, 8 Gb tezkor xotira hajmi bir vaqtning o'zida bir nechta dastur va jarayonlarning barqaror ishlashini ta'minlash uchun yetarli. Shuningdek, juda ko'p miqdordagi musiqa, o'yinlar, video va boshqa fayllarni saqlash uchun - 128 Gb ichki xotira mavjud. Agar kerak bo'lsa, ichki xotirani microSD xotira kartalarini qo'llash bilan 1024 Gb ga oshirish mumkin. Nano-SIM kartalar uchun ikkita uyani o'rnatib, siz ish va shaxsiy qo'ng'iroqlarni ajratib qo'yishingiz mumkin.\n" +
            "\n" +
            "\n" +
            "Sig'imi 4500 mA / soat bo'lgan batareya smartfonga munosib avtonomiya beradi va tez zaryadlangan quvvat adapteri sizni uzoq kutishga majbur qilmaydi. Uning 30 daqiqali zaryadi butun kunlik ish uchun yetarli. Shuningdek, zamonaviy USB Type-C ulagichi mavjud. Bunga qo'shimcha ravishda, siz simsiz zaryadlash funksiyasidan ham foydalanishingiz mumkin.\n" +
            "\n",
    },
    {
        id: 4,
        count: 1,

        brand: "",
        name: "Galaxy Note 20 Ultra",
        imgURL: "images/smartphones/4.jpg",
        price: 1550,
        info: "Смартфон Samsung Galaxy Note 20 Ultra White работает на базе мощнtqituj процессора Samsung Exynos 990, который обеспечивает высокую производительность всего устройства. Кроме того, для установки и хранения огромного количества приложений, игр, видео и других файлов – в нём предусмотрена встроенная память на 256 ГБ. А его оперативная память на 8 ГБ отлично справляется со стабильной работой в многозадачном режиме. Более того, встроенная система защиты Samsung Knox обеспечивает комплексную защиту аппаратного и программного обеспечения для безопасности ваших данных в режиме реального времени.\n" +
            "\n" +
            "\n" +
            "Аккумулятор устройства с невероятной ёмкостью 4500 мАч оснащён системой интеллектуального энергопотребления, которая эффективно продлевает работу смартфона. А быстрая зарядка мощностью 25 Вт всего за 30 минут способна зарядить девайс на 50%, а также вы сможете воспользоваться функцией беспроводной зарядки PowerShare.\n" +
            "\n" +
            "\n" +
            "Впечатляющий девайс откроет вам абсолютно новый мир со множеством возможностей. Это первый смартфон, объединивший в себе электронное перо. В конструкции девайса предусмотрен обновлённый S Pen, который отличается высокой скоростью отклика, создавая ощущение лёгкого пера. К тому же, такое «перо» имеет возможности подключения к Bluetooth и синхронизации на вашем ПК посредством фирменного приложения OneNote. Металлический корпус устройства идеально дополняет оригинальный камерный блок. Яркий 6.9-дюймовый дисплей отображает насыщенные и детализированные изображения с естественными оттенками даже при сильном солнечном свете.\n" +
            "\n" +
            "\n" +
            "Профессиональная камера девайса с тремя объективами имеет множество современный функций. С помощью таких камер вы сможете создавать видео профессионального уровня потрясающей чёткости и детализации. Вы также сможете воспользоваться самыми разнообразными режимами и функциями, для создания своих шедевров. К тому же, с помощью режима стабилизации вы сможете добавлять снимкам больше чёткости и насыщенности. Кроме того, 5-кратный гибридный оптический зум позволит увеличивать кадры в 50 раз, при этом, не теряя чёткости снимка. А ультра-широкоугольная камера позволит запечатлеть пейзаж или большое здание целиком, значительно расширяя угол обзора.",
    },
    {
        id: 5,
        count: 1,

        brand: "",
        name: "Galaxy Fold 512 ГБ",
        imgURL: "images/smartphones/5.jpg",
        price: 1863,
        info: "Инновационный смартфон Samsung Galaxy Fold 512 ГБ Black поражает своим оригинальным дизайном, многофункциональностью и высокой производительностью с первого взгляда. За отличную производительность отвечает современный 8-ядерный процессор Qualcomm Snapdragon 855. Кроме того, невероятный объём оперативной памяти на 12 ГБ и видеопроцессор Adreno 640 отлично справляются с поддержкой ресурсоёмких игр и графических элементов. А для установки и хранения огромного количества приложений и мультимедийных файлов в нём предусмотрена встроенная память на 512 ГБ. Более того, двойной аккумулятор обеспечивает устройству большую ёмкость. К тому же, интеллектуальная система аккумулятора отключает приложения, которыми вы не пользуетесь для сохранения заряда батареи.\n" +
            "\n" +
            "\n" +
            "Невероятный 7.3-дюймовый Dynamic AMOLED экран выполнен из инновационного полимерного материала, который обеспечивает потрясающую гибкость его безграничного экрана.  В его конструкции предусмотрен шарнирный механизм складывания, который позволяет устройству плавно открываться. А благодаря соединительному модулю, встроенному внутри его стильного корпуса, девайс легко складывается в плоское и компактное устройство, за счёт чего легко помещается в кармане или небольшой сумке. Такая конструкция поддержки двух экранов позволит свободно переключаться с внутреннего экрана на внешний и наоборот. Кроме того, вы также сможете работать в многозадачном режиме и управлять одновременно тремя окнами, например, играть в игры, переписываться в мессенджере и снимать онлайн трансляцию.\n" +
            "\n" +
            "\n" +
            "На тыловой стороне устройства расположена универсальная система камер с тремя объективами. Они наделены таким современным функционалом как режим макросъёмки, двукратный оптический зум, автофокус, оптическая стабилизация и многое другое. Такой функционал поможет в создании профессиональных фотографий или видео. К тому же, усовершенствованная оптимизация изображения с искусственным интеллектом распознаёт до 30 различных объектов, для создания совершенного снимка. Фронтальная камера на 10 МП также наделена функциями интеллектуального наложения макияжа, коррекции лица, а также позволит свободно общаться с друзьями в видеочатах в режиме онлайн.",
    },
    {
        id: 6,
        count: 1,
        brand: "",
        name: "Galaxy Z Flip 256 ГБ",
        imgURL: "images/smartphones/6.jpg",
        price: 2100,
        info: "Оригинальный смартфон Samsung Galaxy Z Flip 256 ГБ Black удивляет своей необыкновенной конструкцией, функциональностью и высокой производительностью. Он оснащён экраном из революционного гибкого стекла, которое надёжно складывается за счёт чего с лёгкостью помещается в кармане или небольшой дамской сумочке. Кроме того, скрытый шарнирный механизм обеспечит плавность открытия и закрытия и надёжно зафиксирует устройство под комфортным для вас углом. Яркий AMOLED экран отображает невероятную цветопередачу на 6.7-дюймовом экране. Вы сможете наслаждаться комфортным просмотром любого контента в отличном формате качества разрешением 2636x1080 пикселей. Более того, даже в сложенном состоянии он покажет ваши уведомления и позволит сразу перейти к нужному приложению уже на раскрытом экране.\n" +
            "\n" +
            "\n" +
            "Девайс работает на базе мощного 8-ядерного процессора Qualcomm Snapdragon 855 Plus, который обеспечивает устройству отличную производительность. Современный видеопроцессор Adreno 640 порадует любителей насыщенных графических игр, а оперативная память на 8 ГБ поддерживает стабильную работу в многозадачном режиме пользования. Для установки и хранения огромного количества приложений, игр, музыки и других файлов предусмотрена встроенная память объёмом 256 ГБ. Более того, устройство оснащено двойным аккумулятором, который вмещает в себя ещё больше энергии которой хватит даже на целый день интенсивного пользования. В случае необходимости, вы также можете воспользоваться функцией энергосбережения под управлением искусственного интеллекта.\n" +
            "\n" +
            "\n" +
            "На тыловой стороне данной модели расположен камерный модуль с двумя объективами. Основная широкоугольная камера на 12 МП позволяет делать потрясающие снимки даже ночью. Ультраширокоугольная также фотографирует на 12 МП и оснащена автофокусом и оптической стабилизацией кадра, для создания более детализированного снимка. Более того, уникальный режим камеры hands-free позволит вам делать селфи и совершать видеозвонки без необходимости держать смартфон в руках. К тому же, благодаря оптимизированной работе на гибком экране у вас появится возможность одновременной работы, например переписываться с друзьями в мессенджерах в нижней половине экрана и вести прямую трансляцию в верхней.",
    },
    {
        id: 7,
        count: 1,

        brand: "",
        name: "iPhone 12 Pro Max",
        imgURL: "images/smartphones/7.jpg",
        price: 1647,
        info: "Новая современная модель смартфона Apple iPhone 12 Pro Max оснащена мощным камерным блоком с тремя объективами, расположенным на тыльной стороне, который улавливает на 27% больше света. Теперь вы имеете возможность делать снимки в ночном режиме на сверхширокоугольную и широкоугольную камеру, так как она стала еще лучше передавать естественные цвета при слабом освещении. Невероятный 10-битный HDR‑формат обеспечивает более реалистичное изображение. Следует также отметить, что для защиты объектива он покрыт сапфировым стеклом, которое значительно надежнее и тверже обычного. Также в конструкции данной модели предусмотрен сканер LiDAR, который за считанные наносекунды создает точные структуры карты, чтобы объекты дополненной реальности мгновенно заняли свое место.\n" +
            "\n" +
            "\n" +
            "Передняя панель имеет инновационную защиту Ceramic Shield, в матрицу которой добавляются керамические нанокристаллы, что является прочнее многих известных металлов. Уникальная формула материала обладает прочностью керамики и прозрачностью стекла, что значительно снижает риск повреждения дисплея при падении. Благодаря беспроводным сетям LTE передача данных достигает скорости до 2 Гбит/с, позволяя вам быстрее скачивать фильмы и сериалы, смотреть онлайн видео высокого качества и отправлять фотографии. Сам процессор iPhone с применением 5-нанометровой технологии является самым быстрым, мощным и эффективным на сегодняшний день.\n" +
            "\n" +
            "\n" +
            " В его конструкции реализована технология беспроводной зарядки MagSafe с магнитным креплением. Заявленная автономность при воспроизведении видео – до 20 часов, при прослушивании аудио – до 80 часов. Также емкий аккумулятор и высокая энергоэффективность обеспечивают долгую работу смартфона без подзарядки. Также данная модель имеет в своей конструкции защиту от воды, которая актуальна при погружении до 6-ти метров на протяжении 30-ти минут.",
    },
    {
        id: 8,
        count: 1,

        brand: "",
        name: "iPhone 11 Pro 64 GB",
        imgURL: "images/smartphones/8.jpg",
        price: 1102,
        info: "Apple iPhone 11 Pro 64 GB Space Grey smartfoni - zamonaviy o'yinlarni qo'llaydigan 6 yadroli Apple A13 Bionic protsessori bilan ishlaydi. Ko'p sonli dasturlar, musiqa, video va boshqa fayllarni saqlash uchun 64 Gb ichki xotira ta'minlanadi. 4 Gb tezkor xotira miqdori bir vaqtning o'zida bir nechta dastur va jarayonlarning barqaror ishlashini ta'minlash uchun yetarlidir. IP68 indeksiga mos keladigan suvdan maxsus himoya darajasi tufayli siz smartfonga suyuqlik to’kilib ketishadan, yomg'irli kunlarda suv tegishidan yoki hatto suv ostida ajoyib suratga tushishdan qo'rqmaysiz. Smartfon 30 daqiqa davomida 4 metr chuqurlikdagi suv havzalariga dosh beradi.\n" +
            "\n" +
            "\n" +
            "Eng so'nggi 5.8 dyumli Pro Super Retina XDR OLED displey har xil rang va soyalarning ajoyib kontrastni beradi. Aks ettirilgan tasvirning piksellar sonini 2436x1125 pikselni tashkil etadi, bir dyum uchun 463 ppi nuqta to’g’ri keladi. Yuzni aniqlash uchun yuqori aniqlikdagi Face ID texnologiyasining uzluksiz va barqaror ishlaydi. Qulfni ochish uchun shunchaki ekranga qarang.\n" +
            "\n" +
            "\n" +
            "Li-Ion batareyasi sig'imi 3190 mA / soat, 18 soat suhbat va 65 soat musiqa tinglash imkonini beradi. Bundan tashqari, ishlab chiquvchilar fazoviy audio ijro etish uchun maxsus stereo dinamiklarni taqdim etdilar. Bunday tizim birinchi marotaba to'liq hajmli mavjudlik effektining atrof-muhit tovushini taqlid qilgan holda amalga oshirildi.\n" +
            "\n" +
            "\n" +
            "Qurilmaning orqa tomonida uchta kamera mavjud - keng burchakli, ultra keng burchakli va telefon fotokamera. Har bir linzaning o'lchamlari 12 mp teng. Kichkina fokus uzunligi (13 mm) ultra keng burchakli 5 linzaga ega, buning natijasida kadrda odatdagidan kattaroq maydonni suratga olish mumkin. Keng burchakli kamera - optik tasvirni barqarorlashtirishga ega 6 linza optikasi bilan jihozlangan. Bundan tashqari, u butun matritsada Focus Pixels texnologiyasini qo'llaydi, shu sababli yorug'lik yetishmasa ham, optikasi avtomatik ravishda focus funksiyasida ishlaydi. Telefon fotokamerasi - ikki tomonlama optik kattalashtirishga ega. Old burchakka o'rnatilgan TrueDepth keng kamerali, 12 megapikselli piksellar soniga ega va True Tone chirog'i bilan selfie suratlar oladi. Sekundiga 120 kvadrat tezlikda sekin suratga tushadigan selfie suratga olish mumkin, Apple ishlab chiqaruvchilari ularga \"sloufy\" nomini berishdi. 4K video juda tiniq, haqiqiy va juda batafsil. Bundan tashqari, videoyozuv kengaytirilgan diapazon va kinematik stabilizatsiya bilan amalga oshiriladi.",
    },
]

getSmartphonesList(smartphones)

function getSmartphonesList(event) {
    for (i = 0; i < event.length; i++) {
        if (event[i].id === 1) {
            document.getElementById('id1').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/1.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>" +
                "</div>"
        } else if (event[i].id === 2) {
            document.getElementById('id2').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/2.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>" +
                "</div>"
        } else if (event[i].id === 3) {
            document.getElementById('id3').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/3.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>"
        } else if (event[i].id === 4) {
            document.getElementById('id4').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/4.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>" +
                "</div>"
        } else if (event[i].id === 5) {
            document.getElementById('id5').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/5.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>" +
                "</div>"
        } else if (event[i].id === 6) {
            document.getElementById('id6').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/6.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>" +
                "</div>"
        } else if (event[i].id === 7) {
            document.getElementById('id7').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/7.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>"
        } else {
            document.getElementById('id8').innerHTML = "<div>" +
                "<img width='100%' src='images/smartphones/8.jpg'>" +
                "<p class='name ml-3'>" + event[i].brand + event[i].name + "</p>" +
                "<div class='d-flex'>" +
                "<p class='price mr-auto ml-3'>Price: " + "<b>" + event[i].price + " $</b>" + " </p>" +
                "<button onclick=\"openModal(" + event[i].id + ")\"  id='profile' class=\"w3-button w3-black buy\">More\n" +
                "</button>" +
                "</div>"
        }

    }
}


var tempCount = 1, tempPrice = 0;

function changeCountMinus(id) {
    let index = smartphones.findIndex(i => i.id === id)
    if (tempCount > 0) {
        tempCount = tempCount - 1
        tempPrice = tempCount * smartphones[index].price
    }

    document.getElementById('tempCount').innerHTML = tempCount
    document.getElementById('tempPrice').innerHTML = "<b>Total Price: </b>" + tempPrice + " $"
}

function changeCountPlus(id) {
    let index = smartphones.findIndex(i => i.id === id)
    tempCount = tempCount + 1
    tempPrice = tempCount * smartphones[index].price
    document.getElementById('tempCount').innerHTML = tempCount
    document.getElementById('tempPrice').innerHTML = "<b>Total Price: </b>" + tempPrice + " $"

}


function openModal(id) {


    document.getElementById('id01').style.display = 'block'
    let index = smartphones.findIndex(i => i.id === id)
    document.getElementById('modal-row').innerHTML =
        "<div class='col-lg-6 col1'>" +
        "<img width='100%' src='" + smartphones[index].imgURL + "'>" +
        "</div>" +
        "<div class='col-lg-6 col2 text-dark text-left'>" +
        "<h2>Action</h2>\n \n" +
        "<h6><b>Name:</b> " + smartphones[index].name + " " + smartphones[index].brand + "</h6>" +
        "<h6><b>Price:</b> " + smartphones[index].price + " $</h6>" +
        "<h6 id='tempPrice'><b>Total Price:</b> " + (tempPrice > 0 ? tempPrice : smartphones[index].price) + " $</h6>" +
        "<div class='d-flex'>" +
        "<button   id='minus' onclick='changeCountMinus(" + smartphones[index].id + ")'  class='btn btn-dark minus text-white mr-1'>-</button>" +
        "<button id='tempCount' class='btn btn-white count text-dark border-dark '>" + (tempCount) + "</button>" +
        "<button  id='plus' onclick='changeCountPlus(" + smartphones[index].id + ")'  class='btn btn-dark plus text-white ml-1 mr-2'>+</button>" +
        "<button id='addToCart' onclick='AddToCart(" + smartphones[index].id + ")' type=\"button\" class=\"btn addToCart\">" +
        "Add to Cart" +
        "</button>\n" +
        "</div>" +
        "<h2>Description</h2>\n \n" +
        "<textarea class='form-control' rows='10'>"
        + smartphones[index].info + "</textarea>" +
        "</div>"

    let modalHeader = document.getElementById('header-name')

    modalHeader.innerHTML = "<div>" +
        "<h2>" + smartphones[index].brand + smartphones[index].name + "</h2>" +
        "</div>"

}


var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }

}


var CartCount = 0, CartPrice = 0;

function AddToCart(id) {

    let index = smartphones.findIndex(i => i.id === id)
    document.getElementById('id01').style.display = 'none'

    if (tempCount >= 1) {
        alert("Savatga " + (tempCount) + " ta " + smartphones[index].brand + smartphones[index].name + " qo`shildi \nEslatma: Har bitta mahsulotni savatga qo`shganingizdan so`ng savatni tekshirib qo`ying!")
        CartCount = CartCount + tempCount
        CartPrice = CartPrice + tempPrice
        document.getElementById('CartCount').innerHTML = CartCount

    } else {
        alert("Mahsulotlar soni kamida 1 ta bo`lishi kerak!")
    }


    let products = document.getElementById('Cart')
    let Table = document.getElementById('Table')
    smartphones[index].count = tempCount
    if (tempCount !== 1) {
        smartphones[index].price = tempPrice
    } else {
        smartphones[index].price = tempCount * smartphones[index].price
    }


    if (smartphones[index].count >= 1) {
        console.log(CartCount, CartPrice)
        Table.innerHTML +=
            "                                        <tr id=\"product\" class=\"product\">\n" +
            "                                            <td class=\"img\"><img src='" + smartphones[index].imgURL + "' alt=\"\"></td>\n" +
            "                                            <td class=\"name\"> " + smartphones[index].name + " " + smartphones[index].brand + "</td>\n" +
            "                                            <td class=\"count\">\n" +
            "                                            <button class='btn btn-outline-dark '>" + (smartphones[index].count) + "</button>" +
            "                                            </td>\n" +
            "                                            <td class=\"price\">" + (smartphones[index].price) + " $</td>\n" +
            "                                            <td type=\"button\" onclick='DeleteTask(" + smartphones[index].id + ")' ><img class=\"delete\" src=\"images/delete.png\" alt=\"\"\n" +
            "                                                     width=\"40px\"></td>\n" +
            "                                        </tr>\n"

    }

    let TotalCount = document.getElementById('TotalCount')
    let TotalPrice = document.getElementById('TotalPrice')
    TotalCount.innerHTML = "<h4><b class=\"text-success\">Total Count</b>: " + CartCount + "</h4>"
    TotalPrice.innerHTML = "<h4><b class=\"text-danger\">Total Price</b>: " + CartPrice + " $</h4>"
    let Text = Table.innerHTML

    products.addEventListener('click', function () {
        Table.innerHTML = Text
    })


    Table.innerHTML = ""

    tempCount = 1
    tempPrice = 0

    document.getElementById('no').innerHTML = ""
}


let close = document.getElementById('close')
close.addEventListener('click', function (id) {
    let index = smartphones.findIndex(i => i.id === id)

    tempCount = 1
    tempPrice = smartphones[index].price
})


function DeleteTask() {
    alert("Delete funksiyasi qo`shilmadi!")
}

document.getElementById('Payment').addEventListener('click', function () {
    alert("To`lovingiz muvaffaqqiyatli amalga oshirildi!")
})