import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class GithubService {

    async autoBuild():Promise<boolean> {
        try {
            await exec('git pull');
            await exec('npm run build');
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}