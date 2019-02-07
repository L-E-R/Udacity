
class DetailView {

  constructor(parentSelector, callbackHandleClick, callbackAdminClick) {
    this.parentElement = document.querySelector(parentSelector);
    this.callbackHandleClick = callbackHandleClick;
    this.callbackAdminClick = callbackAdminClick;
    this.render();
  }

  render() {

    // assemble the individual DOM sections for the View
    this.detailContainerElement = this.assembleContainer();
    this.detailHeaderElement = this.assembleHeader();
    this.detailContentElement = this.assembleView();

    // append the header and view to the container element
    this.detailContainerElement.appendChild(this.detailHeaderElement);
    this.detailContainerElement.appendChild(this.detailContentElement);

    // append the container element to the given parent element
    this.parentElement.appendChild(this.detailContainerElement);
  }

  assembleContainer() {
    let element = document.createElement('article');
    element.classList.add('view-container');
    return element;
  }

  assembleHeader() {
    let element = document.createElement('header');
    element.classList.add('detail-header');
    element.innerHTML = `
      <span class="name"></span>
      <i class="far fa-edit"></i>
    `;
    element.querySelector('i.fa-edit').addEventListener('click', this.handleAdminIconClick.bind(this));
    return element;
  }

  assembleView() {
    let element = document.createElement('section');
    element.classList.add('section-container');
    return element;
  }


  update(item) {
    this.clearDetails();
    this.renderDetailView(item);
  }

  renderDetailView(item) {
    this.detailHeaderElement.querySelector('span.name').innerText = item.name;

    let element = document.createElement('div');
    element.classList.add('overlay-image');

    element.innerHTML = `
      <img class="detail-graphic" src="${item.image}" alt="image of ${item.name} the cat"/>
      <div class="click-count">${item.count}</div>
    `;

    element.querySelector('.detail-graphic').addEventListener('click', this.handleDetailClick.bind(this));
    this.detailContentElement.appendChild(element);
  }

  clearDetails() {
    this.detailContentElement.innerHTML = '';
  }

  handleDetailClick() {
    this.callbackHandleClick();
  }

  handleAdminIconClick() {
    this.callbackAdminClick();
  }
}