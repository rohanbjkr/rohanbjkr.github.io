---
layout: linear-algebra-lesson
title: "Inverse Matrices"
lesson_number: 6
module: "Module 2 · Matrix Algebra"
description: "Understanding inverse matrices as the operation that undoes a matrix transformation."
permalink: /linear-algebra/inverse-matrices/
---

# Inverse Matrices

We have now learned how matrices multiply.

We have also seen that a matrix can be viewed as a transformation:

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

This leads to a natural question:

> **Can we undo the transformation?**

If $A$ takes a vector $\mathbf{x}$ and produces $A\mathbf{x}$, can we find another matrix that takes us back to $\mathbf{x}$?

That matrix, when it exists, is called the **inverse of $A$**.

---

## 1. The idea of "undoing"

Before working with matrices, think about ordinary numbers.

Suppose we multiply a number by $5$:

$$
x
\longrightarrow
5x.
$$

How do we undo this operation?

We divide by $5$:

$$
5x
\longrightarrow
\frac{1}{5}(5x)
=
x.
$$

Multiplication by $5$ is undone by multiplication by

$$
\frac{1}{5}.
$$

This is why

$$
5\left(\frac15\right)=1.
$$

The number $1$ is important because multiplying by $1$ changes nothing.

We want the same idea for matrices.

---

## 2. The identity matrix

Consider the matrix

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

Take a vector

$$
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

Then

$$
I\mathbf{x}
=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

So

$$
I\mathbf{x}=\mathbf{x}.
$$

The identity matrix does nothing to a vector.

It is therefore the matrix version of the number $1$.

For an $n\times n$ matrix, the identity matrix is

<div class="math-scroll">

$$
I_n=
\begin{bmatrix}
1&0&0&\cdots&0\\
0&1&0&\cdots&0\\
0&0&1&\cdots&0\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
0&0&0&\cdots&1
\end{bmatrix}.
$$

</div>

---

## 3. What should an inverse do?

Suppose $A$ is a square matrix.

We want a matrix $A^{-1}$ that undoes the action of $A$.

Start with a vector:

$$
\mathbf{x}.
$$

Apply $A$:

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

Now apply $A^{-1}$:

$$
A\mathbf{x}
\longrightarrow
A^{-1}(A\mathbf{x}).
$$

We want to return to the original vector:

$$
A^{-1}(A\mathbf{x})=\mathbf{x}.
$$

Using matrix multiplication,

$$
A^{-1}A\mathbf{x}=\mathbf{x}.
$$

Since the identity matrix also leaves $\mathbf{x}$ unchanged,

$$
I\mathbf{x}=\mathbf{x},
$$

we want

$$
A^{-1}A=I.
$$

Similarly, applying $A^{-1}$ first and then $A$ should also return us to the original vector:

$$
AA^{-1}=I.
$$

Therefore the inverse satisfies

<div class="math-scroll">

$$
\boxed{
AA^{-1}=A^{-1}A=I
}
$$

</div>

This is the definition of a matrix inverse.

---

## 4. The inverse as an undo button

It is useful to think of the two matrices as opposite transformations.

$$
\mathbf{x}
\xrightarrow{\;A\;}
A\mathbf{x}
\xrightarrow{\;A^{-1}\;}
\mathbf{x}.
$$

And we can also go in the opposite order:

$$
\mathbf{x}
\xrightarrow{\;A^{-1}\;}
A^{-1}\mathbf{x}
\xrightarrow{\;A\;}
\mathbf{x}.
$$

So:

$$
\boxed{
A^{-1}\text{ undoes }A.
}
$$

This is the most important intuition to remember.

---

## 5. A simple example

Consider

$$
A=
\begin{bmatrix}
2&0\\
0&3
\end{bmatrix}.
$$

What does $A$ do to a vector?

For

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix},
$$

we have

$$
A\mathbf{x}
=
\begin{bmatrix}
2x\\
3y
\end{bmatrix}.
$$

So $A$ stretches the first coordinate by $2$ and the second coordinate by $3$.

How can we undo this?

We divide the first coordinate by $2$ and the second by $3$.

That suggests

$$
A^{-1}
=
\begin{bmatrix}
\frac12&0\\
0&\frac13
\end{bmatrix}.
$$

Let's check.

<div class="math-scroll">

$$
AA^{-1}
=
\begin{bmatrix}
2&0\\
0&3
\end{bmatrix}
\begin{bmatrix}
\frac12&0\\
0&\frac13
\end{bmatrix}
=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
=
I.
$$

</div>

Therefore,

$$
A^{-1}
=
\begin{bmatrix}
\frac12&0\\
0&\frac13
\end{bmatrix}.
$$

The inverse simply reverses the stretching.

---

## 6. Inverse matrices and solving $A\mathbf{x}=\mathbf b$

