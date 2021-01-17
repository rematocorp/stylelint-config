module.exports = {
	plugins: ['stylelint-declaration-use-variable'],
	rules: {
		'at-rule-disallowed-list': ['keyframes'],
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'color-named': 'never',
		'sh-waqar/declaration-use-variable': [
			[
				'/color/',
				{
					ignoreValues: ['transparent', 'inherit', 'currentColor', 'initial'],
				},
			],
		],
	},
}
