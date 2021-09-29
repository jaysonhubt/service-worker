if (window.Notification && Notification.permission === "granted") {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.addEventListener('notificationclick', function () {
			console.log('serviceWorker notificationclick')
		})
		navigator.serviceWorker.register('service_worker.js')
		.then(function (reg) {
			console.log('Registered service worker');
			reg.addEventListener('notificationclick', function () {
				console.log('notificationclick')
			})
			reg.showNotification(
				'着信-Son',
				{
					body: 'Content',
					actions: [
						{
							action: 'button1',
							title: 'Button 1'
						},
						{
							action: 'button2',
							title: 'Button 2'
						}
					]
				}
			);
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