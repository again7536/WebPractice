import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class GithubService {

    async autoBuild():Promise<boolean> {
        try {
            exec('git pull && npm run build', ()=>console.log('builded'));
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}