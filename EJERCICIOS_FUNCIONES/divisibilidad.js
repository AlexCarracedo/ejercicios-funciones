function divisibilidad(a,b){
    if(b=0) {
        return 'error';
    } else {
        if(b%a==0) {
            return 'divisible';
        } else {
            if(b%a!=0) {
                return 'no divisible';
            }
        }
    }
}
let resdd = divisibilidad(7,35);
console.log('35 es '+resdd+' con respecto al 7');