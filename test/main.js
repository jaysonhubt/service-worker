if (window.Notification && Notification.permission === "granted") {
	let notify1 = new Notification('Hi there!')
	notify1.onclick = function () {
		window.parent.parent.focus();
	};
	let notify2 = new Notification('Goodbye')
	notify2.onclick = function () {
		window.parent.parent.focus();
	};
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