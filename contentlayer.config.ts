import { makeSource } from 'contentlayer/source-files';

import { Project } from './content/definitions/project';
import { Roadmap } from './content/definitions/roadmap';
// import { Course } from './content/definitions/course';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Roadmap],
  disableImportAliasWarning: true
});
