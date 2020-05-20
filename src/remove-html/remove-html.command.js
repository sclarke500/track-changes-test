import Command from '@ckeditor/ckeditor5-core/src/command';
import first from '@ckeditor/ckeditor5-utils/src/first';

export default class RemoveHtmlCommand extends Command {

  execute() {

    const editor = this.editor;
    const model = editor.model;

    let paragraph = first(editor.model.document.getRoot().getChildren());

    if (paragraph) {
      model.change(writer => {
        writer.remove(paragraph);
      });
    }
  
  }

}