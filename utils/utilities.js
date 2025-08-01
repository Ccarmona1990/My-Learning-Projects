import get from './getElement.js';


// toggle loading spinner
export function isLoading() {
    const loading = get('.loading');
    
    if (loading) {
            loading.classList.add('hide');
        } else {
            loading.classList.remove('hide');
        }
    }



