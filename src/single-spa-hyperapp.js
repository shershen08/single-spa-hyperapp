const defaultOpts = {
    hyperApp: null,
    appState: null,
    appActions: null,
    appView: null,
    mountEl: null,
}

const validateOptions = (opts) => {
	Object.keys(defaultOpts).forEach(key => {
		if (!opts[key]) {
			throw new Error(`single-spa-hyperapp must be passed opts.${key}`);
		}
	})
}

export default function singleSpaHyperApp(userOpts) {
	if (typeof userOpts !== 'object') {
		throw new Error(`single-spa-hyperapp requires a configuration object`);
	}

	const opts = Object.assign({}, defaultOpts, userOpts)

	validateOptions(opts);

	// Just a shared object to store the mounted object state
	let mountedInstances = {};

	return {
		bootstrap: bootstrap.bind(null, opts, mountedInstances),
		mount: mount.bind(null, opts, mountedInstances),
		unmount: unmount.bind(null, opts, mountedInstances),
	};
}

function bootstrap(opts) {
	return Promise.resolve();
}

function mount(opts, mountedInstances) {
	return new Promise((resolve, reject) => {
		mountedInstances.instance = opts.hyperApp(opts.appState, opts.appActions, opts.appView, opts.mountEl)
		mountedInstances.$el = opts.mountEl
		resolve();
	});
}

function unmount(opts, mountedInstances) {
	return new Promise((resolve, reject) => {
		mountedInstances.$el.innerHTML = '';
		delete mountedInstances.instance;
		resolve();
	});
}