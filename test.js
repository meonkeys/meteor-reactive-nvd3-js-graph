People = new Meteor.Collection("people");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (Meteor.isClient) {
  Template.hello.rendered = function() {
    var chart = nv.models.lineChart()
      .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
      .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
      .transitionDuration(350)  //how fast do you want the lines to transition?
      .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
      .showYAxis(true)        //Show the y-axis
      .showXAxis(true)        //Show the x-axis
    ;

    nv.addGraph(function() {
      chart.xAxis.axisLabel('Person number').tickFormat(d3.format('d'));
      chart.yAxis.axisLabel('Age (years)').tickFormat(d3.format('d'));
      d3.select('#chart svg').datum(
        [{ values: People.find().fetch(), key: 'Age' }]
      ).call(chart);
      nv.utils.windowResize(function() { chart.update() });
      return chart;
    });

    Deps.autorun(function () {
      d3.select('#chart svg').datum(
        [{ values: People.find().fetch(), key: 'Age' }]
      ).call(chart);
      chart.update();
    });
  };

  Template.hello.events({
    'click #addDataButton': function() {
      var age = getRandomInt(13, 89);
      var lastPerson = People.findOne({}, {fields:{x:1},sort:{x:-1},limit:1,reactive:false});
      if (lastPerson) {
        People.insert({x:(lastPerson.x + 1), y:age});
      } else {
        People.insert({x:1, y:age});
      }
    },
    'click #removeDataButton': function() {
      var lastPerson = People.findOne({}, {fields:{x:1},sort:{x:-1},limit:1,reactive:false});
      if (lastPerson) {
        People.remove(lastPerson._id);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
