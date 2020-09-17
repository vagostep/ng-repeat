# Ng Repeat

Structural directive to repeat an element N times based of a quantity

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
| index              | element position                                                                                                         |
| onRemoveAt         | hook to trigger when delete and specific element                                                                         |
