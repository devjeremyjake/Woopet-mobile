module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
			[
				'@babel/preset-react',
				{
					importSource: '@welldone-software/why-did-you-render',
					runtime: 'automatic',
					development: true,
				},
			],
		],
		plugins: ['react-native-reanimated/plugin'],
	};
};
