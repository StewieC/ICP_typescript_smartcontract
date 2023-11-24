import { Actor, HttpAgent } from '@dfinity/agent';
import { ICP } from '@dfinity/icp-types';

export class DrandOracle {
  private actor: Actor;

  constructor(actor: Actor) {
    this.actor = actor;
  }

  async getRandomNumber(length: number): Promise<number> {
    const response = await this.actor.call({ method: 'get_random_number', args: [length] });
    return response.value;
  }
}
