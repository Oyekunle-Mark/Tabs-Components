class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"`
    );

    this.tabItem = new TabItem(this.itemElement);
  }

  select() {
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }

  deselect() {
    const links = document.querySelectorAll(".tabs-link");
    Array.from(links).forEach(link => {
      link.classList.remove("tabs-link-selected");
    });
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.deselect();
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => {
      item.classList.remove("tabs-item-selected");
    });
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

class Tabs {
  constructor(tab) {
    this.tab = tab;
    this.tabLink = new TabLink(this.tab);

    this.tab.addEventListener("click", () => {
      this.tabLink.deselect();
      this.tabLink.select();
    });
  }
}

const links = document.querySelectorAll(".tabs-link");
links.forEach(link => {
  new Tabs(link);
});
