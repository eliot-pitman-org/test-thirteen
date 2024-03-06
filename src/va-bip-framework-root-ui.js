import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const fetchImportMap = async () => {
  const response = await fetch(
    window.location.origin.replace(/([^\/])$/, '$1/') + 'import-map.json',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  );
  return await response.json();
};

const importMap = (await fetchImportMap()).imports;

const getOriginForImport = (importName) => {
  let originUrl = new URL(importMap[importName]).origin;
  const importMapKey = `import-map-override:${importName}`;
  if (localStorage.getItem(importMapKey)) {
    try {
      const overrideUrl = new URL(localStorage.getItem(importMapKey));
      if (overrideUrl.origin) {
        originUrl = overrideUrl.origin;
      }
    } catch (error) {
      // If origin url cannot be parsed from override values, continues with origin url from original import map.
    }
  }
  return originUrl;
};

const layout = {
  mode: 'history',
  base: '/',
  containerEl: 'body',
  redirects: {
    '/': '/mfe-archetype',
  },
  // These routes are left as an example and should be replaced with the mfe applications you want integrated into your root config
  routes: [
    {
      type: 'application',
      name: '@va-bip/vbms-header-ui',
      props: {
        rootAppTitle: 'VBMS',
        redirectUri: window.location.origin,
        myOriginUrl: getOriginForImport('@va-bip/vbms-header-ui'),
        links: [{ name: 'MFE Archetype', path: '/mfe-archetype' }],
      },
    },
    {
      type: 'route',
      path: 'mfe-archetype',
      routes: [
        {
          type: 'application',
          name: '@va-bip/archetype-ui-mfe-app',
          props: {
            myOriginUrl: getOriginForImport('@va-bip/archetype-ui-mfe-app'),
            mfePath: '/mfe-archetype',
          },
        },
      ],
    },
  ],
};

const routes = constructRoutes(layout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
