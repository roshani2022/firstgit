"use strict";
    async function saveToCrudCrud(event){
    event.preventDefault();
    var item = event.target.item.value;
    var description= event.target.description.value;
    var price = event.target.price.value;
    var quantity = event.target.quantity.value;

    var list = {
        item,
        description,
        price,
        quantity
    }
    showNewUserOnScreen(list)
    
     try{
          var response = await axios.post("https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList",list)
           console.log(response)
     }
     catch(error){
        console.log(error)
    }


   }

    

    window.addEventListener("DOMContentLoaded", async()=>{
      try {
        let res =  await axios.get("https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList")
    
        for(var i=0;i<res.data.length;i++)
        {
            showNewUserOnScreen(res.data[i])

        }
      }
      catch(error){
        console.log(error)
    }
    })

   async  function showNewUserOnScreen(list){
        var parentElem = document.getElementById('listofitem');
        var childElem = document.createElement('li');
        childElem.textContent = list.item + '- '+ list.description+' - '+ list.price+' - '+ list.quantity;
        parentElem.appendChild(childElem);

        var button1=document.createElement('input');
        button1.type='button';
        button1.value='Buy1';
        button1.class = "btn"
        button1.onclick = async() =>{
        try {
            let put1 = await axios.put(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`
                ,{item: `${list.item}`,
                description: `${list.description}`,
                price: `${list.price}`,
                quantity: `${list.quantity - 1}`})
         
             let get1 = await axios.get(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`)
    
            showNewUserOnScreen(response.data)
            parentElem.removeChild(childElem)
         }
         
         catch(error){
        console.log(error)
       }
}
        
    var button2=document.createElement('input');
        button2.type='button';
        button2.value='Buy2';
        button2.class = "btn"
        button2.onclick = async() =>{
        try{
            let put2 =  await axios.put(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`
            ,{item: `${list.item}`,
            description: `${list.description}`,
            price: `${list.price}`,
            quantity: `${list.quantity - 2}`})


          let get2 = await axios.get(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`)

           
          showNewUserOnScreen(response.data)
          parentElem.removeChild(childElem); 
          //

    
        }
        
        catch(error){
        console.log(error)
       } 
        
    }
    var button3 = document.createElement('input');
     button3.type = 'button';
     button3.value = 'Buy3'
     button1.class = "btn"  
     button3.onclick = async() =>{
        try{
            let put3 = await axios.put(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`
        ,{item: `${list.item}`,
          description: `${list.description}`,
          price: `${list.price}`,
          quantity: `${list.quantity - 3}`})
    

         let get3 = await axios.get(`https://crudcrud.com/api/a1fba6fd483e4826ae478827c23de68e/ItemList/${list._id}`)
      
          showNewUserOnScreen(response.data)
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

