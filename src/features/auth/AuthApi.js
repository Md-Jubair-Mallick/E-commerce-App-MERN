export function createUser(userData) {
    return  new Promise(async (resolve) => {
        const res = await fetch('http://localhost:8080/users', {
            method : 'POST',
            body : JSON.stringify(userData),
            headers :  {'content-type' : 'application/json'},
        })
        const data = await res.json();
        resolve({ data });
    })
}

export function checkUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
        const email = loginInfo.email;
        const password = loginInfo.password;
        const res = await fetch('http://localhost:8080/users?email='+email)
            const data = await res.json();
            if(data.length){
                if(password === data[0].password) {
                    resolve({ data : data[0] })
                }   else{
                    reject({ message : 'Email or Password may wrong found'})
                }
            }   else{
                reject({ message : 'Email or Password may be wrong'})
            }
            
        resolve({ data });
    })
}