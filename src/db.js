const { MongoClient } = require('mongodb')

async function connect() {
    const uri = 'mongodb+srv://emsb3:123@cluster0.rfyoylw.mongodb.net/?retryWrites=true&w=majority'

    const client = new MongoClient(uri, { userNewUrlParser: true, useUnifiedTopology: true})

    try {
        await client.connect()
        console.log('Conectado ao banco')
        return client.db()
    } catch (error) {
        console.log('Erro', error)
    }
}

module.exports = connect