from pydantic_settings import BaseSettings, SettingsConfigDict


class DevelopmentSettings(BaseSettings):
    HOST: str = "127.0.0.1"
    PORT: int = 26801
    TEST_PORT: int = 8001


class AppSettings(BaseSettings):
    NAME: str = ""


class Settings(BaseSettings):
    dev: DevelopmentSettings = DevelopmentSettings()
    app: AppSettings = AppSettings()

    model_config = SettingsConfigDict(
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings: Settings = Settings()
