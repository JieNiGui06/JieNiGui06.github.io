onmessage = function(event){

postMassage(getTime());
}

function getTime()
		{
			var date1 = "2022-1-11";
			var date2 = today();
			date1 = Date.parse(date1);
    		date2 = Date.parse(date2);
    		var ms= Math.abs(date2 - date1);
    		var days = Math.floor(ms / (24 * 3600 * 1000));
    		return days ;
			
			
			//alert(days.toString());
		}
		function today(){
    		var today=new Date();
    		var str="";
    		str+=today.getFullYear()+"-";
			var month=today.getMonth()+1;//返回值是 0（一月） 到 11（十二月） 之间的一个整数。
			if(month<10){
        		str+="0";
    		}
    		str+=month+"-";
    		var day=today.getDate();//返回值是 1 ~ 31 之间的一个整数
    		if(day<10){
        		str+="0";
    		}
    		str+=day;
    		return str;
		}