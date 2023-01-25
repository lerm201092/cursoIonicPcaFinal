import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "inventario",
      desc: null,
      subtitle: "Ordenamiento de libros",
      img: "./assets/img/img1.png",
      description: "Lorem Ipsum  and typesetting industry."
    },
    {
      title: "E-BOOK",
      desc: null,
      subtitle: "Un camino hacia el futuro",
      img: "./assets/img/img2.png",
      description: "Lorem Ipsum is simply dummy text of the printing ."
    },
    {
      title: "AUDIO LIBROS",
      desc: null,
      subtitle: "Cierra tus ojos e imagina",
      img: "./assets/img/img3.png",
      description: "simply dummy text of the printing and typesetting industry."
    },
    {
      title: "AMBIENTE",
      desc: null,
      subtitle: "Tranquilidad y espacio ideal",
      img: "./assets/img/img4.png",
      description: "simply dummy text of the printing and typesetting industry."
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  
  ngOnInit() {
  }

}
