import {Goal} from './goal.model';

export class User {
    id: string;
    password: string;
    goals:Array<Goal>
}