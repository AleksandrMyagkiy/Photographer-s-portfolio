
//===== HAMBURGER MENU =====//
const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu__block');

function closeMenu() {
hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', closeMenu);

function openMenu() {
menu.classList.toggle('open');
}
hamburger.addEventListener('click', openMenu);

const navLinks = document.querySelectorAll('.menu_link');

navLinks.forEach((el) => el.addEventListener('click', exitMenu));

function exitMenu(event) {
if (event.target.classList.contains('menu_link')) {
closeMenu();
openMenu();
}
}

//===== LANG =====//
const i18Obj = {
		'en': {
			'skills': 'Skills',
			'portfolio': 'Portfolio',
			'video': 'Video',
			'price': 'Price',
			'contacts': 'Contacts',
			'hero-title': 'Alexa Rise',
			'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
			'hire': 'Hire me',
			'skill-title-1': 'Digital photography',
			'skill-text-1': 'High-quality photos in the studio and on the nature',
			'skill-title-2': 'Video shooting',
			'skill-text-2': 'Capture your moments so that they always stay with you',
			'skill-title-3': 'Rotouch',
			'skill-text-3': 'I strive to make photography surpass reality',
			'skill-title-4': 'Audio',
			'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
			'winter': 'Winter',
			'spring': 'Spring',
			'summer': 'Summer',
			'autumn': 'Autumn',
			'price-description-1-span-1': 'One location',
			'price-description-1-span-2': '120 photos in color',
			'price-description-1-span-3': '12 photos in retouch',
			'price-description-1-span-4': 'Readiness 2-3 weeks',
			'price-description-1-span-5': 'Make up, visage',
			'price-description-2-span-1': 'One or two locations',
			'price-description-2-span-2': '200 photos in color',
			'price-description-2-span-3': '20 photos in retouch',
			'price-description-2-span-4': 'Readiness 1-2 weeks',
			'price-description-2-span-5': 'Make up, visage',
			'price-description-3-span-1': 'Three locations or more',
			'price-description-3-span-2': '300 photos in color',
			'price-description-3-span-3': '50 photos in retouch',
			'price-description-3-span-4': 'Readiness 1 week',
			'price-description-3-span-5': 'Make up, visage, hairstyle',
			'order': 'Order shooting',
			'order1': 'Order shooting',
			'order2': 'Order shooting',
			'contact-me': 'Contact me',
			'send-message': 'Send message'
		},
		'ru': {
			'skills': 'Навыки',
			'portfolio': 'Портфолио',
			'video': 'Видео',
			'price': 'Цены',
			'contacts': 'Контакты',
			'hero-title': 'Алекса Райс',
			'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
			'hire': 'Пригласить',
			'skill-title-1': 'Фотография',
			'skill-text-1': 'Высококачественные фото в студии и на природе',
			'skill-title-2': 'Видеосъемка',
			'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
			'skill-title-3': 'Ретушь',
			'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
			'skill-title-4': 'Звук',
			'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
			'winter': 'Зима',
			'spring': 'Весна',
			'summer': 'Лето',
			'autumn': 'Осень',
			'price-description-1-span-1': 'Одна локация',
			'price-description-1-span-2': '120 цветных фото',
			'price-description-1-span-3': '12 отретушированных фото',
			'price-description-1-span-4': 'Готовность через 2-3 недели',
			'price-description-1-span-5': 'Макияж, визаж',
			'price-description-2-span-1': 'Одна-две локации',
			'price-description-2-span-2': '200 цветных фото',
			'price-description-2-span-3': '20 отретушированных фото',
			'price-description-2-span-4': 'Готовность через 1-2 недели',
			'price-description-2-span-5': 'Макияж, визаж',
			'price-description-3-span-1': 'Три локации и больше',
			'price-description-3-span-2': '300 цветных фото',
			'price-description-3-span-3': '50 отретушированных фото',
			'price-description-3-span-4': 'Готовность через 1 неделю',
			'price-description-3-span-5': 'Макияж, визаж, прическа',
			'order': 'Заказать съемку',
			'order1': 'Заказать съемку',
			'order2': 'Заказать съемку',
			'contact-me': 'Свяжитесь со мной',
			'send-message': 'Отправить'
		}
	};
const en = document.querySelector('.en'),
	  ru = document.querySelector('.ru');

		en.addEventListener('click', () => {
		en.classList.add('translate');
		ru.classList.remove('translate');
		});

		ru.addEventListener('click', () => {
		ru.classList.add('translate');
		en.classList.remove('translate');
		});


const langEn = document.querySelector('.en');
const langRu = document.querySelector('.ru');

langEn.addEventListener('click', getTranslate.bind(null, 'en'));
langRu.addEventListener('click', getTranslate.bind(null, 'ru'));

function getTranslate(lang) {
  if (!i18Obj.hasOwnProperty(lang)) {
	return;
  }
  if (window.hasOwnProperty('localStorage')) {
	window.localStorage.setItem('lang', lang);
  }
  for (let key in i18Obj[lang]) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = i18Obj[lang][key];
    }
  }
}
let lang = window.hasOwnProperty('localStorage') || 'en';
getTranslate(lang);

