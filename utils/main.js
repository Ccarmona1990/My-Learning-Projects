import get from './getElement.js';
import { projects } from './projects.js';
import { isLoading, observer } from './utilities.js';


export function main() {
    const header = get('header'); 
    const main = get('main'); 
    isLoading(); // removes loading spinner
    
    // observes elements for intersection and triggers animation
    observer.observe(header); 
    observer.observe(main); 

    // dynamically creates a list of projects
    let projectList = projects.map(({ id, name, url, img, description, technologies }) => {
        
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

