if (window.Notification && Notification.permission === "granted") {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.addEventListener('notificationclick', function(event) {
			event.notification.close();
			if (event.action === 'archive') {
				console.log('archive')
			} else if (event.action === 'test') {
				// Main body of notification was clicked
				alert('test')
			} else {
				// Main body of notification was clicked
				window.focus()
			}
		});
		navigator.serviceWorker.register('service_worker.js')
		.then(reg => {
			console.log('Registered service worker');
			reg.showNotification('title', { body: 'text', actions: [{action: 'archive', title: 'Archive'}, {action: 'test', title: 'Test'}] });
		}).catch(err => {
			console.log('Register service worker failed', err);
		});
	}
}
else if (window.Notification) {
	try {
		Notification.requestPermission().then(function (status) {
			// If the user said okay
			if (status === "granted") {
				alert("Hi! Allowed");
			}

			else {
				alert("Hi! Denied");
			}
		});
	} catch (error) {
		// Safari doesn't return a promise for requestPermissions and it
		// throws a TypeError. It takes a callback as the first argument
		// instead.
		if (error instanceof TypeError) {
			Notification.requestPermission(() => {
				if (status === "granted") {
					alert("Hi! Allowed");
				}

				else {
					alert("Hi! Denied");
				}
			});
		} else {
			throw error;
		}
	}
}
console.log(Notification.permission)