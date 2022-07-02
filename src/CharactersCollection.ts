import { Sorter } from "./Sorter"

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    )
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("")

    const charLeft = characters[leftIndex]
    const charRight = characters[rightIndex]

    characters[leftIndex] = charRight
    characters[rightIndex] = charLeft

    this.data = characters.join("")
  }
}
