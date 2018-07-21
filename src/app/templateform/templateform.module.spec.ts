import { TemplateformModule } from './templateform.module';

describe('TemplateformModule', () => {
  let templateformModule: TemplateformModule;

  beforeEach(() => {
    templateformModule = new TemplateformModule();
  });

  it('should create an instance', () => {
    expect(templateformModule).toBeTruthy();
  });
});
