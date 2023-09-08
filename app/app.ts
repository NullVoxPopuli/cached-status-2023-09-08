import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-cached/config/environment';
import { tracked, cached } from '@glimmer/tracking';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  @tracked foo2 = 2;

  @cached
  get foo() {
    return 'hi';
  }
}

loadInitializers(App, config.modulePrefix);
