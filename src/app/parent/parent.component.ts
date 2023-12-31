import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent {  
 

  text = "";
  showText() {
    this.text = "The MacBook family was initially housed in designs similar to the iBook and PowerBook lines which preceded them, now making use of a unibody aluminum construction first introduced with the MacBook Air. This new construction also has a black plastic keyboard that was first used on the MacBook Air, which itself was inspired by the sunken keyboard of the original polycarbonate MacBooks. The now standardized keyboard brings congruity to the MacBook line, with black keys on a metallic aluminum body.The lids of the MacBook family are held closed by a magnet with no mechanical latch, a design element first introduced with the polycarbonate MacBook.The Memory, drives, and batteries were accessible in the old MacBook lineup, though the newest compact lineup solders or glues all such components in place.All of the current MacBooks feature backlit keyboards.The MacBook was discontinued from February 2012 until March 2015, when a new model featuring an ultraportable design and an all - metal enclosure was introduced.It was again discontinued in July 2019 following a price reduction of the 3rd generation MacBook Air and discontinuation of the 2nd generation model.";
  }
}