import { Article } from '../models/article';

const articles = [] as Article[];
const files = import.meta.globEager('./*.md');

Object.keys(files).forEach((file) => {
    if (files.hasOwnProperty(file)) {
        const completePathParts = file.split('/');
        let cleanPath = completePathParts[completePathParts.length - 1];
        cleanPath = cleanPath.replace(/\.[^/.]+$/, '');
        articles.push({
            id: cleanPath,
            component: files[file].default,
        });
    }
});

export default articles;
