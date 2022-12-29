module.exports = (app) => {

	const save = async (req, res) => {
		const category = {...req.body}

        if(!category.name) {
            return res.status(400).json({"error": "Nome da categoria não informado"});
        }

        const categoryExists = await app
        .database("categories")
        .where({name: category.name})
        .first();

        if(categoryExists) {
            return res.status(400).json({"error": "A categoria já existe"});
        }
		
        category.image = "category.png";

        app
        .database("categories")
        .insert(category)
        .then(()=> res.status(200).send())
        .catch((err)=> res.status(500).send(err))

	}

	return {save}
}