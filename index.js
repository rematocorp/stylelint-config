module.exports = {
	plugins: ['stylelint-declaration-use-variable'],
	rules: {
		'at-rule-disallowed-list': ['keyframes'],
		'block-no-empty': true,
		'sh-waqar/declaration-use-variable': [
			[
				'/color/',
				{
					ignoreValues: [
						'transparent',
						'inherit',
						'currentColor',
						'initial',
						'/darken/',
						'/lighten/',
						'/rgba/',
					],
				},
			],
		],
	},
}
