module.export = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": "writable"
    },
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off"
    }
};