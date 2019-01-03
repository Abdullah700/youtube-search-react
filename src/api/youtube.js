import axios from 'axios';
const KEY = 'AIzaSyAMfoC1hcVT16qTpPBEKTnKJQk5MOuVbaY';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});
