import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes.enum';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{
        username: string;
        password: string;
        email: string;
    }>()
);
