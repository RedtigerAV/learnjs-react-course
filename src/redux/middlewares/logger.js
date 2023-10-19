// eslint-disable-next-line no-unused-vars
export const loggerMiddleware = store => next => action => {
  console.log('loggerMiddleware', action);

  next(action);
}