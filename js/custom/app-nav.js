class AppNav extends HTMLElement {
	constructor() {
		super();
	}

	sidenav;
	menuBtn;

	connectedCallback() {
		this.innerHTML = this.getAppNavContent(this.attributes.showHome.value);
		this.sidenav = this.querySelector('#mobile-nav');
		this.menuBtn = this.querySelector('#menu-btn');

		this.menuBtn.addEventListener('click', () => this.toggleNav());
	}

	toggleNav() {
		this.sidenav.classList.toggle('open');
		this.menuBtn.classList.toggle('open');
		document.body.classList.toggle('fixed');
	}

	getAppNavContent(showHomeBtn) {
		//language=HTML
		return `
			<!-- ============================================ -->
			<!--                   NAVIGATION                 -->
			<!-- ============================================ -->
			<!-- Nav Strip -->
			<nav id="top-nav" aria-label="main-navigation-desktop">
			</nav>`;
	}
}

customElements.define("app-nav", AppNav)

