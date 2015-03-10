module.exports = {
	dist: {
		nonull: true,
		files: [
			// Include our bower JS dependencies
			// angular
			{
				src: "bower_components/angular/angular.js",
				dest: "www/src/vendor/angular/angular.js"
			},
			{
				src: "bower_components/angular-animate/angular-animate.js",
				dest: "www/src/vendor/angular/angular-animate/angular-animate.js"
			},
			{
				src: "bower_components/angular-cookies/angular-cookies.js",
				dest: "www/src/vendor/angular/angular-cookies/angular-cookies.js"
			},
			{
				src: "bower_components/angular-resource/angular-resource.js",
				dest: "www/src/vendor/angular/angular-resource/angular-resource.js"
			},
			{
				src: "bower_components/angular-sanitize/angular-sanitize.js",
				dest: "www/src/vendor/angular/angular-sanitize/angular-sanitize.js"
			},
			{
				src: "bower_components/angular-touch/angular-touch.js",
				dest: "www/src/vendor/angular/angular-touch/angular-touch.js"
			},
			{
				src: "bower_components/hammerjs/hammer.js",
				dest: "www/src/vendor/hammerjs/hammer.js"
			},
			{
				src: "bower_components/ryanmullins-angular-hammer/angular.hammer.js",
				dest: "www/src/vendor/hammerjs/angular-hammer.js"
			},
			{
				src: "bower_components/angular-inview/angular-inview.js",
				dest: "www/src/vendor/inview/angular-inview.js"
			},
			// touch carousel
			{
				src: "bower_components/angular-carousel/dist/angular-carousel.css",
				dest: "www/src/vendor/carousel/angular-carousel.css"
			},
			{
				src: "bower_components/angular-carousel/dist/angular-carousel.css.map",
				dest: "www/src/vendor/carousel/angular-carousel.css.map"
			},
			{
				src: "bower_components/angular-carousel/dist/angular-carousel.js",
				dest: "www/src/vendor/carousel/angular-carousel.js"
			},
			// videogular
			{
				src: "bower_components/videogular/videogular.js",
				dest: "www/src/vendor/videogular/videogular.js"
			},
			{
				src: "bower_components/videogular-controls/controls.js",
				dest: "www/src/vendor/videogular/controls.js"
			},
			{
				src: "bower_components/videogular-overlay-play/overlay-play.js",
				dest: "www/src/vendor/videogular/overlay-play.js"
			},
			{
				src: "bower_components/videogular-poster/poster.js",
				dest: "www/src/vendor/videogular/poster.js"
			},
			{
				src: "bower_components/videogular-buffering/buffering.js",
				dest: "www/src/vendor/videogular/buffering.js"
			},
			// bootstrap
			{
				src: "bower_components/bootstrap/dist/css/bootstrap.css",
				dest: "www/assets/css/bootstrap.css"
			},
			{
				src: "bower_components/bootstrap/dist/css/bootstrap.css.map",
				dest: "www/assets/css/bootstrap.css.map"
			},
			{
				src: "bower_components/bootstrap/dist/js/bootstrap.js",
				dest: "www/src/vendor/jquery/bootstrap.js"
			},
			{
				src: "bower_components/jquery/dist/jquery.min.js",
				dest: "www/src/vendor/jquery/jquery.min.js"
			},
			{
				src: "bower_components/jquery/dist/jquery.min.map",
				dest: "www/assets/js/jquery.min.map"
			},
			// libs
			{
				src: "bower_components/moment/min/moment.min.js",
				dest: "www/src/vendor/libs/moment.min.js"
			},
			// core
			{
				src: "bower_components/angular-ui-router/release/angular-ui-router.js",
				dest: "www/src/vendor/angular/angular-ui-router/angular-ui-router.js"
			},
			{
				src: "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
				dest: "www/src/vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js"
			},
			{
				src: "bower_components/angular-ui-utils/ui-utils.js",
				dest: "www/src/vendor/angular/angular-ui-utils/ui-utils.js"
			},
			{
				src: "bower_components/ngstorage/ngStorage.js",
				dest: "www/src/vendor/angular/ngstorage/ngStorage.js"
			},
			{
				src: "bower_components/oclazyload/dist/ocLazyLoad.js",
				dest: "www/src/vendor/angular/oclazyload/ocLazyLoad.js"
			}
		]
	}
};