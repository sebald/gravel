/// <reference path="../../typings/angular2/angular2" />

import {bootstrap, Component, View} from "angular2/angular2";
import {GithubService} from "components/github/github.service";

@Component({
	selector: 'gravel-app',
	injectables: [GithubService]
})
@View({
	template: `Hello there!!!1`
})
class GravelApp {
	constructor(public api:GithubService) {
		console.log(api);
	}
}

bootstrap(GravelApp)