import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import chalk from 'chalk';
import { APIClient } from './api';

export class CommandHandlers {
    // Command 1: greet
    public static greet(name: string, options: { upper?: boolean }) {
        let greeting = `Hello, ${name}! Welcome to mycli.`;
        if (options.upper) {
            greeting = greeting.toUpperCase();
        }
        console.log(chalk.green(greeting));
    }

    // Command 2: fileinfo
    public static fileinfo(filename: string) {
        const filePath = path.resolve(process.cwd(), filename);
        if (!fs.existsSync(filePath)) {
            console.log(chalk.red(`Error: File '${filename}' does not exist.`));
            return;
        }
        const stats = fs.statSync(filePath);
        console.log(chalk.blue(`File Info for: ${path.basename(filePath)}`));
        console.log(chalk.cyan(`Size: ${stats.size} bytes`));
        console.log(chalk.cyan(`Created: ${stats.birthtime}`));
        console.log(chalk.cyan(`Modified: ${stats.mtime}`));
        console.log(chalk.cyan(`Is Directory: ${stats.isDirectory()}`));
    }

    // Command 3: github (API 1)
    public static async github(username: string) {
        console.log(chalk.yellow(`Fetching GitHub profile for ${username}...`));
        try {
            const user = await APIClient.getGithubUser(username);
            console.log(chalk.green('Profile found:'));
            console.log(chalk.cyan(`Name: ${user.name || 'N/A'}`));
            console.log(chalk.cyan(`Bio: ${user.bio || 'N/A'}`));
            console.log(chalk.cyan(`Followers: ${user.followers}`));
            console.log(chalk.cyan(`Public Repos: ${user.public_repos}`));
            console.log(chalk.cyan(`URL: ${user.html_url}`));
        } catch (error: any) {
            console.log(chalk.red(error.message));
        }
    }

    // Command 4: weather (API 2)
    public static async weather(city: string) {
        console.log(chalk.yellow(`Checking weather in ${city}...`));
        try {
            const result = await APIClient.getWeather(city);
            console.log(chalk.blue('Weather Report:'));
            console.log(chalk.cyan(result));
        } catch (error: any) {
            console.log(chalk.red(error.message));
        }
    }

    // Command 5: joke (API 3)
    public static async joke() {
        console.log(chalk.yellow('Fetching a random joke...'));
        try {
            const joke = await APIClient.getRandomJoke();
            console.log(chalk.magenta(`Q: ${joke.setup}`));
            setTimeout(() => {
                console.log(chalk.green(`A: ${joke.punchline}`));
            }, 1500);
        } catch (error: any) {
            console.log(chalk.red(error.message));
        }
    }

    // Command 6: quote (API 4)
    public static async quote() {
        try {
            const quoteData = await APIClient.getRandomQuote();
            console.log(chalk.italic.cyan(`"${quoteData.quote}"`));
            console.log(chalk.yellow(`- ${quoteData.author}`));
        } catch (error: any) {
            console.log(chalk.red(error.message));
        }
    }

    // Command 7: uuid
    public static uuid() {
        const id = crypto.randomUUID();
        console.log(chalk.green('Generated UUID:'));
        console.log(chalk.white(id));
    }

    // Command 8: b64encode
    public static b64encode(text: string) {
        const encoded = Buffer.from(text).toString('base64');
        console.log(chalk.cyan(`Encoded -> ${encoded}`));
    }

    // Command 9: b64decode
    public static b64decode(encoded: string) {
        try {
            const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
            console.log(chalk.cyan(`Decoded -> ${decoded}`));
        } catch (error) {
            console.log(chalk.red('Invalid base64 string provided'));
        }
    }

    // Command 10: wordcount
    public static wordcount(text: string) {
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        console.log(chalk.blue('Text Analysis:'));
        console.log(chalk.cyan(`Words: ${words.length}`));
        console.log(chalk.cyan(`Characters (with spaces): ${text.length}`));
        console.log(chalk.cyan(`Characters (without spaces): ${text.replace(/\s+/g, '').length}`));
    }
}