//===== THEME =====//
const dark = document.querySelector('.theme');
const lightSectionTitle = document.querySelectorAll('.section-title'); 
const skillItem = document.querySelectorAll('.skill-item');
const activeLight = document.querySelectorAll('.active');
const priceHeader = document.querySelectorAll('.price-header');
const priseText = document.querySelectorAll('.price-text');
const menuLinkLight = document.querySelectorAll('.menu_link');

const title = document.querySelector('.title');
const titlePortfolio = document.querySelector('.title-portfolio');
const titleVideo = document.querySelector('.title-video');
const titlePrice = document.querySelector('.title-price');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');
const buttonWinter = document.querySelector('.buttonWinter');
const buttonSpring = document.querySelector('.buttonSpring');
const buttonSummer = document.querySelector('.buttonSummer');
const buttonAutumn = document.querySelector('.buttonAutumn');
const lightTheme = [
	  title,
	  titlePortfolio,
	  titleVideo,
	  titlePrice,
	  skills,
	  portfolio,
	  video,
	  price,
	  buttonWinter,
	  buttonSpring,
	  buttonSummer,
	  buttonAutumn
	];

document.getElementById('theme').addEventListener('click', () => {
	dark.classList.toggle('dark');
	menu.classList.toggle('open-light');
	lightTheme.forEach((elem) => {
		elem.classList.toggle('light-theme');
	});
	lightSectionTitle.forEach((elem) => {
		elem.classList.toggle('light-section-title');
	});
	skillItem.forEach((elem) => {
		elem.classList.toggle('light-skill-item');
	});
	activeLight.forEach((elem) => {
		elem.classList.toggle('active-light');
	});
	priceHeader.forEach((elem) => {
		elem.classList.toggle('light-price-header');
	});
	priseText.forEach((elem) => {
		elem.classList.toggle('light-prise-text');
	});
	menuLinkLight.forEach((elem) => {
		elem.classList.toggle('menu-link-light');
	});
});

//===== Image =====//
const winterButton = document.querySelector('.buttonWinter');
const springButton = document.querySelector('.buttonSpring');
const summerButton = document.querySelector('.buttonSummer');
const autumnButton = document.querySelector('.buttonAutumn');

const portfolioItems = document.querySelectorAll('.portfolio-item');


const portfolioBtns = document.querySelector('.wrapper-buttons');

portfolioBtns.onclick=function(e){
  for(let i = 0;i<portfolioBtns.children.length;i++){
    portfolioBtns.children[i].classList.remove('active');
  }
  e.target.classList.add('active');
};

winterButton.addEventListener('click', () => {
	portfolioItems.forEach((img, index) => img.src = `./assets/img/portfolio-items/winter/${index + 1}.jpg`);	
});
springButton.addEventListener('click', () => {
	portfolioItems.forEach((img, index) => img.src = `./assets/img/portfolio-items/spring/${index + 1}.jpg`);	
});
summerButton.addEventListener('click', () => {
	portfolioItems.forEach((img, index) => img.src = `./assets/img/portfolio-items/summer/${index + 1}.jpg`);	
});
autumnButton.addEventListener('click', () => {
	portfolioItems.forEach((img, index) => img.src = `./assets/img/portfolio-items/autumn/${index + 1}.jpg`);	
});


console.log('Моя Самооценка 80.');