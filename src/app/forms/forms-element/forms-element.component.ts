import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms-element',
  templateUrl: './forms-element.component.html',
  styleUrls: ['./forms-element.component.css']
})
export class FormsElementComponent {
  fname = false;
  name = "";
  title = "";
  ftitle = false;
  title1 = "Add CustomerName and CustomerAddress";
  items: { name: string; title: string }[] = [];
  NameTitleShow() {
    if (this.name && this.title) {
      this.items.push({ name: this.name, title: this.title });
    }
  }
}