Now we reach a very important connection.

Suppose we want to solve

$$
A\mathbf{x}=\mathbf{b}.
$$

If $A^{-1}$ exists, multiply both sides by $A^{-1}$:

$$
A^{-1}A\mathbf{x}
=
A^{-1}\mathbf{b}.
$$

Since

$$
A^{-1}A=I,
$$

we get

$$
I\mathbf{x}=A^{-1}\mathbf{b}.
$$

Therefore,

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf{b}.
}
$$

This gives us another way to solve a system.

Instead of thinking:

> Use elimination to find $\mathbf{x}$,

we can think:

> Find the inverse of $A$, then multiply it by $\mathbf b$.

So

$$
\boxed{
A\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
\mathbf{x}=A^{-1}\mathbf b.
}
$$

---

## 7. A numerical example

Consider

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
$$

and

$$
\mathbf b=
\begin{bmatrix}
5\\
3
\end{bmatrix}.
$$

We want to solve

$$
A\mathbf{x}=\mathbf b.
$$

That is,

<div class="math-scroll">

$$
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
3
\end{bmatrix}.
$$

</div>

From the equations,

$$
2x+y=5
$$

and

$$
x+y=3.
$$

Subtracting the second equation from the first gives

$$
x=2.
$$

Then

$$
y=1.
$$

So

$$
\mathbf{x}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

Now let's solve the same problem using the inverse.

---

## 8. Finding the inverse of a $2\times2$ matrix

Consider

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}.
$$

The inverse, when it exists, is

<div class="math-scroll">

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}.
$$

</div>

The quantity

$$
ad-bc
$$

is called the **determinant** of $A$.

We will study determinants more carefully later, but for now we need one fact:

$$
ad-bc\neq0
$$

is required for the inverse to exist.

---

## 9. Why does the formula work?

It is worth checking rather than simply memorizing it.

Take

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}.
$$

Multiply it by

<div class="math-scroll">

$$
\frac{1}{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}.
$$

</div>

First multiply the matrices:

<div class="math-scroll">

$$
\begin{aligned}
A
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
&=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}\\[6pt]
&=
\begin{bmatrix}
ad-bc&-ab+ab\\
cd-dc&-bc+ad
\end{bmatrix}\\[6pt]
&=
\begin{bmatrix}
ad-bc&0\\
0&ad-bc
\end{bmatrix}.
\end{aligned}
$$

</div>

Factor out $ad-bc$:

$$
=
(ad-bc)
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

Therefore,

$$
A
\left[
\frac{1}{ad-bc}
\begin{bmatrix}
d&-b\\
-c&a
\end{bmatrix}
\right]
=
I.
$$

That is exactly what we need from an inverse.

---

## 10. Returning to our example

Recall

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}.
$$

Here,

$$
a=2,\qquad b=1,\qquad c=1,\qquad d=1.
$$

Therefore,

$$
ad-bc
=
(2)(1)-(1)(1)
=
1.
$$

So

$$
A^{-1}
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}.
$$

Now calculate

<div class="math-scroll">

$$
A^{-1}\mathbf b
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}
\begin{bmatrix}
5\\
3
\end{bmatrix}
=
\begin{bmatrix}
5-3\\
-5+6
\end{bmatrix}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

</div>

We obtain exactly the same solution:

$$
\boxed{
\mathbf{x}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
}
$$

So the inverse provides a compact way of solving the system.

---

## 11. When does an inverse exist?

Not every matrix has an inverse.

Consider

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

The second row is exactly twice the first row.

The determinant is

$$
\det(A)
=
(1)(4)-(2)(2)
=
0.
$$

Therefore the inverse formula would require division by zero:

$$
\frac{1}{\det(A)}
=
\frac{1}{0}.
$$

That is impossible.

So $A^{-1}$ does not exist.

A matrix whose inverse does not exist is called **singular**.

A matrix whose inverse does exist is called **invertible** or **nonsingular**.

Thus:

$$
\boxed{
\det(A)\neq0
\quad\Longrightarrow\quad
A\text{ is invertible}
}
$$

and

$$
\boxed{
\det(A)=0
\quad\Longrightarrow\quad
A\text{ is singular}.
}
$$

We will develop the deeper meaning of this connection later.

---

## 12. What goes wrong when the matrix is singular?

Let's examine

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

For a vector

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix},
$$

we get

$$
A\mathbf{x}
=
\begin{bmatrix}
x+2y\\
2x+4y
\end{bmatrix}.
$$

Notice something important:

The second component is always twice the first.

Therefore every output has the form

$$
\begin{bmatrix}
z\\
2z
\end{bmatrix}.
$$

The transformation cannot produce an arbitrary vector in $\mathbb R^2$.

For example,

$$
\begin{bmatrix}
1\\
3
\end{bmatrix}
$$

