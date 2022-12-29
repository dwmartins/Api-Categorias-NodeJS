module.exports = (app) => {
  app.route("/users")
		.get(app.api.users.get)
		.post(app.api.users.save)

		app.route("/categories")
		.post(app.api.categories.save)
}