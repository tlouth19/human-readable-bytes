const convertBytesToHumanReadable = (bytes, method, decimalPlaces, space = false) => {

		const threshold = parseFloat(method)
		let size = parseFloat(bytes)

		if (![1000, 1024].includes(parseFloat(method))) {
			throw new Error('Method must be 1000 or 1024')
		}

		if(Math.abs(size) < threshold) {
				return `${size}${space ? ' ' : ''}B`;
		}
		const units = ['KB','MB','GB','TB','PB','EB','ZB','YB']

		let u = -1;
		do {
				size /= threshold;
				++u;
		} while(Math.abs(size) >= threshold && u < units.length - 1);

		return `${size.toFixed(decimalPlaces || 0)}${space ? ' ' : ''}${units[u]}`
}

export default convertBytesToHumanReadable
