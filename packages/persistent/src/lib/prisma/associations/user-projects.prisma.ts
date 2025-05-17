import { Project, UserProjects } from '@autodev/domain';
import { PrismaClient } from '@prisma/client';
import { Many } from 'packages/domain/src/archtype/many';

export class UserProjectsPrisma implements UserProjects {
  constructor(
    private readonly userId: string,
    private readonly prisma: PrismaClient
  ) {
  }

  async findByIdentity(id: string): Promise<Project> {
    const data = await this.prisma.project.findUnique({ where: { userId: this.userId, id } });
    return new Project(id, { name: data.name });
  }

  findAll(): Promise<Many> {
    throw new Error('Method not implemented.');
  }
}