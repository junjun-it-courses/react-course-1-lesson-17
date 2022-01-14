interface User4 {
    readonly name: string,
    lastName: string
    age?: number
}

const alex4: User4 = {
    name: 'Alex',
    lastName: 'Ivanovich',
}

// alex.name = 'Vladimir';
alex4.lastName = 'Ivanov';