let url = `https://jsonplaceholder.typicode.com/posts`


let fetchData = async(url) =>{

    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.json())
    }

    catch(error){
        console.log(error)
    }
}