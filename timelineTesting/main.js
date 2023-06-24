const svg = d3.select("#timeline")
    .append("svg")
        .attr("height", 1500)
        .attr("width", 640)



svg.append('line')
    .attr("x1", 320)
    .attr("x2", 320)
    .attr("y1", 20)
    .attr("y2", 1480)
    .attr("stroke", "#EA5730")
    .attr("stroke-width", 5)


const circlePositions1 = [20, 200, 350, 560, 800, 1200, 1323]
const circlePositions2 = [30, 45, 55, 75, 123, 177, 240, 290, 445, 600, 700, 1288, 1423]

const smallCircles = svg.selectAll('#smallCircles')
    .data(circlePositions2)

smallCircles.enter().append('circle')
    .attr("id", "smallCircles")
    .attr("cx", 320)
    .attr("cy", (d) => d)
    .attr("r", 5)
    .attr("fill", "white")
    .attr("stroke", "#EA5730")

const bigCircles = svg.selectAll('#bigCircles')
    .data(circlePositions1)

bigCircles.enter().append('circle')
    .attr("id", "bigCircles")
    .attr("cx", 320)
    .attr("cy", (d) => d)
    .attr("r", 10)
    .attr("fill", "white")
    .attr("stroke", "#3B3B3B")

