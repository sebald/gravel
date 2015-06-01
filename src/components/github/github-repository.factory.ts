export class GithubRepositoryFactory {
    repositories: Array<Object>
    
    create (owner, name, token) {
        console.log(owner, name, token);
    }
}