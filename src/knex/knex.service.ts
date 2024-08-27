import { Injectable } from '@nestjs/common';
import * as Knex  from 'knex';
import knexConfig from '../../knexfile';

@Injectable()
export class KnexService {
  private knexInstance: Knex.Knex;

  constructor() {
    this.knexInstance = Knex(knexConfig);
  }

  getKnex(): Knex.Knex {
    return this.knexInstance;
  }
}
