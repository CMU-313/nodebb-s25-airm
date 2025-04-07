# translator.py

def get_language(post: str) -> str:
    return "English"  # Fake response for testing

def get_translation(post: str) -> str:
    return "This is a fake translation"  # Fake translation

def query_llm_robust(post: str) -> tuple[bool, str]:
    try:
        language = get_language(post)
        if not isinstance(language, str) or language.strip().lower() == "none":
            raise ValueError("Invalid language")

        if language.strip().lower() == "english":
            return (True, post)
        else:
            translation = get_translation(post)
            if not isinstance(translation, str) or translation.strip().lower() == "none":
                raise ValueError("Invalid translation")

            return (False, translation)

    except Exception:
        return (True, post)
