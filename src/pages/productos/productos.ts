import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DescripcionPage } from '../descripcion/descripcion';



/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  productos = [];
  

  public imagen: string;
  public producto: string;
  public descripcion: string;
  public precio: number;

  categoria;

	

  constructor(public navCtrl: NavController, public navParams: NavParams) {


        this.categoria = navParams.data.categoria;

        this.productos = [

                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'iPhone X',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 3799000,
                       
                      },


                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Samsung Galaxy S9',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 2999900,
                       
                      },

                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Moto G6',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 669900,
                       
                      },


                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Xiaomi Redmi 5 DS',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 5999000,
                       
                      },


                    ];
         

      

  }

  


                   
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }




      pushDescripcion(producto){
    
      this.navCtrl.push(DescripcionPage, { producto: producto});
  }





}
