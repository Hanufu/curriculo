document.addEventListener("DOMContentLoaded", function(){
    console.log('Página toalmente carregada');

    const userName = 'Hanufu';
    const url = 'https://api.github.com/users';


    async function getUser(userName){
        const profileResponse = await fetch(`${url}/${userName}`);
        const profile = profileResponse.json();
        return profile
    }  
    getUser(userName).then(res => console.log(res));
})
