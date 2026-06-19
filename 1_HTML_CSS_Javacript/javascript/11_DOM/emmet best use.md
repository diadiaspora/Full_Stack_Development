[emmit cheat sheet](https://docs.emmet.io/cheat-sheet/)

# Emmet Best Use Cheat Sheat

| Emmet              | Expands To                         |
| ------------------ | ---------------------------------- |
| `!`                | Complete HTML boilerplate          |
| `div`              | `<div></div>`                      |
| `p`                | `<p></p>`                          |
| `h1`               | `<h1></h1>`                        |
| `ul>li*5`          | `<ul>` with 5 list items           |
| `nav>ul>li*3>a`    | Navigation menu structure          |
| `div.container`    | `<div class="container"></div>`    |
| `div#header`       | `<div id="header"></div>`          |
| `.container`       | `<div class="container"></div>`    |
| `#header`          | `<div id="header"></div>`          |
| `a:link`           | `<a href=""></a>`                  |
| `img`              | Image tag with common attributes   |
| `form>label+input` | Basic form field                   |
| `section>h2+p`     | Section with heading and paragraph |
___
### `Child: >`
---

`nav>ul>li`

```hlml
  <nav>
        <ul>
            <li></li>
        </ul>
    </nav>
```

### `Sibling: +`
---

`div+p+bq`

```hlml
<div></div>
<p></p>
<blockquote></blockquote>
```
