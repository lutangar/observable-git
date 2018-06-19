const { spawn } = require('observable-child-process');

const createGit = cwd => args => spawn('git', [args], { cwd });

module.exports = createGit;
