$(document).ready(function(){
	var a = document.getElementById('table')
	var url="https://hivelab.org/static/students.json";
     d3.json(url, function(info){
     	
     	for (var i=0; i<info.length; i++) {
     		info[i].Total=(info[i].GPA)/4*100+(info[i].GRE_V)/170*100+(info[i].GRE_Q)/170*100+(info[i].Essay)/10*100+(info[i].Recom)/10*100;
     		info[i].mark = i;
     	}
						
		for ( i=0; i<info.length; i++) {
            for (var j=i+1; j<info.length; j++) {
                   if (info[i].Total < info[j].Total) {
	                    t = info[i];
	                    info[i] = info[j];
	                    info[j] = t;
                    }
         	}
         }
        for ( i=0; i<info.length; i++) {
           info[i].Ranking = i+1;
            }
        for ( i=0; i<info.length; i++) {
           	for ( j=i+1; j<info.length; j++) {
               if (info[i].mark > info[j].mark) {
             	t = info[i];
	        info[i] = info[j];
	        info[j] = t;
                  	}
             }
        	}

     var a = document.getElementById('table')
     	for (var i = 0; i<info.length; i++) {
			tr = a.insertRow()
			tr.insertCell().innerHTML = info[i].Name
			tr.insertCell().innerHTML = info[i].GPA
			tr.insertCell().innerHTML = info[i].GRE_V
			tr.insertCell().innerHTML = info[i].GRE_Q
			tr.insertCell().innerHTML = info[i].Essay
			tr.insertCell().innerHTML = info[i].Recom
			tr.insertCell().innerHTML = info[i].Total.toFixed(4)
			tr.insertCell().innerHTML = info[i].Ranking
		};
     for( i=0;i<info.length;i++){
     	a.append("<tr>");a.append("<td>"+info[i].Ranking+"</td>");	a.append("</tr>");}
     
			
			});
});
			
  

    
   
