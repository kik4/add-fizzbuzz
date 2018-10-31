import index from "../src"

describe("index", () => {
  it("index(data) to equal data", () => {
    expect(index(-1)).toEqual(0)
    expect(index(1)).toEqual(0)
    expect(index(3)).toEqual(3)
    expect(index(5)).toEqual(8)
    expect(index(15)).toEqual(60)
  })
})
