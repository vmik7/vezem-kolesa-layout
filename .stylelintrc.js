module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-prettier/recommended',
    ],
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'no-empty-source': null,
        'block-no-empty': null,
        'no-descending-specificity': null,
    },
};
