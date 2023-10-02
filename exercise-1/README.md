# Exercise 1: Handle dynamic data using slots

The purpose of this exercise is to become familiar with named slots.

You'll do so by making the `album-art` component dynamic.

Instead of passing `album-name` and `artist-name` as attributes, you'll instead refactor the component to accept a `title` and `subtitle` slot, that a consumer can pass through any markup to.

## Steps

1. Replace the `h3` and `p` elements in the template with named `slot` elements
2. Render your own custom markup by passing content down as children to the `album-art` component
