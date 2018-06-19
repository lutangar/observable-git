const { GITHUB_TOKEN } = process.env;

const baseURL = 'https://api.github.com';
const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json'
};

const createRepository = endpoint => (options = {}) => fetch(endpoint, {
    body: JSON.stringify(options),
    headers,
    method: 'POST'
});

const createUserRepository = createRepository(`${baseURL}/user/repos`);
const createOrganizationRepository = organization => createRepository(`${baseURL}/orgs/${organization}/repos`);

const deleteRepository = owner => repository => fetch(`${baseURL}/repos/${owner}/${repository}`, {
    headers,
    method: 'DELETE'
});

module.exports = {
    createUserRepository,
    createOrganizationRepository,
    deleteRepository,
};
