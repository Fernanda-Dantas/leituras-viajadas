export default function initTooltip() {

        const tooltips = document.querySelectorAll('[data-tooltip]');

        function criarTooltipBox(element) {
            const tooltipBox = document.createElement('div');
            const texto = element.getAttribute('aria-label');
            tooltipBox.classList.add('tooltip');
            tooltipBox.innerText = texto;
            document.body.appendChild(tooltipBox);
            return tooltipBox;  
        }

        const onMouseMove = {
            handleEvent(event) {
                this.tooltipBox.style.top = `${event.pageY + 20}px`;
                this.tooltipBox.style.left = `${event.pageX + 20}px`;
            },
        }

        const onMouseLeave = {
            tooltipBox: '',
            handleEvent() {
                this.tooltipBox.remove();
            },
        }

        function onMouseOver() {
            const tooltipBox = criarTooltipBox(this);
    
            onMouseMove.tooltipBox = tooltipBox;
            this.addEventListener('mousemove', onMouseMove);
    
            onMouseLeave.tooltipBox = tooltipBox;
            this.addEventListener('mouseleave', onMouseLeave);
        }

        tooltips.forEach((item) => {
         item.addEventListener('mouseover', onMouseOver);

        });

}

