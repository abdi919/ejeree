

  type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Grade 12',     400 ],
          ['Grade 11',     300],
          ['Grade 10',  790],
          ['grade 9', 760],
          
        ]);

        var options = {
          title: 'Total student data 2024'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }