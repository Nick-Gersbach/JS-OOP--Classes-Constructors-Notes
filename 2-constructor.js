/*
Constructors are just functions with capitlaized names
*/

//Constructor
function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}...`;
    }
}

//Instantiate an Object
const book1 = new Book('The Art of the Deal', 'Donald Trump', '1995');
const book2 = new Book('The Hobbit', 'JRR Tolkien', '1935');

console.log(book1);
console.log(book1.title);

//Now we could easily enter the information of 10000 books without having to copy paste 1000 different object literals

console.log(book1.getSummary());
console.log(book2.getSummary());