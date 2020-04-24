export default class ApiService {
    getWords = async (number) => {
        const url = `https://random-word-api.herokuapp.com/word?number=${number}`
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Could not fetch" + url + ", received" + res.status);
        }
        return await res.json();
    };
}