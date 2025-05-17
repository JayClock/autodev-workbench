import { User, UserProjects, Users } from '@autodev/domain';
import { Many } from 'packages/domain/src/archtype/many';
import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { PROVIDER_TYPES } from '../../provide-types';

@injectable()
export class UsersPrisma implements Users {
  @inject(PROVIDER_TYPES.PRISMA)
  private prisma: PrismaClient;

  @inject(PROVIDER_TYPES.USER_PROJECTS)
  private userProjects: (userId: string) => UserProjects;

  async findByIdentity(id: string): Promise<User> {
    const data = await this.prisma.user.findUnique({ where: { id } });
    return new User(id, { name: data.name, email: data.email }, this.userProjects(id));
  }

  findAll(): Promise<Many> {
    throw new Error('Method not implemented.');
  }
}