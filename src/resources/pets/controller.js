const db = require("../../utils/database");
const Pet = require("./model");

Pet();

function createPet(req, res){
    console.log("InsidePetToCreate", req.body)


    const petToCreate = {
        ...req.body
    };

const createBook= `
      INSERT INTO pets
        (name, age, type, breed, microchip)
      VALUES
        ($1, $2, $3, $4, $5)
    `
    ;
const { name, age, type, breed, microchip} = createBook

    try {
        const result = await db.query(createPet, [
            name, 
            age, 
            type, 
            breed, 
            microchip
    ])

    res.json({data:result.rows[0]})

    } catch (error) {
    console.error("[ERROR] createBook: ", { error: error.message })

    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createPet
};