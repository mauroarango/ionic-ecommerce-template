webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = (function () {
    function ProductosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productos = [];
        this.categoria = navParams.data.categoria;
        this.productos = [
            { "imagen": 'http://placehold.it/300x300',
                "producto": 'iPhone X',
                "descripcion": "Descripcion Producto1",
                "descripcionlarga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                "precio": 3799000,
            },
            { "imagen": 'http://placehold.it/300x300',
                "producto": 'Samsung Galaxy S9',
                "descripcion": "Descripcion Producto1",
                "descripcionlarga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                "precio": 2999900,
            },
            { "imagen": 'http://placehold.it/300x300',
                "producto": 'Moto G6',
                "descripcion": "Descripcion Producto1",
                "descripcionlarga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                "precio": 669900,
            },
            { "imagen": 'http://placehold.it/300x300',
                "producto": 'Xiaomi Redmi 5 DS',
                "descripcion": "Descripcion Producto1",
                "descripcionlarga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                "precio": 5999000,
            },
        ];
    }
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage.prototype.pushDescripcion = function (producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__["a" /* DescripcionPage */], { producto: producto });
    };
    return ProductosPage;
}());
ProductosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-productos',template:/*ion-inline-start:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\productos\productos.html"*/'<!--\n\n  Generated template for the ProductosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="rojito">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Productos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let producto of productos">\n\n      <ion-thumbnail item-start>\n\n      <img (click)="pushDescripcion(producto)" [src]="producto.imagen"/>\n\n      </ion-thumbnail>\n\n      <h2>{{producto.producto}}</h2>\n\n      <h3>{{producto.descripcion}}</h3><br>\n\n      <ion-row>\n\n        <ion-col col-6><p> $ {{ producto.precio | number: 0 }}</p></ion-col>\n\n        <ion-col col-6><p>{{categoria.categoria}}</p></ion-col>\n\n      </ion-row>\n\n\n\n      <button ion-button clear item-end (click)="pushDescripcion(producto)">Ver</button>\n\n    </ion-item>\n\n\n\n\n\n   \n\n\n\n </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\productos\productos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProductosPage);

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/descripcion/descripcion.module": [
		265,
		2
	],
	"../pages/historia/historia.module": [
		266,
		1
	],
	"../pages/productos/productos.module": [
		267,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_productos_productos__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categorias = [];
        this.categorias = [
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Celulares',
                "subcategoria": 'Catalogo de Productos',
            }
        ];
    }
    HomePage.prototype.pushCategoria = function (categoria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_productos_productos__["a" /* ProductosPage */], { categoria: categoria });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="rojito">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Empresa</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card *ngFor="let categoria of categorias" (click)="pushCategoria(categoria)"><!--?.slice().reverse()--> \n\n    <img [src]="categoria.imagen"/>\n\n    \n\n    <div class="card-categoria">{{categoria.categoria}}</div>\n\n    <div class="card-subcategoria">{{categoria.subcategoria}}</div>\n\n  </ion-card>\n\n\n\n  <div align="center"><button ion-button secondary>Llamar</button> </div>\n\n\n\n </ion-content>\n\n'/*ion-inline-end:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaPage = (function () {
    function HistoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tap = 0;
    }
    HistoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaPage');
    };
    HistoriaPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    return HistoriaPage;
}());
HistoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historia',template:/*ion-inline-start:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\historia\historia.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Historia</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n'/*ion-inline-end:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\historia\historia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HistoriaPage);

//# sourceMappingURL=historia.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_historia_historia__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productos_productos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_historia_historia__["a" /* HistoriaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_productos_productos__["a" /* ProductosPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__["a" /* DescripcionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/descripcion/descripcion.module#DescripcionPageModule', name: 'DescripcionPage', segment: 'descripcion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historia/historia.module#HistoriaPageModule', name: 'HistoriaPage', segment: 'historia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_historia_historia__["a" /* HistoriaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_productos_productos__["a" /* ProductosPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__["a" /* DescripcionPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescripcionPage = (function () {
    function DescripcionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.producto = navParams.data.producto;
    }
    DescripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionPage');
    };
    return DescripcionPage;
}());
DescripcionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-descripcion',template:/*ion-inline-start:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\descripcion\descripcion.html"*/'<!--\n\n  Generated template for the DescripcionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="rojito">\n\n    <ion-title>{{producto.producto}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n	<ion-card>\n\n     <ion-thumbnail item-start>\n\n      <img [src]="producto.imagen"/>\n\n\n\n      </ion-thumbnail>\n\n\n\n\n\n      <ion-card-content>\n\n    <ion-card-title align="center">\n\n      {{producto.producto}}\n\n      </ion-card-title>\n\n    <p>\n\n      {{producto.descripcionlarga}}\n\n    </p>\n\n  \n\n\n\n      <ion-row>\n\n      \n\n      \n\n\n\n      <ion-col col-6>\n\n      <ion-card-title>\n\n       $ {{ producto.precio | number: 0 }}\n\n      </ion-card-title>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n          <div align="center"><button ion-button secondary>Llamar<a href="tel:+573122713768"></a></button> </div>\n\n      </ion-col>\n\n\n\n      </ion-row>\n\n    \n\n\n\n      \n\n\n\n  </ion-card-content>\n\n		\n\n	</ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PERSONAL\Repositorios\ionic-ecommerce-template\src\pages\descripcion\descripcion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DescripcionPage);

//# sourceMappingURL=descripcion.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map