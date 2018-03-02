import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_slurm extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_slurm',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_slurm is activated!');
  }
};

export default extension;
