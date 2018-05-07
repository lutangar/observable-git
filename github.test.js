require('isomorphic-fetch');
const { createUserRepository, deleteRepository } = require('./github');


test('create a repository on github', () => {
    expect.assertions(1);

    return expect(createUserRepository({ name: 'Spoon-Knife' })).resolves.toMatchObject({
        status: 201,
    });
});

test('delete a repository on github', () => {
    expect.assertions(1);

    return expect(deleteRepository('lutangar')('Spoon-Knife')).resolves.toMatchObject({
        status: 204,
    });
});
