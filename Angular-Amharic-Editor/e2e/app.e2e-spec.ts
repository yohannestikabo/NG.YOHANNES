import { AngularAmharicEditorPage } from './app.po';

describe('angular-amharic-editor App', () => {
  let page: AngularAmharicEditorPage;

  beforeEach(() => {
    page = new AngularAmharicEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
