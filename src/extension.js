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

	let disposable = vscode.commands.registerCommand('initium.start', () => {
		vscode.window.showInformationMessage("Welcome to initium dashboard!");
		const panel = vscode.window.createWebviewPanel('initiumDashboard', 'Inititum Dashboard', vscode.ViewColumn.One, {});
		panel.webview.html = getWebviewContent();
	})

	context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate() {}

function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Initium Dashboard</title>
  </head>
  <body>
  <form onsubmit="return false">
  <div>
    <span style={display:inline-block;}><input type="image" src="https://cdn1.iconfinder.com/data/icons/essentials-blue-tone-1/100/Essentials_check_done_complete-512.png" alt="Essentials" width="50" height="50"></span>
	<span style={display:inline-block;}><h2>Essentials</h2></span>
	<ul>
  		<li><input type="checkbox" checked> GitLens</li>
		<li><input type="checkbox" checked> Code Spell Checker</li>
		<li><input type="checkbox" checked> TODO Highlight</li>
  	</ul>
  </div>
  
  <div>
	<span style={display:inline-block;}><input type="image" src="https://cdn.ccdc.cam.ac.uk/content/images/products/Product-Python.png" alt="Python" width="50" height="50"></span>
	<span style={display:inline-block;}><h2>Python</h2></span>
    <ul>
  		<li><input type="checkbox"> Python</li>
		<li><input type="checkbox"> Code Runner</li>
		<li><input type="checkbox"> Linter</li>
	</ul>
  </div>

  <div>
	<span style={display:inline-block;}><input type="image" src="https://icons-for-free.com/iconfiles/png/512/install+javascript+js+node+npm+tools+icon-1320165731324625592.png" alt="JavaScript" width="50" height="50"></span>
	<span style={display:inline-block;}><h2>Javascript</h2></span>
  	<ul>
  		<li><input type="checkbox"> Quokka.js</li>
		<li><input type="checkbox"> ESLint</li>
		<li><input type="checkbox"> Prettier</li>
	</ul>
  </div>

  <div>
	<span style={display:inline-block;}><input type="image" src="https://i.ya-webdesign.com/images/code-icon-png-7.png" alt="Miscellaneous" width="50" height="50"></span>
	<span style={display:inline-block;}><h2>Potpourri</h2></span>
  	<ul>
  		<li><input type="checkbox"> Bookmarks</li>
		<li><input type="checkbox"> Bracket Pair Colorizer</li>
	</ul>
  </div>

  <div>
	<span style={display:inline-block;}><input type="image" src="https://vectorified.com/images/advanced-icon-14.png" alt="Advanced" width="50" height="50"></span>
	<span style={display:inline-block;}><h2>Advanced</h2></span>
	<ul>
  		<li><input type="checkbox"> Regex Previewer</li>
		<li><input type="checkbox"> REST Client</li>
	</ul>
  </div>
  <input value="Submit" type="submit" onclick="submitform()">
  </form>
  </body>
  </html>`;
  }

module.exports = {
	activate,
	deactivate
}