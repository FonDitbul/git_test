import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('test');
    console.log('test2');
		console.log('PR 날리고싶어요');
    const abc = 55555
    console.log(abc)
    console.log('te' +
			'sadss' +
			'ddsadsttes' +
			'tetst' + 'sdd' +
			'dte' +
			'sfsafsafsa' +
			'tstesfsafaffas' +
			'afstestes' +
			't');
    return 'Hello World!';
  }
}