can never be an output of this matrix.

So there cannot be an inverse transformation that works for every vector.

This gives us an important intuition:

> **A singular matrix loses information.**

Once information has been lost, we cannot uniquely reconstruct the original input.

---

## 13. Geometry of the inverse

Think about a transformation geometrically.

Suppose $A$ stretches space:

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

If the transformation only stretches, rotates, or shears space without collapsing it, we can potentially reverse the process.

The inverse performs the reverse transformation:

$$
A\mathbf{x}
\longrightarrow
A^{-1}A\mathbf{x}
=
\mathbf{x}.
$$

But imagine a transformation that squashes an entire plane onto a single line.

Different vectors can end up at the same output.

For example,

$$
\mathbf{x}_1\neq\mathbf{x}_2
$$

but

$$
A\mathbf{x}_1=A\mathbf{x}_2.
$$

If two different inputs produce the same output, there is no way to determine which input we started with.

The transformation cannot be reversed uniquely.

That is the geometric intuition behind a singular matrix.

---

## 14. The inverse and uniqueness of solutions

Consider

$$
A\mathbf{x}=\mathbf b.
$$

If $A$ is invertible, then

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

There is exactly one solution for every $\mathbf b$.

Therefore:

$$
\boxed{
A\text{ invertible}
\quad\Longrightarrow\quad
A\mathbf{x}=\mathbf b
\text{ has exactly one solution for every }\mathbf b.
}
$$

This is a very important statement.

The inverse is not just a computational trick.

It tells us something fundamental about the structure of a linear system.

---

## 15. Inverse matrices and elimination

There is another way to find an inverse.

We can use the elimination ideas from earlier in the course.

Suppose

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}.
$$

Write $A$ beside the identity matrix:

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
2&1&1&0\\
1&1&0&1
\end{array}
\right].
$$

</div>

Now perform elimination until the left side becomes $I$.

Start with

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
2&1&1&0\\
1&1&0&1
\end{array}
\right].
$$

</div>

Swap the rows:

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
2&1&1&0
\end{array}
\right].
$$

</div>

Now eliminate the $2$ below the pivot:

$$
R_2\leftarrow R_2-2R_1.
$$

This gives

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&-1&1&-2
\end{array}
\right].
$$

</div>

Multiply the second row by $-1$:

$$
R_2\leftarrow -R_2.
$$

Then

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
1&1&0&1\\
0&1&-1&2
\end{array}
\right].
$$

</div>

Finally eliminate the $1$ above the second pivot:

$$
R_1\leftarrow R_1-R_2.
$$

We obtain

<div class="math-scroll">

$$
\left[
\begin{array}{cc|cc}
1&0&1&-1\\
0&1&-1&2
\end{array}
\right].
$$

</div>

The left side is now $I$.

Therefore the right side is $A^{-1}$:

$$
\boxed{
A^{-1}
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}.
}
$$

---

## 16. Why does this method work?

This is worth understanding.

Suppose we perform a sequence of row operations that transforms $A$ into $I$.

Each row operation can be represented by multiplying by an elementary matrix.

So, schematically,

<div class="math-scroll">

$$
E_kE_{k-1}\cdots E_2E_1A=I.
$$

</div>

Therefore,

<div class="math-scroll">

$$
E_kE_{k-1}\cdots E_2E_1=A^{-1}.
$$

</div>

So when elimination turns $A$ into $I$, the same operations applied to $I$ produce $A^{-1}$.

This is why the augmented matrix

<div class="math-scroll">

$$
[A\mid I]
$$

</div>

is so useful.

We perform the same row operations on both sides:

<div class="math-scroll">

$$
[A\mid I]
\quad\longrightarrow\quad
[I\mid A^{-1}].
$$

</div>

This is not a magic recipe.

It follows directly from the relationship between elimination and matrix multiplication.

---

## 17. The inverse of a product

Matrix multiplication represents composition of transformations.

Suppose we first apply $B$, then $A$:

$$
\mathbf{x}
\longrightarrow
B\mathbf{x}
\longrightarrow
A(B\mathbf{x}).
$$

The combined transformation is

$$
AB.
$$

To undo the entire process, we must reverse the order.

First undo $A$.

Then undo $B$.

Therefore,

$$
(AB)^{-1}
=
B^{-1}A^{-1}.
$$

Notice the reversed order.

<div class="math-scroll">

$$
\boxed{
(AB)^{-1}=B^{-1}A^{-1}
}
$$

</div>

This is another consequence of thinking of matrices as transformations.

---

## 18. Why does the order reverse?

Let's verify it.

Consider

$$
(B^{-1}A^{-1})(AB).
$$

Using associativity,

<div class="math-scroll">

$$
(B^{-1}A^{-1})(AB)
=
B^{-1}(A^{-1}A)B.
$$

