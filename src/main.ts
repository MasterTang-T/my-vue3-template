import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
import 'normalize.css/normalize.css'
import * as Sentry from '@sentry/vue'
import {Integrations} from '@sentry/tracing'
const app = createApp(App);
Sentry.init({
  app,
  dsn: "https://10ec8f54553d44fe90dfe555e03c3730@o930440.ingest.sentry.io/5880648",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    //   tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});
app.use(router);
app.mount('#app');
