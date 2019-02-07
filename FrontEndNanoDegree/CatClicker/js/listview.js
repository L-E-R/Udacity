
class ListView {

  constructor(parentSelector, callbackItemSelected) {
    this.parentElement = document.querySelector(parentSelector);
    this.callbackItemSelected = callbackItemSelected;
    this.render();
  }

  render() {

    // assemble the individual DOM sections for the List
    this.listContainerElement = this.assembleContainer();
    this.listContainerHeaderElement = this.assembleHeader();
    this.listElement = this.assembleList();

    // append the header and list to the container element
    this.listContainerElement.appendChild(this.listContainerHeaderElement);
    this.listContainerElement.appendChild(this.listElement);

    // append the container element to the given parent element
    this.parentElement.appendChild(this.listContainerElement);
  }

  assembleContainer() {
    let element = document.createElement('section');
    element.classList.add('list-container');
    return element;
  }

  assembleHeader() {
    let element = document.createElement('header');
    element.classList.add('list-container-header');
    element.innerText = 'Cats';
    return element;
  }

  assembleList() {
    let element = document.createElement('ul');
    element.classList.add('cat-list');
    return element;
  }


  update(items) {
    this.clearListItems();
    this.renderListItems(items);
  }

  renderListItems(items) {
    for(let item of items) {
      let element = document.createElement('li');

      element.innerHTML = `
        <span class="list-item">${item.name}</span>
      `;

      element.addEventListener('click', this.handleListItemClick.bind(this, item.id));
      this.listElement.appendChild(element);
    }
  }

  clearListItems() {
    this.listElement.innerHTML = '';
  }


  handleListItemClick(index) {
    this.callbackItemSelected(index);
  }
}