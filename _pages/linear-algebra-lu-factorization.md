---
layout: linear-algebra-lesson
title: 'LU Decomposition'
lesson_number: 8
module: "Module 2 · Matrix Algebra"
description: "Understanding LU decomposition as elimination written in matrix form."
permalink: /linear-algebra/lu-factorization/
---

# LU Decomposition

In the previous lessons, we learned how to solve

$$
A\mathbf{x}=\mathbf{b}
$$

using elimination.

We also learned that if $A$ is invertible,

$$
\mathbf{x}=A^{-1}\mathbf{b}.
$$

Now we will look more carefully at **what elimination is doing to the matrix $A$**.

This will lead us to a very useful factorization:

$$
A=LU.
$$

Rather than starting with this formula, let's discover where it comes from.

---

# 1. Why do we eliminate?

Consider

<div class="math-scroll">

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

</div>

Suppose we want to solve

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

The first pivot is $2$.

There is a $4$ below it. We want to eliminate that $4$.

The multiplier is

$$
m_{21}=\frac{4}{2}=2.
$$

So we perform

$$
R_2\leftarrow R_2-2R_1.
$$

This gives

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

Why is this useful?

Because the new system is triangular:

$$
\begin{aligned}
2x+y&=5,\\
y&=1.
\end{aligned}
$$

We can solve the second equation first and then substitute back.

So elimination is useful because it turns $A$ into a matrix that is easier to solve with.

---

# 2. Where does $U$ come from?

Look at the matrix after elimination:

$$
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Everything below the main diagonal is zero.

A matrix with this shape is called **upper triangular**.

So we give it the name

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

The letter $U$ simply stands for **upper triangular**.

Thus, in this example,

$$
A\longrightarrow U
$$

means that Gaussian elimination has transformed $A$ into the upper-triangular matrix $U$.

So far, there is nothing new.

We have simply renamed something we already know.

---

# 3. But elimination used a number

Go back to the elimination step:

$$
R_2\leftarrow R_2-2R_1.
$$

The number

$$
2
$$

was important.

It told us exactly how we performed the elimination.

We call it the **elimination multiplier**:

$$
m_{21}=2.
$$

After obtaining $U$, we could simply forget this number.

But suppose we don't want to forget it.

Suppose we want to keep a record of the elimination process.

Where could we put it?

---

# 4. Saving the elimination multiplier

Our multiplier was

$$
m_{21}=2.
$$

It was used to eliminate the entry in row 2, column 1.

So we place it in position $(2,1)$:

$$
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

We call this matrix $L$:

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Notice its shape.

Everything above the diagonal is zero, so $L$ is **lower triangular**.

That explains the letter $L$.

Thus:

$$
L=
\text{lower-triangular matrix containing the elimination multiplier}.
$$

For our example,

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix},
\qquad
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

</div>

But why should these two matrices be related to $A$?

Let's find out.

---

# 5. Multiply $L$ and $U$

Calculate

<div class="math-scroll">

$$
LU=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

</div>

Using the row-column rule:

$$
LU=
\begin{bmatrix}
1(2)+0(0)&1(1)+0(1)\\
2(2)+1(0)&2(1)+1(1)
\end{bmatrix}.
$$

Therefore,

$$
LU=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

But this is exactly our original matrix:

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

Therefore,

$$
\boxed{A=LU}.
$$

This is LU decomposition.

---

# 6. What just happened?

Let's slow down here.

We started with

$$
A.
$$

We performed elimination and obtained

$$
U.
$$

During elimination, we used the multiplier

$$
m_{21}=2.
$$

We saved that multiplier in $L$.

Then we discovered that

$$
LU=A.
$$

So $L$ and $U$ are not two arbitrary matrices.

They contain two different pieces of information:

$$
\boxed{
U=\text{matrix after elimination}
}
$$

and

$$
\boxed{
L=\text{elimination multipliers}
}
$$

Therefore,

$$
\boxed{A=LU}.
$$

That is the central idea.

---

# 7. A $3\times3$ example

Now let's see how this works when there are several elimination steps.

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

We perform ordinary elimination.

---

## First pivot

