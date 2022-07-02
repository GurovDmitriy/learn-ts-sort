import { Sorter } from "./Sorter"

class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  constructor() {
    super()
  }

  head: Node | null = null

  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length += 1
      node = node.next
    }

    return length
  }

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds")
    }

    let counter = 0
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter += 1
      node = node.next
    }

    throw new Error("Index out of bounds")
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty")
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    const nodeLeft = this.at(leftIndex)
    const nodeRight = this.at(rightIndex)

    const leftHand = nodeLeft.data
    const rightHand = nodeRight.data

    nodeLeft.data = rightHand
    nodeRight.data = leftHand
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
