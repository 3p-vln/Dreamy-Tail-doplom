export class Tab {
  private tabsBtn: NodeListOf<HTMLElement>;
  private tabsItems: NodeListOf<HTMLElement>;

  constructor(tabsBtnSelector: string, tabsItemsSelector: string) {
    this.tabsBtn = document.querySelectorAll(tabsBtnSelector);
    this.tabsItems = document.querySelectorAll(tabsItemsSelector);

    this.init();
  }

  private init() {
    this.tabsBtn.forEach((btn) => {
      btn.addEventListener('click', () => this.onTabClick(btn));
    });

    const firstTab = this.tabsBtn[0];
    if (firstTab) {
      firstTab.click();
    }
  }

  private onTabClick(currentBtn: HTMLElement) {
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = tabId ? document.querySelector<HTMLElement>(tabId) : null;

    if (!currentTab) {
      console.error(`Tab with ID "${tabId}" not found.`);
      return;
    }

    if (!currentBtn.classList.contains('active')) {
      this.resetActiveStates();
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  }

  private resetActiveStates() {
    this.tabsBtn.forEach((btn) => btn.classList.remove('active'));
    this.tabsItems.forEach((item) => item.classList.remove('active'));
  }
}
