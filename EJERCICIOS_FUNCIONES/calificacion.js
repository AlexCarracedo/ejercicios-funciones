function calificacion(a) {
    if(a<60) {
        return 'F';
    } else {
        if(60<=a && a<70) {
            return 'D';
        } else {
            if(70<=a && a<80) {
                return 'C';
            } else {
                if(80<=a && a<90) {
                    return 'B';
                } else {
                    return 'A';
                }
            }
        }
    }
}
let resc = calificacion(80);
console.log('La calificación es de '+resc);