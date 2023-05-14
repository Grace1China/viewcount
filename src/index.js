module.exports = function (router, { services, exceptions }) {
	const { ItemsService, AuthenticationServicere } = services;
	// console.log('services', services)
	const { ServiceUnavailableException } = exceptions;
	router.get('/:collections/:id', (req, res, next) => {
		// console.log(req.params.id)

		const collections = req.params['collections'] || '';
		const id = req.params['id'] || '';
		const sv = new ItemsService(collections, { schema: req.schema, accountability: req.accountability });
		// console.log('collections, id,req,resåå', collections, id, req, res)

		sv.readOne(id, {
			fields: [
				"*",
			],
		}).then((results) => {
			sv.updateOne(id, { views: results.views + 1 })
			return res.json(results)
		}).catch((error) => {
			return next(new ServiceUnavailableException(error.message));
		});

		// res.send('Hello, World!')
	});
};
