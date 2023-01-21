export function typeWriter(node) {
	let text = node.innerHTML;
	node.innerHTML = '';
	let i = 0;
	function type() {
		if (i < text.length) {
			node.innerHTML += text.charAt(i);
			i++;
			setTimeout(type, Math.min(text.length - i, 100));
		}
	}
	type();
}
