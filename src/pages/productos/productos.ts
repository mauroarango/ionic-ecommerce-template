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
                       "producto":'Guitarra',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 56000,
                       
                      },


                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Violin',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 18000,
                       
                      },

                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Piano',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 14500,
                       
                      },


                      {"imagen":'http://placehold.it/300x300', 
                       "producto":'Tambor',
                       "descripcion":"Descripcion Producto1",
                       "descripcionlarga":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti voluptate quos, dolore, pariatur iusto ducimus qui harum ea, quam at repudiandae recusandae non. Quos ea illo corporis nesciunt amet.",
                       "precio": 32000,
                       
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
