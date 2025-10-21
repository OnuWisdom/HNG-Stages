const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	document.querySelectorAll('.error').forEach((el) => (el.textContent = ''));
	successMessage.hidden = true;

	const name = form.name.value.trim();
	const email = form.email.value.trim();
	const subject = form.subject.value.trim();
	const message = form.message.value.trim();

	let isValid = true;

	if (!name) {
		document.getElementById('error-name').textContent =
			'Full name is required.';
		isValid = false;
	}

	const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
	if (!email) {
		document.getElementById('error-email').textContent = 'Email is required.';
		isValid = false;
	} else if (!emailPattern.test(email)) {
		document.getElementById('error-email').textContent = 'Enter a valid email.';
		isValid = false;
	}

	if (!subject) {
		document.getElementById('error-subject').textContent =
			'Subject is required.';
		isValid = false;
	}

	if (!message) {
		document.getElementById('error-message').textContent =
			'Message is required.';
		isValid = false;
	} else if (message.length < 10) {
		document.getElementById('error-message').textContent =
			'Message must be at least 10 characters.';
		isValid = false;
	}

	if (isValid) {
		successMessage.hidden = false;
		form.reset();
	}
});
