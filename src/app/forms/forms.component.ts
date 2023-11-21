import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  fname = false;
  name = "";
  title = "";
  title1 = "Add CustomerName and CustomerAddress";
  ftitle = false;
  items: { Fname: string; Title: string }[] = [];
  NameTitleShow() {
    this.fname = true;
    this.ftitle = true;
    if (this.name && this.title) {
      this.items.push({ Fname: this.name, Title: this.title });
    }
  }
}
