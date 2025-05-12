
function submithandler(event){
   event.preventDefault();
    const inputname = document.getElementById("name").value;
  //  console.log(inputname);
    const inputyear = document.getElementById("year").value;
    //console.log(inputyear);
    
    let basedata = "https://localhost:8080/";
   // console.log(urldata);
    if(inputname){
    //    console.log("name field");
      basedata += `?name=${inputname}`;
    }
    if(inputyear){
        if(inputname){
          basedata += `&year=${inputyear}`;
        }
        else{
          basedata += `?year=${inputyear}`;
        }
       // console.log(urldata);
   document.getElementById("url").textContent = basedata;
    }
}

