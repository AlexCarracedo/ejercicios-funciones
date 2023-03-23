function descuento(a,b) {
    if(a==1){
        return b;
    } else {
        if(2<=a && a<=4) {
            return (a*b-a*b*10/100);
        } else {
            if(5<=a && a<=10) {
                return (a*b-a*b*20/100);
            } else {
                if(a<=11) {
                    return (a*b-a*b*30/100);
                }
            }
        }
    }
}
let resde = descuento(5,20);
console.log('El precio final de 5 artículos de 20€ es de '+resde);