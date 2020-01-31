let x = [1,2,3,4,5,6,7,8,9]

x.forEach(e => {
    console.log(e)   
})

console.log('-'.repeat(10))

for (let index = 0; index < x.length; index++) {
    const e = x[index]
    console.log(e)
}