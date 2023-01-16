import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 200 //velocidad movimiento de los slides
  }

  slides = [
    {
      titulo: "Politecnico",
      subTitulo: "Costa Atlantica",
      img: "./assets/img/img4.jpg",
      descripcion: "La Corporación Politécnico de la Costa Atlántica, en su propósito de contribuir con la formación de profesionales integrales, con espíritu emprendedor, es decir seres humano pensantes, críticos, propositivos, innovadores que aporten a la construcción de una sociedad más justa, equitativa, productiva y competitiva, se orienta por los siguientes valores."
    }, {
      titulo: "Lluvia",
      subTitulo: "De ideas",
      img: "./assets/img/img1.jpg",
      descripcion: "Comparte y vive con tus compañeros una lluvia de ideas, sobre los conocimientos adquiridos."
    }, {
      titulo: "Tipos",
      subTitulo: "De libros",
      img: "./assets/img/img2.jpg",
      descripcion: "Poseemos diferentes tipos de libros. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita incidunt quia aspernatur ad ex temporibus, id odit, ratione quibusdam illum? Accusantium quos vitae quis ipsum sint nam praesentium tempora!"
    }, {
      titulo: "Llevalos a casa",
      subTitulo: "Buscando tu comodidad",
      img: "./assets/img/img3.jpg",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]

  constructor() { }

}
