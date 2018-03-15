import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_slurm extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_shellcommand_monitor',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
  // Create a single widget
  let widget: Widget = new Widget();
  widget.id = 'shellmonitor-jupyterlab';
  widget.title.label = 'Shell command monitor';
  widget.title.closable = true;
  // Add an image element to the panel
  let p = document.createElement('pre');
  widget.node.appendChild(p);

  // Fetch info about a random comic
  fetch('/shell/df/-h').then(response => {
    return response.text();
  }).then(data => {
    p.innerHTML = data;
  });

  // Add an application command
  const command: string = 'shellmonitor:open';
  app.commands.addCommand(command, {
    label: 'Open Shell Monitor',
    execute: () => {
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.addToMainArea(widget);
      }
      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  palette.addItem({command, category: 'Extensions'});
  }
};

export default extension;
