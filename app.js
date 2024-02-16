const info = [
    {
      id: "Syracuse University, New York",
      value1: 2000,
      value2: 6000,
      value3: 1000
    },
    {
      id: "SUNY, Buffalo",
      value1: 30000,
      value2: 7000,
      value3: 9000
    },
    {
      id: "University of Illinois, Chicago",
      value1: 40000,
      value2: 1000,
      value3: 8000
    },
    {
      id: "Texas A&M University, Kingsville",
      value1: 1000,
      value2: 900,
      value3: 5000
    }
  ];
  
  const select = document.querySelector("select");
  const detailsElement = document.querySelector(".details");
  const programsList = document.querySelector(".select");
  const para = document.querySelectorAll(".select p");
  const checkbox = document.querySelector("input[name=checkbox]");
  const val1 = document.getElementById("first");
  const val2 = document.querySelector("#sec h4");
  const val3 = document.querySelector("#third h4");
  const submit = document.getElementsByTagName("button")[0];
  const check = document.querySelectorAll("#programs input");
  
select.addEventListener("change", (evt) => {
    detailsElement.style.visibility = "visible";
    programsList.style.visibility = "visible";
    submit.style.visibility="visible";
});
  let v1 = 0,
    v2 = 0,
    v3 = 0;
  
  select.addEventListener("change", (evt) => {
    const selectedOption = evt.target.value;
    for (let i = 1; i <= 4; i++) {
      if (selectedOption == i) {
        v1 = info[i - 1].value1;
        v2 = info[i - 1].value2;
        v3 = info[i - 1].value3;
        document.getElementById("first").innerText = v1;
        document.getElementById("sec").innerText = v2;
        document.getElementById("third").innerText = v3;
      }
    }
  });
  
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      for (let option of para) {
        option.style.visibility = "visible";
      }
    }
  });
  var sum = 0;
  let vall=0;
  for (let isCheck of check) {
    isCheck.addEventListener("change", (evt) => {
      if (evt.target.checked) {
        if (evt.target.value === "wellness") {
          sum = sum + parseInt(v1);
        } else if (evt.target.value === "health") {
          sum = sum + parseInt(v2);
        } else if (evt.target.value === "travel") {
          sum = sum + parseInt(v3);
        }
      }else{
        if (evt.target.value === "wellness") {
            sum = sum - parseInt(v1);
          } else if (evt.target.value === "health") {
            sum = sum - parseInt(v2);
          } else if (evt.target.value === "travel") {
            sum = sum - parseInt(v3);
          }
      }
      vall=sum;
    });
  }
  submit.addEventListener("click",(evt)=>{
    document.getElementById("msg").style.visibility="visible";
    document.getElementById("msg").innerText=`Total Amount is ${vall}`;
  }) 
  