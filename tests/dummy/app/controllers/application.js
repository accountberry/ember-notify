import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onClose() {
      console.log('onClose Happened')
    }
  }
})