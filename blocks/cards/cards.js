export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const strongElements = row.querySelectorAll('strong');
    const heading = strongElements[0].textContent;

    const imgElement = row.querySelector('img');
    const imageSrc = imgElement.src;
    const altText = imgElement.alt;

    const card = document.createElement('sp-card');
    card.setAttribute('heading', heading);

    const img = document.createElement('img');
    img.setAttribute('slot', 'cover-photo');
    img.setAttribute('src', imageSrc);
    img.setAttribute('alt', altText);
    card.appendChild(img);

    const subheading = document.createElement('span');
    subheading.setAttribute('slot', 'subheading');
    subheading.textContent = 'Your subheading here';
    card.appendChild(subheading);

    const footer = document.createElement('div');
    footer.setAttribute('slot', 'footer');
    footer.textContent = 'Your footer content here';
    card.appendChild(footer);

    ul.appendChild(card);
  });

  block.textContent = '';
  block.append(ul);
}
