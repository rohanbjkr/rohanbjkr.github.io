---
title: "Solving Ax = b"

permalink: /linear-algebra/solving-ax-b/

layout: linear-algebra-lesson

lesson_number: 4

module: "Module 1 · Linear Equations"

description: "How elimination solves the central problem of linear algebra: A x = b."
---

# Solving \(A\mathbf{x}=\mathbf{b}\)

We have now reached one of the central problems of linear algebra:

$$
A\mathbf{x}=\mathbf{b}.
$$

Almost everything we have done so far has prepared us for this equation.

In Lesson 1, we saw the geometry of linear equations.

In Lesson 2, we learned elimination.

In Lesson 3, we saw that elimination can be represented by matrix multiplication.

Now we put these ideas together.

The basic question is:

> Given \(A\) and \(\mathbf{b}\), how do we find \(\mathbf{x}\)?


## 1. What does \(A\mathbf{x}=\mathbf{b}\) mean?

Let's begin with a simple example.

Suppose

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix},
\qquad
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

Then

$$
A\mathbf{x}
=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}.
$$

Matrix multiplication gives

$$
A\mathbf{x}
=
\begin{bmatrix}
x_1+2x_2\\
3x_1+4x_2
\end{bmatrix}.
$$

Therefore,

$$
A\mathbf{x}=\mathbf{b}
$$

means

$$
\begin{bmatrix}
x_1+2x_2\\
3x_1+4x_2
\end{bmatrix}
=
\begin{bmatrix}
b_1\\
b_2
\end{bmatrix}.
$$

In other words,

$$
\begin{aligned}
x_1+2x_2 &= b_1,\\
3x_1+4x_2 &= b_2.
\end{aligned}
$$

So \(A\mathbf{x}=\mathbf{b}\) is simply a compact way of writing a system of linear equations.


## 2. A concrete example

Consider

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix},
\qquad
\mathbf{b}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

We want to solve

$$
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

This is equivalent to

$$
\begin{aligned}
x_1+2x_2 &= 5,\\
3x_1+4x_2 &= 11.
\end{aligned}
$$

Now use elimination.

Multiply the first equation by \(3\):

$$
3x_1+6x_2=15.
$$

Subtract the second equation:

$$
(3x_1+6x_2)-(3x_1+4x_2)=15-11.
$$

Therefore,

$$
2x_2=4.
$$

So

$$
x_2=2.
$$

Substitute into the first equation:

$$
x_1+2(2)=5.
$$

Therefore,

$$
x_1=1.
$$

The solution is

$$
\mathbf{x}
=
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$


## 3. The augmented matrix

There is a convenient way to write the entire system in one object.

Instead of writing

$$
A\mathbf{x}=\mathbf{b},
$$

we can put \(A\) and \(\mathbf{b}\) next to each other:

$$
\left[
\begin{array}{cc|c}
1&2&5\\
3&4&11
\end{array}
\right].
$$

This is called the **augmented matrix**.

The vertical line separates the coefficient matrix from the right-hand side.

So

$$
\left[
\begin{array}{cc|c}
1&2&5\\
3&4&11
\end{array}
\right]
$$

contains exactly the same information as

$$
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$


## 4. Elimination on the augmented matrix

Now the power of the augmented matrix becomes clear.

Start with

$$
\left[
\begin{array}{cc|c}
1&2&5\\
3&4&11
\end{array}
\right].
$$

We want to eliminate the \(3\) below the first pivot.

The multiplier is

$$
m=\frac{3}{1}=3.
$$

Therefore,

$$
R_2\leftarrow R_2-3R_1.
$$

We get

$$
\left[
\begin{array}{cc|c}
1&2&5\\
0&-2&-4
\end{array}
\right].
$$

The second row represents

$$
-2x_2=-4.
$$

Therefore,

$$
x_2=2.
$$

Then the first row gives

$$
x_1+2x_2=5,
$$

so

$$
x_1=1.
$$


## 5. Why the augmented matrix is useful

Notice what happened.

We performed the same row operation on:

- the coefficients of the equations, and
- the right-hand side.

The augmented matrix lets us do both simultaneously.

Instead of writing

$$
A\rightarrow U
$$

and separately

$$
\mathbf{b}\rightarrow\mathbf{c},
$$

we simply perform elimination on

$$
[A\mid\mathbf{b}].
$$

This is the standard computational form of Gaussian elimination.


## 6. The general procedure

Suppose we have

$$
A\mathbf{x}=\mathbf{b}.
$$

Write the augmented matrix:

$$
[A\mid\mathbf{b}].
$$

Then perform elimination until the coefficient part is upper triangular:

$$
[A\mid\mathbf{b}]
\longrightarrow
[U\mid\mathbf{c}].
$$

The system is now

$$
U\mathbf{x}=\mathbf{c}.
$$

Because \(U\) is upper triangular, we can solve the equations starting from the bottom.

This is **back substitution**.


## 7. A three-variable example

Consider

$$
\begin{aligned}
x+y+z &= 6,\\
2x+3y+z &= 11,\\
x+2y+3z &= 14.
\end{aligned}
$$

