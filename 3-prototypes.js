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

//Get number of years passed since book was written
Book.prototype.getAge = function() {
    const yearsPassed = new Date().getFullYear() - this.year;
    return `${this.title} is ${yearsPassed} years old.`
};

//Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//Instantiate an Object
const book1 = new Book('The Art of the Deal', 'Donald Trump', '1995');
const book2 = new Book('The Hobbit', 'JRR Tolkien', '1935');


console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());

book2.revised('2020');




