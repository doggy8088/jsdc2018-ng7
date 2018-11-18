import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname = '待辦事項';
  inputhint = '請輸入工作';
  item;
  data = [
    {
      id: 1,
      title: '準備 GDG DevFest Taipei 2018 演講',
      isDone: false
    },
    {
      id: 2,
      title: '準備 JSDC 2018 演講',
      isDone: false
    },
    {
      id: 3,
      title: '準備 Angular Taiwan 2018 演講',
      isDone: true
    }
  ];

  markDone(id: number) {
    this.data = this.data.map(v => {
      if (v.id === id) {
        v = Object.assign({}, v);
        v.isDone = !v.isDone;
      }
      return v;
    });
  }

  removeItem(id: number) {
    this.data = this.data.filter(v => v.id !== id);
  }

  addItem() {
    this.data = [
      ...this.data,
      {
        id: 4,
        title: this.item,
        isDone: false
      }
    ];
    this.item = '';
  }

  get itemsLeft() {
    return this.data.reduce(
      (prev, curr) => (!curr.isDone ? prev + 1 : prev),
      0
    );
  }
}
