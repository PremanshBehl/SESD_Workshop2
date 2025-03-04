import { Command } from 'commander';
import { CommandHandlers } from './commands';

export class CLI {
    private program: Command;

    constructor() {
        this.program = new Command();
        this.setupConfig();
        this.setupCommands();
    }

    private setupConfig() {
        this.program
            .name('mycli')
            .description('A fully functional OOP-based CLI tool with API integrations.')
            .version('1.0.0', '-v, --version', 'Output the current version');
    }

    private setupCommands() {
        // 1. greet command
        this.program
            .command('greet <name>')
            .description('Greets the user')
            .option('-u, --upper', 'Uppercase the greeting')
            .action((name, options) => {
                CommandHandlers.greet(name, options);
            });

        // 2. fileinfo command
        this.program
            .command('fileinfo <filename>')
            .description('Shows basic information about a file')
            .action((filename) => {
                CommandHandlers.fileinfo(filename);
            });

        // 3. github command (API 1)
        this.program
            .command('github <username>')
            .description('Fetches a GitHub user profile')
            .action(async (username) => {
                await CommandHandlers.github(username);
            });

        // 4. weather command (API 2)
        this.program
            .command('weather <city>')
            .description('Fetches current weather for a specific city')
            .action(async (city) => {
                await CommandHandlers.weather(city);
            });

        // 5. joke command (API 3)
        this.program
            .command('joke')
            .description('Displays a random programming joke')
            .action(async () => {
                await CommandHandlers.joke();
            });

        // 6. quote command (API 4)
        this.program
            .command('quote')
            .description('Fetches a random inspirational quote')
            .action(async () => {
                await CommandHandlers.quote();
            });

        // 7. uuid command
        this.program
            .command('uuid')
            .description('Generates a random UUID (v4)')
            .action(() => {
                CommandHandlers.uuid();
            });

        // 8. b64encode command
        this.program
            .command('b64encode <text...>')
            .description('Base64 encodes given text')
            .action((textArr) => {
                CommandHandlers.b64encode(textArr.join(' '));
            });

        // 9. b64decode command
        this.program
            .command('b64decode <encoded>')
            .description('Base64 decodes a given string')
            .action((encoded) => {
                CommandHandlers.b64decode(encoded);
            });

        // 10. wordcount command
        this.program
            .command('wordcount <text...>')
            .description('Counts words and characters in text')
            .action((textArr) => {
                CommandHandlers.wordcount(textArr.join(' '));
            });
    }

    public run(argv: string[]) {
        this.program.parse(argv);
    }
}
