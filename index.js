// Select template from the DOM
const SidebarItemTemplate = document.getElementById('sidebar-item-template');

// Define the AppSidebarButton extending HTML 
class AppSidebarButton extends HTMLElement {

       constructor() {
        super();
        //attach a shadow DOM to the custom element
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        //clone the template content and append it to the shadow DOM
        this.shadowRoot.append(SidebarItemTemplate.content.cloneNode(true));
        //set initial value for the attributes
        this.addDataFromAttribute();
        if (this.shadowRoot.querySelector('.unread-count').textContent != 0) {
            this.makeTempleteElementBold();
        }
        
    }

    addDataFromAttribute(){
        this.shadowRoot.querySelector('.text').textContent = this.getAttribute('text');
        this.shadowRoot.querySelector('.unread-count').textContent = this.getAttribute('unreadCount');
    }

    makeTempleteElementBold() {
        this.shadowRoot.querySelector('.text').classList.add('text-bold');
    }

           

}
customElements.define('app-sidebar-button', AppSidebarButton);