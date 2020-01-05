const isAnagram = require('./anagram');

test('isAnagaram function exists ', () => {
  expect(typeof isAnagram).toEqual('function');  
});

test('"cienam" is an anagram of "iceman" ', () => {
    expect(isAnagram('cinema','iceman')).toBeTruthy();
});

test('"Dormatory" is an anagram of "Dorm atory" ', () => {
    expect(isAnagram('Dormatory','Dorm atory')).toBeTruthy();
});

test('"af" is an anagram of "af g" ', () => {
    expect(isAnagram('af','af g')).toBeFalsy();
});

