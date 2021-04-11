import { Moment } from 'moment';

export interface Article {
    filename: string
    title: string
    subtitle: string
    component: any
    createDate: Moment | null
}
