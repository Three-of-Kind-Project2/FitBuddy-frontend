import { Type } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { User } from './user';

export class Meal {
    public meal_id: number;
    public date: Date;
    public type: string;
    public user: User;
}