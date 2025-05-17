import { Entity } from '../../archtype/entity';
import { UserDescription } from '../description/user.description';
import { HasMany } from '../../archtype/has-many';
import { Project } from './project';

export class User implements Entity<string, UserDescription> {
  constructor(
    private readonly identity: string,
    private readonly description: UserDescription,
    private readonly userProjects: UserProjects
  ) {
  }

  getIdentity(): string {
    return this.identity;
  }

  getDescription(): UserDescription {
    return this.description;
  }

  getProjects() {
    return this.userProjects;
  }
}

export type Users = HasMany<string, User>;


export type UserProjects = HasMany<string, Project>