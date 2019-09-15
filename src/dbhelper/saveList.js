module.exports = (args, db) => {
	return db.list.create({ name: args.name })
		.then(data => {
			console.log("auto-generated ID:", data.id);
			return data
		}).catch((err) => {
			return err
		})
}




