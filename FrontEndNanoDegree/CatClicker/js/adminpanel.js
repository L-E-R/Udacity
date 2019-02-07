
class AdminPanel {

  constructor(parentSelector, callbackSaveClick, callbackCancelClick) {
    this.parentElement = document.querySelector(parentSelector);
    this.callbackSaveClick = callbackSaveClick;
    this.callbackCancelClick = callbackCancelClick;
    this.render();
  }

  render() {
    // assemble the individual DOM sections for the Panel
    this.adminContainerElement = this.assembleContainer();
    this.adminHeaderElement = this.assembleHeader();
    this.adminFormElement = this.assembleForm();
    this.adminActionsElement = this.assembleActions();

    this.adminContainerElement.appendChild(this.adminHeaderElement);
    this.adminContainerElement.appendChild(this.adminFormElement);
    this.adminContainerElement.appendChild(this.adminActionsElement);

    this.parentElement.hidden = true;
    this.parentElement.appendChild(this.adminContainerElement);
  }

  assembleContainer() {
    let element = document.createElement('div');
    element.classList.add('modal-content');
    return element;
  }

  assembleHeader() {
    let element = document.createElement('header');
    element.classList.add('modal-header');
    element.innerHTML = `
      <label class="modal-header-title">Admin Panel</label>
      <span class="close">&times;</span>
    `;

    element.querySelector('span.close').addEventListener('click', this.callbackCancelClick.bind(this));

    return element;
  }

  assembleForm() {
    let element = document.createElement('div');
    element.classList.add('admin-form');
    element.innerHTML = `
      <p>
        <label for="name">Name</label>
        <input type="text" name="name" id="name"/>
      </p>
      <p>
          <label for="url">Url</label>
          <input type="text" name="url" id="url"/>
      </p>
      <p>
          <label for="clicks">Clicks</label>
          <input type="text" name="clicks" id="clicks"/>
      </p>
    `;
    return element;
  }

  assembleActions() {
    let element = document.createElement('div');
    element.classList.add('modal-actions');
    element.innerHTML = `
      <button class="cancel-button">Cancel</button>
      <button class="save-button">Save</button>
    `;

    element.querySelector('.cancel-button').addEventListener('click', this.callbackCancelClick.bind(this));
    element.querySelector('.save-button').addEventListener('click', this.handleSave.bind(this));

    return element;
  }
  
  update(item) {
    this.adminFormElement.querySelector('input#name').value = item.name;
    this.adminFormElement.querySelector('input#url').value = item.image;
    this.adminFormElement.querySelector('input#clicks').value = item.count;
  }

  togglePanel(value) {
    this.parentElement.hidden = value;
  }

  handleSave() {
    let data = {};

    data.name = this.adminFormElement.querySelector('input#name').value;
    data.image = this.adminFormElement.querySelector('input#url').value;
    data.count = this.adminFormElement.querySelector('input#clicks').value;

    this.callbackSaveClick(data);
  }
}