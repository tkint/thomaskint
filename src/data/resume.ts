import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export interface Experience {
  name: string;
  role: string;
  descriptions: string[];
  startDate: string;
  endDate?: string;
}

export const experiences = computed(() => {
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
      name: t('home.resume.experiences.capgemini-orange-bank.name'),
      role: t('home.resume.experiences.capgemini-orange-bank.role'),
      descriptions: tm('home.resume.experiences.capgemini-orange-bank.descriptions'),
      startDate: '01/09/2017',
      endDate: '01/03/2018',
    },
    {
      name: t('home.resume.experiences.capgemini-internal.name'),
      role: t('home.resume.experiences.capgemini-internal.role'),
      descriptions: tm('home.resume.experiences.capgemini-internal.descriptions'),
      startDate: '01/03/2018',
      endDate: '01/06/2018',
    },
    {
      name: t('home.resume.experiences.capgemini-bpi-france.name'),
      role: t('home.resume.experiences.capgemini-bpi-france.role'),
      descriptions: tm('home.resume.experiences.capgemini-bpi-france.descriptions'),
      startDate: '01/06/2018',
      endDate: '01/08/2019',
    },
    {
      name: t('home.resume.experiences.sii-orange.name'),
      role: t('home.resume.experiences.sii-orange.role'),
      descriptions: tm('home.resume.experiences.sii-orange.descriptions'),
      startDate: '01/09/2019',
      endDate: '01/11/2020',
    },
    {
      name: t('home.resume.experiences.orange.name'),
      role: t('home.resume.experiences.orange.role'),
      descriptions: tm('home.resume.experiences.orange.descriptions'),
      startDate: '01/11/2020',
    },
  ] as Experience[];
});
