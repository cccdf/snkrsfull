export default async function getNikeApi(){
    let response = await fetch('https://my-json-server.typicode.com/cccdf/Mysnkrs-react-app/posts');
    let results = await response.json();
    return results;

}