</div>

Since

$$
A^{-1}A=I,
$$

we get

$$
B^{-1}IB.
$$

Because $IB=B$,

$$
B^{-1}B=I.
$$

Therefore,

$$
(B^{-1}A^{-1})(AB)=I.
$$

So

$$
B^{-1}A^{-1}
$$

really is the inverse of $AB$.

---

## 19. Important properties of inverses

If $A$ is invertible, then:

### Identity

$$
AA^{-1}=A^{-1}A=I.
$$

### Inverse of the identity

$$
I^{-1}=I.
$$

### Inverse of an inverse

$$
(A^{-1})^{-1}=A.
$$

### Inverse of a product

$$
(AB)^{-1}=B^{-1}A^{-1}.
$$

### Inverse and a scalar

For a nonzero number $c$,

$$
(cA)^{-1}
=
\frac{1}{c}A^{-1}.
$$

These properties follow from the definition and the rules of matrix multiplication.

---

## 20. A subtle but important point

You might notice that we have been talking about square matrices.

Why?

Because an inverse transformation must take the output back to the original space.

For a square matrix,

$$
A:\mathbb R^n\rightarrow\mathbb R^n,
$$

the input and output spaces have the same dimension.

An inverse can then satisfy

$$
A^{-1}:\mathbb R^n\rightarrow\mathbb R^n.
$$

General rectangular matrices require a more careful discussion because their input and output spaces have different dimensions.

For now, we will focus on square matrices.

---

## 21. The big picture

We can now connect several ideas from the course.

We started with

$$
A\mathbf{x}=\mathbf b.
$$

We learned elimination as a way to solve this system.

Then we learned matrix multiplication and began viewing matrices as transformations.

Now the inverse gives us another perspective:

<div class="math-scroll">

$$
A\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
A^{-1}A\mathbf{x}
=
A^{-1}\mathbf b
\quad\Longrightarrow\quad
\mathbf{x}=A^{-1}\mathbf b.
$$

</div>

So the inverse is the matrix that **undoes $A$**.

---

## Key idea

The inverse matrix is not primarily a formula.

It is an operation.

If

$$
A\mathbf{x}=\mathbf y,
$$

then

$$
A^{-1}\mathbf y=\mathbf x.
$$

In other words:

$$
\boxed{
A^{-1}\text{ reverses the transformation performed by }A.
}
$$

And this is why

$$
\boxed{
AA^{-1}=A^{-1}A=I.
}
$$

---

## Try it yourself

### Exercise 1

Find the inverse of

$$
A=
\begin{bmatrix}
3&1\\
2&1
\end{bmatrix}.
$$

Then verify that

$$
AA^{-1}=I.
$$

---

### Exercise 2

Use the inverse of

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
$$

to solve

<div class="math-scroll">

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
7\\
4
\end{bmatrix}.
$$

</div>

---

### Exercise 3

Does the following matrix have an inverse?

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

Explain why.

---

### Exercise 4

Suppose $A$ and $B$ are invertible.

Which of the following is correct?

$$
(AB)^{-1}=A^{-1}B^{-1}
$$

or

$$
(AB)^{-1}=B^{-1}A^{-1}?
$$

Explain why.

---

## What is next?

We now understand what an inverse matrix means.

If

$$
AA^{-1}=A^{-1}A=I,
$$

then $A^{-1}$ reverses the transformation performed by $A$.

We also saw an important connection with a system of equations:

$$
A\mathbf{x}=\mathbf{b}.
$$

If $A^{-1}$ exists, we can write

<div class="math-scroll">

$$
\mathbf{x}=A^{-1}\mathbf{b}.
$$

</div>

But this raises a natural question:

> **How exactly does $A^{-1}$ help us solve $A\mathbf{x}=\mathbf{b}$?**

And there is another important question.

If we know $A^{-1}$, can we use it to solve **many different systems with the same matrix $A$**?

For example, suppose we have

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf{b}_1,
\qquad
A\mathbf{x}_2=\mathbf{b}_2,
\qquad
A\mathbf{x}_3=\mathbf{b}_3.
$$

</div>

Instead of treating every system as a completely new problem, the inverse gives us a common framework:

<div class="math-scroll">

$$
\mathbf{x}_1=A^{-1}\mathbf{b}_1,
\qquad
\mathbf{x}_2=A^{-1}\mathbf{b}_2,
\qquad
\mathbf{x}_3=A^{-1}\mathbf{b}_3.
$$

</div>

This is the idea we will explore next.

### Next lesson

**$A^{-1}$ and $A\mathbf{x}=\mathbf{b}$**

We will connect the inverse matrix directly to solving systems and understand what the equation

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

really means.

After that, we will turn to **LU Factorization** and see how the elimination process itself can be organized into the factorization

$$
A=LU.
$$
