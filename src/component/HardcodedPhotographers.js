import Timestamp from "../Timestamp";
import Photographer from "../Photographer";

const p1Timestamps = [
    new Timestamp(
        'Высшее образование',
        2000,
        'В 2000 году окончил факультет менеджмента Белорусского государственного экономического университета.'),
    new Timestamp(
        'Лучшая научная работа',
        2000,
        "В 2000 году награждён медалью Министерства образования и науки Российской Федерации «За лучшую научную работу» среди молодых учёных по итогам открытого всероссийского конкурса."),
    new Timestamp(
        'Защита диссертации',
        2004,
        "В 2004 году защитил диссертацию кандидата экономических наук."),
];

const p2Timestamps = [
    new Timestamp(
        "Высшее образование",
        1995,
        "В 1995 году окончил факультет журналистики Белорусского государственного университета."),
    new Timestamp(
        "Обучение в Париже",
        1996,
        "В 1996 году прошел обучение по специальности — оператор и режиссёр телевидения в Международном образовательном центре CIRNEA в Париже."),
    new Timestamp(
        "Первый журналист",
        1996,
        "Олег Лукашевич стал первым белорусским журналистом аккредитованным на Международном Каннском кинофестивале в мае 1996 года"
        ),
];

const p3Timestamps = [
    new Timestamp(
        "Член фотоклуба 'Минск'",
        1965,
        ""),
    new Timestamp(
        "Председатель и художественный руководитель фотоклуба 'Минск'",
        "1978-1999",
        ""),
    new Timestamp(
        "Консультант энциклопедического справочника 'Фотография'",
        1993,
        ""
        ),
];

const p4Timestamps = [
    new Timestamp(
        "Высшее образование",
        1980,
        "В 1980 году окончил Белорусский технологический институт им. С. М. Кирова в Минске."),
    new Timestamp(
        "Член фотоклуба 'Вечерний Минск'.",
        "1980-1990",
        ""),
    new Timestamp(
        "Консультант энциклопедического справочника 'Фотография'",
        "2007",
        ""
        ),
];

const p5Timestamps = [
    new Timestamp(
        "Председатель союза фотохудожников",
        1990,
        "В 1990 году был создан Союз фотохудожников БССР (фотоклуб 'Минск' с 1960-х годов). Председателем правления избран Лобко В. Д."),
    new Timestamp(
        "Участие в проектах",
        1973,
        "Принимал участие в основных проектах, связанных с показом творческой фотографии СССР за рубежом в период начиная с начиная с 1973 года."),
    new Timestamp(
        "Кактусы",
        1984,
        "Одним из главных увлечений В. Лобко стало коллекционирование кактусов. В 1984 году он опубликовал в Минске книгу 'Ваши зеленые ёжики', которая и до сегодняшнего дня остается настольной книгой многочисленных любителей кактусов и ботаников."
        ),
];

const p1 = new Photographer(
    "Александр Алексеевич Алексеев", 
    "белорусский фотограф, издатель, дизайнер, журналист, режиссёр, кандидат экономических наук. Родился 14 ноября 1978 года в Казани, в семье военнослужащего. В 1979 году семья переехала в Белоруссию. В 2014 году окончил Белорусскую государственную академию искусств по специальности режиссёр.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aliaksandr_Aliakseyeu.jpg/548px-Aliaksandr_Aliakseyeu.jpg",
    "1978 - наст. время",
    p1Timestamps,
    <iframe width="90%" height="300" src="https://www.youtube.com/embed/2jnIJ1PluV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="90%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
);

const p2 = new Photographer(
    "Олег Вацлавович Лукашевич",
    "белорусский телеведущий, журналист, режиссёр, фотограф, издатель, общественный деятель.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Aleh_Lukashevich._Cannes_Film_Festival.jpg/495px-Aleh_Lukashevich._Cannes_Film_Festival.jpg",
    "1972 - наст. время",
    p2Timestamps,
    <iframe width="90%" height="300" src="https://www.youtube.com/embed/2jnIJ1PluV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="90%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
);
 
const p3 = new Photographer(
    "Юрий Сергеевич Васильев", 
    "белорусский фотограф и общественный деятель, Заслуженный работник культуры Республики Беларусь (1992), преподаватель истории фотографии.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Yuri_Vasyliev.jpg/548px-Yuri_Vasyliev.jpg",
    "1939 - 2018",
    p3Timestamps,
    <iframe width="90%" height="300" src="https://www.youtube.com/embed/VMELNEiA-7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="90%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

);

const p4 = new Photographer(
    "Вадим Аркадьевич Качан", 
    "Современный белорусский фотограф, преподаватель фотографии.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87_%D0%9A%D0%B0%D1%87%D0%B0%D0%BD.jpeg/548px-%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87_%D0%9A%D0%B0%D1%87%D0%B0%D0%BD.jpeg",
    "1958 - наст. время",
    p4Timestamps,
    <iframe width="90%" height="300" src="https://www.youtube.com/embed/odP4XhcHZoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="90%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
);

const p5 = new Photographer(
    "Валерий Дмитриевич Лобко", 
    "Фотограф, критик, бывший председатель Союза фотохудожников Белоруссии, автор оригинальных методов и технологий в области бескамерной фотографии.", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9_%D0%9B%D0%BE%D0%B1%D0%BA%D0%BE.jpg/548px-%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9_%D0%9B%D0%BE%D0%B1%D0%BA%D0%BE.jpg",
    "1951 - 2008",
    p5Timestamps,
    <iframe width="90%" height="300" src="https://www.youtube.com/embed/tmnfIyr-34M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="90%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
);

const photographers = [p1, p2, p3, p4, p5];

export default photographers;