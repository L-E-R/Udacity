
let App = (function () {

  const controller = new Controller();

  /**
   * Manually enter cat data, this could be replaced with
   * an input form to gather the data
   */
  
  const cats = [
    {
      name: 'Bob',
      image: 'assets/bob.jpg'
    },
    {
      name: 'Max',
      image: 'assets/max.jpg'
    },
    {
      name: 'Sam',
      image: 'assets/sam.jpg'
    },
    {
      name: 'Sophie',
      image: 'assets/sophie.jpg'
    },
    {
      name: 'Toby',
      image: 'assets/toby.jpg'
    }
  ];

  for(let cat of cats) {
    // new Cat(cat.name, cat.image, listElem, viewElem);
    controller.addCat(cat.name, cat.image);
  }

  controller.updateCatView();

})(this);