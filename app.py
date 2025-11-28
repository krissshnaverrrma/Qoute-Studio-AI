from flask import Flask, render_template, jsonify, request, send_file
import requests
import os
import random
from io import BytesIO

app = Flask(__name__)

LOCAL_QUOTES = {
    "wisdom": [
        {"content": "The only true wisdom is in knowing you know nothing.",
            "author": "Socrates"},
        {"content": "Knowing yourself is the beginning of all wisdom.",
            "author": "Aristotle"},
        {"content": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "author": "Buddha"}
    ],
    "technology": [
        {"content": "Technology is best when it brings people together.",
            "author": "Matt Mullenweg"},
        {"content": "Any sufficiently advanced technology is indistinguishable from magic.",
            "author": "Arthur C. Clarke"}
    ],
    "business": [
        {"content": "Opportunities don't happen. You create them.",
            "author": "Chris Grosser"},
        {"content": "Think big and don't listen to people who tell you it can't be done.",
            "author": "Tim Ferriss"}
    ],
    "happiness": [
        {"content": "Happiness depends upon ourselves.", "author": "Aristotle"},
        {"content": "There is no path to happiness: happiness is the path.",
            "author": "Buddha"}
    ],
    "history": [
        {"content": "History is written by the victors.",
            "author": "Winston Churchill"},
        {"content": "Study the past if you would define the future.",
            "author": "Confucius"}
    ]
}


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/get-quote')
def get_quote():
    tag = request.args.get('tag', 'wisdom')

    try:
        response = requests.get(
            f"https://api.quotable.io/random?tags={tag}", timeout=1.5)
        if response.status_code == 200:
            data = response.json()
            data['tag'] = tag
            return jsonify(data)
    except:
        pass

    category_quotes = LOCAL_QUOTES.get(tag, LOCAL_QUOTES['wisdom'])
    data = random.choice(category_quotes)
    data['tag'] = tag
    return jsonify(data)


@app.route('/proxy-image')
def proxy_image():
    image_url = request.args.get('url')
    if not image_url:
        return "No URL", 400
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        resp = requests.get(image_url, headers=headers)
        return send_file(BytesIO(resp.content), mimetype='image/jpeg')
    except Exception as e:
        return str(e), 500


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static/images'),
                               'favicon.png', mimetype='image/vnd.microsoft.icon')


if __name__ == '__main__':
    app.run(debug=True, port=5000)
