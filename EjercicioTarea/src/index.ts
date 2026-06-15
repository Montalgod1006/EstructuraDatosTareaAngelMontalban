
interface  IContenedor<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T ; 
    estaVacia(): boolean;
    tamaño(): number;
}

interface  IComparable<T> {
    comparar(otro: T): number;
}
interface  IIterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

type Par <A,B > =
{
    primero: A;
    segundo: B;
}

class NodoDoblementeEnlazado<T  extends IComparable<T>> implements IComparable<NodoDoblementeEnlazado<T>>{
    dato: T;
    siguiente: NodoDoblementeEnlazado<T> | null;
    anterior: NodoDoblementeEnlazado<T> | null;

    constructor(dato: T){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    } 
    
    toString(): string{
        return `Dato: ${this.dato}, siguiente: ${this.siguiente}, anterior: ${this.anterior}`;
    }

    comparar(otro: NodoDoblementeEnlazado<T>): number{
        return this.dato.comparar(otro.dato);
    }
}