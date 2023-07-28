import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  notify: service(),
  model() {
    return {
      text: 'Hello, world!',
      closeAfter: 2500,
      html: false
    };
  },

  actions: {
    info: showLevel('info'),
    alert: showLevel('alert'),
    success: showLevel('success'),
    warning: showLevel('warning')
  }
});

function showLevel(level) {
  return function(model) {
    var message = {
      closeAfter: Number(model.closeAfter),
      onClose: function() {
        console.log('onClose happened')
      }
    };
    message[model.html ? 'html' : 'text'] = model.text;
    this.get('notify').show(level, message);
  };
}
