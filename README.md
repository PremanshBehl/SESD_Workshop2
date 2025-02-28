# mycli - SESD Workshop 2 Project Submission

A fully functional, Object-Oriented Command Line Interface (CLI) application built with Node.js and TypeScript. It features API integrations, custom commands, colorful output, and comprehensive error handling.

## 🚀 Features
- **Object-Oriented Design**: Utilizes classes, strict typing, and clean separation of concerns.
- **10+ Custom Commands**: Diverse utility commands for system info, apis, string manipulation, and more.
- **API Integrations**: Pulls live data from 4 different remote APIs.
- **Rich Output**: Colored, structured logging utilizing `chalk`.
- **Options and Help Details**: Provided through a robust layout set up via `commander`.

## 📦 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-github-repo-url>
   cd mycli
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the TypeScript Source**
   ```bash
   npm run build
   ```

4. **Link the CLI for Global Usage (Optional but recommended)**
   ```bash
   npm link
   ```
   *After linking, you can use the command `mycli` anywhere on your computer.*

## 🛠️ Available Commands

Here are the 10 custom commands implemented:

| Command | Description | Example Usage |
| :--- | :--- | :--- |
| `greet <name>` | Greets the user. Optionally uppercase with `-u`. | `mycli greet Alice -u` |
| `fileinfo <filename>` | Shows file metadata (size, created/modified). | `mycli fileinfo package.json` |
| `github <username>` | Fetches GitHub user profile data. **(API 1)** | `mycli github torvalds` |
| `weather <city>` | Fetches textual weather format for a city. **(API 2)** | `mycli weather London` |
| `joke` | Displays a random programming joke. **(API 3)** | `mycli joke` |
| `quote` | Fetches a random inspirational quote. **(API 4)** | `mycli quote` |
| `uuid` | Generates a random completely unique v4 UUID. | `mycli uuid` |
| `b64encode <text>` | Encodes custom text to Base64 format. | `mycli b64encode hello world` |
| `b64decode <encoded>` | Decodes a Base64 string to utf-8 text. | `mycli b64decode aGVsbG8gd29ybGQ=` |
| `wordcount <text>` | Counts words, letters, and non-spaced characters. | `mycli wordcount This is a test` |

### Built-in Options
- `-h, --help`: Display help for the overall CLI or specific command.
- `-v, --version`: Display the current tool version.

## 💻 Example Usage

```bash
$ mycli github defunkt
Fetching GitHub profile for defunkt...
Profile found:
Name: Chris Wanstrath
Bio: 🍔
Followers: 21975
Public Repos: 107
URL: https://github.com/defunkt

$ mycli joke
Fetching a random joke...
Q: Why did the programmer quit his job?
A: Because he didn't get arrays.
```

## 🏗️ Architecture

- `src/cli.ts` - Houses the `CLI` class, handling route declarations, parsing arguments via Commander, and registering help texts.
- `src/commands.ts` - Core business logic handler (`CommandHandlers` class). Executes the commands and handles colorful console output logic.
- `src/api.ts` - Dedicated API client wrapper (`APIClient` class) using `axios` to fetch details from the internet. Centralized error handling for network requests.
- `src/index.ts` - Node.js entry point script launching the CLI class.

---
**Developed with ♥ for SESD Workshop 2**
