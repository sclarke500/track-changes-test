import Command from '@ckeditor/ckeditor5-core/src/command';
import first from '@ckeditor/ckeditor5-utils/src/first';

export default class InsertHtmlCommand extends Command {

  execute() {

    const editor = this.editor;
    let paragraph = first(editor.model.document.getRoot().getChildren());

    const htmlString = '<p>This is a sample text.</p>';
    const htmlDP = editor.data.processor;
    const viewFragment = htmlDP.toView( htmlString );
    const modelFragment = editor.data.toModel( viewFragment );

    editor.model.insertContent( modelFragment, paragraph, 'before' );

  }


}