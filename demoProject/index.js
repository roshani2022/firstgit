 "use strict";
    async function saveToCrudCrud(event){
    event.preventDefault();
    let item = event.target.item.value;
    let description= event.target.description.value;
    let price = event.target.price.value;
    let quantity = event.target.quantity.value;

    let candyDetail = {
        item,
        description,
        price,
        quantity
    }
    showNewUserOnScreen(candyDetail)
    
     try{
          let response = await axios.post("https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy",candyDetail)
           console.log(response)
     }
     catch(error){
        console.log(error)
    }


   }

    

    window.addEventListener("DOMContentLoaded", async()=>{
      try {
        let res =  await axios.get("https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy")
    
        for(var i=0;i<res.data.length;i++)
        {
            showNewUserOnScreen(res.data[i])

        }
      }
      catch(error){
        console.log(error)
    }
    })

   async  function showNewUserOnScreen(candyDetail){
        let parentElem = document.getElementById('listofitem');
        let childElem = document.createElement('li');
        childElem.textContent = candyDetail.item + '- '+ candyDetail.description+' - '+ candyDetail.price+' - '+ candyDetail.quantity;
        parentElem.appendChild(childElem);

        let button1=document.createElement('input');
        button1.type='button';
        button1.value='Buy1';
        button1.class = "btn-sm"
        button1.onclick = async() =>{
        try {
            let buyCandy1 = await axios.put(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy/${candyDetail._id}`
                ,{item: `${candyDetail.item}`,
                description: `${candyDetail.description}`,
                price: `${candyDetail.price}`,
                quantity: `${candyDetail.quantity - 1}`})
                
         
             let buyCandy1detail = await axios.get(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy/${candyDetail._id}`)
             
              

            showNewUserOnScreen(buyCandy1detail.data)
            parentElem.removeChild(childElem)
         }
         
         catch(error){
        console.log(error)
       }
}
        
    let button2=document.createElement('input');
        button2.type='button';
        button2.value='Buy2';
        button2.class = "btn-sm"
        button2.onclick = async() =>{
        try{
            let buyCandy2 =  await axios.put(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy/${candyDetail._id}`
            ,{item: `${candyDetail.item}`,
            description: `${candyDetail.description}`,
            price: `${candyDetail.price}`,
            quantity: `${candyDetail.quantity - 2}`})


          let buyCandy2Detail = await axios.get(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy/${candyDetail._id}`)

           
          showNewUserOnScreen(buyCandy2Detail.data)
          parentElem.removeChild(childElem); 
        

    
        }
        
        catch(error){
        console.log(error)
       } 
        
    }
    let  button3 = document.createElement('input');
     button3.type = 'button';
     button3.value = 'Buy3'
     button3.class = "btn-sm"  
     button3.onclick = async() =>{
        try{
            let buyCandy3 = await axios.put(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candy/${candyDetail._id}`
        ,{item: `${candyDetail.item}`,
          description: `${candyDetail.description}`,
          price: `${candyDetail.price}`,
          quantity: `${candyDetail.quantity - 3}`})
    

         let buyCandy3Detail = await axios.get(`https://crudcrud.com/api/28ff529ed5444355a34cdd3d54865988/Candt/${candyDetail._id}`)
      
          showNewUserOnScreen(buyCandy3Detail.data)
          parentElem.removeChild(childElem)
         
        }
      catch(error){
            console.log(error)
           }    
    }
   

        childElem.appendChild(button1);
        childElem.appendChild(button2);
        childElem.appendChild(button3);
       
  }
  
  

