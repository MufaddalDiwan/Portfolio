import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, NgForOf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/projects')
      .subscribe(data => this.projects = data);
  }
}

bootstrapApplication(App);
