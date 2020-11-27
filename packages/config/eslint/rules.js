module.exports = {
  'prettier/prettier': 'error',
  'no-console': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector:
        "CallExpression[callee.object.name='console'][callee.property.name=/^(log)$/]",
      message: 'console.log is not allowed!'
    }
  ]
}
