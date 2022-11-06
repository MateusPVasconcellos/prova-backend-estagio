export const errorHandler = function (e, request, response, next) {
    const httpStatus = e.httpStatus || 500;
    if (httpStatus > 500) {
        console.log('Unexpected Error', e);
    }
    response.status(httpStatus);
    response.send(e.customMessage || 'Internal Server Error');
    next(httpStatus >= 500 ? e : undefined);
};