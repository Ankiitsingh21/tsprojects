interface User{
        name:string,
        age:number
}


function greet(user:User){
        console.log(`hello ${user.name}`);
}

greet({
        name:"Ankit Singh",
        age:21,
})