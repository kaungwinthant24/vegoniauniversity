// Start  jQuery Area
$(document).ready(function(){
	
	// Start Header
	// Start Nav Bar
		$('.navbuttons').click(function(){
			$(this).toggleClass('crossxs');
		})
	// End Nav Bar
	// Start Header

});
// End  jQuery Area


// Start Javascript Area

// Start Students Counter Section

	var getcountervalues = document.querySelectorAll('.countervalues');
	// console.log(getcountervalues);

	getcountervalues.forEach(function(getcountervalue){
		// console.log(getcountervalue);
		getcountervalue.textContent = 0;
		// console.log(getcountervalue.textContent);

		const updatecounter = function(){
			// console.log("I am working");
			const getcttarget = +getcountervalue.getAttribute('data-target');
			// console.log(getcttarget);
			// console.log(typeof getcttarget,getcttarget);

			const getctcontent = +getcountervalue.textContent;
			// console.log(typeof getctcontent,getctcontent);

			const incnumber = getcttarget / 100;
			// console.log(typeof incnumber,incnumber);

			if(getctcontent < getcttarget){
				getcountervalue.innerText = getctcontent + incnumber;
				// console.log(getcountervalue.innerText);

				setTimeout(updatecounter,50);
			}
		}
		updatecounter();
	})


// Start Students Counter Section

// Start Rating Section
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar', 8],
          ['Thailand', 2],
          ['Singapore', 4],
          ['Indonesia', 2],
          ['Srilanga', 8]
        ]);

        var options = {
          title: 'Internationl Students',
          // is3D:true,
          // pieHole:0.4,
          width:550,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
// End Rating Section

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;

// Start Login Box
	$("#openform").click(function(){
		document.getElementById('form-popup').style.display = 'block';
	});

	$('#formclose-btn').click(function(){
		document.getElementById('form-popup').style.display = 'none';
	});
// End Login Box

// End Javascript Area