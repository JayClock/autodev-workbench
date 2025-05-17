import { Entity } from '../../archtype/entity';
import { ProjectDescription } from '../description/project.description';

export class Project implements Entity<string, ProjectDescription> {
  constructor(
    private readonly identity: string,
    private readonly description: ProjectDescription
  ) {
  }

  getIdentity(): string {
    return this.identity;
  }

  getDescription(): ProjectDescription {
    return this.description;
  }
}