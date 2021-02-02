import { Controller, Post} from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService:GithubService) {}

    @Post()
    public async pushed():Promise<boolean> {
        return await this.githubService.autoBuild();
    }
}