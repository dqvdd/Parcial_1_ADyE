// 2.	Implementar una función que invierta una pila.

//David Ordoñez - 2180756

class Pila {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

function reverseStack(stack) {
  const reversedStack = new Pila();

  while (!stack.isEmpty()) {
    //sacamos un elemento de la pila y lo agregamos a la invertida
    reversedStack.push(stack.pop());
  }

  return reversedStack;
}

const myStack = new Pila();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log("Pila original");
myStack.print();

const reversedStack = reverseStack(myStack);

console.log("Pila invertida:");
reversedStack.print();
