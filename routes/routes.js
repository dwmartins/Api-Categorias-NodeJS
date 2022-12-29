module.exports = (app) => {
	app.route("/users")
    .get(app.api.users.get)
    .post(app.api.users.save)

	app.route("/categories")
    .get(app.api.categories.get)
    .post(app.api.categories.save)
    
  app.route("/categories/:id")
    .delete(app.api.categories.remove)
}