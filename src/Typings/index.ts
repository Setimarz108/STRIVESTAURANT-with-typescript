export interface Pasta {

    id: number,
    name: string,
    image: string,
    category: string,
    label: string,
    price: string,
    description: string,
    comments:{
        id: number,
        rating: number,
        comment: string,
        author: string,
        date: string
    }[]
}

export interface Reservations {

    name: string,
    phone: string,
    numberOfPeople: number,
    smoking: false,
    dateTime: string,
    specialRequests: string,
}