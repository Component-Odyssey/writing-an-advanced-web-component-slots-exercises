import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  const template = document.getElementById('album-art-template');
  
  const hasAlbumNameSlot = Boolean(template.content.querySelector('slot[name="title"]'))
  const hasAlbumNameContent = Boolean(document.querySelector('[slot="title"]'))
  
  return hasAlbumNameSlot && hasAlbumNameContent
})

const test2El = document.getElementById('test-2');

test2El.test(() => {
  const template = document.getElementById('album-art-template');
  const hasArtistNameSlot = template.content.querySelector('slot[name="subtitle"]');
  const hasArtistNameContent = Boolean(document.querySelector('[slot="subtitle"]'))

  return hasArtistNameSlot && hasArtistNameContent
})