# ¿Como centrar un div?

En este post vamos a ver como resolver la peor pesadilla de cualquier desarrollador **centrar un div**

### Forma 1:

De la mano de Flexbox podemos centrar un div con tres lineas de codigo

```
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
```

### Forma 2:

Con ayuda de grid, podemos hacer lo mismo con solo dos lineas

```
    div {
        display: grid;
        place-items: center;
    }
```

### Forma 3:

Utilizando margenes (necesita tener un width)

```
    div {
        max-width: 1024px;
        margin: 0 auto;
    }
```
