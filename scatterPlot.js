
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 640 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#scatterPlot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv("ipc_js.csv").then( function(data) {

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 10])
    .range([ 0, width ]);

    var x_axis = d3.axisBottom().scale(x).ticks(0); 

  svg.append("g")
    .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .call(x_axis)
    .attr("opacity", "0")

 

    // Add Y axis

    const y = d3.scaleLinear()
    .domain([0, 28])
    .range([ height, 0]);

    var y_axis = d3.axisLeft().scale(y).ticks(5);

    svg.append("g")
    .call(d3.axisLeft(y))
    .call(y_axis);

    // Add dots
    svg.append('g')
    .selectAll("dot")
    .data(data)
    .join("circle")
        .attr("cx", function (d) { return x(d.ipc); } )
        .attr("cy", function (d) { return y(d.cases); } )
        .attr("r", 3)
        .style("fill", "#B70039")

     // new X axis
     var x_axis = d3.axisBottom().scale(x).ticks(4); 

  x.domain([0, 1600])
  svg.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisBottom(x))
    .call(x_axis);

  svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("cx", function (d) { return x(d.ipc); } )
    .attr("cy", function (d) { return y(d.cases); } )

})  