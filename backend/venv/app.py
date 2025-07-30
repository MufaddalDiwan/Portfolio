from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/projects')
def get_projects():
    return jsonify([
        {"title": "Personal Portfolio", "description": "This site!"},
        {"title": "Weather App", "description": "Shows weather for your location"}
    ])

if __name__ == '__main__':
    app.run(debug=True)
