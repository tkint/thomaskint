import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export interface Experience {
  name: string;
  role: string;
  descriptions: string[];
  startDate: string;
  endDate?: string;
}

export const experiences = computed<Experience[]>(() => {
  const { t, tm } = useI18n();

  return [
    {
      name: t('home.resume.experiences.oceanis.name'),
      role: t('home.resume.experiences.oceanis.role'),
      descriptions: tm('home.resume.experiences.oceanis.descriptions'),
      startDate: '01/07/2014',
      endDate: '01/08/2017',
    },
    {
      name: t('home.resume.experiences.capgemini.name'),
      role: t('home.resume.experiences.capgemini.role'),
      descriptions: tm('home.resume.experiences.capgemini.descriptions'),
      startDate: '01/09/2017',
      endDate: '31/08/2019',
    },
    {
      name: t('home.resume.experiences.sii.name'),
      role: t('home.resume.experiences.sii.role'),
      descriptions: tm('home.resume.experiences.sii.descriptions'),
      startDate: '01/09/2019',
      endDate: '01/11/2020',
    },
    {
      name: t('home.resume.experiences.orange.name'),
      role: t('home.resume.experiences.orange.role'),
      descriptions: tm('home.resume.experiences.orange.descriptions'),
      startDate: '15/11/2020',
    },
  ];
});
