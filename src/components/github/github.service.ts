/// <reference path="../../../typings/whatwg-fetch/whatwg-fetch.d.ts" />

import GITHUB_CONFIG from 'github.config';

export class GithubService {
	loading: boolean;
	
	constructor() {
		this.loading = false;
	}
	
	getMilestone () {
		// window.fetch
	}
}