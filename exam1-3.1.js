$(document).ready(function() {
	exam1_graph();
});


function exam1_graph(){
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Number:</strong> <span style='color:red'>" + d.num + "</span>";
  })

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

d3.json('exam1.json', function(data) {
	var newnumber = [];var i =0;
	for(item in data[3]){
		if(item !="year"){
			var d ={univ:"",num:"",order:""};
                d.univ=item;
                d.num=data[3][item];
                d.order=i;
                newnumber[i]=d;
                i=i+1;				
			}
	}
	
  x.domain(data.map(function(d) { return d.univ; }));
  y.domain([0, d3.max(data, function(d) { return d.num; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("The Number of Students");

  svg.selectAll(".bar")
      .data(newnumber)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.univ); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.num); })
      .attr("height", function(d) { return height - y(d.num); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});


}