The first pivot is $2$.

To eliminate the $4$:

$$
m_{21}=\frac{4}{2}=2.
$$

To eliminate the $6$:

$$
m_{31}=\frac{6}{2}=3.
$$

So we perform

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-3R_1.
$$

We obtain

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

## Second pivot

The second pivot is $1$.

The entry below it is also $1$.

Therefore,

$$
m_{32}=\frac{1}{1}=1.
$$

Perform

$$
R_3\leftarrow R_3-R_2.
$$

Now we obtain

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

We now have the $U$ matrix.

---

# 8. How do we get $L$?

Now look back at the multipliers we used:

$$
m_{21}=2,
\qquad
m_{31}=3,
\qquad
m_{32}=1.
$$

Place them below the diagonal and put $1$'s on the diagonal:

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

So our two matrices are

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix},
\qquad
U=
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}.
$$

</div>

Therefore,

$$
A=LU.
$$

Let's verify.

---

# 9. Verify $A=LU$

Multiply:

<div class="math-scroll">

$$
LU=
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

The first row is

$$
\begin{bmatrix}
2&1&1
\end{bmatrix}.
$$

The second row is

<div class="math-scroll">

$$
2
\begin{bmatrix}
2&1&1
\end{bmatrix}
+
\begin{bmatrix}
0&1&1
\end{bmatrix}
=
\begin{bmatrix}
4&3&3
\end{bmatrix}.
$$

</div>

The third row is

<div class="math-scroll">

$$
3
\begin{bmatrix}
2&1&1
\end{bmatrix}
+
\begin{bmatrix}
0&1&1
\end{bmatrix}
+
\begin{bmatrix}
0&0&1
\end{bmatrix}
=
\begin{bmatrix}
6&4&5
\end{bmatrix}.
$$

</div>

Therefore,

<div class="math-scroll">

$$
LU=
\begin{bmatrix}
2&1&1\\
4&3&3\\
6&4&5
\end{bmatrix}
=A.
$$

</div>

So the factorization is correct.

---

# 10. The pattern

Now we can see the general pattern.

Suppose elimination gives

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

Suppose the elimination multipliers are

$$
m_{21},\qquad m_{31},\qquad m_{32}.
$$

Then

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

The original matrix is

$$
A=LU.
$$

So, when performing elimination, there are now **two things to record**:

1. The matrix you end up with: $U$.
2. The multipliers you used: $L$.

That's all we need to construct the LU decomposition.

---

# 11. Why is LU useful for solving $A\mathbf{x}=\mathbf b$?

Suppose

$$
A\mathbf{x}=\mathbf b.
$$

Since

$$
A=LU,
$$

we can write

$$
LU\mathbf{x}=\mathbf b.
$$

Now introduce an intermediate vector:

$$
\mathbf y=U\mathbf{x}.
$$

Then

$$
L\mathbf y=\mathbf b.
$$

Once we find $\mathbf y$, we solve

$$
U\mathbf{x}=\mathbf y.
$$

Therefore one system becomes two:

<div class="math-scroll">

$$
\boxed{
\begin{aligned}
L\mathbf y&=\mathbf b,\\
U\mathbf x&=\mathbf y.
\end{aligned}
}
$$

</div>

The first system uses a lower-triangular matrix, so we use **forward substitution**.

The second uses an upper-triangular matrix, so we use **back substitution**.

---

# 12. Solve a system using our LU decomposition

We already found

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix},
\qquad
U=
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}.
$$

</div>

Let's solve

<div class="math-scroll">

$$
A\mathbf{x}
=
\begin{bmatrix}
5\\
11\\
17
\end{bmatrix}.
$$

</div>

Since $A=LU$, first solve

$$
L\mathbf y=\mathbf b.
$$

That is,

<div class="math-scroll">

$$
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}
=
\begin{bmatrix}
5\\
11\\
17
\end{bmatrix}.
$$

</div>

The equations are

$$
y_1=5,
$$

$$
2y_1+y_2=11,
$$

$$
3y_1+y_2+y_3=17.
$$

Therefore,

$$
y_1=5.
$$

Then

