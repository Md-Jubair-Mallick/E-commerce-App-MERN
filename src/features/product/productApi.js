export function fetchProducts () {
    return new Promise(async(resolve) => {
        const res = await fetch('http://localhost:8080/products')
        const data = await res.json()
        resolve({ data })
    })
}

export function productDetails (id){
    return new Promise(async(resolve, reject) => {
        // const id = info;
        const res = await fetch('http://localhost:8080/products/'+id)
        const data = await res.json()
        if(data){
            resolve({ data : data })
        }   else {
            reject({ message : 'data not found' })
        }
        resolve({ data })
    })
}