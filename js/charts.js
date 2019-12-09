
      // Load Charts and the corechart and barchart packages.
      google.charts.load('current', {'packages':['corechart', 'geochart'],
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var dataPie = new google.visualization.DataTable();
        dataPie.addColumn('string', 'Topping');
        dataPie.addColumn('number', 'Slices');
        dataPie.addRows([
          ['Mushrooms', 2],
          ['Onions', 3],
          ['Olives', 2],
          ['Zucchini', 1],
          ['Pepperoni', 1]
        ]);

        var dataDonet = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var dataBar = new google.visualization.DataTable();
        dataBar.addColumn('string', 'Topping');
        dataBar.addColumn('number', 'Slices');
        dataBar.addRows([
          ['Weat', 3],
          ['beer', 2.5],
          ['Rum', 1],
          ['Tea', 4],
          ['Coffee', 2]
        ]);

        //pie chart
        var piechart_options = {
                      title:'Pie Chart: How Much Pizza I Ate Last Night',
                       width:'100%',
                       colors: ['#f44336', '#f6685e', '#aa2e25', '#f3b49f', '#f6c7b6'],
                       is3D: true
                     };
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(dataPie, piechart_options);

        //donet chart

        var donet_options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
          width:'100%',
          colors: ['#f44336', '#f6685e', '#aa2e25', '#f3b49f', '#f6c7b6']
        };

        var donet_chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        donet_chart.draw(dataDonet, donet_options);

        //bar chart

        var barchart_options = {
                      title:'Barchart: How Much Food I Ate Last Night',
                      width:'100%',
                      legend: 'none',
                      colors: ['#f44336']
                      };
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(dataBar, barchart_options);

      //line chart

      

      var dataLines = new google.visualization.DataTable();
      dataLines.addColumn('number', 'x');
      dataLines.addColumn('number', 'values');
      dataLines.addColumn({id:'i0', type:'number', role:'interval'});
      dataLines.addColumn({id:'i1', type:'number', role:'interval'});
      dataLines.addColumn({id:'i2', type:'number', role:'interval'});
      dataLines.addColumn({id:'i2', type:'number', role:'interval'});
      dataLines.addColumn({id:'i2', type:'number', role:'interval'});
      dataLines.addColumn({id:'i2', type:'number', role:'interval'});

      dataLines.addRows([
          [1, 100, 90, 110, 85, 96, 104, 120],
          [2, 120, 95, 130, 90, 113, 124, 140],
          [3, 130, 105, 140, 100, 117, 133, 139],
          [4, 90, 85, 95, 85, 88, 92, 95],
          [5, 70, 74, 63, 67, 69, 70, 72],
          [6, 30, 39, 22, 21, 28, 34, 40],
          [7, 80, 77, 83, 70, 77, 85, 90],
          [8, 100, 90, 110, 85, 95, 102, 110]]);

      // The intervals data as narrow lines (useful for showing raw source data)
      var options_lines = {
          title: 'Line intervals, default',
          curveType: 'function',
          width:'100%',
          height:300,
          lineWidth: 4,
          intervals: { 'style':'line' },
          legend: 'none',
          colors: ['#f44336', '#f6685e', '#aa2e25', '#f3b49f', '#f6c7b6']
      };

      var chart_lines = new google.visualization.LineChart(document.getElementById('chart_lines'));
      chart_lines.draw(dataLines, options_lines);
    


      }

     // draw geo chart

     google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var dataGeo = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {
          width:'100%',
          colors: ['#aa2e25','#f44336']
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(dataGeo, options);
      }

