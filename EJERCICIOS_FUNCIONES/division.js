function division(a,b) {
    if(b==0) {
        return 'infinito';
    } else {
        return a/b;
    }
}
let resd = division(9,3);
console.log('El resultado de dividir 9 entre 3 es '+resd);