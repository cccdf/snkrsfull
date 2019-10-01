export default async function getNikeApi(){
    let response = await fetch('http://localhost:9000/nike');
    let results = await response.json();
    return results;

}