document.addEventListener("DOMContentLoaded", function(){
    console.log('Página toalmente carregada');

    const userName = 'Hanufu';
    const url = 'https://api.github.com/users';


        async function getRepo(userName){
        const Respositorios = await fetch(`${url}/${userName}/repos`);
        const repo = Respositorios.json();
        return repo
    }  
    async function getUser(userName){
        const userRespost = await fetch(`${url}/${userName}`);
        const user = userRespost.json();
        return user
    }  
    
    getUser(userName).then((res)=>{
        console.log(res)    
    })
    
    
    getRepo(userName).then((res)=>{
        for(let i = 0; i < res.length; i++){
            createProject(res[i])
        }
    } );
    
    function createProject(repo){
        let project = {};
        let box = document.querySelector('#projets')
        project.base = `
        <section class="box project">
        <span class="headerProject"><img src="assets/folder.svg" alt="folder icon" width="20px" height="20px"> <h3>${repo.name}</h3></span>
        <p class="descriptionProject">${repo.description}</p>
        <span class="footerProject">
            <span>
                <span id="stars"><img src="assets/star.svg" alt="star icon" width="20px" height="20px">${repo.forks_count}</span>
                <span id="branch"><img src="assets/git-branch.svg" alt="git branch icon" width="20px" height="20px">${repo.stargazers_count}</span>
            </span>
            <span>${repo.language}</span>
        </span>
        </section>
    `;
        box.innerHTML += project.base;
    }
 
})