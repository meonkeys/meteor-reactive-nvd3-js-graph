# NVD3.js example Meteor app

Demonstration of a NVD3.js graph that reacts to changes in data. This naïve
example does not (yet) stream data, the entire chart is pushed to all
clients every time a change is detected.

1. run `meteor add d3` (maybe?)
1. run `mrt` to install nvd3js and start meteor
1. navigate to <http://localhost:3000>
1. open JavaScript console
1. run `People.insert({x:1, y:25})`
1. run `People.insert({x:2, y:74})`
1. run `People.insert({x:3, y:38})`
1. run `People.insert({x:4, y:39})`
1. run `People.insert({x:5, y:18})`
1. etc.

The chart will also react to data inserted directly into MongoDB.

Started with code from <http://nvd3.org/examples/line.html>.
