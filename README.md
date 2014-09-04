# NVD3.js example Meteor app

Demonstration of a NVD3.js graph that reacts to changes in data. This naïve
example does not (yet) stream data, the entire chart is pushed to all
clients every time a change is detected.

1. clone this repository
1. cd into directory of clone
1. run `meteor`
1. navigate to <http://localhost:3000>
1. add/remove data using buttons

The chart will also react to data inserted into minimongo or MongoDB.

Started with code from <http://nvd3.org/examples/line.html>.

# Screencast

[![Screencast of live graph](http://img.youtube.com/vi/5WInLm1XXT0/0.jpg)](http://www.youtube.com/watch?v=5WInLm1XXT0)
