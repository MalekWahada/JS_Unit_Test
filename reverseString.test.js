const reverseString = require('./reverseString');

test('reverseString exists ', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses ', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with upper case', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});

