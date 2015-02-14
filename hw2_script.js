$(document).ready(function(){

	
     $.getJSON("students.json", function(info){
     		tbody = document.getElementById('table');
     		d = details(info);
     		function details(info){
     			for (var i=0; i<info.length; i++) {
		            for (var j=i+1; j<info.length; j++) {
			      if (info[i].total < info[j].total) {
				       t = info[i];
				       info[i] = info[j];
				       info[j] = t;
			}
		}
	}
	                for (var i=0; i<info.length; i++) {
		               info[i].Ranking = i+1;
                                 	}
	                for (var i=0; i<info.length; i++) {
	                   	for (var j=i+1; j<info.length; j++) {
			               if (info[i].mark > info[j].mark) {
			             	t = info[i];
				        info[i] = info[j];
				        info[j] = t;
		                      	}
		                 }
                    	}

     };
     	
     	for(var i=0;i<info.length;i++)
     		{	
		                	tr = tbody.insertRow();
					tr.insertCell().innerHTML = d[i].Name;
					tr.insertCell().innerHTML = d[i].GPA;
					tr.insertCell().innerHTML = d[i].GRE_V;
					tr.insertCell().innerHTML = d[i].GRE_Q;
					tr.insertCell().innerHTML = d[i].Essay;
					tr.insertCell().innerHTML = d[i].Recom;
					tr.insertCell().innerHTML = d[i].Total;
					tr.insertCell().innerHTML = d[i].Ranking;
				var info[i].mark=i
				info[i].Total=(info[i].GPA)/4*100+(info[i].GRE_V)/170*100+(info[i].GRE_Q)/170*100+(info[i].Essay)/10*100+(info[i].Recom)/10*100;
			
			}
			
  

    
    });
