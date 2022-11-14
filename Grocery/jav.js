function grocey(){
    var name1 = new XMLHttpRequest();
    name1.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var b= JSON.parse(this.responseText).Grocery
            var st=""
            for(i=0;i<b.length;i++){
                st += "<tr><td id='sl'>"+ b[i].slno +"</td><td id='nm'>"+ b[i].name +"</td><td id='im'><img src="+ b[i].image +"></td><td id='qlt'>"+ b[i].quantity +"</td><td id='un'>"+ b[i].unit +"</td><td id='dp'>"+ b[i].dep +"</td><td id='nt'>"+ b[i].notes +"</td></tr>"
            }
            document.getElementById("tbl").innerHTML=st
        }
    }
    name1.open("GET" , "grocery.json", true);
    name1.send();
}