import { User, UserProjects } from './user';
import { UserDescription } from '../description/user.description';

describe('User', () => {
  let user: User;
  let mockUserDescription: UserDescription;
  let mockUserProjects: UserProjects;

  beforeEach(() => {
    mockUserDescription = {
      name: 'name#1',
      email: 'email#1'
    };
    mockUserProjects = {
      findAll: jest.fn(),
      findByIdentity: jest.fn()
    };
    user = new User('#1', mockUserDescription, mockUserProjects);
  });

  it('should get correct identity', () => {
    expect(user.getIdentity()).toEqual('#1');
  });

  it('should get correct description', () => {
    expect(user.getDescription()).toEqual(mockUserDescription);
  });

  it('should get correct projects', () => {
    expect(user.getProjects()).toEqual(mockUserProjects);
  });
});