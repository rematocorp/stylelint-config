module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-html'],
	plugins: ['stylelint-declaration-strict-value'],
	rules: {
		// Turns off undesired checks
		'function-linear-gradient-no-nonstandard-direction': null,
		'no-descending-specificity': null,

		// Avoids errors
		'color-no-invalid-hex': true,
		'block-no-empty': true,
		'function-calc-no-unspaced-operator': true,
		'property-no-unknown': true,
		'unit-no-unknown': true,
		'keyframe-declaration-no-important': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'selector-type-no-unknown': true,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep', 'global', 'slotted'],
			},
		],
		'selector-pseudo-element-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-empty-source': true,
		'font-weight-notation': 'numeric',
		'scss/at-rule-no-unknown': true,
		'scss/function-no-unknown': true,

		// Enforces DRY
		'color-named': 'never',
		'scale-unlimited/declaration-strict-value': [
			['/color/', 'border-radius'],
			{
				ignoreValues: ['0', 'transparent', 'inherit', 'currentColor', 'initial'],
			},
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

		// Improves readability
		'rule-empty-line-before': [
			'always',
			{
				except: ['after-single-line-comment', 'first-nested'],
			},
		],
	},
}
