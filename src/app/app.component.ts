import { Component } from '@angular/core';
import { Foto } from './foto/foto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos:Foto[] = [
    {
        id: 1,
        title: "Angular Wallpaper",
        alt: "sla" ,
        url:"https://www.bacancytechnology.com/img/angular-imgs/side-bg1.jpg" ,
        descricao: "foto retirada de uma equipe de retardados huuuuuuuuuuuuuuuuu é noix"
    },
    {
        id: 2,
        title: "Python Wallpaper",
        alt: "sla" ,
        url:"https://s3-ap-southeast-1.amazonaws.com/blog.internshala.com/wp-content/uploads/2018/02/Python-programming-Gamers-and-coders-of-the-world-unite-1024x490.jpg" ,
        descricao: "Linguagem de retardado"
    },
    {
        id: 3,
        title: "Java Wallpaper",
        alt: "sla" ,
        url:"https://cdn-images-1.medium.com/max/800/1*E4CO83SmCCrvRrge7U3Ahw.jpeg" ,
        descricao: "mais retardado ainda"
    }
]
}
