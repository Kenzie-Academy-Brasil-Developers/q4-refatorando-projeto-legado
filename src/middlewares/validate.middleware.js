export const validate = (schema) => (req, res, next) => {
  schema
    .validate(req.body, {})
    .then(function (value) {
      req.body = value;
      return next();
    })
    .catch(function (err) {
      return res.status(422).json({ message: err.message });
    });
};
