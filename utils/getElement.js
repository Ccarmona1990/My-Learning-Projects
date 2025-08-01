export default function getElement (element) {

    if (element){
        return document.querySelector(element);
    } else 
        throw Error(`There was an error finding this ${element} check ${element} to find out about this problem.`) 
}

export function getElements (elements){
    if (elements){
        return document.querySelectorAll(elements);
    } else 
        throw Error(`There was an error with these ${elements} check these ${elements} to find out what is the problem.` )
}