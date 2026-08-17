---
layout: linear-algebra-lesson
title: 'LU Factorization'
lesson_number: 8
module: "Module 2 · Matrix Algebra"
description: "Understanding LU decomposition as elimination written in matrix form."
permalink: /linear-algebra/lu-factorization/
---

# LU Decomposition

In the previous lessons, we learned how to solve

$$
A\mathbf{x}=\mathbf{b}.
$$

We learned elimination as a practical method for solving a system.

We then introduced the inverse matrix and saw that, when $A$ is invertible,

<div class="math-scroll">

$$
\mathbf{x}=A^{-1}\mathbf{b}.
$$

</div>

But there is another way to organize elimination.

Instead of performing the elimination steps separately every time, we can **record the elimination process inside a matrix**.

This leads to one of the most useful factorizations in linear algebra:

<div class="math-scroll">

$$
A=LU.
$$

</div>

Here:

- $L$ is a **lower-triangular matrix** containing the elimination information.
- $U$ is the **upper-triangular matrix** produced by elimination.

This is called **LU decomposition** or **LU factorization**.

---

# 1. Why do we need LU decomposition?

Suppose we want to solve

$$
A\mathbf{x}=\mathbf{b}.
$$

For one right-hand side $\mathbf b$, ordinary elimination works very well.

But suppose we need to solve many systems with the same matrix $A$:

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf{b}_1,
\qquad
A\mathbf{x}_2=\mathbf{b}_2,
\qquad
A\mathbf{x}_3=\mathbf{b}_3.
$$

</div>

The matrix $A$ has not changed.

Only the right-hand side has changed.

It would be inefficient to start the entire elimination process from the beginning every time.

LU decomposition allows us to perform the expensive elimination once and then reuse it.

---

# 2. Start with elimination

Consider the system

<div class="math-scroll">

$$
\begin{aligned}
2x+y&=5,\\
4x+3y&=11.
\end{aligned}
$$

</div>

In matrix form,

<div class="math-scroll">

$$
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

</div>

So

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

We begin elimination.

The first pivot is $2$.

To eliminate the $4$ below it, we subtract

$$
2\times\text{row 1}
$$

from row 2.

The elimination multiplier is therefore

$$
m_{21}=\frac{4}{2}=2.
$$

So

$$
R_2\leftarrow R_2-2R_1.
$$

The matrix becomes

<div class="math-scroll">

$$
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

</div>

We have reached an upper-triangular matrix.

Call it $U$:

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

---

# 3. Where did the elimination information go?

During elimination, we used the multiplier

$$
m_{21}=2.
$$

Ordinary elimination uses this number and then moves on.

But what if we **save** it?

Put the multiplier below the diagonal:

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Now something remarkable happens:

<div class="math-scroll">

$$
LU
=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}
=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}
=A.
$$

</div>

Therefore,

$$
\boxed{
A=LU.
}
$$

We have turned the elimination process into a matrix factorization.

---

# 4. What does $A=LU$ mean?

The equation

$$
A=LU
$$

says that instead of thinking of $A$ as one matrix, we can think of it as the product of two simpler matrices.

The original matrix is

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

The lower-triangular matrix is

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix},
$$

and the upper-triangular matrix is

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

And

$$
A=LU.
$$

The matrix $U$ contains the result of elimination.

The matrix $L$ contains the multipliers that were used during elimination.

---

# 5. Why is $L$ lower triangular?

A lower-triangular matrix has zeros above the main diagonal.

For our example,

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

The multiplier $2$ appears below the diagonal.

For a larger matrix, the elimination multipliers are stored below the diagonal.

For example,

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
m_{21}&1&0\\
m_{31}&m_{32}&1
\end{bmatrix}.
$$

</div>

The entries

$$
m_{21},\quad m_{31},\quad m_{32}
$$

are the elimination multipliers.

The diagonal entries are $1$.

---

# 6. Why is $U$ upper triangular?

Elimination removes the entries below each pivot.

For a $3\times3$ matrix, we aim for something like

<div class="math-scroll">

$$
U=
\begin{bmatrix}
u_{11}&u_{12}&u_{13}\\
0&u_{22}&u_{23}\\
0&0&u_{33}
\end{bmatrix}.
$$

</div>

Everything below the main diagonal is zero.

That is why $U$ is called **upper triangular**.

