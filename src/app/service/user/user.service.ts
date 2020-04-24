import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Constante
  private static readonly URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  /**
   * Protocole Http (Verb)
   * - GET      -> lecture
   * - POST     -> ajout
   * - PUT      -> modification
   * - PATCH    -> modification
   * - DELETE   -> suppression
   * TRACE    -> tracer (lister) info sur le chemin d'une ressource
   * CONNECT  -> connexion
   * - OPTIONS  -> les options de communication pour une ressource (ex: donne la liste des Verb autorisés pour une adresse)
   * - HEAD     -> lecture des entêtes
   */

  public findAll(): Observable<User[]> { // type hint
    return this.http.get<User[]>(`${UserService.URL}/users`);
  }
}
