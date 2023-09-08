import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-cached/config/environment';
import { cached } from '@glimmer/tracking';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  @cached
  get foo() {
    return 'hi';
  }
}

loadInitializers(App, config.modulePrefix);
