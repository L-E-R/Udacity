
class Controller {

  constructor() {
    this.model = new Model();
    this.init();
  }

  init() {
    this.listview = new ListView('#app', this.updateSelectedItem.bind(this));
    this.detailview = new DetailView('#app', this.updateClickCount.bind(this), this.displayAdminPanel.bind(this));
    this.adminPanel = new AdminPanel('#admin', this.updateInformation.bind(this), this.displayAdminPanel.bind(this));
  }

  /*
   * Model Functions
   */

  addCat(name, image) {
    this.model.add(name, image);
    this.updateCatList();
  }

  setCurentCat(index) {
    this.model.current(index);
    this.updateCatView();
  }


  /*
   * View Functions
   */

  updateCatList() {
    this.listview.update(this.model.list);
  }

  updateCatView() {
    this.detailview.update(this.model.current);
    this.adminPanel.update(this.model.current);
  }

  updateSelectedItem(index) {
    this.model.current = index;
    this.updateCatView();
  }

  updateClickCount() {
    this.model.count++;
    this.updateCatView();
  }

  /*
   * Admin Modal Functions
   */

  displayAdminPanel() {
    this.model.showAdmin = !this.model.showAdmin;
    this.adminPanel.togglePanel(!this.model.showAdmin);
  }

   updateInformation(data) {
    this.displayAdminPanel();
    this.model.update = data;

    this.updateCatList();
    this.updateCatView();

   }

}