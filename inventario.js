class Inventario {
    constructor (){
        this.productos = [];
    }
    agregar (producto){
        //los cambios
        this.productos.push(producto);
        let aux = [];
        for(let i=0; i < this.productos.length ; i++){
            for(let j=0; j < this.productos.length -i -1 ; j++){
                
                if(this.productos[j].codigo > this.productos[j +1].codigo){
                    aux = this.productos[j];
                    this.productos[j] = this.productos[j+1];
                    this.productos[j+1] = aux;
                }
            }
        }

    }
    buscar(id){
        //los cambios
              let inicio = 0;
              let final = this.productos.length-1;
              while(inicio <= final){
                 let mitad = Math.floor((inicio+final)/2);
                 if(this.productos[mitad].codigo === id) 
                 return this.productos[mitad];
                 else if (this.productos[mitad].codigo < id){
                     inicio = mitad + 1;
                 }else
                     final = mitad - 1;
              }
              return false;  
     }
    mostrar(){
        return this.productos;
    }
    mostrar_inverso(){
        let aux = this.productos;
        let aux_r = [];
       let tamaño = aux.length;
       for(let i=1;i<= tamaño;i++){
            aux_r[i-1]=aux[tamaño-i] ;
       }
        return aux_r;
    }
    
    eliminar(id){
        let posicion;
        if(this.productos!=null){
            for(let i = 0; i < this.productos.length ; i++){
                if(id == this.productos[i].codigo){
                    posicion= i;
                }
            }
        }else
             return "El inventario esta vacio";

        let aux =this.productos;
        for(let a = posicion ; a < this.productos.length; a++){
                           aux[a] = this.productos[a+1];
                        }
                        this.productos = aux;
                        this.productos.pop();
                //reduce js 
                //maps js 
    }
    modificar(id,nombre,precio,cantidad){
        this.posicion = this.buscar(id);
        this.productos[this.posicion].nombre = nombre;
        this.productos[this.posicion].precio =precio;
        this.productos[this.posicion].cantidad = cantidad;    
    }
    
}