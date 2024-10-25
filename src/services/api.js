import axios from "axios";

// must be taken to .env.local file
const UNSPLASH_ACCESS_KEY = "NJIBLD_wDkfVd57_3X5_2ye0iTKqKpGEGzzp6G3Y8Z4";
const URL = "https://api.unsplash.com/photos";

export const fetchImages = async () => {
	try {
		const response = await axios.get(URL, {
			params: { per_page: 3 },
			headers: {
				Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
			},
		});
		return { success: true, data: response.data };
	} catch (error) {
		return { data: error.message };
	}
};
