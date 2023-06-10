const connect = require('./db')

async function getBooks() {
    const db = await connect()
    const books = db.collection('books')
    return books.find({}).toArray()
}

async function addBook(book) {
    const db = await connect()
    const books = db.collection('books')
    return books.insertOne(book)
}

module.exports = { getBooks, addBook };