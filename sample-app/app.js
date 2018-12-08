import singleSpaHyperApp from 'single-spa-hyperapp';
import {hyperApp, appActions, appState, appView, mountEl} from './app'

const lifecycles = singleSpaHyperApp({
    hyperApp,
    appState,
    appActions,
    appView,
    mountEl: domElementGetter(),
});

export function bootstrap(props) {
  return lifecycles.bootstrap(props);
}

export function mount(props) {
  return lifecycles.mount(props);
}

export function unmount(props) {
  return lifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('hyperapp');
  if (!el) {
    el = document.createElement('div');
    el.id = 'hyperapp';
    document.body.appendChild(el);
  }

  return el;
}