import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  const template = document.getElementById('album-art-template');
  const hasAlbumNameSlot = Boolean(template.querySelector('slot[name="album-name"]'))
  return hasAlbumNameSlot
})

const test2El = document.getElementById('test-2');

test2El.test(() => {
  const template = document.getElementById('album-art-template');
  const hasArtistNameSlot = template.querySelector('slot[name="artist-name"]');
  return hasArtistNameSlot
})