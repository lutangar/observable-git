const { spawn } = require('observable-child-process');

const createRepositoryURL = (user, repo) => `git@github.com:${user}/${repo}.git`;

const createGit = cwd => args => spawn('git', [args], { cwd });

export default createGit;

module.exports = {
    createRepositoryURL,
};
