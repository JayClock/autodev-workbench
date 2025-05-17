import { persistentContainer } from '../../../prisma.container';
import { PROVIDER_TYPES } from '../../provide-types';
import { UserProjects } from '@autodev/domain';
import { Factory } from 'inversify';

describe('UserProjectsPrisma', () => {
  const userId = 'userId';
  const prisma = persistentContainer.get(PROVIDER_TYPES.PRISMA);
  const userProjects = persistentContainer.get<Factory<UserProjects>>(PROVIDER_TYPES.USER_PROJECTS)(userId) as UserProjects;

  it('should find project by identity', async () => {
    jest.spyOn(prisma.project, 'findUnique').mockResolvedValue({
      id: 'id',
      name: 'name',
      description: 'description',
      createdAt: new Date(),
      updatedAt: new Date(),
      liveUrl: '',
      gitUrl: 'gitUrl',
      jiraUrl: 'jiraUrl',
      jenkinsUrl: '',
      devOpsInfo: 'devOpsInfo',
      isDefault: false,
      isPublic: false,
      userId: userId
    });
    const project = await userProjects.findByIdentity('id');
    expect(project).toBeDefined();
  });
});