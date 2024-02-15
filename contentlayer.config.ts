import { makeSource } from 'contentlayer/source-files';

import { Project } from './content/definitions/project';
import { Roadmap } from './content/definitions/roadmap';
import { Note } from './content/definitions/note';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Roadmap, Note],
  disableImportAliasWarning: true
});
