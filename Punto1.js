//1.	Escriba una función que reciba una Cola de números flotantes 
//      y devuelva una nueva Cola pero con los elementos invertidos, 
//      es decir el último de la Cola C, pasará a ser el primero de la nueva Cola.

//David Ordoñez - 2180756

class Queue {
    constructor() {
      this.items = [];
    }
    
    // Agrega un elemento al final de la cola
    enqueue(element) {
      this.items.push(element);
    }

    //elimina el primer elemento de la cola
    dequeue() {
        if (this.isEmpty()) {
          return "La cola está vacía";
        }
        return this.items.shift();
      }
    
  
    // Imprimir los elementos de la fila
    print() {
      console.log(this.items);
    }

    isEmpty() {
        return this.items.length === 0;
      }
 
  }

  function reverseQueue(queue) {
    const tmp = [];
  
    while (!queue.isEmpty()) {
        //sacamos un elemento de la cola y lo agregamos al arreglo temporal
      tmp.push(queue.dequeue());
    }
  
    while (tmp.length > 0) {
        //sacamos un elemento del arreglo temporal y lo agregamos a la cola con un unshift
      queue.enqueue(tmp.pop());
    }
  }

  const myQueue = new Queue();
  myQueue.enqueue(1.5);
  myQueue.enqueue(2.3);
  myQueue.enqueue(3.7);
  myQueue.enqueue(4.2);
  myQueue.enqueue(5.6);

  console.log("Cola original:");
  myQueue.print();
  
  reverseQueue(myQueue);
  
  console.log("Cola invertida:");
  myQueue.print();
  

