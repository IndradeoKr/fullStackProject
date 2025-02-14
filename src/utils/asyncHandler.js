const asyncHandler = (requestHanlder) => (req, res, next) => {
  Promise
  .resolve(requestHanlder(req, res, next))
  .catch((error)=> next(error));
};