//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//Get Summary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}...`;

};

//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Muscle and Strength', 'Joe Weider', '1978', 'Oct');

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);