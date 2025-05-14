from flask import Flask, request, jsonify
import openai
import os  # Importando o módulo os

app = Flask(__name__)

@app.route('/')
def home():
    return "API de Design Thinking com IA está rodando!"

@app.route('/api/idea', methods=['POST'])
def generate_idea():
    data = request.get_json()
    prompt = data.get("prompt", "")

    # Agora a chave da API será recuperada de uma variável de ambiente
    openai.api_key = os.getenv("OPENAI_API_KEY")
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=100
    )
    
    return jsonify({"response": response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)
