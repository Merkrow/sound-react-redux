export const getSongUrl = (params) => {
	const link = 'https://api.soundcloud.com/tracks?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c';
	if(!params) {
		return link;
	}
	const query = Object.keys(params).map(key => '&' + key.toString() + '=' + params[key].toString()).join('');
	return link.concat(query);
}

export const getStreamUrl = (id) => {
	return 'http://api.soundcloud.com/tracks/' + id + '/stream?consumer_key=f4323c6f7c0cd73d2d786a2b1cdae80c';

}

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};