The augmented matrix is

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
2&3&1&11\\
1&2&3&14
\end{array}
\right].
$$

Our first goal is to eliminate the entries below the first pivot.

Perform

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-R_1.
$$

We obtain

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&1&2&8
\end{array}
\right].
$$


## 8. Continue elimination

There is still a \(1\) below the second pivot.

Perform

$$
R_3\leftarrow R_3-R_2.
$$

Then

$$
\left[
\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&3&9
\end{array}
\right].
$$

Now the coefficient matrix is upper triangular.

The system is

$$
\begin{aligned}
x+y+z &= 6,\\
y-z &= -1,\\
3z &= 9.
\end{aligned}
$$


## 9. Back substitution

Start with the last equation:

$$
3z=9.
$$

Therefore,

$$
z=3.
$$

Move to the second equation:

$$
y-z=-1.
$$

Substitute \(z=3\):

$$
y-3=-1.
$$

Therefore,

$$
y=2.
$$

Finally, use the first equation:

$$
x+y+z=6.
$$

Substitute \(y=2\) and \(z=3\):

$$
x+2+3=6.
$$

Therefore,

$$
x=1.
$$

So

$$
\mathbf{x}
=
\begin{bmatrix}
1\\
2\\
3
\end{bmatrix}.
$$


## 10. What if elimination gives something different?

So far, every system has had one solution.

But this is not guaranteed.

When we perform elimination, the resulting equations can tell us what kind of solution the system has.

There are three possibilities:

1. one solution,
2. no solution,
3. infinitely many solutions.

Let's see why.


## 11. One solution

Suppose elimination gives

$$
\left[
\begin{array}{cc|c}
1&2&5\\
0&1&2
\end{array}
\right].
$$

There is a pivot for both variables.

Therefore,

$$
x_2=2
$$

and then \(x_1\) is determined uniquely.

There is exactly one solution.


## 12. No solution

Now consider

$$
\left[
\begin{array}{cc|c}
1&2&5\\
0&0&3
\end{array}
\right].
$$

The second row represents

$$
0x_1+0x_2=3.
$$

So

$$
0=3.
$$

This is impossible.

Therefore, the system has

$$
\text{no solution}.
$$

Geometrically, the corresponding lines do not intersect at a common point.


## 13. Infinitely many solutions

Now suppose elimination gives

$$
\left[
\begin{array}{cc|c}
1&2&5\\
0&0&0
\end{array}
\right].
$$

The second row represents

$$
0=0.
$$

This equation gives us no new information.

We are left with only

$$
x_1+2x_2=5.
$$

There are two unknowns but only one independent equation.

We can choose \(x_2\) freely.

For example, let

$$
x_2=t.
$$

Then

$$
x_1+2t=5,
$$

so

$$
x_1=5-2t.
$$

Therefore all solutions have the form

$$
\mathbf{x}
=
\begin{bmatrix}
5-2t\\
t
\end{bmatrix},
\qquad
t\in\mathbb{R}.
$$

There are infinitely many solutions.


## 14. Pivots tell us a lot

A **pivot** is the first nonzero entry in a row after elimination.

For example,

$$
\begin{bmatrix}
1&2&3\\
0&4&5\\
0&0&7
\end{bmatrix}
$$

has three pivots:

$$
1,\qquad4,\qquad7.
$$

The number and position of pivots tell us a great deal about the system.

In particular, if every variable has a pivot, then there is a unique solution, provided the system is consistent.

If some variable does not have a pivot, that variable can become a **free variable**.

Free variables are what lead to infinitely many solutions.


## 15. The special role of a square matrix

Suppose \(A\) is an \(n\times n\) matrix.

Then we have \(n\) equations and \(n\) unknowns.

There are two important possibilities.

If elimination produces a pivot in every column, then the system has a unique solution for every right-hand side \(\mathbf{b}\).

If one or more columns do not contain pivots, the situation changes.

The system may have no solution for some choices of \(\mathbf{b}\), or infinitely many solutions for others.

This distinction will become much more important when we study **linear independence, rank, and the nullspace**.


## 16. What does the matrix \(A\) really do?

There is another way to think about

$$
A\mathbf{x}=\mathbf{b}.
$$

The matrix \(A\) takes an input vector \(\mathbf{x}\) and produces an output vector \(\mathbf{b}\):

$$
\mathbf{x}
\overset{A}{\longrightarrow}
\mathbf{b}.
$$

So solving

$$
A\mathbf{x}=\mathbf{b}
$$

means asking:

> **Which input vector \(\mathbf{x}\) produces the desired output \(\mathbf{b}\)?**

This viewpoint will become central later when we study matrix transformations.


## 17. The columns of \(A\)

Suppose

$$
A=
\begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}.
$$

Write its columns as

$$
\mathbf{a}_1=
\begin{bmatrix}
a_{11}\\
a_{21}
\end{bmatrix},
\qquad
\mathbf{a}_2=
\begin{bmatrix}
a_{12}\\
a_{22}
\end{bmatrix}.
$$

