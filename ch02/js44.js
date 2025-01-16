const person = {name : "kitai" , age : 25 };
const handler = {
    set : (target, property, value ) => {
        if ( property === "age" && typeof value !== "number") {
            throw new TypeError ( "Age must be a number" ); }
        target[property] = value ;
        return true ;
    }
} ;

const proxyPerson = new Proxy(person, handler) ;
proxyPerson.age = 50  ;
console.log(proxyPerson.age) ;

