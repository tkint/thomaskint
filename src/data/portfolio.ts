import { IconKey } from "@/data/icons";

export interface Project {
  name: string;
  description: string;
  contributors: Contributor[];
  links: Link[];
}

export interface Link {
  icon: IconKey;
  url: string;
}

export interface Contributor {
  firstname: string;
  lastname: string;
}

const contributors = {
  tkint: { firstname: "Thomas", lastname: "Kint" },
  kbouzan: { firstname: "Kevin", lastname: "Bouzan" },
  bdomange: { firstname: "Baptiste", lastname: "Domange" },
} as Record<string, Contributor>;

export const projects = [
  {
    name: "hocon-parser",
    description: `Librairie Javascript qui permet de parser une configuration HOCON`,
    contributors: [contributors.tkint],
    links: [
      { icon: "github", url: "https://github.com/tkint/hocon-parser" },
      { icon: "npm", url: "https://www.npmjs.com/package/@tkint/hocon-parser" },
    ],
  },
  {
    name: "kalidate",
    description: `Librairie Kotlin qui permet de vérifier la validité des données d'un objet`,
    contributors: [contributors.tkint],
    links: [{ icon: "github", url: "https://github.com/tkint/kalidate" }],
  },
  {
    name: "MiniDAO",
    description: `Librairie Java qui permet d'établir une connexion simple entre un modèle et une base de données MySQL`,
    contributors: [contributors.tkint],
    links: [
      { icon: "github", url: "https://github.com/tkint/mini-dao" },
      {
        icon: "mvn",
        url: "https://mvnrepository.com/artifact/com.thomaskint/minidao",
      },
    ],
  },
  {
    name: "KiboDB",
    description: `Système de base de données interrogeable en HTTP`,
    contributors: [
      contributors.tkint,
      contributors.kbouzan,
      contributors.bdomange,
    ],
    links: [{ icon: "github", url: "https://github.com/lemilliard/kibo-db" }],
  },
  {
    name: "DecisionTree",
    description: `Librairie Java qui permet de générer et utiliser un arbre de décision, basé sur l'algorithme ID3.`,
    contributors: [contributors.tkint, contributors.kbouzan],
    links: [
      { icon: "github", url: "https://github.com/lemilliard/decision-tree" },
    ],
  },
] as Project[];
