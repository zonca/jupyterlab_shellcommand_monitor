import os
import subprocess

from tornado import web

from notebook.utils import url_path_join
from notebook.base.handlers import IPythonHandler

def run_command(cmd):
    try:
        return subprocess.run(cmd,
            stderr=subprocess.PIPE,
            stdout=subprocess.PIPE,
            check=True, timeout=60, encoding="utf-8")
    except subprocess.CalledProcessError as e:
        print("Error:", e.stderr)
        raise

class ExecuteShellHandler(IPythonHandler):
    @web.authenticated
    def get(self, command):
        answer = run_command(command.strip().split("/"))
        self.finish(answer.stdout.strip())

def load_jupyter_server_extension(nb_server_app):
    """
    Called when the extension is loaded.

    Args:
        nb_server_app (NotebookWebApplication): handle to the Notebook webserver instance.
    """
    web_app = nb_server_app.web_app
    host_pattern = '.*$'
    route_pattern = url_path_join(web_app.settings['base_url'], '/shell/(.*)')
    web_app.add_handlers(host_pattern, [(route_pattern, HelloWorldHandler)])
