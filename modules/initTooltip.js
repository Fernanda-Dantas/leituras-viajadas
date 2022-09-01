export default class Tooltip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        // bind do objeto da classe aos callbacks
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }
        
        // cria a tooltip box e coloca no body
        criarTooltipBox(element) {
            const tooltipBox = document.createElement('div');
            const texto = element.getAttribute('aria-label');
            tooltipBox.classList.add('tooltip');
            tooltipBox.innerText = texto;
            document.body.appendChild(tooltipBox);
            this.tooltipBox = tooltipBox;  
        }

        // move a tooltip com base em seus estilos 
        // de acordo com a posição do mouse
        onMouseMove(event) {
            this.tooltipBox.style.top = `${event.pageY + 20}px`;
            if(event.pageX + 240 > window.innerWidth) {
                this.tooltipBox.style.left = `${event.pageX - 190}px`;
            } else {
                this.tooltipBox.style.left = `${event.pageX + 20}px`;
            }
        }

        // remove a tooltip e os dois eventos 
        onMouseLeave({currentTarget}) {
            this.tooltipBox.remove();
            currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
            currentTarget.removeEventListener('mousemove', this.onMouseMove);
        }

        // cria a tooltip e adiciona os dois eventos ao target
        // currenttarget foi desestruturado pois 
        // é o único método do evento que está sendo usando
        onMouseOver({currentTarget}) {
            // cria a tooltip box e a colocar em uma propriedade
            this.criarTooltipBox(currentTarget);
    
            currentTarget.addEventListener('mousemove', this.onMouseMove);
            currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        }

        addTooltipsEvent() {
            this.tooltips.forEach((item) => {
                item.addEventListener('mouseover', this.onMouseOver);
       
            });
        }

        init() {
            if(this.tooltips.length) {
                this.addTooltipsEvent();
            }
            return this;
        }
}

