const clear = () => {
	const container = document.getElementById('container');
	console.log(container);
	container.remove();
}

export { clear }