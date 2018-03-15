# jupyterlab_shellcommand_monitor

Run a shell command every minute and display its output in a JupyterLab tab.
E.g. monitor a folder with `ls -lh` or available memory with `free -m`

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab_shellcommand_monitor
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

