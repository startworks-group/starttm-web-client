import { Action } from '@ngrx/store';


export enum UserActionTypes {
    SIGNUP = '[User] Signup',
    SIGNUP_SUCCESS = '[User] Signup Success',
    SIGNUP_FAILURE = '[User] Signup Failure',
}

export class SignUp implements Action {
    readonly type = UserActionTypes.SIGNUP;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = UserActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
    readonly type = UserActionTypes.SIGNUP_FAILURE;
    constructor(public payload: any) { }
}


export type All =
    | SignUp
    | SignUpSuccess
    | SignUpFailure;