const modalDiv = (seconds) => `
    <div class="form-cover">
      <p>
        Thanks for your click
      </p>
      <p>
        Our operator will call to you
      </p>
      <p>
        This block will be removed after ${seconds} seconds
      </p>
    </div>`;

function styleModalWindow(element, submitEvent) {
  element.style.width = `${submitEvent.target.clientWidth}px`;
  element.style.height = `0px`;
  element.style.height = `${submitEvent.target.clientHeight}px`;
  element.style.position = `absolute`;
  element.style.left = `0px`;
  element.style.top = `0px`;
  element.style.backgroundColor = '#eee';
  element.style.opacity = '0.9';
  element.style.color = '#000';
  element.style.fontSize = '24px';
  element.style.textAlign = 'center';
}

function setEventListener(element) {
  element.addEventListener('submit', (event) => {
    event.preventDefault();

    if (document.querySelector('.form-cover')) {
      document.querySelector('.form-cover').remove();
    }

    element.insertAdjacentHTML(
      'afterbegin',
      modalDiv(3)
    );

    const modal = document.querySelector('.form-cover');
    let secondsToclose = 2;

    styleModalWindow(modal, event);

    const interval = setInterval(() => {
      if (secondsToclose < 1) {
        clearInterval(interval);
        modal.remove();
      }

      modal.innerHTML = modalDiv(secondsToclose);
      secondsToclose--;
    }, 1000);
  });
}

export { styleModalWindow, modalDiv, setEventListener };