The great advantage is that triangular systems are easy to solve.

---

# 7. The key insight: elimination is factorization

This is the central idea of LU decomposition.

When we perform elimination,

$$
A\longrightarrow U,
$$

we are transforming $A$ into an upper-triangular matrix.

But the elimination steps themselves contain information.

The multipliers used during elimination can be stored in $L$.

Then the original matrix can be reconstructed:

$$
A=LU.
$$

So LU decomposition is essentially:

> **Elimination, with the elimination information saved.**

This is the idea to remember.

---

# 8. From $A\mathbf{x}=\mathbf b$ to $LU\mathbf{x}=\mathbf b$

Suppose

$$
A=LU.
$$

Our original system is

$$
A\mathbf{x}=\mathbf b.
$$

Substitute $A=LU$:

$$
LU\mathbf{x}=\mathbf b.
$$

Because matrix multiplication is associative,

$$
L(U\mathbf{x})=\mathbf b.
$$

This suggests introducing an intermediate vector.

Let

$$
\mathbf y=U\mathbf{x}.
$$

Then the system becomes

$$
L\mathbf y=\mathbf b.
$$

We can solve this in two steps.

### Step 1

Solve

$$
L\mathbf y=\mathbf b.
$$

### Step 2

Use the resulting $\mathbf y$ to solve

$$
U\mathbf{x}=\mathbf y.
$$

This is the fundamental computational use of LU decomposition.

---

# 9. The two triangular systems

Starting from

$$
A\mathbf{x}=\mathbf b
$$

and using

$$
A=LU,
$$

we obtain

$$
LU\mathbf{x}=\mathbf b.
$$

Let

$$
\mathbf y=U\mathbf{x}.
$$

Then

$$
L\mathbf y=\mathbf b.
$$

After finding $\mathbf y$, solve

$$
U\mathbf{x}=\mathbf y.
$$

Therefore:

<div class="math-scroll">

$$
\boxed{
A\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
\begin{cases}
L\mathbf y=\mathbf b,\\
U\mathbf{x}=\mathbf y.
\end{cases}
}
$$

</div>

The first system is solved by **forward substitution**.

The second is solved by **back substitution**.

---

# 10. Solve our example using LU

Recall

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix},
$$

with

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
$$

and

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Our system is

<div class="math-scroll">

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

</div>

Since

$$
A=LU,
$$

we have

<div class="math-scroll">

$$
LU
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

</div>

Let

$$
\mathbf y=
\begin{bmatrix}
y_1\\
y_2
\end{bmatrix}.
$$

We first solve

$$
L\mathbf y=\mathbf b.
$$

Therefore,

<div class="math-scroll">

$$
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2
\end{bmatrix}
=
\begin{bmatrix}
5\\
11
\end{bmatrix}.
$$

</div>

This gives

$$
y_1=5
$$

and

$$
2y_1+y_2=11.
$$

Therefore,

$$
2(5)+y_2=11,
$$

so

$$
y_2=1.
$$

Thus,

$$
\mathbf y=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

---

# 11. Now solve $U\mathbf{x}=\mathbf y$

We now solve

<div class="math-scroll">

$$
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
1
\end{bmatrix}.
$$

</div>

The second equation gives

$$
y=1.
$$

Substitute into the first:

$$
2x+1=5.
$$

Therefore,

$$
x=2.
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

We have solved the original system.

---

# 12. What did LU save us from doing?

Suppose we had another right-hand side:

<div class="math-scroll">

$$
A\mathbf{x}
=
\begin{bmatrix}
7\\
15
\end{bmatrix}.
$$

</div>

The matrix $A$ has not changed.

Therefore, we do **not** need to perform elimination again.

We already have

$$
A=LU.
$$

We simply solve

$$
L\mathbf y=
\begin{bmatrix}
7\\
15
\end{bmatrix}
$$

and then

$$
U\mathbf x=\mathbf y.
$$

The expensive elimination step has already been done.

This is one of the main reasons LU decomposition is useful.

---

# 13. LU for many right-hand sides

Suppose we need to solve

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf b_1,
\qquad
A\mathbf{x}_2=\mathbf b_2,
\qquad
\ldots,
\qquad
A\mathbf{x}_k=\mathbf b_k.
$$

</div>

Once we have

$$
A=LU,
$$

