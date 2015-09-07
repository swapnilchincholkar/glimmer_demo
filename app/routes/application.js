import Ember from 'ember';
import getData from '../lib/get-data';

export default Ember.Route.extend({
  model: function() {
    return {
      users: {}
    };
  },

  afterModel: function() {
    this.loadData();
  },

  loadData: function() {
    var model = this.modelFor('application');
    var newData = getData();
    var users = [];

    Object.keys(newData.users).forEach((uname) => {
      var usrInfo = newData.users[uname];
      if (!model.users[uname]) {
        model.users[uname] = {
          name: uname,
          marks: []
        };
      }
      // marks as array
      var marks = usrInfo.marks;
      model.users[uname].marks.push(marks);
      model.users[uname].marks = Array.prototype.concat.apply([], model.users[uname].marks);
      users.push(model.users[uname]);
    });
    Ember.set(model, 'users', users);
    //loop over the data
    requestAnimationFrame(Ember.run.bind(this, this.loadData));
  }
});
