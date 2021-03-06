module.exports = {
	plugins: ['stylelint-declaration-use-variable', 'stylelint-scss'],
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
		'no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-empty-source': true,
		'no-extra-semicolons': true,
		'scss/at-rule-no-unknown': true,

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

		// Avoids doing autoprefixer job
		'value-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
		'selector-no-vendor-prefix': true,
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,

		// Improves comments quality
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/comment-no-empty': true,
	},
}
