/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

let width = d3.select("#chart1").style("clientWidth");
let height = d3.select("#chart1").style("clientHeight");


var svg = d3.select("#chart1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/buildings.json").then(function(data){
    console.log(data);

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var rects = svg.selectAll("rect")
            .data(data)
        .enter().append("rect")
            .attr("y", 0)
            .attr("x", function(d, i){
                return (i * 60);
            })
            .attr("width", 40)
            .attr("height", function(d){
                return d.height;
            })
            .attr("fill", function(d) {
                return "grey";
            });

})
