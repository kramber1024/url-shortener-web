from flask import Blueprint, Response, send_from_directory

content: Blueprint = Blueprint(
    "content",
    __name__,
    url_prefix=None,
)


@content.route("/favicon.ico")
def favicon() -> tuple[Response, int]:
    return send_from_directory(
        "static/ico",
        "favicon.ico",
        mimetype="image/x-icon",
    ), 200
