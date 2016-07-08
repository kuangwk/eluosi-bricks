var releaseUrl = '/eluosi-bricks/dist/'
// 启用 es6-babel 插件，解析 .es6 后缀为 .js
fis.match('*.es6', {
  rExt: '.js',
  parser: fis.plugin('es6-babel')
});
fis.hook('commonjs');

fis.match('js/*.js', {
    isMod: true
})
fis.match('*.{png,js,css}', {
  release: '/static/$0'
});
fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});

fis.media('dist')
    .match('*.{png,js,css}', {
        release: 'static/$0',
        url: releaseUrl + 'static/$0'
    })
    .match('**', {
        deploy: fis.plugin('local-deliver', {
            to: './dist'
        })
    });