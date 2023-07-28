module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
  }
};