we solve each system using

$$
L\mathbf y_i=\mathbf b_i
$$

followed by

$$
U\mathbf{x}_i=\mathbf y_i.
$$

The factorization is computed only once.

Therefore the same $L$ and $U$ can be reused.

---

# 14. How do we actually construct $L$ and $U$?

Now let's go through the process more carefully.

Consider a general $3\times3$ matrix:

<div class="math-scroll">

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{bmatrix}.
$$

</div>

We begin elimination.

The first pivot is

$$
a_{11}.
$$

To eliminate $a_{21}$, use the multiplier

$$
m_{21}=\frac{a_{21}}{a_{11}}.
$$

To eliminate $a_{31}$, use

$$
m_{31}=\frac{a_{31}}{a_{11}}.
$$

These multipliers are stored in $L$.

---

# 15. The first elimination step

The row operations are

$$
R_2\leftarrow R_2-m_{21}R_1
$$

and

$$
R_3\leftarrow R_3-m_{31}R_1.
$$

After these operations, the first column below the pivot becomes zero.

The matrix has the form

<div class="math-scroll">

$$
\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
0&*&*\\
0&*&*
\end{bmatrix}.
$$

</div>

Now we move to the second pivot.

---

# 16. The second elimination step

Suppose the second pivot is $a_{22}^{(new)}$.

The multiplier for eliminating the entry below it is

$$
m_{32}
=
\frac{a_{32}^{(new)}}{a_{22}^{(new)}}.
$$

Then

$$
R_3
\leftarrow
R_3-m_{32}R_2.
$$

The result is upper triangular:

<div class="math-scroll">

$$
U=
\begin{bmatrix}
u_{11}&u_{12}&u_{13}\\
0&u_{22}&u_{23}\\
0&0&u_{33}
\end{bmatrix}.
$$

</div>

The multipliers are

$$
m_{21},\quad m_{31},\quad m_{32}.
$$

So we store them in

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
m_{21}&1&0\\
m_{31}&m_{32}&1
\end{bmatrix}.
$$

</div>

Then

$$
A=LU.
$$

---

# 17. A complete $3\times3$ example

Consider

<div class="math-scroll">

$$
A=
\begin{bmatrix}
2&1&1\\
4&3&3\\
6&4&5
\end{bmatrix}.
$$

</div>

We begin with the first pivot:

$$
2.
$$

To eliminate the $4$:

$$
m_{21}=\frac{4}{2}=2.
$$

To eliminate the $6$:

$$
m_{31}=\frac{6}{2}=3.
$$

Therefore,

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-3R_1.
$$

The matrix becomes

<div class="math-scroll">

$$
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&1&2
\end{bmatrix}.
$$

</div>

---

# 18. Continue elimination

The second pivot is

$$
1.
$$

The entry below it is also $1$.

Therefore,

$$
m_{32}=\frac{1}{1}=1.
$$

Perform

$$
R_3\leftarrow R_3-R_2.
$$

We obtain

<div class="math-scroll">

$$
U=
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}.
$$

</div>

Now collect the elimination multipliers:

$$
m_{21}=2,
\qquad
m_{31}=3,
\qquad
m_{32}=1.
$$

Therefore,

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}.
$$

</div>

So the LU decomposition is

<div class="math-scroll">

$$
A=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}.
$$

</div>

---

# 19. Verify the decomposition

We should verify that

$$
LU=A.
$$

Multiply:

<div class="math-scroll">

$$
\begin{aligned}
LU
&=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}\\[6pt]
&=
\begin{bmatrix}
2&1&1\\
4&3&3\\
6&4&5
\end{bmatrix}.
\end{aligned}
$$

</div>

This is exactly our original matrix $A$.

Therefore,

$$
A=LU.
$$

---

# 20. LU is elimination written backwards

This is perhaps the most important conceptual point in the lesson.

During elimination, we start with

$$
A
$$

and transform it into

$$
U.
$$

Schematically,

$$
A\longrightarrow U.
$$

But LU decomposition says

$$
A=LU.
$$

So the matrix $L$ contains exactly the information needed to reconstruct $A$ from the upper-triangular matrix $U$.

In that sense:

> **$L$ records the elimination multipliers, while $U$ records the matrix after elimination.**

This is why LU decomposition is so closely connected to elimination.

---

