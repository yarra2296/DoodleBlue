const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 },
    { name: 'Jaswanth', age: 22 },
    { name: 'Akhil', age: 18 },
    { name: 'Naveen', age: 15 },
    { name: 'Venkat', age: 35 },
    { name: 'Manish', age: 28 },
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        }, 3000)
    })
}