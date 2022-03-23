const validateShapesMiddleware = (schema) => async (req, res, next) => {
  try {

    const validatedBody = await schema.validate(req.body);
    req.body = validatedBody;
    return next();
    
  } catch (e) {
    console.log(schema.fields)
    return res.status(422).json({ message: e.message });
  }
  
};
export default validateShapesMiddleware;