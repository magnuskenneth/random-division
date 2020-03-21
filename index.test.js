const {
    getRandomValue,
    getRandomIndex,
    getRandomValues,
    getRandomValuesInGroups
} = require('./index.js');

describe('getRandomValue', () => {
    let values;

    beforeEach(() => {
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    });

    it('should return a value from values', () => {
        result = getRandomValue(values);

        expect(values).toContain(result);
    });

    describe('when values is undefined', () => {
        beforeEach(() => {
            values = undefined;
        });

        it('should throw an error', () => {
            expect(() => getRandomValue(values))
                .toThrow('values is undefined');
        });
    });
});

describe('getRandomIndex', () => {
    let values;

    beforeEach(() => {
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    });

    it('should return an index between 0 and values.length-1', () => {
        result = getRandomIndex(values);

        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(values.length);
    });

    describe('when values is undefined', () => {
        beforeEach(() => {
            values = undefined;
        });

        it('should throw an error', () => {
            expect(() => getRandomIndex(values))
                .toThrow('values is undefined');
        });
    });
});

describe('getRandomValues', () => {
    let values;

    beforeEach(() => {
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    });

    it('should return an array with nrOfValues from the values array', () => {
        const nrOfValues = 5;

        result = getRandomValues(values, nrOfValues);

        expect(result.length).toBe(5);
        result.forEach((value) => {
            expect(values).toContain(value);
        });
    });

    describe('when values is undefined', () => {
        beforeEach(() => {
            values = undefined;
        });

        it('should throw an error', () => {
            const nrOfValues = 1;

            expect(() => getRandomValues(values, nrOfValues))
                .toThrow('values is undefined');
        });
    });

    describe('when nrOfValues > values.length', () => {
        let nrOfValues;

        beforeEach(() => {
            nrOfValues = values.length + 5;
        });

        it('should return nrOfValues in total', () => {
            result = getRandomValues(values, nrOfValues);

            expect(result.length).toBe(values.length);
        });
    });

    describe('when nrOfValues is undefined', () => {
        const nrOfValues = undefined;

        it('should return an array with one value', () => {
            result = getRandomValues(values, nrOfValues);

            expect(result.length).toBe(1);
        });
    });

    describe('when nrOfValues is 0', () => {
        const nrOfValues = 0;

        it('should return an empty array', () => {
            result = getRandomValues(values, nrOfValues);

            expect(result).toEqual([]);
        });
    });

    describe('when nrOfValues is negative', () => {
        const nrOfValues = -1;

        it('should return 0 values', () => {
            expect(() => getRandomValues(values, nrOfValues))
                .toThrow('Number of values must be 0 or greater');
        });
    });
});

describe('getRandomValuesInGroups', () => {
    let values;

    beforeEach(() => {
        values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    });

    it('should return groups with values from the values array', () => {
        const totalNrOfValues = 4;
        const nrOfGroups = 2;

        result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

        expect(result.length).toBe(2);
        result.forEach((group) => {
            group.forEach((value) => {
                expect(values).toContain(value);
            });
        });
    });

    describe('when nr of values fits evenly in all groups', () => {
        const totalNrOfValues = 4;
        const nrOfGroups = 2;

        it('should return equally amount of values in each group', () => {
            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(2);
            expect(result[0].length).toBe(2);
            expect(result[1].length).toBe(2);
        });
    });

    describe('when nr of values are more than fits evenly in all groups', () => {
        const totalNrOfValues = 10;
        const nrOfGroups = 4;

        it('should add the remaing values in the first groups', () => {
            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(4);
            expect(result[0].length).toBe(3);
            expect(result[1].length).toBe(3);
            expect(result[2].length).toBe(2);
            expect(result[3].length).toBe(2);
        });
    });

    describe('when nr of values are less than fits evenly in all groups', () => {
        const totalNrOfValues = 2;
        const nrOfGroups = 4;

        it('should be less values in remaining groups when all values are distributed', () => {
            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(4);
            expect(result[0].length).toBe(1);
            expect(result[1].length).toBe(1);
            expect(result[2].length).toBe(0);
            expect(result[3].length).toBe(0);
        });
    });

    describe('when totalNrOfValues > values.length', () => {
        let totalNrOfValues;

        beforeEach(() => {
            totalNrOfValues = values.length + 5;
        });

        it('should return totalNrOfValues in total', () => {
            const nrOfGroups = 1;

            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(1);
            expect(result[0].length).toBe(values.length);
        });
    });

    describe('when totalNrOfValues is 0', () => {
        const totalNrOfValues = 0;

        it('should return 0 values', () => {
            const nrOfGroups = 1;

            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(1);
            expect(result[0].length).toBe(0);
        });
    });

    describe('when totalNrOfValues is negative', () => {
        const totalNrOfValues = -1;

        it('should return 0 values', () => {
            const nrOfGroups = 1;

            expect(() => getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups))
                .toThrow('Number of values must be 0 or greater');
        });
    });

    describe('when nrOfGroups is 0', () => {
        const nrOfGroups = 0;

        it('should throw an error', () => {
            const totalNrOfValues = 1;

            expect(() => getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups))
                .toThrow('Number of groups must be greater than 0');
        });
    });

    describe('when nrOfGroups is negative', () => {
        const nrOfGroups = -1;

        it('should throw an error', () => {
            const totalNrOfValues = 1;

            expect(() => getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups))
                .toThrow('Number of groups must be greater than 0');
        });
    });

    describe('when totalNrOfValues is undefined', () => {
        const totalNrOfValues = undefined;

        it('should default to 1 value', () => {
            const values = [1, 2, 3, 4, 5];
            const nrOfGroups = 1;

            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(1);
            expect(result[0].length).toBe(1);
        });
    });

    describe('when nrOfGroups is undefined', () => {
        const nrOfGroups = undefined;

        it('should default to 1 group', () => {
            const values = [1, 2, 3, 4, 5];
            const totalNrOfValues = 2;

            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(1);
            expect(result[0].length).toBe(2);
        });
    });

    describe('when values is empty', () => {
        const values = [];

        it('should return empty groups', () => {
            const totalNrOfValues = 2;
            const nrOfGroups = 2;

            result = getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups);

            expect(result.length).toBe(2);
            expect(result[0].length).toBe(0);
            expect(result[1].length).toBe(0);
        });
    });

    describe('when values is undefined', () => {
        const values = undefined;

        it('should throw an error', () => {
            const totalNrOfValues = 2;
            const nrOfGroups = 2;

            expect(() => getRandomValuesInGroups(values, totalNrOfValues, nrOfGroups))
                .toThrow('values is undefined');
        });
    });
});