Then

$$
A\mathbf{x}
=
A
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
$$

can be written as

$$
A\mathbf{x}
=
x_1\mathbf{a}_1+x_2\mathbf{a}_2.
$$

Therefore,

$$
A\mathbf{x}=\mathbf{b}
$$

means

$$
x_1\mathbf{a}_1+x_2\mathbf{a}_2
=
\mathbf{b}.
$$

This gives us a very important interpretation:

> Solving \(A\mathbf{x}=\mathbf{b}\) means finding a combination of the columns of \(A\) that produces \(\mathbf{b}\).


## 18. The column space

All possible combinations of the columns of \(A\) form a set called the **column space** of \(A\).

For example, if

$$
A=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix},
$$

then the columns are

$$
\begin{bmatrix}
1\\
0
\end{bmatrix}
\qquad\text{and}\qquad
\begin{bmatrix}
0\\
1
\end{bmatrix}.
$$

Any vector

$$
\begin{bmatrix}
b_1\\
b_2
\end{bmatrix}
$$

can be written as

$$
b_1
\begin{bmatrix}
1\\
0
\end{bmatrix}
+
b_2
\begin{bmatrix}
0\\
1
\end{bmatrix}.
$$

So every \(\mathbf{b}\) can be reached.

This means

$$
A\mathbf{x}=\mathbf{b}
$$

has a solution for every \(\mathbf{b}\).


## 19. What have we learned?

We started with

$$
A\mathbf{x}=\mathbf{b}.
$$

We can now approach it in several equivalent ways.

### As equations

$$
\begin{aligned}
a_{11}x_1+a_{12}x_2+\cdots &= b_1,\\
a_{21}x_1+a_{22}x_2+\cdots &= b_2,\\
\vdots
\end{aligned}
$$

### As an augmented matrix

$$
[A\mid\mathbf{b}].
$$

### Through elimination

$$
[A\mid\mathbf{b}]
\longrightarrow
[U\mid\mathbf{c}].
$$

### Through back substitution

Solve the triangular system starting from the bottom.

### Through columns

Find coefficients \(x_1,x_2,\ldots\) such that

$$
x_1\mathbf{a}_1+
x_2\mathbf{a}_2+\cdots
=
\mathbf{b}.
$$


## Key idea

<div class="key-idea">

<div class="key-idea-title">
The central problem
</div>

Solving

$$
A\mathbf{x}=\mathbf{b}
$$

means finding the vector \(\mathbf{x}\) that produces \(\mathbf{b}\) when the matrix \(A\) acts on it.

Elimination transforms the system into a triangular form, and back substitution then gives the solution.

The same problem can also be understood through the columns of \(A\).

</div>


## Try it yourself

Consider

$$
\begin{aligned}
x+y+z &= 4,\\
2x+3y+z &= 7,\\
x+2y+2z &= 7.
\end{aligned}
$$


### Question 1

Write the system as

$$
A\mathbf{x}=\mathbf{b}.
$$


### Question 2

Write its augmented matrix.


### Question 3

Use elimination to obtain an upper-triangular system.


### Question 4

Use back substitution to find \(x\), \(y\), and \(z\).


<details>

<summary>Show solution</summary>

The augmented matrix is

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
2&3&1&7\\
1&2&2&7
\end{array}
\right].
$$

Perform

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-R_1.
$$

This gives

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
0&1&-1&-1\\
0&1&1&3
\end{array}
\right].
$$

Now perform

$$
R_3\leftarrow R_3-R_2.
$$

We obtain

$$
\left[
\begin{array}{ccc|c}
1&1&1&4\\
0&1&-1&-1\\
0&0&2&4
\end{array}
\right].
$$

Therefore,

$$
2z=4,
$$

so

$$
z=2.
$$

Then

$$
y-z=-1
$$

gives

$$
y=1.
$$

Finally,

$$
x+y+z=4
$$

gives

$$
x=1.
$$

Therefore,

$$
\mathbf{x}
=
\begin{bmatrix}
1\\
1\\
2
\end{bmatrix}.
$$

</details>


## A useful summary

The process we have learned is

$$
A\mathbf{x}=\mathbf{b}
$$

then

$$
[A\mid\mathbf{b}]
$$

then elimination:

$$
[A\mid\mathbf{b}]
\longrightarrow
[U\mid\mathbf{c}]
$$

and finally back substitution:

$$
U\mathbf{x}=\mathbf{c}
\longrightarrow
\mathbf{x}.
$$

The central computational idea is therefore

$$
\text{Elimination}
\longrightarrow
\text{Triangular system}
\longrightarrow
\text{Back substitution}.
$$


## What's next?

We have learned how to solve \(A\mathbf{x}=\mathbf{b}\).

But there is a deeper question hiding underneath:

> **When does a system have a solution in the first place?**

And if a solution exists, when is it unique?

To answer these questions, we need to understand the **columns of \(A\)** more carefully.

This leads naturally to our next ideas:

**linear combinations, span, and linear independence.**
