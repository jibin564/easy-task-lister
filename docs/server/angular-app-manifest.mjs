
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3128, hash: 'f1ac77c9816595064026e5f63aea95c720a8207b69e3fbdc0936cf66c2d3eafe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3336, hash: 'ddf3d085a2210600671df5e0a71a233b841b8e729ce66af991632f2f9804bed2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9325, hash: '8a3e820c2eba846cb80538e21e6823c4e37ae004695e114e17401b0dab104aef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PH5QZW6A.css': {size: 186, hash: '08ViHY/xP6M', text: () => import('./assets-chunks/styles-PH5QZW6A_css.mjs').then(m => m.default)}
  },
};
