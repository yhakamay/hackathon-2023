import { createOptimizedPicture } from '../../scripts/aem.js';
import '@spectrum-web-components/card/sp-card.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const card = document.createElement('sp-card');
    card.setAttribute('heading', 'Card Heading');
    card.setAttribute('subheading', 'JPG Photo');
    while (row.firstElementChild) {
      const child = row.firstElementChild;
      if (child.tagName === 'IMG') {
        child.setAttribute('slot', 'cover-photo');
      } else {
        child.setAttribute('slot', 'footer');
      }
      card.append(child);
    }
    ul.append(card);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
