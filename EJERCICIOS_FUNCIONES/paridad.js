function paridad(a) {
    if(a%2==0) {
        return 'par';
    } else {
        return 'impar';
    }
}
let respa = paridad(13);
console.log('El número 13 es '+respa);