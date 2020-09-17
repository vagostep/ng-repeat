# Ng Repeat

Directiva estructural que repite un elemento de acuerdo una cantidad explícitamente indicada

### uso simple

```html
<ng-container *ngRepeat="5, let i = index">
  <div>element N° {{i}}</div>
</ng-container>
```

### uso con remover
```html
<ng-container *ngRepeat="quantity, let i = index; let onRemove = onRemoveAt">
  <div>element N° {{i}}</div>
  <button (click)="onRemove(i); quantity -= 1">Delete</button>
</ng-container>
```

## API References

### ngRepeat

| Nombre             | Descripción                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| index              | Posición del elemento                                                                                                    |
| onRemoveAt         | hook que se invoca para eliminar una posición específica                                                                 |
