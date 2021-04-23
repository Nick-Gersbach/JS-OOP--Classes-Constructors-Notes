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

//Magazine Subclasses
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//Instantiate Magazine
const mag1 = new Magazine('Mag One','John Doe', '2015', 'Jul');

console.log(mag1);
console.log(mag1.getSummary());