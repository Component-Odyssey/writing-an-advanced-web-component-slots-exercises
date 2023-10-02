import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  return Boolean(document.querySelector('odyssey-frame album-art'))
})

const test2El = document.getElementById('test-2');

test2El.test(() => {
  const slotEl = document.querySelector('odyssey-frame').shadowRoot.querySelector('slot')
  return slotEl.assignedElements()[0].tagName === 'ALBUM-ART'
})