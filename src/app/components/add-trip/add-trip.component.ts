import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  fileToUpload: File | null = null;

  constructor() { }

  ngOnInit(): void {  
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
