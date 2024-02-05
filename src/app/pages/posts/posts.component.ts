import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  //propiedad que para almacenar la data en este caso los postos a recibir
  data:any[]=[];                                


  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts:any[''])=>{
      this.data=posts;
    })
  }

}
