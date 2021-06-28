export const SliceArray = (array:Array<any>, size:number) => {
    const chunks = []

while (array.length) {
    chunks.push(array.splice(0, size))
}
return chunks
}
