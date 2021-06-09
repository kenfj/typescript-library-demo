"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
describe("My math library", () => {
    it("should be able to add things correctly", () => {
        expect(math_1.add(3, 4)).toBe(7);
    });
});
