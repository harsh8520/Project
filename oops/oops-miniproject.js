class Library{
    //new library
    //add books
    //display bbooks
    constructor() {
        this.books = []
    }

    addBooks(books) {
        this.books.push(...books)
    }

    displayBooks(){
        this.books.forEach((book)=>{
            console.log(`the book ${book.name} - ${book.author} is available for ₹${book.price} at amazon`);
        })
    }
}

class Book{
    constructor(name, price, author) {
        this.name = name
        this.price = price
        this.author = author
    }
}

let mumbai = new Library()
let b1 = new Book('The dip', 250, 'Seth Godin')
let b2 = new Book('Atomic habits', 350, 'Harsh')
let b3 = new Book('ABCD', 250, 'chetan bhagat')
mumbai.addBooks([b1,b2,b3])
console.log(mumbai.displayBooks());