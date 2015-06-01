/// <reference path="../../typings/angular2/angular2" />

import GRAVEL_CONFIG from './gravel.config';
import {bootstrap, Component, View} from "angular2/angular2";
import {GithubRepositoryFactory} from "components/github/github-repository.factory";

@Component({
	selector: 'gravel-app',
	injectables: [GithubRepositoryFactory]
})
@View({
	template: `Hello there!!!`
})
class GravelApp {
    repo: GithubRepositoryFactory
    
	constructor(repo:GithubRepositoryFactory) {
        let token = GRAVEL_CONFIG.token;
	}
}

bootstrap(GravelApp)