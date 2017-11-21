import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosPage } from '../../pages/productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias = [];
  
  public pushPage: any;


  public imagen: string;
  public categoria: string;
  public subcategoria: string;

  constructor(public navCtrl: NavController) {

    this.categorias = [

                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria1', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },

                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria2', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },

                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria3', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },


                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria4', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },


                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria5', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },


                      {"imagen":'http://placehold.it/300x200', 
                       "categoria":'Categoria6', 
                       "subcategoria":'Explicacion Categoria',
                       
                      },


                    ]; 
         
    

  }


    
         
              
  	   pushCategoria(categoria){
    
        this.navCtrl.push(ProductosPage, { categoria: categoria });
  }

}
