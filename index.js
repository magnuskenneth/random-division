/**
 * Returns a random value from an array
 * @param {Array} values
 * @returns {*} A random value from 'values'
 */
const getRandomValue = (values) => {
    if (!values) {
        throw new Error('values is undefined');
    }

    const randomIndex = Math.floor(Math.random()*values.length);

    return values[randomIndex];
}

/**
 * Returns a random index from an array
 * @param {Array} values
 * @returns {Number} A random index from 'values'
 */
const getRandomIndex = (values) => {
    if (!values) {
        throw new Error('values is undefined');
    }

    return Math.floor(Math.random()*values.length);
}

/**
 * Returns an array with a specific amount of random values from another array
 * @param {Array} values
 * @param {Number} nrOfValues
 * @returns {Array} An array with with 'nrOfValues' random values from 'values'
 */
const getRandomValues = (values, nrOfValues = 1) => {
    if (!values) {
        throw new Error('values is undefined');
    }
    if (nrOfValues < 0) {
        throw Error('Number of values must be 0 or greater');
    }

    nrOfValues = nrOfValues > values.length ? values.length : nrOfValues;
    const result = [];
    let remaining = values.slice();

    while (nrOfValues-- > 0) {
        const index = getRandomIndex(remaining);
        result.push(remaining[index]);
        remaining.splice(index, 1);
    }

    return result;
}

/**
 * Returns random values from an array divided in groups.
 * Used for e.g. dividing a fixed number of people into a fixed number of teams.
 * Say we want to divide 9 persons into 2 teams. Then we will get one team with 4
 * and one team with 5 persons.
 * @param {Array} values
 * @param {*} totalNrOfValues
 * @param {*} nrOfGroups
 * @returns {Array} An array containing groups as arrays were the 'totalNrOfValues'
 * are distributet evenly. Note that if there isn't an even amout of values to get
 * equally amount in all groups some groups may get one more or less value than the
 * others.
 */
const getRandomValuesInGroups = (values, totalNrOfValues = 1, nrOfGroups = 1) => {
    if (!values) {
        throw new Error('values is undefined');
    }
    if (totalNrOfValues < 0) {
        throw Error('Number of values must be 0 or greater');
    }
    if (nrOfGroups < 1) {
        throw Error('Number of groups must be greater than 0');
    }

    const result = [];
    const randomValues = getRandomValues(values, totalNrOfValues);
    let groupIndex = 0;

    for (let i=0; i<nrOfGroups; i++) {
        result.push([]);
    };

    for (let i=0; i<randomValues.length; i++) {
        result[groupIndex].push(randomValues[i])
        groupIndex++;
        if (groupIndex % nrOfGroups === 0) {
            groupIndex = 0;
        }
    };

    return result;
}

module.exports = {
    getRandomValue,
    getRandomIndex,
    getRandomValues,
    getRandomValuesInGroups
};
