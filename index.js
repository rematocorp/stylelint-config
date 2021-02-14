module.exports = {
	plugins: ['stylelint-declaration-use-variable'],
	rules: {
		// Avoids errors
		'color-no-invalid-hex': true,
		'block-no-empty': true,
		'function-calc-no-invalid': true,
		'function-calc-no-unspaced-operator': true,
		'unit-no-unknown': true,
		'property-no-unknown': true,
		'keyframe-declaration-no-important': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['mixin', 'include'],
			},
		],
		'no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-empty-source': true,
		'no-extra-semicolons': true,

		// Enforces DRY
		'at-rule-disallowed-list': ['keyframes'],
		'color-named': 'never',
		'sh-waqar/declaration-use-variable': [
			[
				'/color/',
				'border-radius',
				{
					ignoreValues: ['0', 'transparent', 'inherit', 'currentColor', 'initial'],
				},
			],
		],
	},
}
