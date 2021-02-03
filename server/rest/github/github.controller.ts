import { Controller, Post, Req} from '@nestjs/common';
import { GithubService } from './github.service';
import { Request } from 'express';

@Controller('github')
export class GithubController {
    constructor(private githubService:GithubService) {}

    @Post()
    public async pushed(@Req() req:Request):Promise<boolean> {
        return await this.githubService.autoBuild(req);
    }
}