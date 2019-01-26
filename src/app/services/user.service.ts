import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: 'root' })
export class UserService {

    private BASE_URL = environment.SERVER_URL;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.SERVER_URL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.SERVER_URL}/users/${id}`);
    }

    register(user: User) {
        const url = `${this.BASE_URL}/subscriptions`;
        return this.http.post(url, user);
    }

    update(user: User) {
        return this.http.put(`${environment.SERVER_URL}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.SERVER_URL}/users/${id}`);
    }
}