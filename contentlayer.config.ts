import { makeSource, defineDocumentType } from '@contentlayer/source-files';

import { Mastery } from './content/definitions/Mastery';

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Mastery],
    disableImportAliasWarning: true,
})
