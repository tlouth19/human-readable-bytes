'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
var convertBytesToHumanReadable = function convertBytesToHumanReadable(bytes, method, decimalPlaces) {
		var space = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


		var threshold = parseFloat(method);
		var size = parseFloat(bytes);

		if (![1000, 1024].includes(parseFloat(method))) {
				throw new Error('Method must be 1000 or 1024');
		}

		if (Math.abs(size) < threshold) {
				return size + 'b';
		}
		var units = {
				1000: ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
				1024: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
		};

		var u = -1;
		do {
				size /= threshold;
				++u;
		} while (Math.abs(size) >= threshold && u < units.length - 1);

		return '' + size.toFixed(decimalPlaces || 0) + (space ? ' ' : '') + units[threshold][u];
};

exports.default = convertBytesToHumanReadable;