# tests/test_translator.py

import pytest
from unittest.mock import patch
from translator import query_llm_robust

@patch("translator.get_language", return_value="I don't understand your request")
def test_unexpected_language(mock_get_language):
    result = query_llm_robust("Hier ist dein erstes Beispiel.")
    assert result == (True, "Hier ist dein erstes Beispiel.")

@patch("translator.get_language", return_value="French")
@patch("translator.get_translation", return_value=123)
def test_unexpected_translation(mock_get_translation, mock_get_language):
    result = query_llm_robust("Ceci est un test.")
    assert result == (True, "Ceci est un test.")

@patch("translator.get_language", side_effect=Exception("Error"))
def test_exception_in_get_language(mock_get_language):
    result = query_llm_robust("Hola, ¿cómo estás?")
    assert result == (True, "Hola, ¿cómo estás?")

@patch("translator.get_language", return_value="Spanish")
@patch("translator.get_translation", side_effect=Exception("Translation error"))
def test_exception_in_get_translation(mock_get_translation, mock_get_language):
    result = query_llm_robust("Hola, ¿cómo estás?")
    assert result == (True, "Hola, ¿cómo estás?")
