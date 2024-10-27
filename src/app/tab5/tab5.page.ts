import { Component } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {
  inputText: string = '';

  constructor() {}
  
  public async writeSecretFile(text: string) {
    try {
      console.log('Texto a guardar:', text);
      await Filesystem.writeFile({
        path: 'text.txt', // Usa solo el nombre del archivo
        data: text,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      console.log('Archivo guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
    }
  }
}