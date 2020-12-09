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
}
let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(6));
