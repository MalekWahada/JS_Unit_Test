const chunkArray = require('./chunk');

test('should ', () => {
    expect(chunkArray).toBeDefined();
});

test('check an array of 5 values with length of 2 ', () => {
    const numbers = [1,2,3,4,5];
    const len = 2;
    const chunkedArr = chunkArray(numbers, len);

    expect(chunkedArr).toEqual([[1,2],[3,4],[5]]);
});

test('check an array of 6 values with length of 2 ', () => {
    const numbers = [1,2,3,4,5,6];
    const len = 2;
    const chunkedArr = chunkArray(numbers, len);

    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6]]);
});


