import { makeSource } from 'contentlayer/source-files';

import { Project } from './content/definitions/projects';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  disableImportAliasWarning: true
});
