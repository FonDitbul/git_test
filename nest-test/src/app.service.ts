import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('test');console.log('test2');
    const abc
     = 55555;
    console.log(abc)
    console.log('testtestetst' +
        'sdddtesfsafsafsatstesfsafaffasafstestest');
    return 'Hello World!';
  }
}
