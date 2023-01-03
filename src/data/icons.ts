import { faBoxArchive, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faNpm, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck, faCircleXmark, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const Icons = {
  github: faGithub,
  linkedIn: faLinkedin,
  stackOverflow: faStackOverflow,
  npm: faNpm,
  mvn: faBoxArchive,
  valid: faCircleCheck,
  invalid: faCircleXmark,
  add: faPlus,
  delete: faTrashCan,
} as const;

export type IconKey = keyof typeof Icons;
