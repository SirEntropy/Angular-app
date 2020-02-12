import {Directive, Input,TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appSearch]'
})
export class SearchDirective{
  @Input() set appSearch(condition: boolean) {
    this.container.detach();
    if (!condition) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
  ) { }




}
