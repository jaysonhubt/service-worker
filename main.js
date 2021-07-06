if (window.Notification && Notification.permission === "granted") {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service_worker.js')
		.then(reg => {
			console.log('Registered service worker');
			reg.showNotification('title', { body: 'text', actions: [{action: 'archive', title: 'Archive'}, {action: 'test', title: 'Test'}] });
		}).catch(err => {
			console.log('Register service worker failed', err);
		});
	}
} else if (window.Notification && Notification.permission === "denied") {
	Notification.requestPermission().then(function (status) {
        // If the user said okay
        if (status === "granted") {
        	alert("Hi! Allowed");
      }

        else {
        	alert("Hi! Denied");
        }
    });
}
console.log(Notification.permission)