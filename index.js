const { spawn } = require('observable-child-process');

const toArray = params => (Array.isArray(params) ? params : [params]);
const createGit = cwd => (...args) => spawn('git', toArray(args), { cwd });

module.exports = createGit;
