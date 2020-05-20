import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import RemoveHtmlCommand from './remove-html.command';

export default class RemoveHtmlPlugin extends Plugin {

  init() {
    const editor = this.editor;
    editor.commands.add('removeHtml', new RemoveHtmlCommand(editor));
  }

}
