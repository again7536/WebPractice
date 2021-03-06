import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { createHmac, timingSafeEqual } from 'crypto';
import { exec, spawn } from 'child_process';

@Injectable()
export class GithubService {

    private verifyPostData (req:Request) :boolean {
        //const crypto = require('crypto');
        const secret = 'wlrmadms159';
        // GitHub: X-Hub-Signature
        // Gogs:   X-Gogs-Signature
        const sigHeaderName = 'X-Hub-Signature'
        const payload = JSON.stringify(req.body)
        if (!payload) {
          return false;
        }
        
        const sig = req.get(sigHeaderName) || '';
        const hmac = createHmac('sha1', secret);
        const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8');
        const checksum = Buffer.from(sig, 'utf8');
        if (checksum.length !== digest.length || !timingSafeEqual(digest, checksum)) {
          return false;
        }
        return true;
    }

    autoBuild( req:Request ):boolean {   
        if(this.verifyPostData(req) === true) {
            exec('git pull', (error, stdout, stderr) => {
                console.log(stdout);
                console.error(stderr);
                console.log('git pull done');
                exec('npm install', (error, stdout, stderr) => {
                    console.log(stdout);
                    console.error(stderr);
                    console.log('build done');
                    exec('npm run build', (error, stdout, stderr) => {
                        console.log(stdout);
                        console.error(stderr);
                        console.log('build done');
                        const subprocess = spawn('pm2', ['restart', 'blog'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                    });
                });
            });
            return true;
        }
        else {
            return false;
        }
    }
}