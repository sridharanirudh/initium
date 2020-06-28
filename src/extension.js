const vscode = require('vscode');

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

function activate(context) {
	let displayExisitingExtensions = vscode.commands.registerCommand(
		'initium.fetchExisitingExtensions', () => {
			let installedExtensions = fetchInstalledExtensions()
	})

	let populateCategories = vscode.commands.registerCommand(
		'initium.populateCategories', () => {
	})

	let disposable = vscode.commands.registerCommand('initium.helloWorld', () => {
		vscode.window.showInformationMessage("hello");
	})

	context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate() {}

module.exports = {
	activate,
	deactivate
}