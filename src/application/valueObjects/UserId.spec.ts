import { describe, it, expect } from 'vitest';
import UserId from './UserId';

describe('UserId', () => {

    it('should generate a value if none is provided', () => {
        const id = new UserId();

        expect(id.getValue()).toBeTypeOf('string');
        expect(id.getValue().length).toBeGreaterThan(0);
    });

    it('should use the provided value if given', () => {
        const value = 'my-custom-id';

        const id = new UserId(value);

        expect(id.getValue()).toBe(value);
    });

    it('should not change the value after creation', () => {
        const value = 'fixed-id';

        const id = new UserId(value);

        expect(id.getValue()).toBe('fixed-id');
    });

});