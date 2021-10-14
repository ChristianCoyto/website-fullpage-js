const seccionesPagina = new fullpage('#fullpage', {

	//   Opciones Basicas
	autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,

	//   Barra de navegación
	navigation: true,
	menu: '#menu',
	anchors: ['inicio', 'autos', 'contacto'],
	navigationTooltips: ['Inicio', 'Autos', 'Contacto'],
	showActiveTooltip: false,

	//   Secciones
	sectionsColor : ['#000', '#c2c2c2', '#000'],
	verticalCentered: false,

	//   Slides
	controlArrows: true,
	slidesNavigation: false,
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer .contenedor-footer h2').style.opacity = 1;
		}
	}
});