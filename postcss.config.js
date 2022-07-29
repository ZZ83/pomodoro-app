module.exports = {
    plugins: [
        require('autoprefixer')({overrideBrowserslist: ['last 4 versions']}),
        require('cssnano')({preset: 'default',}),
    ],
};