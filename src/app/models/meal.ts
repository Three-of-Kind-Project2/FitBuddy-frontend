import { Type } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { User } from './user';

export class Meal {
    public id: number;
    public date: Date;
    public type: string;
    public userid: number;
    constructor (
        id: number,
        date: Date,
        type: string,
        userid: number
    ) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.userid = userid;
    }
}