(function () {
    const modal = document.querySelector(".cta__overlay");
    const submit = document.querySelector(".cta__subscribe-form__button");
    const okButton = document.querySelector(".cta__modal__message-button");
    const closeButton = document.querySelector(".cta__close-btn");

    function toggleModal() {
        modal.classList.toggle("cta__modal-show");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    submit.addEventListener("click", toggleModal);
    okButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
})();