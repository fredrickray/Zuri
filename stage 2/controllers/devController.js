const knex = require("../knex-db/knex")

const createDev = async (req, res) => {
    try {
        const { name } = req.body;

        // Check if name is provided
        if (!name) {
            res.status(400).json({ message: 'Name is required' });
            return;
        }

        // Check if name contains only letters and whitespaces
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            res.status(406).json({ message: 'Name must contain only letters and whitespaces' });
            return;
        }

        const response = await knex("Developers").insert({ name });
        console.log(response);
        res.status(201).json({ message: "Developer created successfully", response });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error", err: error.message });
    }
}

const getDeveloper = async (req, res) => {
    try {
        const { query } = req.query;
        let developer;

        if (!query) {
            res.status(400).json({ message: 'Query parameter (id or firstname) is required' });
            return;
        }

        if (!isNaN(query)) {
            // If the query is a number, assume it's an ID and search by ID
            developer = await knex("Developers").where({ id: query }).first();
        } else {
            // If the query is not a number, assume it's a first name and search by first name
            developer = await knex("Developers").where({ name: query }).first();
        }

        if (!developer) {
            res.status(404).json({ message: "Developer not found" });
            return;
        }

        res.status(200).json({
            message: "Developer retrieved successfully",
            developer
        });
        // res.status(200).json(developer)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Internal server error", err: error.message });
    }
}

const updateDeveloper = async (req, res) => {
    try {
        const { id } = req.query;
        const { firstname, lastname } = req.body;

        // Validate that at least one of firstname or lastname has a value
        if (!firstname && !lastname) {
            res.status(400).json({ message: 'Either firstname or lastname must have a value' });
            return;
        }

        const updatedCount = await knex("Developers")
            .where({ id })
            .update({ firstname, lastname })

        if (updatedCount === 0) {
            res.status(404).json({ message: 'Developer not found' });
            return;
        }
        
        const updatedDev = await knex('Developers').where({ id }).first();
        res.json(updatedDev);
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send({ message: "Internal server error", err: error.message })
    }
}

const deleteDeveloper = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedCount = await knex('Developers').where('id', id).del();
        if (deletedCount === 0) {
          res.status(404).json({ error: 'Developer not found' });
          return;
        }
        res.status(200).json({ message: 'Developer deleted successfully' });
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).send({message: "Internal server error", err: error.message})
    }
}

module.exports = {
    createDev,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper
}