$$
2(5)+y_2=11,
$$

so

$$
y_2=1.
$$

Finally,

$$
3(5)+1+y_3=17,
$$

so

$$
y_3=1.
$$

Thus,

$$
\mathbf y=
\begin{bmatrix}
5\\
1\\
1
\end{bmatrix}.
$$

---

# 13. Now solve $U\mathbf{x}=\mathbf y$

We have

<div class="math-scroll">

$$
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
5\\
1\\
1
\end{bmatrix}.
$$

</div>

Start at the bottom:

$$
x_3=1.
$$

Then

$$
x_2+x_3=1,
$$

so

$$
x_2=0.
$$

Finally,

$$
2x_1+x_2+x_3=5.
$$

Therefore,

$$
2x_1+1=5,
$$

so

$$
x_1=2.
$$

Thus,

$$
\boxed{
\mathbf{x}=
\begin{bmatrix}
2\\
0\\
1
\end{bmatrix}
}.
$$

---

# 14. Why is this useful when $\mathbf b$ changes?

Suppose the matrix $A$ stays the same but the right-hand side changes.

For example,

$$
A\mathbf{x}_1=\mathbf b_1
$$

and later

$$
A\mathbf{x}_2=\mathbf b_2.
$$

The elimination of $A$ is the same in both cases.

Therefore, we can calculate

$$
A=LU
$$

once.

For every new $\mathbf b$, we only need to solve

$$
L\mathbf y=\mathbf b
$$

and then

$$
U\mathbf x=\mathbf y.
$$

So LU is particularly useful when the same matrix $A$ appears in many systems.

---

# 15. LU and the inverse

We previously learned

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

If

$$
A=LU,
$$

then

$$
A^{-1}=U^{-1}L^{-1}.
$$

But in practice, we usually do not need to calculate these inverses explicitly.

Instead, we solve

$$
L\mathbf y=\mathbf b
$$

and then

$$
U\mathbf x=\mathbf y.
$$

So LU gives us a practical way to solve

$$
A\mathbf{x}=\mathbf b
$$

without explicitly calculating $A^{-1}$.

---

# 16. The complete picture

We can now summarize the entire process.

Start with

$$
A.
$$

### Eliminate

Use Gaussian elimination to produce an upper-triangular matrix:

$$
A\longrightarrow U.
$$

### Save the multipliers

The elimination multipliers are placed below the diagonal to form $L$.

### Factorize

The result is

$$
\boxed{A=LU}.
$$

### Solve

To solve

$$
A\mathbf{x}=\mathbf b,
$$

first solve

$$
L\mathbf y=\mathbf b
$$

and then

$$
U\mathbf x=\mathbf y.
$$

So:

$$
\boxed{
A
\overset{\text{elimination}}{\longrightarrow}
U
}
$$

while the multipliers used along the way give us $L$.

---

# Key idea

The important thing is not to memorize $A=LU$.

Remember the process:

> **$U$ is what elimination produces.**

> **$L$ records the multipliers used during elimination.**

Therefore,

$$
\boxed{A=LU}.
$$

And once we have $L$ and $U$, solving

$$
A\mathbf{x}=\mathbf b
$$

becomes two triangular problems:

$$
L\mathbf y=\mathbf b
$$

followed by

$$
U\mathbf x=\mathbf y.
$$

---

# Exercises

## Exercise 1 — Find the multiplier

Consider

$$
A=
\begin{bmatrix}
3&1\\
6&4
\end{bmatrix}.
$$

Find the elimination multiplier.

### Solution

The first pivot is $3$.

The entry below it is $6$.

Therefore,

$$
m_{21}=\frac{6}{3}=2.
$$

So the elimination step is

$$
R_2\leftarrow R_2-2R_1.
$$

---

## Exercise 2 — Find $L$ and $U$

Using the matrix from Exercise 1, find $L$ and $U$.

### Solution

Perform elimination:

<div class="math-scroll">

$$
\begin{bmatrix}
3&1\\
6&4
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
3&1\\
0&2
\end{bmatrix}.
$$

</div>

Therefore,

