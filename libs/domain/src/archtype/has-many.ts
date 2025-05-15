import {Entity} from "./entity";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface HasMany<ID, E extends Entity<ID, any>> {
    findByIdentity(id: ID): Promise<E | null>
}