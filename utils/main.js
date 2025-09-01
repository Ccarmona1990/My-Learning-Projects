import get from './getElement.js';
import { projects } from './projects.js';
import { isLoading } from './utilities.js';


export function main() {
    const main = get('main'); // gets the element with id 'main'
    isLoading(); // removes loading spinner
    
    // dynamically creates a list of projects
    let projectList = projects.map(({ id, name, url, img, description, technologies }) => {
        
        //console.log(id, name, url, img, description, technologies);
        
        return `
        <div class="project" id="${id}">
            <h2>${name}</h2>

            <section class="projectImgContainer">
                <img src="${img}"
                alt="${name} image"/>
                
                <div class="layer">
                    <p>${description}</p>
                    
                    <a href="${url}"></a>
                    </div>
                    </section>
            <p>${technologies.join(', ')}</p> 
            
        </div>
        `});
    projectList = projectList.join(' ');
    
    main.innerHTML = ` <section class="projectList"> ${projectList} <section>`;
}

