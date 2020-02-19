(function() {
	self.addEventListener('install', () => {
		console.log('Service Worker installing');
		self.skipWaiting();
	});

	self.addEventListener('activate', () => {
		console.log('Service Worker activating...');
	});

	self.addEventListener('fetch', () => {
		console.log('Fetching: ', event.request.url);
	});
})();
