import { Controller, Post} from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('/github')
export class GithubController {
    constructor(private githubService:GithubService) {}

    @Post('/')
    public pushed() {
        this.githubService.autoBuild();
    }
}