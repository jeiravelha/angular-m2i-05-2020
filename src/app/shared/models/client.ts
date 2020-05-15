import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  'id': number;
  'name': string;
  'ca':number;
  'state' = StateClient.ACTIVE;

  constructor(obj?: Partial<Client>)
  {
    if(obj) {
      Object.assign(this, obj);
    }
  }
}
