const share = document.querySelectorAll (".article-section_text_contact_button");

share.forEach((share) =>
    share.addEventListener ('click', () => {
    let sectionNewShare = document.querySelector (".article-section_text_share-buttons")
        sectionNewShare.classList.toggle ('active');
})
)

