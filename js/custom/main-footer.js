class MainFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = mainFooterContent;
	}
}

customElements.define("main-footer", MainFooter)

//language=HTML
const mainFooterContent = `
	<!-- ============================================ -->
	<!--                     FOOTER                   -->
	<!-- ============================================ -->
	<footer id="footer">
		<div id="footer-content">
		</div>
	</footer>
`;


