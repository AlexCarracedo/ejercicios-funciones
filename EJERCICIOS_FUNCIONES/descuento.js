function descuento(a,b) {
    if(a==1){
        var precio = a*b;
        return precio;
    } else {
        if(2<=a && a<=4) {
            var precio = a*b;
            var descuento = a*b*10/100;
            return (precio-descuento);
        } else {
            if(5<=a && a<=10) {
                var precio = a*b;
                var descuento = a*b*20/100;
                return (precio-descuento);
            } else {
                if(a<=11) {
                    var precio = a*b;
                    var descuento = a*b*30/100;
                    return (precio-descuento);
                }
            }
        }
    }
}
let resde = descuento(5,20);
console.log('El precio final de 5 artículos de 20€ es de '+resde);