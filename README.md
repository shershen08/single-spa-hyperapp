## single-spa-hyperapp

Generic lifecycle hooks for [Hyperapp](https://github.com/jorgebucaran/hyperapp) applications that are registered as single-spa applications.

## Example

See in [sample-app floder](https://github.com/shershen08/single-spa-hyperapp/tree/master/sample-app)


## Quickstart

Instal:

```
npm i single-spa-hyperapp
```

Add connector file

```
import singleSpaHyperApp from 'single-spa-hyperapp';

// following props must be exported from your Hyperapp root file
import {hyperApp, appActions, appState, appView, mountEl} from './app'

```

### TODO

Add single-spa parcels support
