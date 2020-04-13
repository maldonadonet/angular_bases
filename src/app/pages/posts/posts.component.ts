import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log("Se cargo la data");
    // para evitar suscribirse cada que llamo al este modulo
    this.mensajes = this.dataService.getPosts();

    //   .subscribe( (posts : any[] ) =>{
    //   this.mensajes = posts;
    //   console.log(this.mensajes);
    // });
  }

  escuchaClick(id: number) {
    console.log('Click en : ', id );
  }
}
