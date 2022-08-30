export default function outsideClick(element, events, callback) {
        const outside= 'data-outside'
        const html = document.documentElement;

        function handleOutsideClick(event) {
                if(!element.contains(event.target)) {
                    element.removeAttribute(outside);
                    events.forEach(() => {
                    html.removeEventListener('click', handleOutsideClick);
                    });
                callback();
                }
        }

        if (!element.hasAttribute(outside)) {
                events.forEach(() => {
                        setTimeout(() =>  html.addEventListener('click', handleOutsideClick));
                });
                        element.setAttribute(outside, '');
        }

}