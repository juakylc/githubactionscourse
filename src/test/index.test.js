import { describe, expect, it } from "vitest";
import { increment } from "../functions/functions";

describe('Función incremento', () => {
    it('Increment debe ser una función', () => {
        expect(typeof increment).toBe('function');
    });

    it('Increment debe incrementar correctamente un num', () => {
        expect(increment(1)).toBe(2);
    });
});