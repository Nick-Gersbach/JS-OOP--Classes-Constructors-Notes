//Object of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}...`;
    },

    getAge: function () {
        const yearsPassed = new Date().getFullYear() - this.year;
        return `${this.title} is ${yearsPassed} years old.`;
    },
}

//Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'author';
book1.year = 'year';

console.log(book1);