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

// Intersection Observer for all sections animation
export const observer = new IntersectionObserver((entries) => entries.forEach((entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // only trigger once
            }
        })));


