interface User6 {
    lastName: string,
    age: number
    [propName: string]: any
}

const alex6: User6 = {
    lastName: 'Ivanovich',
    age: 10,
    homeAlone: true,
    eyeColor: 'brown'
}
