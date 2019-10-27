// alert('Hello, World!');
// var obj = new Object();

// var obj = {};
obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
}
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    }
}

var book = new Book('title','pag','isbn');
// console.log(book.title);
// book.title = 'new title';
// console.log(book.title);

Book.prototype.printTitle = function(){
    console.log(this.title);
};

book.printTitle();
book.printIsbn();

// let circleAreaES5 = function circleArea(r){
//     const PI = 3.14;
//     const area = PI * r * r;
//     return area;
// }
// console.log(circleAreaES5(2));

const circleArea = r =>{
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}
console.log(circleArea(2));

class NewBook {
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let newBook = new NewBook('title','pag','isbn');
console.log(newBook.title);
book.title = 'new title';
console.log(book.title);