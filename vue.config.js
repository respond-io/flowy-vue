module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/flowy-vue/' : '/flowy-vue/',
	productionSourceMap: process.env.NODE_ENV !== 'production',
	outputDir: 'docs',
	lintOnSave: false,

	chainWebpack: config => {
		config.resolve.alias.set('vue', '@vue/compat');

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => {
				return {
					...options,
					compilerOptions: {
						compatConfig: {
							MODE: 2,
						},
					},
				};
			});
	},
};
