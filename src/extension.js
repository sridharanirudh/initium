const vscode = require('vscode');

const TOINSTALL = {
    "JavaScript": {
        "extensions": [
            {"displayName":"ESLint","description":"Integrates ESLint JavaScript into VS Code.","installID":"dbaeumer.vscode-eslint","publisher":"dbaeumer"},
            {"displayName":"Quokka.js","description":"Live Scratchpad for JavaScript.","installID":"wallabyjs.quokka-vscode","publisher":"WallabyJs"}
        ]
    },
    "Python": {
        "extensions": [
            {"displayName":"Code Runner","description":"Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA","installID":"formulahendry.code-runner","publisher":"formulahendry"},
            {"displayName":"Python","description":"Linting, Debugging (multi-threaded, remote), Intellisense, Jupyter Notebooks, code formatting, refactoring, unit tests, snippets, and more.","installID":"ms-python.python","publisher":"ms-python"}
        ]
    },
    "Essentials": {
        "extensions": [
            {"displayName":"GitLens — Git supercharged","description":"Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more","installID":"eamodio.gitlens","publisher":"eamodio"},
            {"displayName":"Prettier - Code formatter","description":"Code formatter using prettier","installID":"esbenp.prettier-vscode","publisher":"esbenp"},
            {"displayName":"Code Spell Checker","description":"Spelling checker for source code","installID":"streetsidesoftware.code-spell-checker","publisher":"streetsidesoftware"}
        ]
    },
    "Potpourri": {
        "extensions": [
            {"displayName": "Bookmarks", "description": "Mark lines and jump to them", "installID": "alefragnani.bookmarks", "publisher": "alefragnani"},
            {"displayName":"Bracket Pair Colorizer","description":"A customizable extension for colorizing matching brackets","installID":"coenraads.bracket-pair-colorizer","publisher":"CoenraadS"},
            {"displayName":"TODO Highlight","description":"highlight TODOs, FIXMEs, and any keywords, annotations...","installID":"wayou.vscode-todo-highlight","publisher":"wayou"}
        ]
    },
    "Advanced": {
        "extensions": [
            {"displayName": "Regex Previewer", "description": "Regex matches previewer for JavaScript, TypeScript, PHP and Haxe in Visual Studio Code.", "installID": "chrmarti.regex", "publisher": "chrmarti"},
            {"displayName":"REST Client","description":"REST Client for Visual Studio Code","installID":"humao.rest-client","publisher":"humao"}
        ]
    }
}


function fetchInstalledExtensions() {
	let extensions = []
	vscode.extensions.all.forEach(extension => {
		let info = extension.packageJSON
		if (!info.isBuiltin) {
			let extensionInfo = {
				displayName: info.displayName,
				description: info.description,
				installID: info.identifier._lower,
				publisher: info.publisher
			}
			extensions.push(extensionInfo)
		}
	})
	return extensions
}

function readJSON(fpath) {
	fs.readFile(fpath, (err, data) => {
		if (err) {
			console.error(err)
		}
		console.log(data)
	})
}

function activate(context) {
	let displayExisitingExtensions = vscode.commands.registerCommand(
		'initium.fetchExisitingExtensions', () => {
			let installedExtensions = fetchInstalledExtensions()
	})

	let populateCategories = vscode.commands.registerCommand(
		'initium.populateCategories', () => {
	})

	let disposable = vscode.commands.registerCommand('initium.helloWorld', async () => {
		vscode.window.showInformationMessage("hello");
		console.log(TOINSTALL)
	})

	context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate() {}

module.exports = {
	activate,
	deactivate
}