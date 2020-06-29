import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^strapi-plugin-/i, '');
console.log('pluginId: ', pluginId);
export default pluginId;
