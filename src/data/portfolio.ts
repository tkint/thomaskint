import { IconKey } from "@/data/icons";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

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

export const projects = computed(() => {
  const { t } = useI18n();
  return [
    {
      name: "hocon-parser",
      description: t("home.portfolio.project.hocon-parser.description"),
      contributors: [contributors.tkint],
      links: [
        { icon: "github", url: "https://github.com/tkint/hocon-parser" },
        {
          icon: "npm",
          url: "https://www.npmjs.com/package/@tkint/hocon-parser",
        },
      ],
    },
    {
      name: "kalidate",
      description: t('home.portfolio.project.kalidate.description'),
      contributors: [contributors.tkint],
      links: [{ icon: "github", url: "https://github.com/tkint/kalidate" }],
    },
    {
      name: "MiniDAO",
      description: t('home.portfolio.project.minidao.description'),
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
      description: t('home.portfolio.project.kibo-db.description'),
      contributors: [
        contributors.tkint,
        contributors.kbouzan,
        contributors.bdomange,
      ],
      links: [{ icon: "github", url: "https://github.com/lemilliard/kibo-db" }],
    },
    {
      name: "DecisionTree",
      description: t('home.portfolio.project.decision-tree.description'),
      contributors: [contributors.tkint, contributors.kbouzan],
      links: [
        {
          icon: "github",
          url: "https://github.com/lemilliard/decision-tree",
        },
      ],
    },
  ] as Project[];
});
