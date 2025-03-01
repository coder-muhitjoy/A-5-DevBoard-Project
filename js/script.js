document.getElementById("card-discover").addEventListener('click', function(event){
    event.preventDefault()
    window.location.href = "main.html"   

})
    const btn = document.querySelectorAll(".btn");
    let sitCount = 6;
    let addSitCount = 23;
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
            function getButtonDeskID() {
                console.log("Hello! Clear History button clicked.");
            }
            
            
            button.disabled = true;
            const myDiv = document.getElementById("myDiv");
            const p = document.createElement("p");
            
            p.textContent = "You have Complete The Task Optimize Home page at 12:10:06 AM";
            p.classList.add("p-4", "bg-gray-100", "rounded-lg", "font-bold", "text-[14px]", "mt-2");
            myDiv.appendChild(p);

            const clearText = document.getElementById("clear-logs")
            .addEventListener("click", function(){
                p.classList.add("hidden")
            })        
           
        })
    }

    function generateRGBColor() { 
        event.preventDefault(); 
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)}, 
                                 ${Math.floor(Math.random() * 256)})`;
        
        document.body.style.backgroundColor = randomColor;
      }

     