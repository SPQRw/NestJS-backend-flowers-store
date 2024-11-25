import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    console.log('micro', message);
  }
}
