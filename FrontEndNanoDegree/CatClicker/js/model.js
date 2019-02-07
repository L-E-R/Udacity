
class Model {

  constructor() {

    this._store = {
      'cats': [],
      'current': 0,
      'admin': {
        'visible': false
      }
    }
  }

  add (name, image) {
    let cat = {
      'name': name,
      'image': image,
      'count': 0
    }
    this._store.cats.push(cat);
  }

  get model() {
    return this._store;
  }

  get list() {
    return this._store.cats.map( (cat, index) => {
      return {id: index, name: cat.name}
    });
  }

  set current(index) {
    this._store.current = index;
  }

  get current() {
    return this._store.cats[this._store.current];
  }

  set update(data) {
    this._store.cats[this._store.current].name = data.name;
    this._store.cats[this._store.current].image = data.image;
    this._store.cats[this._store.current].count = data.count;
  }

  set count(value) {
    this._store.cats[this._store.current].count = value;
  }

  get count() {
    return this._store.cats[this._store.current].count;
  }

  set showAdmin(doShow) {
    this._store.admin.visible = doShow;
  }
  get showAdmin() {
    return this._store.admin.visible;
  }

}