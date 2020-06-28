# initium

Hello World! This extension is meant as a starting point to extensions in VSCode.

To get started select the language you wish to develop in and the extension would recommend a set of extensions to make your experience easier. The list of extensions is maintained on the repository and is actively maintained by the community. Please refer to contributing guides below to recommend your favorite extensions.

Happy Coding!!!

## Features

Initium provides an initial dashboard which has five categories:

1. **Essentials**: This section installs three extensions by default -> GitLens, -> Code Spell Checker, -> TODO Highlight 

2. **Python**: This section shows recommended extensions for Python projects but doesn't install them by default. Our current recommendations are -> Python, -> Code Runner, -> Linter

3. **Javascript**: This section shows recommended extensions for Javascript projects but doesn't install them by default. Our current recommendations are -> Quokka.js, -> ESLint, -> Prettier

4. **Potpourri**: This section shows some miscellaneous extensions but doesn't install them by default. Our current recommendations are -> Bookmarks, -> Bracket Pair Colorizer

5. **Advanced**: This section shows some advanced extensions but doesn't install them by default. Our current recommendations are -> Regex Previewer, -> REST Client

[The video can be found here](https://www.youtube.com/watch?v=apTGqv5NMos)

Recommendation File Format:

```javascript
{
    "language name": {
        "extensions": [
            {
                "displayName": "ESLint",
                "description": "Integrates ESLint JavaScript into VS Code.",
                "installID": "dbaeumer.vscode-eslint",
                "publisher": "dbaeumer"
            },
        ]
    }
}
```

## Contribution Guide

To contribute, you can edit the `recommendation.json` file in the format specified above and raise a PR for the same.

## Future Updates

* Adding more language support

* We plan on creating the HTML content dynamically by adding more keys in the recommendation file.

* Add version support so that it is similar to how package.json works

* Export the list of packages to make it easier for instructors to share the settings and extensions they feel would make the most sense.

* Add packages based on the proficiency level of the user/student to help match their needs