module.exports = function (router, { services, exceptions }) {
	const { ItemsService, AuthenticationServicere } = services;
	const { ServiceUnavailableException } = exceptions;
	router.get('/:collections/:id', (req, res, next) => {
		const collections = req.params['collections'] || '';
		const id = req.params['id'] || '';
		const sv = new ItemsService(collections, { schema: req.schema, accountability: req.accountability });
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
	});
};
