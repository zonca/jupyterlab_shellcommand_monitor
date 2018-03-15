PYTHONPATH=$(pwd):$PYTHONPATH jupyter lab --watch --NotebookApp.nbserver_extensions="{'jup_mon':True}" --no-browser --ip=*
