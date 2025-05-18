import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async withTrace(): Promise<string | void> {
    return await this.withTrace1().catch(console.error)
  }

  async withTrace1(): Promise<string> {
    return await this.withTrace2()
  }

  async withTrace2(): Promise<string> {
		 await Promise.resolve(setTimeout)
		 throw Error("some problem")
		 return "123"
  }

  async withoutTrace(): Promise<string | void> {
    return this.withTrace2().catch(console.error)
  }

  async withoutTrace1(): Promise<string> {
    return this.withTrace2() // without await
  }

  async withoutTrace2(): Promise<string> {
		 await Promise.resolve(setTimeout)
		 throw Error("some problem")
		 return "123"
  }
}