# 21. Why is the diagonal of $L$ equal to 1?

In the standard LU decomposition without row exchanges, we choose

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&\cdots&0\\
m_{21}&1&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
m_{n1}&m_{n2}&\cdots&1
\end{bmatrix}.
$$

</div>

The diagonal entries are set equal to $1$.

This convention is called **unit lower triangular**.

It makes the decomposition convenient and, under appropriate conditions, uniquely determines $L$ and $U$.

For now, the main thing to remember is:

$$
L=\text{lower triangular with 1s on the diagonal}.
$$

---

# 22. Forward substitution

Once we have

$$
L\mathbf y=\mathbf b,
$$

we solve from the top downward.

For example,

<div class="math-scroll">

$$
\begin{bmatrix}
1&0&0\\
m_{21}&1&0\\
m_{31}&m_{32}&1
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}
=
\begin{bmatrix}
b_1\\
b_2\\
b_3
\end{bmatrix}.
$$

</div>

The equations are

$$
y_1=b_1,
$$

$$
m_{21}y_1+y_2=b_2,
$$

and

$$
m_{31}y_1+m_{32}y_2+y_3=b_3.
$$

So we solve in order:

$$
y_1,
$$

then

$$
y_2,
$$

then

$$
y_3.
$$

This is called **forward substitution**.

---

# 23. Back substitution

After finding $\mathbf y$, we solve

$$
U\mathbf{x}=\mathbf y.
$$

For an upper-triangular matrix,

<div class="math-scroll">

$$
\begin{bmatrix}
u_{11}&u_{12}&u_{13}\\
0&u_{22}&u_{23}\\
0&0&u_{33}
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}.
$$

</div>

Start at the bottom:

$$
u_{33}x_3=y_3.
$$

So find $x_3$ first.

Then use $x_3$ to find $x_2$.

Finally use $x_2$ and $x_3$ to find $x_1$.

This is called **back substitution**.

Therefore LU decomposition uses:

$$
\boxed{
\text{forward substitution}
\quad\longrightarrow\quad
\text{back substitution}.
}
$$

---

# 24. LU and the inverse

We previously learned that

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

Since

$$
A=LU,
$$

we can write

$$
A^{-1}=(LU)^{-1}.
$$

Using the inverse-of-a-product rule,

<div class="math-scroll">

$$
A^{-1}=U^{-1}L^{-1}.
$$

</div>

Therefore,

$$
\mathbf{x}
=
U^{-1}L^{-1}\mathbf b.
$$

Instead of explicitly calculating the two inverses, we perform the operations in the correct order:

First solve

$$
L\mathbf y=\mathbf b,
$$

then solve

$$
U\mathbf x=\mathbf y.
$$

So LU decomposition gives us a practical way to compute the same mathematical solution without explicitly constructing $A^{-1}$.

---

# 25. LU versus the inverse

This gives us an important distinction.

The inverse tells us

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

LU tells us how to obtain $\mathbf{x}$ efficiently:

<div class="math-scroll">

$$
A=LU
\quad\Longrightarrow\quad
\begin{cases}
L\mathbf y=\mathbf b,\\
U\mathbf x=\mathbf y.
\end{cases}
$$

</div>

So:

> **The inverse is a mathematical description of the solution; LU is a computational strategy for obtaining it.**

This distinction becomes increasingly important for large matrices.

---

# 26. What if we have many $\mathbf b$'s?

This is where LU becomes particularly useful.

Suppose $A$ is fixed and we need to solve

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf b_1,
\qquad
A\mathbf{x}_2=\mathbf b_2,
\qquad
\ldots
$$

</div>

We calculate

$$
A=LU
$$

only once.

For every new $\mathbf b$, we solve:

$$
L\mathbf y=\mathbf b
$$

followed by

$$
U\mathbf x=\mathbf y.
$$

The triangular matrices $L$ and $U$ do not change.

Only the right-hand side changes.

This makes LU decomposition especially useful when the same coefficient matrix appears repeatedly.

---

# 27. The connection to the previous lessons

We can now see a chain of ideas developing.

### Elimination

We transform

$$
A\longrightarrow U.
$$

### LU decomposition

We save the elimination information:

$$
A=LU.
$$

### Solving

We transform

$$
A\mathbf{x}=\mathbf b
$$

into

<div class="math-scroll">

