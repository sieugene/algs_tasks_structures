class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
       this.head = null
       this.tail = null
       
       this.size = 0
    }
     
    append(value) {
       const node = new Node(value)

        if (this.tail) {
            this.tail.next = node
        }

         if (!this.head) {
            this.head = node
         }

         this.tail = node
        
        this.size += 1
     }
    
    prepend(value) {
        let node = new Node(value, this.head)
       
        this.head = node
        
       if (!this.head) {
           this.tail = node
       }
        
        this.size += 1
    }
    
    getSize() {
        return this.size
    }

    
    find(value) {
        if (!this.head) {
            return
        }

    let current = this.head
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
  }
  
insertAfter(after, value) {
      const found = this.find(after)

    if (!found) {
      return
    }

    found.next = new Node(value, found.next)
  }

  print() {
    const output = []
    let current = this.head

    while (current) {
      output.push(current.value)
      current = current.next
    }

    return output
  }


   remove(value) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let current = this.head
    
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }

    if (this.tail.value === value) {
      this.tail = current
    }
    this.size -= 1
  }
}
const list = new LinkedList()
list.append(5)
list.prepend(3)

list.print()
