import { Club } from './../models/club';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ClubService {

    private BASE_URL = environment.SERVER_URL;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Club[]>(`${environment.SERVER_URL}/clubs`);
    }

    getById(id: string) {
        return this.http.get(`${environment.SERVER_URL}/clubs/${id}`);
    }

    create(club: Club) {
        const url = `${this.BASE_URL}/create`;
        return this.http.post(url, club);
    }

    update(club: Club) {
        return this.http.put(`${environment.SERVER_URL}/clubs/${club.id}`, club);
    }

    delete(id: string) {
        return this.http.delete(`${environment.SERVER_URL}/clubs/${id}`);
    }
}