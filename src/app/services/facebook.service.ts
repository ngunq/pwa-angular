import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() {
  }

  getAllPosts(callback) {
    fetch("http://127.0.0.1:3000/posts")
      .then(response => {
        return response.json()
      })
      .then(callback)
      .catch(e => {
        console.log(e)
      })
  }
}
