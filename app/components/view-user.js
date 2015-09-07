import Ember from 'ember';

export default Ember.Component.extend({

  didInitAttrs() {
    console.log('didInitAttrs');
  },
  didReceiveAttrs(options) {
    console.log('didReceiveAttrs', options);
  },
  didInsertElement() {
    console.log('didInsertElement');
  },
  willRender() {
    console.log('willRender');
  },
  didRender() {
    console.log('didRender');
  },


  didUpdateAttrs(options) {
    console.log('didUpdateAttrs', options);
  },
  willUpdate(options) {
    console.log('willUpdate', options);
  },
  didUpdate(options) {
    console.log('didUpdate', options);
  },

  tagName: 'tr'
});

