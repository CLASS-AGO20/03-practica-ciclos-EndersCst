export default class App {
factorial(numero) {
    let dato = numero;
    let resultado = numero;
    for (let i = dato-1; i >= 1; i--){
        resultado = resultado * i
    } 
        
    return resultado
    
}
convertirAString(numero) {

    let i =1;

    while(i<=numero){
        s = s + "*"
        i = i + 1;
    }

    return s;

}
obtenerDivisibles(numero){
    let i = numero;

    do{
        if(numero%i===0){
            divisibles = divisibles + 1;
        }
        i = i -1;
    }while(i>0)
    return divisibles;
}
}
let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(6));

console.log(obtenerDivisibles(5));
