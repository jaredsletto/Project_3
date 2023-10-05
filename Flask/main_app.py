#import dependencies
from flask import Flask, render_template, redirect

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

# 3. Define what to do when a user hits the index route

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/map')
def map():
   return render_template('map.html')

@app.route('/camptypes')
def camptypes():
   return render_template('camptypes.html')

@app.route('/regions')
def regions():
   return render_template('regions_web.html')

if __name__ == '__main__':
   app.run(debug=True)