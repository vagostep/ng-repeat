import { Directive, OnChanges, TemplateRef, ViewContainerRef, Input, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[ngRepeat]'
})
export class NgRepeatDirective implements OnChanges {

  private quantity: number;
  @Input()
  public set ngRepeat(value: number) {
    this.quantity = value;
  }

  // tslint:disable-next-line: no-any
  public constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  public ngOnChanges() {
    const length = this.viewContainer.length;

    for (let x = length; x < this.quantity; x++) {

      this.viewContainer.createEmbeddedView(this.templateRef, { index: x, onRemoveAt: this.onRemoveAt(this.viewContainer) }, x);
    }
  }

  /**
   * Función que se expone para actuar ante algún evento y permite eliminar un elemento creado
   *
   * @param viewContainer Referencia del contenedor
   */
  private onRemoveAt(viewContainer: ViewContainerRef) {

    return (index) => {

      viewContainer.remove(index);

      for (let x = 0; x < viewContainer.length; x++) {
        // tslint:disable-next-line: no-any
        const view = viewContainer.get(x) as EmbeddedViewRef<any>;

        viewContainer.move(view, x);
        view.context.index = x;
      }
    };
  }

}
