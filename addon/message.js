import EmberObject from '@ember/object';

const EMPTY_ARRAY = [];

export default EmberObject.extend({
  text: null,
  html: '',
  type: 'info',
  closeAfter: undefined,
  visible: undefined,
  onClose: undefined,
  classNames: EMPTY_ARRAY
});
