# My understanding of TDD

## What is TDD

TDD stand for **test-driven development**.

It follow a clear path :

**RED**: We write a test
**GREEN**: We build the code that validate the test
**REFACTOR**: We make the code cleaner and maintainable without changing how it works (keeping it green).

## How we do TDD

We use tools such as **Vitest** that allow us to build function / method or files that will test the code. This take shape in a **Unit**.

**Unit**: The single scenario / requirement we want to validate in our software.

This allow me to answer : _What triggers the creation of a new test?_

What triggers the creation of a new test is basically a new behavior that the software have. Allowing user to create account is not a behavior, however, the app need to **display a form, invalidate password, email and username when needed and save user once everything's valid.**

These 4 steps are already subject to test.
