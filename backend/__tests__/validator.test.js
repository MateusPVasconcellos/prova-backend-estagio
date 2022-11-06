import { jest } from '@jest/globals';
import { validatorSchema } from '../middleware/schema-validator.js';
import { validator } from '../middleware/validator.js';

const mockRequest = (body, params) => ({
    body,
    ...params,
});
const mockResponse = () => {
    const response = {};
    response.status = jest.fn(() => response);
    response.json = jest.fn(value => value);
    return response;
};

const mockNext = () => jest.fn();

describe('validator(req, res, next)', () => {
    it('should return 400 when validation is failed', () => {
        const request = mockRequest({
            username: 'Fal'
        });

        const response = mockResponse();
        const next = mockNext();
        validator(validatorSchema)(request, response, next);

        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledTimes(0);
    });

    it('should call next middleware when validation is succesful', async () => {

        const req = mockRequest({
            username: 'Fanuel'
        });

        const res = mockResponse();
        const next = mockNext();
        await validator(validatorSchema)(req, res, next);

        expect(next).toHaveBeenCalledTimes(1);

    });
});