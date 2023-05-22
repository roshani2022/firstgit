const posts = [
    {Title:'Post1', Body:'This is Post1',CreatedAt:new Date().getTime()},
    {Title:'Post2', Body:'This is Post2',CreatedAt:new Date().getTime()}
];

function getPost(){
    setTimeout(()=>{
        let output = '';
       /* posts.forEach((post,index) => {
            output = output +  `<li>${post.Body}</li>`
           document.body.innerHTML = output
        });
        */
       for( var i=0;i<posts.length;i++){
        output += `<li>${posts[i].Title}</li>`
       }
       document.body.innerHTML = output

    },1000)
}

function creatPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000)
}

function creat4thPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000)
}


creatPost( {Title:'Post3', Body:'This is Post3',CreatedAt:new Date().getTime()},getPost)
creat4thPost( {Title:'Post4', Body:'This is Post4',CreatedAt:new Date().getTime()},getPost)