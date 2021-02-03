import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { promisify } from 'util';
import crypto from 'crypto';

@Injectable()
export class GithubService {

    private verifyPostData (req:Request) :boolean {
        const secret = 'wlrmadms159';
        // GitHub: X-Hub-Signature
        // Gogs:   X-Gogs-Signature
        const sigHeaderName = 'X-Hub-Signature'
        const payload = JSON.stringify(req.body)
        if (!payload) {
          return false;
        }
        
        const sig = req.get(sigHeaderName) || ''
        const hmac = crypto.createHmac('sha1', secret)
        const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8')
        const checksum = Buffer.from(sig, 'utf8')
        if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
          return false;
        }
        return true;
    }

    async autoBuild( req:Request ):Promise<boolean> {
        const exec = promisify(require('child_process').exec);
        
        if(this.verifyPostData(req) === true) {
            try{
                const {stdout, stderr} = await exec('git pull && npm run build && npm start');
                console.log(stdout);
                console.error(stderr);
                return true;
            } catch (err) {
                console.error(err);
                return false;
            }
        }
        else {
            return false;
        }
    }
}