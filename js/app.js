// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'STRADIVARIUS',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/info-espresso/',
    	url: 'info-espresso.html',
    	name: 'info-espresso',
  		},
		{
		path: '/sign-up/',
    	url: 'sign-up.html',
    	name: 'sign-up',
  		}
	],
	dialog: {
		title: 'CoffeeShop',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Welcome to Coffee App !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 5000,
    });
    notification.open();
	
});





