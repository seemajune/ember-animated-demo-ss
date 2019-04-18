import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('animated-if');
  this.route('sprites');
  this.route('shapes');
  this.route('detail', {path: '/:shape_id'});
});

export default Router;
