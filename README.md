### 1. Difference between SPA and MPA

| | SPA | MPA |
|---|---|---|
| **Loading** | Loads one HTML page; updates content dynamically | Loads a new HTML page from the server on every navigation |
| **Speed** | Faster after initial load (no full page reload) | Slower per navigation (full round-trip to server) |
| **Example** | Angular, React apps | Traditional websites, e-commerce sites |

**SPA** = Single Page Application — the browser never fully reloads; Angular handles routing client-side.
**MPA** = Multi Page Application — each URL request returns a full HTML page from the server.

---

### 2. MVC vs MVVM in the context of Angular

**MVC (Model-View-Controller)**
- **Model** — data/business logic
- **View** — UI (HTML)
- **Controller** — middleman that handles user input and updates Model/View

**MVVM (Model-View-ViewModel)** — what Angular uses
- **Model** — data (interfaces, services)
- **View** — template (`.html`)
- **ViewModel** — the component class (`.ts`); binds data to the view automatically via data binding

Angular uses MVVM: the component class acts as the ViewModel, and data binding keeps the View in sync automatically without manually updating the DOM.

---

### 3. Purpose of each file in a component

|
| `.ts` | Component class — logic, data, and properties |
| `.html` | Template — defines what is rendered in the browser |
| `.css` | Styles — scoped CSS that applies only to this component |
| `.spec.ts` | Unit tests — tests written for this component using a test framework |

---

### 4. Interpolation

Interpolation is a one-way data binding technique that lets you embed component class expressions directly into the HTML template 
**Example:**
```html
<h1>{{ student.name }}</h1>
<p>Age: {{ student.age }}</p>
```
Angular evaluates the expression inside `{{ }}` and replaces it with the resulting value in the DOM. It is read-only (component → view), not two-way.
