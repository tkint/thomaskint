import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

export const Icons = {
  github: faGithub,
  npm: faNpm,
  mvn: faBoxArchive,
  valid: faCircleCheck,
  invalid: faCircleXmark,
};

export type IconKey = keyof typeof Icons;
