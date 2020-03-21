# Random division
Get random values from an array divided into one or more groups.

# Install
`npm install random-division`

# API

## getRandomValuesInGroups
Pick any number of random values from an array divided into groups.

Lets say you have a group of characters you want to divide into two teams

Example:
```
const { getRandomValuesInGroups } = require('./index.js');

const characters = ['Yoda', 'Leia', 'Luke', 'R2D2'];
const teams = getRandomValuesInGroups(characters, characters.length, nrOfTeams);

// The result will be two randomized teams e.g.
// [
//     ['Luke', 'Yoda'],
//     ['Leia', 'R2D2']
// ]
```

## getRandomValues
Get any number of random values from an array.

```
const { getRandomValues } = require('./index.js');

const characters = ['Yoda', 'Leia', 'Luke', 'R2D2'];
const values getRandomValues(characters, 2);

// The result will be an array with 2 random valus from characters, e.g.
// ['Leia', 'R2D2']
```

## getRandomValue
Get a random value from an array.

```
const { getRandomValue } = require('./index.js');

const characters = ['Yoda', 'Leia', 'Luke', 'R2D2'];
const character = getRandomValue(characters);

// character will be one of the characters in characters, e.g. 'Yoda'
```

## getRandomIndex
Get a random index from an array.

```
const { getRandomIndex } = require('./index.js');

const characters = ['Yoda', 'Leia', 'Luke', 'R2D2'];
const index = getRandomIndex(characters);

// index will be 0-3
```