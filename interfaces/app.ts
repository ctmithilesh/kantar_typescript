interface userData{
    email: string,
    password: string 
}

let user: userData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

async function loginUser() {
    
    const result = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
           "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
    })
    console.log(result)


}