$$
U=
\begin{bmatrix}
3&1\\
0&2
\end{bmatrix}.
$$

The multiplier was

$$
m_{21}=2.
$$

Therefore,

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Check:

<div class="math-scroll">

$$
LU=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
\begin{bmatrix}
3&1\\
0&2
\end{bmatrix}
=
\begin{bmatrix}
3&1\\
6&4
\end{bmatrix}
=A.
$$

</div>

---

## Exercise 3 — Find the LU decomposition

Find the LU decomposition of

<div class="math-scroll">

$$
A=
\begin{bmatrix}
1&1&1\\
2&3&4\\
3&4&6
\end{bmatrix}.
$$

</div>

### Solution

The first pivot is $1$.

For the second row:

$$
m_{21}=\frac{2}{1}=2.
$$

For the third row:

$$
m_{31}=\frac{3}{1}=3.
$$

Perform

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3-3R_1.
$$

We obtain

<div class="math-scroll">

$$
\begin{bmatrix}
1&1&1\\
0&1&2\\
0&1&3
\end{bmatrix}.
$$

</div>

The second pivot is $1$.

Therefore,

$$
m_{32}=\frac{1}{1}=1.
$$

Perform

$$
R_3\leftarrow R_3-R_2.
$$

Thus,

$$
U=
\begin{bmatrix}
1&1&1\\
0&1&2\\
0&0&1
\end{bmatrix}.
$$

The multipliers are

$$
m_{21}=2,\qquad
m_{31}=3,\qquad
m_{32}=1.
$$

Therefore,

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}.
$$

Hence,

<div class="math-scroll">

$$
\boxed{
A=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
\begin{bmatrix}
1&1&1\\
0&1&2\\
0&0&1
\end{bmatrix}
}.
$$

</div>

---

## Exercise 4 — Solve using LU

Using

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix},
\qquad
U=
\begin{bmatrix}
1&1&1\\
0&1&2\\
0&0&1
\end{bmatrix},
$$

</div>

solve

<div class="math-scroll">

$$
A\mathbf{x}
=
\begin{bmatrix}
1\\
3\\
5
\end{bmatrix}.
$$

</div>

### Solution

First solve

$$
L\mathbf y=\mathbf b.
$$

Therefore,

<div class="math-scroll">

$$
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}
=
\begin{bmatrix}
1\\
3\\
5
\end{bmatrix}.
$$

</div>

From the first equation:

$$
y_1=1.
$$

From the second:

$$
2(1)+y_2=3,
$$

so

$$
y_2=1.
$$

From the third:

$$
3(1)+1+y_3=5,
$$

so

$$
y_3=1.
$$

Thus,

$$
\mathbf y=
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}.
$$

Now solve

$$
U\mathbf{x}=\mathbf y.
$$

That is,

<div class="math-scroll">

$$
\begin{bmatrix}
1&1&1\\
0&1&2\\
0&0&1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}.
$$

</div>

Start from the bottom:

$$
x_3=1.
$$

Then

$$
x_2+2(1)=1,
$$

so

$$
x_2=-1.
$$

Finally,

$$
x_1+(-1)+1=1.
$$

Therefore,

$$
x_1=1.
$$

Hence,

$$
\boxed{
\mathbf{x}=
\begin{bmatrix}
1\\
-1\\
1
\end{bmatrix}
}.
$$

---

# What is next?

We have now seen how elimination can be organized into the factorization

$$
A=LU.
$$

But throughout this course, we have repeatedly encountered the columns of a matrix.

Recall that if

$$
A=
\begin{bmatrix}
\mathbf a_1&\mathbf a_2&\cdots&\mathbf a_n
\end{bmatrix},
$$

then

<div class="math-scroll">

$$
A\mathbf{x}
=
x_1\mathbf a_1+x_2\mathbf a_2+\cdots+x_n\mathbf a_n.
$$

</div>

So a system

$$
A\mathbf{x}=\mathbf b
$$

is really asking:

> **Can $\mathbf b$ be built from the columns of $A$?**

And if it can, is there only one way to build it?

These questions lead us to the next major ideas:

**Linear Combinations, Span, and Linear Independence.**
