import { throwIf } from '../helper/throw-if.js';

describe('throwIf(e, clause)', () => {
    it('should pass when clause is false', () => {
        throwIf(new Error(), false);
    });

    it('should throw error when clause is true', () => {
        try {
            throwIf(new Error(), true);
            expect(true).toBeFalsy();
        } catch (e) {
            expect(e instanceof Error).toBeTruthy();
        }
    });
});