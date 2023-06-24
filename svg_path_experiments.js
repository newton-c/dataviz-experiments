const svg = d3.select("#chart-area")
    .append("svg")
        .attr("height", 500)
        .attr("width", 640)


const width = 50
const height = 50
const path = svg.append("path");


const pathData = d3.path();
  pathData.moveTo(10, 10);
  pathData.bezierCurveTo(10, 120, -50, 130, 140, 120);
 
  path
  .attr("d", pathData)
  .attr("fill", "none")
  .attr("stroke", "black");



svg.append("rect")
  .attr('id', 'rectTooltip')
  .attr('x', 0)
  .attr('y', 250)
  .attr('height', 100)
  .attr('width', 100)
  .attr('fill', '#FB0007')


svg.append("rect")
  .attr('x', 110)
  .attr('y', 250)
  .attr('height', 100)
  .attr('width', 100)
  .attr('fill', '#F81B13')

svg.append("rect")
  .attr('x', 220)
  .attr('y', 250)
  .attr('height', 100)
  .attr('width', 100)
  .attr('fill', '#F33623')

svg.append("rect")
  .attr('x', 330)
  .attr('y', 250)
  .attr('height', 100)
  .attr('width', 100)
  .attr('fill', '#F15134')

svg.append("rect")
  .attr('x', 440)
  .attr('y', 250)
  .attr('height', 100)
  .attr('width', 100)
  .attr('fill', '#D05B49')

var tooltip = d3.select("#chart-area")
  .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("<p>I'm a tooltip written in HTML</p><img src='https://github.com/holtzy/D3-graph-gallery/blob/master/img/section/ArcSmal.png?raw=true'></img><br>Fancy<br><span style='font-size: 40px;'>Isn't it?</span>");

d3.select('#rectTooltip')
.on("mouseover", function(){return tooltip.style("visibility", "visible");})
.on("mousemove", function(){return tooltip.style("top", (event.pageY-2390)+"px").style("left",(event.pageX-800)+"px");})
.on("mouseout", function(){return tooltip.style("visibility", "hidden");});