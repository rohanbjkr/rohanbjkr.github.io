---
title: "Elimination Matrices"

permalink: /linear-algebra/elimination-matrices/

layout: linear-algebra-lesson

lesson_number: 3

module: "Module 1 · Linear Equations"

description: "Seeing elimination as multiplication by matrices."
---

# Elimination Matrices

In the previous lesson, we learned how to solve systems of linear equations using **elimination**.

We repeatedly performed operations such as

$$
R_2 \leftarrow R_2-2R_1.
$$

This works very well.

But linear algebra asks a deeper question:

> **Can we describe an elimination step using a matrix?**

The answer is **yes**.

And this idea gives us a beautiful connection between equations, row operations, and matrix multiplication.


## 1. Start with a simple system

Consider

$$
\begin{aligned}
x_1+x_2 &= 3,\\
2x_1+3x_2 &= 8.
\end{aligned}
$$

In matrix form,

$$
A\mathbf{x}=\mathbf{b},
$$

where

$$
A=
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix},
\qquad
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix},
\qquad
\mathbf{b}
=
\begin{bmatrix}
3\\
8
\end{bmatrix}.
$$

So

$$
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
\begin{bmatrix}
3\\
8
\end{bmatrix}.
$$


## 2. Perform elimination

We want to eliminate \(x_1\) from the second equation.

The first row is

$$
R_1=[1\quad1].
$$

The second row is

$$
R_2=[2\quad3].
$$

So we perform

$$
R_2\leftarrow R_2-2R_1.
$$

The coefficient matrix becomes

$$
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

The right-hand side must undergo the same operation:

$$
3\rightarrow 8-2(3)=2.
$$

Therefore the transformed system is

$$
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

The system is now triangular.


## 3. Where does the elimination matrix come from?

Here is the key idea.

We want a matrix that performs

$$
R_2\leftarrow R_2-2R_1.
$$

Consider

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

Now multiply \(E\) by \(A\):

$$
EA
=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}.
$$

Calculate the rows.

The first row remains unchanged:

$$
[1\quad0]A
=
[1\quad1].
$$

The second row becomes

$$
[-2\quad1]A
=
-2R_1+R_2.
$$

Therefore,

$$
EA
=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

Exactly what we wanted.


## 4. The elimination matrix

We call

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}
$$

an **elimination matrix**.

Its job is to perform the row operation

$$
R_2\leftarrow R_2-2R_1.
$$

So instead of writing

$$
R_2\leftarrow R_2-2R_1,
$$

we can write

$$
EA=U.
$$

Here,

$$
U=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

This is a much more powerful way of thinking about elimination.


## 5. Why does multiplication by \(E\) change the rows?

Remember how matrix multiplication works.

If

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix},
$$

then its first row is

$$
[1\quad0].
$$

When this row multiplies \(A\), it selects the first row of \(A\):

$$
[1\quad0]A=R_1.
$$

The second row is

$$
[-2\quad1].
$$

Therefore,

$$
[-2\quad1]A=-2R_1+R_2.
$$

So the matrix \(E\) is essentially telling us:

> Keep Row 1. Replace Row 2 with Row 2 minus 2 times Row 1.


## 6. The same operation happens to \(b\)

Remember our original system:

$$
A\mathbf{x}=\mathbf{b}.
$$

If we multiply both sides by \(E\), we get

$$
E(A\mathbf{x})=E\mathbf{b}.
$$

Using associativity,

$$
(EA)\mathbf{x}=E\mathbf{b}.
$$

So

$$
A\mathbf{x}=\mathbf{b}
$$

becomes

$$
U\mathbf{x}=\mathbf{c},
$$

where

$$
U=EA
$$

and

$$
\mathbf{c}=E\mathbf{b}.
$$

This is exactly what elimination does.

It transforms **both sides of the system at the same time**.


## 7. A geometric interpretation

There is another way to understand this.

Our original system was

$$
A\mathbf{x}=\mathbf{b}.
$$

The vector

