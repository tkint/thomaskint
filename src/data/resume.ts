export interface Experience {
  name: string;
  role: string;
  descriptions: string[];
  startDate: string;
  endDate?: string;
}

export const experiences = [
  {
    name: "Océanis Promotion",
    role: "Développeur informatique - alternance",
    descriptions: [
      "Gestion de projets.",
      "Développement de Web Services (REST, C#, MS CRM 2011, SQL).",
      "Extractions de données SQL (reporting d'activité, tableaux croisés dynamiques, Business Intelligence).",
      "Gestion et migration de MS CRM 2011 et 2016 (Plugins, Workflows, Javascripts).",
      "Gestion Sage 1000.",
      "Formation des utilisateurs.",
    ],
    startDate: "01/07/2014",
    endDate: "01/08/2017",
  },
  {
    name: "Capgemini - Orange Bank",
    role: "Ingénieur d'études et développement - alternance",
    descriptions: [
      "Développement de tests unitaires",
      "Correction d'anomalies",
    ],
    startDate: "01/09/2017",
    endDate: "01/03/2018",
  },
  {
    name: "Capgemini - Projet interne",
    role: "Ingénieur d'études et développement - alternance",
    descriptions: [
      "Conception et développement de fonctionnalités",
      "Correction d'anomalies",
    ],
    startDate: "01/03/2018",
    endDate: "01/06/2018",
  },
  {
    name: "Capgemini - Bpifrance",
    role: "Ingénieur d'études et développement - alternance",
    descriptions: [
      "Conception, chiffrage et développement de fonctionnalités",
      "Correction d'anomalies",
      "Maintenance et évolution de la documentation",
      "Livraison de nouvelles versions",
    ],
    startDate: "01/06/2018",
    endDate: "01/08/2019",
  },
  {
    name: "Groupe SII - Orange",
    role: "Consultant",
    descriptions: [
      "Conception, chiffrage et développement de fonctionnalités",
      "Correction d'anomalies",
      "Maintenance et évolution de la documentation",
      "Livraison de nouvelles versions",
    ],
    startDate: "01/09/2019",
    endDate: "01/11/2020",
  },
  {
    name: "Orange",
    role: "Ingénieur logiciels",
    descriptions: [
      "Conception, chiffrage et développement de fonctionnalités",
      "Correction d'anomalies",
      "Maintenance et évolution de la documentation",
      "Livraison de nouvelles versions",
    ],
    startDate: "01/11/2020",
  },
] as Experience[];
