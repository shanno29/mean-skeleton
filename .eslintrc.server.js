module.exports = {
    'extends': 'google',
    'parserOptions': {
      'ecmaVersion': 6,
      'sourceType': 'module'
    },
    'env': {
      'node': true,
      'mocha': true,
      'mongo': true,
    },
    'rules': {
      'max-len': 0,
      'new-cap': 0,
      'no-invalid-this': 0,
      'linebreak-style': 0,
    }
};
