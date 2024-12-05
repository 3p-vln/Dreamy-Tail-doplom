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

    this.updateTabFromURL();
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

      this.updateURL(tabId);
    }
  }

  private resetActiveStates() {
    this.tabsBtn.forEach((btn) => btn.classList.remove('active'));
    this.tabsItems.forEach((item) => item.classList.remove('active'));
  }

  private updateURL(tabId: string | null) {
    if (tabId) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tabId); // Set the 'tab' query parameter
      history.pushState(null, '', url.toString()); // Update the URL without reloading the page
    }
  }

  private updateTabFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const tabIdFromURL = urlParams.get('tab');

    if (tabIdFromURL) {
      const matchingBtn = Array.from(this.tabsBtn).find((btn) => btn.getAttribute('data-tab') === tabIdFromURL);
      const matchingTab = matchingBtn ? document.querySelector<HTMLElement>(tabIdFromURL) : null;

      if (matchingBtn && matchingTab) {
        this.resetActiveStates();
        matchingBtn.classList.add('active');
        matchingTab.classList.add('active');
      }
    }
  }
}