$$
L\mathbf y=\mathbf b,
\qquad
U\mathbf x=\mathbf y.
$$

</div>

### Inverse

If $A$ is invertible,

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

These are not separate topics.

They are different ways of understanding the same linear system.

---

# 28. A geometric interpretation

There is also a useful geometric way to think about LU.

The original matrix $A$ represents a transformation.

The factorization

$$
A=LU
$$

says that this transformation can be viewed as two transformations applied in sequence.

First $U$ acts:

$$
\mathbf{x}
\longrightarrow
U\mathbf{x}.
$$

Then $L$ acts:

$$
U\mathbf{x}
\longrightarrow
L(U\mathbf{x}).
$$

Therefore,

$$
A\mathbf{x}=L(U\mathbf{x}).
$$

So

$$
A=LU
$$

means:

> **The transformation represented by $A$ can be decomposed into an upper-triangular transformation followed by a lower-triangular transformation.**

This is another reason matrix multiplication is so important.

---

# 29. A warning: row exchanges

There is one complication we should mention.

Sometimes ordinary elimination cannot proceed because a pivot is zero.

For example,

$$
A=
\begin{bmatrix}
0&1\\
2&3
\end{bmatrix}.
$$

The first pivot is zero.

We need to exchange the rows before continuing.

In such cases, the simple form

$$
A=LU
$$

needs to be modified.

We usually write

$$
PA=LU,
$$

where $P$ is a **permutation matrix** representing the row exchanges.

For now, we will focus first on matrices where no row exchanges are necessary.

Later, we can return to pivoting and the more general form

<div class="math-scroll">

$$
PA=LU.
$$

</div>

---

# 30. The main idea

LU decomposition is not a completely new algorithm.

It is elimination recorded in matrix form.

During elimination:

$$
A\longrightarrow U.
$$

The numbers used to eliminate entries below the pivots are stored in $L$.

Therefore:

$$
A=LU.
$$

Once $A=LU$ is known, solving

$$
A\mathbf{x}=\mathbf b
$$

becomes two triangular systems:

<div class="math-scroll">

$$
L\mathbf y=\mathbf b
$$

</div>

followed by

<div class="math-scroll">

$$
U\mathbf x=\mathbf y.
$$

</div>

So the central chain is:

<div class="math-scroll">

$$
\boxed{
A\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
LU\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
\begin{cases}
L\mathbf y=\mathbf b,\\
U\mathbf x=\mathbf y.
\end{cases}
}
$$

</div>

---

# Try it yourself

## Exercise 1 — Find $L$ and $U$

Find the LU decomposition of

<div class="math-scroll">

$$
A=
\begin{bmatrix}
2&1\\
6&4
\end{bmatrix}.
$$

</div>

Identify the elimination multiplier.

---

## Exercise 2 — Verify

For your answer from Exercise 1, verify that

$$
LU=A.
$$

---

## Exercise 3 — Solve using LU

Using the LU decomposition from Exercise 1, solve

<div class="math-scroll">

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
5\\
14
\end{bmatrix}.
$$

</div>

Do not perform elimination again.

Instead:

1. Solve $L\mathbf y=\mathbf b$.
2. Solve $U\mathbf x=\mathbf y$.

---

## Exercise 4 — Conceptual

Why does LU decomposition save work when we need to solve

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf b_1,
\qquad
A\mathbf{x}_2=\mathbf b_2,
\qquad
A\mathbf{x}_3=\mathbf b_3?
$$

</div>

---

## Exercise 5 — Think about the multipliers

Suppose elimination uses

$$
m_{21}=3,
\qquad
m_{31}=2,
\qquad
m_{32}=4.
$$

What does the corresponding lower-triangular matrix $L$ look like?

---

# What is next?

We have now seen three ways of thinking about the same problem:

$$
A\mathbf{x}=\mathbf b.
$$

**Elimination** transforms $A$ into an upper-triangular matrix.

**The inverse** tells us that

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

**LU decomposition** records the elimination process:

$$
A=LU.
$$

But there is a deeper question behind all of these methods:

> **What exactly determines whether a system has a solution, whether that solution is unique, and what the columns of $A$ are capable of producing?**

To answer that, we need to study the relationships among the columns of a matrix.

This leads us to the next major ideas:

**Linear Combinations, Span, and Linear Independence.**
