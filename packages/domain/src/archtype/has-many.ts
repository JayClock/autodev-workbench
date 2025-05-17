import { Entity } from './entity';
import { Many } from './many';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface HasMany<ID, E extends Entity<ID, any>> {
  findByIdentity(id: ID): Promise<E | null>;

  findAll(): Promise<Many>;
}