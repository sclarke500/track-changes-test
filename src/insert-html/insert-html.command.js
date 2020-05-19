import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertClauseCommand extends Command {

  execute() {

    const editor = this.editor;

    const htmlString = '<p>This is a sample text.</p>';
    const htmlDP = editor.data.processor;
    const viewFragment = htmlDP.toView( htmlString );
    const modelFragment = editor.data.toModel( viewFragment );

    editor.model.insertContent( modelFragment );

  }


}