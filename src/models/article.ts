import { Dayjs } from 'dayjs';

export interface Article {
  filename: string
  title: string
  subtitle: string
  toc: { level: string, content: string }[],
  component: any
  createDate?: Dayjs
}
