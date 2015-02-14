$(document).ready(function(){
	var url="http://yijisoo.github.io/ie59000/2015spring/hw2/students.json";
     $.getJSON(url, function(info){
     		var a = $(".hw2 tbody");
     	for(var i=0;i<info.length;i++)
     		{	
     		a.append("<tr>");
     			info[i].Total=(info[i].GPA)/4*100+(info[i].GRE_V)/170*100+(info[i].GRE_Q)/170*100+(info[i].Essay)/10*100+(info[i].Recom)/10*100;
				a.append("<td>"+info[i].Name+"</td>");
				a.append("<td>"+info[i].GRE_V+"</td>");
				a.append("<td>"+info[i].GRE_Q+"</td>");
				a.append("<td>"+info[i].Essay+"</td>");
				a.append("<td>"+info[i].Recom+"</td>");
				a.append("<td>"+info[i].Total+"</td>");
				a.append("</tr>");
     		
				var info[i].mark=i
     		}
				
				
				{
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
     for(var i=0;i<info.length;i++){
     	a.append("<tr>");a.append("<td>"+info[i].Ranking+"</td>");	a.append("</tr>");}
     
			
			});
}
			
  

    
   
