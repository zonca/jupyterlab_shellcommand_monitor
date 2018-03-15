# jupyterlab_shellcommand_monitor

Run a shell command every minute and display its output in a JupyterLab tab.
E.g. monitor a folder with `ls -lh` or available memory with `free -m`

It is composed by a custom handler nbextension, `jup_mon`, this
nbextension executes a shell command and returns the output, for example:

```
curl localhost:8888/shell/df/-h
Filesystem      Size  Used Avail Use% Mounted on
udev            2.0G   12K  2.0G   1% /dev
tmpfs           396M  380K  395M   1% /run
/dev/sda1        20G  9.1G  9.8G  49% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
none            5.0M  4.0K  5.0M   1% /run/lock
none            2.0G     0  2.0G   0% /run/shm
none            100M  8.0K  100M   1% /run/user
```

Then a JupyterLab extension in TypeScript is accessible from the menu,
it calls the nbextension and displays the result in a JupyterLab tab.
It should automatically refresh every minute but that is not implemented yet.

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

