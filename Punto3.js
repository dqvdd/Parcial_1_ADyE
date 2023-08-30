// 3.	Escriba un método que, dadas dos listas ordenadas de números enteros,
//      realice la concatenación en forma ordenada de ambas listas.
//      El método debe recibir los apuntadores a los primeros nodos de cada lista.

//David Ordoñez - 2180756

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SortedLinkedList {
  constructor() {
    this.head = null;
  }

  //agregamos los nodos una vez ya ordenados
  //por eso no puedo poner cola, sino que busque
  //el apuntador que sea mayor o igual en el else
  append(value) {
    const newNode = new Node(value);
    if (!this.head || value < this.head.value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next && value >= current.next.value) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  mergeWith(otherList, currentA = this.head, currentB = otherList.head) {
    let merged = new SortedLinkedList();

    while (currentA || currentB) {
      if (!currentB || (currentA && currentA.value <= currentB.value)) {
        merged.append(currentA.value);
        currentA = currentA.next;
      } else {
        merged.append(currentB.value);
        currentB = currentB.next;
      }
    }

    return merged;
  }
}

// Ejemplo
const list1 = new SortedLinkedList();
list1.append(1);
list1.append(38);
list1.append(5);
list1.append(54);
list1.append(23);
list1.append(91);

const list2 = new SortedLinkedList();
list2.append(2);
list2.append(44);
list2.append(6);
list2.append(24);
list2.append(65);
list2.append(0.5);

console.log("List 1:");
list1.print();

console.log("List 2:");
list2.print();

const mergedList = list1.mergeWith(list2);

console.log("Merged List:");
mergedList.print();
