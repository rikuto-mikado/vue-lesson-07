# Vue Lesson 07

## What I Learned

- `@click` is shorthand for `v-on:click`
- Using parameters in methods allows reusing the same method with different values
- `computed` properties automatically recalculate when their dependencies change
- `watch` is used to perform side effects (like `setTimeout`) when data changes
- `this` context is lost inside regular functions in `setTimeout`
  - Solution: save reference as `const that = this` before `setTimeout`
  - Alternative: use arrow functions which preserve `this` context

## Challenges

- Remembering the correct property name (`number` not `numeber`) - typos can cause silent failures
- Understanding when to use `watch` vs `computed`:
  - `computed`: for derived values based on data
  - `watch`: for side effects like timers, API calls, etc.
