import { persistentContainer } from '../../../prisma.container';
import { PROVIDER_TYPES } from '../../provide-types';
import { User } from '@autodev/domain';


describe('UsersPrisma', () => {
  const users = persistentContainer.get(PROVIDER_TYPES.USERS);
  const prisma = persistentContainer.get(PROVIDER_TYPES.PRISMA);

  it('should find user by identity', async () => {
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue({
      id: '1',
      name: 'name',
      email: 'email',
      emailVerified: new Date(),
      image: 'image',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    const user = await users.findByIdentity('1');
    expect(user).toBeInstanceOf(User);
  });
});