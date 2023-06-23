const svg = d3.select("#chart-area")
    .append("svg")
        .attr("height", 500)
        .attr("width", 500)


const width = 50
const height = 50
const path = svg.append("path");


const pathData = d3.path();
  pathData.moveTo(10, 10);
  pathData.bezierCurveTo(10, 120, -5, 130, 140, 120);
 
  path
  .attr("d", pathData)
  .attr("fill", "none")
  .attr("stroke", "black");

  svg
  .append("path")
  .attr("transform", "translate(200,250)")
  .attr("d", d3.arc()
    .innerRadius( 15 )
    .outerRadius( 16 )
    .startAngle( 1.5 * 3.14 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( 6.28 )       // 2*Pi = 6.28 = top
    )

  .attr('stroke', 'black')
  .attr('fill', '#69b3a2');