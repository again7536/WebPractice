import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class GithubService {

    async autoBuild():Promise<boolean> {
        try {
            exec('cd /home/blog && git pull && npm run build');
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}