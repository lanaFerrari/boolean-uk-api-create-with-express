const Book = require("./model");
const db = require("../../utils/database");

Book();

function createBook(req, res){
    console.log("InsideProductToCreate", req.body)


    const bookToCreate = {
        ...req.body
    };

const createBook= `
    INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    RETURNING *
    `;

    try {
        const result = await db.query(createBook, [
            bookToCreate.title,
            bookToCreate.type,
            bookToCreate.author,
            bookToCreate.topic,
            bookToCreate.publicationDate
    ])

    res.json({data:result.rows[0]})

    } catch (error) {
    console.error("[ERROR] createBook: ", { error: error.message })

    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createBook
};