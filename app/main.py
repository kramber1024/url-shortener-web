from flask import Flask
from werkzeug.middleware.proxy_fix import ProxyFix

from app.config import settings
from app.views import blueprint

app: Flask = Flask(__name__)
app.wsgi_app = ProxyFix(  # type: ignore[method-assign]
    app.wsgi_app,
    x_for=1,
    x_proto=1,
    x_host=1,
    x_prefix=1,
)
app.register_blueprint(blueprint)

if __name__ == "__main__":
    debug: bool = True

    app.run(
        host=settings.dev.HOST,
        port=settings.dev.PORT,
        load_dotenv=True,
        debug=debug,
    )
