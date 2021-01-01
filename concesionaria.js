const vehicles = [ {marca:'Peugeot', modelo:'206', puertas:'4', precio:20000000},
{marca:'Honda', modelo:'Titan', cilindrada:'125cc', precio:6000000},
{marca:'Peugeot', modelo:'208', puertas:'5', precio:25000000},
{marca:'Yamaha', modelo:'YBR', cilindrada:'160cc', precio:8050050},
];

class Vehicles {
    constructor(vehicles){
        this.vehicles= vehicles;
    }
    showList(){
        const HighestPrice = this.getHighestPrice();
        const LowesPrice = this.getLowestPrice();
        const SModel =this.getSearchModelo();
        const HtoLowerP = this.getHigherToLower();  
        const ctstr= this.convertPriceToString();
        console.log(`
                Marca: ${this.vehicles[0].marca} // Modelo: ${this.vehicles[0].modelo} // Puertas: ${this.vehicles[0].puertas} // Precio: $${ctstr[0]}
                Marca: ${this.vehicles[1].marca} // Modelo: ${this.vehicles[1].modelo} // Puertas: ${this.vehicles[1].cilindrada} // Precio: $${ctstr[1]}
                Marca: ${this.vehicles[2].marca} // Modelo: ${this.vehicles[2].modelo} // Puertas: ${this.vehicles[2].puertas} // Precio: $${ctstr[2]}
                Marca: ${this.vehicles[3].marca} // Modelo: ${this.vehicles[3].modelo} // Puertas: ${this.vehicles[3].cilindrada} // Precio: $${ctstr[3]}
                =============================
                Vehículo más caro: ${HighestPrice}
                Vehículo más barato: ${LowesPrice}
                Vehículo que contiene en el modelo la letra ‘Y’:${SModel}
                =============================
                Vehículos ordenados por precio de mayor a menor:
                ${HtoLowerP[0]}
                ${HtoLowerP[1]}
                ${HtoLowerP[2]}
                ${HtoLowerP[3]}
    
                
                `);
    }
    getHighestPrice(){
        const highestPrice = vehicles.filter(p=> p.precio).filter(a=> a.precio ===25000000).map(f =>{ return f.marca +' '+ f.modelo} )
        return highestPrice;
    }
    getLowestPrice(){
        const lowesPrice = vehicles.filter(p=> p.precio).filter(a=> a.precio === 6000000).map(f =>{ return f.marca +' '+ f.modelo} )
        return lowesPrice;
    }

    getSearchModelo(){
          const searchM = vehicles.filter(p=> p.precio).filter(a=> a.modelo.charAt(0) ==='Y').map(f =>{ return f.marca +' '+ f.modelo +' '+ f.precio} ) 
            return searchM.toString().substr(0,11)+'$'+searchM.toString().substr(11,2)+'.'+searchM.toString().substr(13,3)+','+searchM.toString().substr(16,2); 
    }

    convertPriceToString(){
        var prices= vehicles.filter(x =>x).map(m => m.precio)

        var arrPrices= [];  
        for(let i = 0; prices.length >i;i++){
            var b;
            var a =prices[i].toString()  ;
            if(a.length === 8){
               b= a.substr(0,3)+'.'+a.substr(2,3)+','+a.substr(5,6);
            }else if(a.length === 7){
              
                b=a.substr(0,2)+'.'+a.substr(2,3)+','+a.substr(5,6);
            }

            arrPrices.push(b); 
        }
     
        return arrPrices;
    }
    
    getHigherToLower(){
        
        const prices= vehicles.filter(x =>x).map(m => m.precio);
 
        const higherToLowerPrice=prices.sort((a, b) =>{return b - a;});
        var arrMM=[];
        
        for(let i = 0 ; higherToLowerPrice.length>i; i++){
            for(let j = 0 ; vehicles.length>j; j++){
                if(higherToLowerPrice[i]===25000000 && higherToLowerPrice[i]===vehicles[j].precio){
                     arrMM.push(vehicles[j].marca +' '+vehicles[j].modelo);
   
                }else if(higherToLowerPrice[i]===20000000 && higherToLowerPrice[i]===vehicles[j].precio){
                    arrMM.push(vehicles[j].marca +' '+vehicles[j].modelo);

                }else if(higherToLowerPrice[i]===8050050 && higherToLowerPrice[i]===vehicles[j].precio){
                    arrMM.push(vehicles[j].marca +' '+vehicles[j].modelo);

                }else if(higherToLowerPrice[i]===6000000 && higherToLowerPrice[i]===vehicles[j].precio){
                    arrMM.push(vehicles[j].marca +' '+vehicles[j].modelo);
                }
            }
        }
        return arrMM;
    }
}

 
const concesionaria = new Vehicles(vehicles);
concesionaria.showList();
 