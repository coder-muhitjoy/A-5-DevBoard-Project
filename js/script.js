document.getElementById("card-discover").addEventListener('click', function(event){
    event.preventDefault()
    window.location.href = "main.html"   

})

document.getElementById("")
    const btn = document.querySelectorAll(".btn");
    let sitCount = 6;
    let addSitCount = 20;
    for(let i = 0; i < btn.length; i++){
        const button = btn[i];
        button.addEventListener("click", function(){
            
            sitCount = sitCount - 1;
            addSitCount = addSitCount + 1 ;
            const sitItem2 = document.getElementById("total-complete-job")
            const sitItem = document.getElementById("task-assigned")
            
            if (sitItem && sitCount >= 0) {    
                sitItem.innerText = sitCount;
                sitItem.classList.add("disabled")
               
            }
            if(sitItem2){
                sitItem2.innerText = addSitCount
            }
            if(sitItem){
                alert("Board Update Successfully")       
            }   

            const goodAlert = document.getElementById("task-assigned").innerText;
            if(goodAlert == 0){
                alert("congrats!!! you have completed all the current task")
            }
           
            button.disabled = true;

           
            // const myDiv = document.getElementById("myDiv");
            // const p = document.createElement("p");    
            // p.textContent = "You have Complete The Task Optimize Home page at 12:10:06 AM";
            // p.classList.add("p-4", "bg-gray-100", "rounded-lg", "font-bold", "text-[14px]", "mt-2");
            // myDiv.appendChild(p);
  
            // const clearText = document.getElementById("clear-logs")
            // .addEventListener("click", function(){
            //     p.classList.add("hidden")
            // })        
           
        })
    }

    function generateRGBColor() { 
        event.preventDefault(); 
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)})`;
        
        document.body.style.backgroundColor = randomColor;
      }

    const dates2 = new Date();
      const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dates = dates2.getDate();
    const month = months[dates2.getMonth()];
    const year = dates2.getFullYear();

    const setDate = dates + " " + month + " " + year;

    const dayTo = days[dates2.getDay()];
    const fixedDay = dayTo.slice(0, 3);

    document.getElementById('day-name').innerText = fixedDay + ',';

    document.getElementById('date-name').innerText = setDate;



document.getElementById("complete-button-1").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title1 = document.getElementById('title-1').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title1}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2','mt-4',  'bg-gray-100', 'rounded-lg',)
    history.appendChild(addHistory);
})

document.getElementById("complete-button-2").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title2 = document.getElementById('title-2').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title2}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2', 'mt-4', 'bg-gray-100', 'rounded-lg')
    history.appendChild(addHistory);
})
document.getElementById("complete-button-3").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title3 = document.getElementById('title-3').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title3}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2', 'mt-4', 'bg-gray-100', 'rounded-lg')
    history.appendChild(addHistory);
})
document.getElementById("complete-button-4").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title4 = document.getElementById('title-4').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title4}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2', 'mt-4', 'bg-gray-100', 'rounded-lg')
    history.appendChild(addHistory);
})

document.getElementById("complete-button-5").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title5 = document.getElementById('title-5').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title5}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2', 'mt-4', 'bg-gray-100', 'rounded-lg')
    history.appendChild(addHistory);
})
document.getElementById("complete-button-6").addEventListener("click", function(){
    //    set Time
    let UniqueDate = new Date();

    const history = document.getElementById('myDiv');
    const title6 = document.getElementById('title-6').innerText;
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `<p>You have Complete The Task ${title6}
     at ${UniqueDate.toLocaleTimeString()}</p>

`
    addHistory.classList.add('p-2', 'mt-4', 'bg-gray-100', 'rounded-lg')

    history.appendChild(addHistory);
    
})

document.getElementById("clear-logs").addEventListener("click", function(){
    const history = document.getElementById('myDiv');
    history.innerHTML = ""

  
})


      

     
  
     


    

     

     