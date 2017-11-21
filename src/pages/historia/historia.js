var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaPage = /** @class */ (function () {
    function HistoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tap = 0;
        this.irPorElJson = [
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Explicacion Categoria',
            },
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Mero Subtitulo',
            },
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Mero Subtitulo',
            },
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Mero Subtitulo',
            },
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Mero Subtitulo',
            },
            { "imagen": 'http://placehold.it/300x200',
                "categoria": 'Categoria',
                "subcategoria": 'Mero Subtitulo',
            },
        ];
    }
    HistoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaPage');
    };
    HistoriaPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    HistoriaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-historia',
            templateUrl: 'historia.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HistoriaPage);
    return HistoriaPage;
}());
export { HistoriaPage };
//# sourceMappingURL=historia.js.map