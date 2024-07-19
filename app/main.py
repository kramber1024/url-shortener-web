from flask import Flask

from app.config import settings
from app.views import blueprint

app: Flask = Flask(__name__)
app.register_blueprint(blueprint)

if __name__ == "__main__":
    debug: bool = True

    app.run(
        host=settings.dev.HOST,
        port=settings.dev.PORT,
        load_dotenv=True,
        debug=debug,
    )
