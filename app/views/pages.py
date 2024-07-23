from flask import Blueprint, render_template

from app.config import settings

pages: Blueprint = Blueprint(
    "pages",
    __name__,
    url_prefix=None,
    static_folder="../static",
    static_url_path="/static",
    template_folder="../",
)


@pages.route("/", methods=["GET"])
def index() -> tuple[str, int]:
    return "ushort", 200


@pages.route("/signup", methods=["GET"])
def signup() -> tuple[str, int]:
    return render_template(
        "/templates/signup.html",
        page_name="signup",
        brand_name=settings.app.NAME,
    ), 200


@pages.route("/login", methods=["GET"])
def login() -> tuple[str, int]:
    return render_template(
        "/templates/login.html",
        page_name="login",
        brand_name=settings.app.NAME,
    ), 200


@pages.route("/app", methods=["GET"])
def app() -> tuple[str, int]:
    return render_template(
        "/templates/app.html",
        page_name="app",
        brand_name=settings.app.NAME,
    ), 200
