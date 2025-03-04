import axios from 'axios';

export class APIClient {
    public static async getGithubUser(username: string): Promise<any> {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (error: any) {
            if (error.response?.status === 404) {
                throw new Error('GitHub user not found.');
            }
            throw new Error(`Failed to fetch GitHub user: ${error.message}`);
        }
    }

    public static async getRandomJoke(): Promise<any> {
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            return response.data;
        } catch (error: any) {
            throw new Error(`Failed to fetch joke: ${error.message}`);
        }
    }

    public static async getRandomQuote(): Promise<any> {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            return response.data;
        } catch (error: any) {
            throw new Error(`Failed to fetch quote: ${error.message}`);
        }
    }

    public static async getWeather(city: string): Promise<string> {
        try {
            const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`, { timeout: 5000 });
            return response.data.trim();
        } catch (error: any) {
            throw new Error(`Failed to fetch weather: ${error.message}`);
        }
    }
}
