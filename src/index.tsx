import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { loader } from '@monaco-editor/react';

// Import { AuthProvider } from '@nxweb/auth';
import { AppRouter } from '@nxweb/core/router';
import { ServiceWorker, WebVitals } from '@nxweb/core/web';

import { Spinner } from '@components/spinner';
// Import { Auth } from '@config/auth';
import { RouteConfig } from '@config/routes/index';
import { LayoutProvider, Layouts } from '@layouts/index';
import { StoreProvider } from '@models/store';

import 'react-toastify/ReactToastify.css';
import '@styles/index.scss';

// Import '@api/mock';

loader.config({
  paths: {
    vs: 'https://cdn.cloud.nextplatform.ai/npm/monaco-editor/latest/min/vs'
  }
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <>
  {/* <AuthProvider config={Auth}> */}
    <StoreProvider>
      <AppRouter
        defaultLayout="default"
        fallback={<Spinner />}
        layouts={Layouts}
        routes={RouteConfig}
        wrapper={LayoutProvider} />
    </StoreProvider>
    <ToastContainer closeOnClick={true} draggable={false} pauseOnFocusLoss={false} />
  {/* </AuthProvider> */}
  </>

);

/**
 * ServiceWorker registration
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below, and set the pwa property to true in .nextweb.js.
 *
 * Note:
 * This comes with some pitfalls though, make sure you know the implications.
 */

ServiceWorker.unregister();

/**
 * Performance metric reporting
 * If you want your app to send anlytics metrics you can pass a custom
 * handler for processing the metrics below.
 * The `console.debug` is provided as example only.
 *
 * Note:
 * You can remove/ uncomment if you don't need metrics reporting
 */

WebVitals.register(console.debug);

/**
 * The default application export
 * If enabled, this will be available as global `NX` object
 *
 * Note:
 * At runtime these could be overwritten by the host application.
 */

export default {
  env: {
    // Define X_API_URL in .env to populate this value
    AppTenant: process.env.AUTH_TENANT,
    BaseUrl: process.env.BASE_URL,
    RepositoryUrl: process.env.REPOSITORY_URL,
    NextclusterURL: process.env.NEXTCLUSTER_URL,
    TestURL: process.env.TEST_URL,
    FaasUrl: process.env.AUTH_API_FAAS_URL
  }
};
