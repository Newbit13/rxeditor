import {RXEditor} from "../core/rxeditor"
import {RXEditorCommandProxy} from "../core/rxeditor-command-proxy"
//import loadElements from "../elements/load-elements"

export default function initEditor(pageId){
  //注意,此window是iframe里的window
  window.rxEditor = new RXEditor(pageId)
  window.RXEditorCommandProxy = RXEditorCommandProxy

}