$$
\mathbf{b}
$$

is transformed by the elimination matrix:

$$
\mathbf{c}=E\mathbf{b}.
$$

At the same time, the matrix \(A\) is transformed:

$$
U=EA.
$$

So the entire equation becomes

$$
A\mathbf{x}=\mathbf{b}
$$

\[
\Downarrow
\]

$$
EA\mathbf{x}=E\mathbf{b}
$$

or

$$
U\mathbf{x}=\mathbf{c}.
$$

The solution \(\mathbf{x}\) has not changed.

We have simply transformed the system into a form that is easier to solve.


## 8. A general elimination matrix

Suppose we want to perform

$$
R_i\leftarrow R_i-mR_j.
$$

The corresponding elimination matrix is the identity matrix with one entry changed.

For example, for

$$
R_2\leftarrow R_2-mR_1,
$$

we use

$$
E=
\begin{bmatrix}
1&0\\
-m&1
\end{bmatrix}.
$$

For a three-by-three matrix,

$$
R_3\leftarrow R_3-mR_1
$$

would use

$$
E=
\begin{bmatrix}
1&0&0\\
0&1&0\\
-m&0&1
\end{bmatrix}.
$$

The pattern is important.

The diagonal remains \(1\), while the elimination multiplier appears below the pivot.


## 9. Elimination of a larger system

Consider

$$
A=
\begin{bmatrix}
1&2&1\\
2&5&2\\
-1&-1&1
\end{bmatrix}.
$$

From the previous lesson, we performed

$$
R_2\leftarrow R_2-2R_1
$$

and

$$
R_3\leftarrow R_3+R_1.
$$

The first elimination matrix is

$$
E_1=
\begin{bmatrix}
1&0&0\\
-2&1&0\\
1&0&1
\end{bmatrix}.
$$

Multiplying,

$$
E_1A
$$

performs both operations simultaneously.

The result is

$$
E_1A=
\begin{bmatrix}
1&2&1\\
0&1&0\\
0&1&2
\end{bmatrix}.
$$


## 10. A second elimination step

Now we want to eliminate the \(1\) below the second pivot.

The operation is

$$
R_3\leftarrow R_3-R_2.
$$

The corresponding elimination matrix is

$$
E_2=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&-1&1
\end{bmatrix}.
$$

Therefore,

$$
E_2E_1A
$$

produces the upper-triangular matrix

$$
U=
\begin{bmatrix}
1&2&1\\
0&1&0\\
0&0&2
\end{bmatrix}.
$$

So the complete elimination process can be written as

$$
\boxed{
E_2E_1A=U
}.
$$


## 11. Why are there two matrices?

This is an important point.

We performed two elimination steps.

The first step was represented by

$$
E_1.
$$

The second step was represented by

$$
E_2.
$$

Therefore,

$$
A
\longrightarrow
E_1A
\longrightarrow
E_2E_1A.
$$

Notice the order.

The matrix \(E_1\) acts first.

Then \(E_2\) acts on the result.

This is exactly like functions:

$$
f(g(x))
$$

where \(g\) happens first and \(f\) happens second.


## 12. Elimination and the identity matrix

There is an even deeper connection.

Suppose we continue elimination until the matrix becomes the identity matrix:

$$
E_kE_{k-1}\cdots E_2E_1A=I.
$$

Then we have transformed \(A\) into \(I\).

This means

$$
E_kE_{k-1}\cdots E_2E_1=A^{-1}.
$$

Therefore,

$$
\boxed{
A^{-1}
=
E_kE_{k-1}\cdots E_2E_1
}.
$$

So the inverse of a matrix can be understood as the **product of the elimination matrices that reduce the matrix to the identity**.

This is one of the central ideas behind Gaussian elimination.


## 13. Why the identity matrix appears

Remember:

$$
IA=A.
$$

The identity matrix does nothing.

Therefore, if we can find a matrix \(E\) such that

$$
EA=I,
$$

then \(E\) must be the inverse of \(A\).

