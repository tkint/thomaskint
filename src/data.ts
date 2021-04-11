import { Article } from './models/article';
import moment, { Moment } from 'moment';

const _dateRegex = /\d{4}-\d{2}-\d{2}/;
const _articles = [] as Article[];
const _articleFiles = import.meta.globEager('./blog/*.md');

Object.keys(_articleFiles).forEach((filepath) => {
    if (_articleFiles.hasOwnProperty(filepath)) {
        const module = _articleFiles[filepath];
        const frontmatter = module.attributes;

        if (frontmatter && frontmatter.title) {
            const completePathParts = filepath.split('/');
            let cleanPath = completePathParts[completePathParts.length - 1];
            cleanPath = cleanPath.replace(/\.[^/.]+$/, '');
            let createDate: Moment | null = null;
            const matches = _dateRegex.exec(cleanPath as string);
            if (matches) {
                createDate = moment(matches[matches.index]);
            }
            _articles.push({
                filename: cleanPath,
                title: frontmatter.title,
                subtitle: frontmatter.subtitle,
                component: module.VueComponent,
                createDate,
            });
        }
    }
});

export const articles = _articles;

export const slides = [
    {
        title: 'Love of My Life',
        subtitle: 'Diapo sur l\'amour de ma vie',
        directory: 'love',
    },
];

export const projects = [
    {
        name: 'Oceanis',
        description: 'Refonte du site vitrine et de l\'espace pro',
    },
    {
        name: 'Extranet des Projets Innovants Collaboratifs',
        description: 'Développement de fonctionnalités et correction d\'anomalies',
    },
    {
        name: 'KiboDB',
        description: 'Système de base de données interrogeable en HTTP',
    },
    {
        name: 'DecisionTree',
        description: 'Librairie Java générique implémentant l\'algorithme ID3 (arbre de décision)',
    },
    {
        name: 'Mapper',
        description: 'Librairie Java permettant d\'extraire des types de mots d\'un texte en se basant sur un ensemble de dictionnaires',
    },
    {
        name: 'Galileo',
        description: 'Récupération et consolidation de données immobilières',
    },
    {
        name: 'MiniDAO',
        description: 'Librairie Java faisant office d\'ORM allégé',
    },
    {
        name: 'HomeToolbox',
        description: 'Boîte à outil numérique pour la maison (budget, notes, calendrier)',
    },
];
