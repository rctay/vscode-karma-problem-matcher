# VS Code Karma Problem Matcher

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Usage

After installing this extension, in your `tasks.json`, specify `"$karma"` for the `"problemMatcher"` field. For example:

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start Live Unit Tests",
            "type": "npm",
            "script": "test",
            "group": "test",
            "isBackground": true,
            "problemMatcher": "$karma"
        }
    ]
}
```

**Enjoy!**
