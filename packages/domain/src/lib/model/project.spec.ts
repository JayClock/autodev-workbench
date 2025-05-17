import { Project } from './project';
import { ProjectDescription } from '../description/project.description';

describe('Project', () => {
  let project: Project;
  let projectDescription: ProjectDescription;

  beforeEach(() => {
    projectDescription = { name: 'project#1' };
    project = new Project('#1', projectDescription);
  });

  it('should get correct identity', () => {
    expect(project.getIdentity()).toEqual('#1');
  });

  it('should get correct description', () => {
    expect(project.getDescription()).toEqual(projectDescription);
  });
});