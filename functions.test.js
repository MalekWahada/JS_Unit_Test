const functions = require('./functions');


// example of used test to test data inserted to database and 
// once tests are done these data will be deleted from the database

// before and after EVERY test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// before and after ALL tests
/*beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log(('Database initialized...'));
const closeDatabase = () => console.log(('Database closed...'));*/

const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck());
    
    test('User is Malek ', () => {
        const user = 'Malek';
        expect(user).toBe('Malek');
    });
    
    test('User is Sara ', () => {
        const user = 'Sara';
        expect(user).toBe('Sara');
    });
})


// not  ||  toBe  ||  toBeNull
test('Adds 2+2 eqauls to 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2+2 eqauls to 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


// to be null
test('should be null', () => {
    expect(functions.isNull(null)).toBeNull();
});


// to be falsy
test('should br falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});


// toBe instead is used instead 'toStrictEqual or toEqual  used for arrays and objects ,  
test('user should be = kolarov mikalov Object', () => {
    expect(functions.createUser(0)).toEqual({ 
        firstName: 'Mikalov', 
        lastName: 'kolarov'
    });
});

// less then and greater then 
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});


// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in userName', () => {
    usernames = ['malek', 'mohsin', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async data

    //promise
/*test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})
*/

    //Async await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})