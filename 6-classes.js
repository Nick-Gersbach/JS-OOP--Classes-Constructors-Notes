/* 
Classes is the ES6 way of building constructors. There is no need for a prototype when writing it the ES6 way.
*/

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}...`;
    }

    getAge() {
        const yearsPassed = new Date().getFullYear() - this.year;
        return `${this.title} is ${yearsPassed} years old.`
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

//Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2021');

console.log(book1);
book1.revise('2018');
console.log(book1);