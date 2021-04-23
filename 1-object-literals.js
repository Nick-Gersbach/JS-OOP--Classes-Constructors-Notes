//Creating a Basic Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}...`;
    }
};

//Logging the object literal to the console
console.log(book1);

//Logging individual properties of the object literal
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

//Log our function to the console.
console.log(book1.getSummary());



//Creating a Basic Object Literal for another book
const book2 = {
    title: 'Book Two',
    author: 'Jahn Doe',
    year: '2014',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}...`;
    }
};

console.log(book2.getSummary());

//Get all the values of an object literal
console.log(Object.values(book2));

//Get all keys of an object literal
console.log(Object.keys(book2));

//If you wanted to create multiple books with this approach, you'd have to copy and paste the obeject literal many times and fill in the new information for each one manually. That is where CONSTRUCTORS come into play.