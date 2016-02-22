import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('rules', {path: '/rules'}, function () {
    this.route('new');
    this.route('edit', {path: '/:rule_id'});
  });
});

export default Router;
