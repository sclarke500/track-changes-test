import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import InsertHtmlCommand from './insert-html.command';

export default class InsertHtmlPlugin extends Plugin {

  init() {
    const editor = this.editor;
    editor.commands.add('insertHtml', new InsertHtmlCommand(editor));
  }

}
