
class Cat {

  constructor(name, image, listElem, viewElem) {
    this.name = name;
    this.image = image;
    this.listElem = listElem;
    this.viewElem = viewElem;

    this.count = 0;

    this.render();
  }

  render() {
    this.createList();
    this.createView();
  }

  createList() {
    this.catListElement = document.createElement('li');

    this.catListElement.innerHTML = `
      <span class="list-item">${this.name}</span>
    `;
    this.catListElement.addEventListener('click', this.handleListItemClick.bind(this));

    this.listElem.appendChild(this.catListElement);
  }

  createView() {
    this.catElement = document.createElement('ARTICLE');
    this.catElement.setAttribute('id', this.name);
    this.catElement.classList.add('cat_article');

    this.catElement.innerHTML = `
      <div class="cat-container">
        <label class="cat-name">${this.name}</label>
        <div class="overlay-image">
          <img class="cat-graphic" src="${this.image}" alt="image of ${this.name} the cat"/>
          <div class="click-count">${this.count}</div>
        </div>
      </div>
    `;

    this.catElement.querySelector('.cat-graphic').addEventListener('click', this.handleCatClick.bind(this));

    this.viewElem.appendChild(this.catElement);
  }

  handleListItemClick() {
    let selectedElem = document.querySelector('.selected');
    if (selectedElem) {
      selectedElem.classList.remove('selected');
    }

    this.catElement.classList.add('selected');
  }

  handleCatClick() {
    this.count++;
    this.updateCount();
  }

  updateCount() {
    this.catElement.querySelector('.click-count').innerText = this.count;
  }

}