import { UserProjects, Users } from '@autodev/domain';
import { PrismaClient } from '@prisma/client';
import { ServiceIdentifier } from 'inversify';

interface ProviderTypes {
  PRISMA: ServiceIdentifier<PrismaClient>;
  USERS: ServiceIdentifier<Users>;
  USER_PROJECTS: ServiceIdentifier<UserProjects>;
}

export const PROVIDER_TYPES: ProviderTypes = {
  PRISMA: Symbol('Prisma'),
  USERS: Symbol('Users'),
  USER_PROJECTS: Symbol('UserProjects')
};