import { Container, Factory } from 'inversify';
import { PROVIDER_TYPES } from './lib/provide-types';
import { UserProjectsPrisma, UsersPrisma } from './lib/prisma/associations';
import { prisma } from './lib/prisma/prisma';
import { UserProjects } from '@autodev/domain';

const persistentContainer = new Container();

persistentContainer.bind(PROVIDER_TYPES.PRISMA).toConstantValue(prisma);
persistentContainer.bind(PROVIDER_TYPES.USERS).to(UsersPrisma);
persistentContainer.bind<Factory<UserProjects>>(PROVIDER_TYPES.USER_PROJECTS).toDynamicValue(() => {
  return (userId: string) => {
    return new UserProjectsPrisma(userId, prisma);
  };
});
export { persistentContainer };