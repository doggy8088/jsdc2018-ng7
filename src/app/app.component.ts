import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get itemsLeft(): number {
    return this.data.reduce(
      (prev, curr) => (!curr.isDone ? prev + 1 : prev),
      0
    );
  }

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
  filterType = '';

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

  checkAll() {
    this.data = this.data.map(v => {
      v = Object.assign({}, v);
      v.isDone = this.itemsLeft === 0 ? false : true;
      return v;
    });
  }

  clearCompleted() {
    this.data = this.data.filter(v => !v.isDone);
  }

  setEditMode(id: number) {
    this.data = this.data.map((v: any) => {
      if (v.id === id) {
        v = Object.assign({}, v);
        v.editing = true;
      }
      return v;
    });
  }

  editItem(id: number, item: string) {
    this.data = this.data.map((v: any) => {
      if (v.id === id) {
        v = Object.assign({}, v);
        v.title = item;
        delete v.editing;
      }
      return v;
    });
  }

  cancelEdit(id: number) {
    this.data = this.data.map((v: any) => {
      if (v.id === id) {
        v = Object.assign({}, v);
        delete v.editing;
      }
      return v;
    });
  }
}