By definition,

$$
A^{-1}A=I.
$$

So elimination gives us a practical way of constructing \(A^{-1}\).


## 14. The connection to solving Ax = b

We started with

$$
A\mathbf{x}=\mathbf{b}.
$$

After elimination,

$$
E_k\cdots E_2E_1A\mathbf{x}
=
E_k\cdots E_2E_1\mathbf{b}.
$$

If the left side becomes \(I\mathbf{x}\), then

$$
\mathbf{x}
=
E_k\cdots E_2E_1\mathbf{b}.
$$

But we just saw that

$$
E_k\cdots E_2E_1=A^{-1}.
$$

Therefore,

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf{b}
}.
$$

This connects three ideas:

$$
\boxed{
\text{Elimination}
\quad\Longleftrightarrow\quad
\text{Inverse Matrix}
\quad\Longleftrightarrow\quad
A^{-1}\mathbf{b}
}
$$

However, there is an important computational lesson:

> We usually **do not calculate \(A^{-1}\)** just to solve one system.

Elimination is generally the more direct approach.


## 15. The big picture

We can now see the structure of the first three lessons.

### Lesson 1

We asked:

> What does \(A\mathbf{x}=\mathbf{b}\) mean?

We saw equations, geometry, and vectors.

### Lesson 2

We asked:

> How can we solve \(A\mathbf{x}=\mathbf{b}\)?

We learned elimination.

### Lesson 3

We ask:

> What is elimination in matrix language?

The answer is:

$$
\boxed{
\text{Elimination is multiplication by elimination matrices.}
}
$$

This is the bridge between elementary row operations and matrix algebra.


## Key idea

<div class="key-idea">

<div class="key-idea-title">
The main idea
</div>

An elimination step such as

$$
R_2\leftarrow R_2-mR_1
$$

can be represented by multiplying the matrix on the left by an elimination matrix.

Thus,

$$
EA=U
$$

is the matrix version of Gaussian elimination.

</div>


## Try it yourself

Consider

$$
A=
\begin{bmatrix}
1&2\\
3&7
\end{bmatrix}.
$$

We want to eliminate the \(3\) below the first pivot.

### Question 1

What row operation should we perform?

### Question 2

What elimination matrix \(E\) performs this operation?

### Question 3

Verify that

$$
EA
$$

is upper triangular.

<details>

<summary>Show solution</summary>

We want

$$
R_2\leftarrow R_2-3R_1.
$$

Therefore,

$$
E=
\begin{bmatrix}
1&0\\
-3&1
\end{bmatrix}.
$$

Now multiply:

$$
EA=
\begin{bmatrix}
1&0\\
-3&1
\end{bmatrix}
\begin{bmatrix}
1&2\\
3&7
\end{bmatrix}.
$$

Therefore,

$$
EA=
\begin{bmatrix}
1&2\\
0&1
\end{bmatrix}.
$$

The matrix is upper triangular.

</details>


## One more thing to notice

There is a pattern in the elimination matrices:

$$
E=
\begin{bmatrix}
1&0&0\\
-m_{21}&1&0\\
-m_{31}&0&1
\end{bmatrix}.
$$

The numbers

$$
m_{21},\quad m_{31},\ldots
$$

are called **multipliers**.

These multipliers will become extremely important when we study **LU factorization** later in the course.

For now, remember:

$$
\boxed{
\text{The multipliers used in elimination are stored inside the elimination matrices.}
}
$$


## What's next?

We have now seen elimination from three different perspectives:

$$
\text{Equations}
\longrightarrow
\text{Row operations}
\longrightarrow
\text{Matrix multiplication}.
$$

But there is still a practical question:

> **How does all of this fit together for a general system \(A\mathbf{x}=\mathbf{b}\)?**

In the next lesson, we will return to the original problem of solving

$$
\boxed{A\mathbf{x}=\mathbf{b}}
$$

and use everything we have learned so far to understand the different possibilities:

- one solution,
- no solution, or
- infinitely many solutions.
