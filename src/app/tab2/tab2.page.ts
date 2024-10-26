import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
 
  tecnologias: string[] = [
    'Python',
    'HTML/CSS/JS',
    'Java',
    'C++',
    'Manejo de base de datos con SQL'
  ];

  
  educaciones: { institucion: string; descripcion: string; ubicacion: string }[] = [
    {
      institucion: 'Colegio Santa Ana',
      descripcion: 'Bachillerato de Ciencias Básicas',
      ubicacion: 'Quito, Ecuador'
    },
    {
      institucion: 'Escuela Politécnica Nacional',
      descripcion: 'Tecnología Superior en Desarrollo de Software',
      ubicacion: 'Año: 2021 - Actualidad, Quito, Ecuador'
    }
  ];
}
