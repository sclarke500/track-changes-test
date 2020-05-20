import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';

import InsertHtmlPlugin from './insert-html/inert-html.plugin';
import RemoveHtmlPlugin from './remove-html/remove-html.plugin';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [ Essentials, Paragraph, TrackChanges, InsertHtmlPlugin, RemoveHtmlPlugin ];

// The editor configuration.
ClassicEditor.defaultConfig = {
    language: 'en'
};