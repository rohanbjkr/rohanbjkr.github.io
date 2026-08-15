---
title: "Elimination Matrices"
permalink: /linear-algebra/elimination-matrices/
layout: linear-algebra-lesson
lesson_number: 3
module: "Module 1 · Linear Equations"
description: "Understanding how row operations can be represented by matrix multiplication."
---

# Elimination Matrices

In the previous lesson, we learned how to solve systems of equations using **elimination**.

For example, we used row operations such as

$$
R_2 \leftarrow R_2-2R_1
$$

to eliminate variables.

That was useful computationally.

But now we ask a deeper question:

> **Can a matrix itself perform this row operation?**

The answer is yes.

Such a matrix is called an **elimination matrix**.

The important part is understanding where that matrix comes from. We will not simply write it down—we will build it from something we already know.


## 1. Start with a system

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

Therefore,

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


## 2. Perform ordinary elimination first

We want to eliminate \(x_1\) from the second equation.

The equations are

$$
\begin{aligned}
x_1+x_2 &= 3,\\
2x_1+3x_2 &= 8.
\end{aligned}
$$

The first coefficient in Row 1 is \(1\).

The first coefficient in Row 2 is \(2\).

Therefore, subtract twice Row 1 from Row 2:

$$
R_2\leftarrow R_2-2R_1.
$$

Let's do it explicitly:

$$
(2x_1+3x_2)-2(x_1+x_2)=8-2(3).
$$

This gives

$$
x_2=2.
$$

At the matrix level,

$$
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

The \(2\) below the first pivot has disappeared.

This is exactly what we wanted.


## 3. A new question

Until now, we have written the elimination step as

$$
R_2\leftarrow R_2-2R_1.
$$

But suppose we want a matrix \(E\) that performs this operation automatically.

We want

$$
EA
=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

What should \(E\) be?

It might seem that we need to guess.

We do not.

There is a systematic way to construct it.


## 4. Start with the identity matrix

Consider the identity matrix

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

We already know that the identity matrix does nothing:

$$
IA=A.
$$

For our matrix,

$$
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}
=
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}.
$$

But why does this happen?

Understanding that will tell us how to construct an elimination matrix.


## 5. What does the first row of the identity matrix do?

The first row of \(I\) is

$$
[1\quad0].
$$

When it multiplies \(A\),

$$
[1\quad0]
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix},
$$

we get

$$
[1\quad1].
$$

That is exactly Row 1 of \(A\).

In other words,

$$
[1\quad0]A=R_1.
$$

The numbers \(1\) and \(0\) are telling us

$$
1R_1+0R_2.
$$

So the first row of the identity matrix says:

> Take one copy of Row 1 and zero copies of Row 2.


## 6. What does the second row do?

The second row of \(I\) is

$$
[0\quad1].
$$

Therefore,

$$
[0\quad1]A=R_2.
$$

The coefficients \(0\) and \(1\) mean

$$
0R_1+1R_2.
$$

So the identity matrix can be interpreted as

$$
IA
=
\begin{bmatrix}
R_1\\
R_2
\end{bmatrix}.
$$

This is why \(IA=A\).

The identity matrix simply asks for the original rows back.


## 7. Now construct the elimination matrix

Our elimination operation is

$$
R_2\leftarrow R_2-2R_1.
$$

We want:

- Row 1 to remain \(R_1\)
- Row 2 to become \(R_2-2R_1\)

The first row is easy.

We want

$$
R_1,
$$

so we keep

$$
[1\quad0].
$$

Now consider the second row.

We want

$$
R_2-2R_1.
$$

Rewrite it in the order \(R_1,R_2\):

$$
-2R_1+1R_2.
$$

The coefficients are therefore

$$
[-2\quad1].
$$

So instead of using

$$
[0\quad1]
$$

as the second row of the identity matrix, we use

$$
[-2\quad1].
$$

Therefore,

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

That is our elimination matrix.


## 8. Where did the \(-2\) come from?

This is worth emphasizing.

The \(-2\) was **not guessed**.

It came directly from the row operation

$$
R_2\leftarrow R_2-2R_1.
$$

We can write the new second row as

$$
-2R_1+1R_2.
$$

Therefore its coefficients are

$$
[-2\quad1].
$$

Those coefficients become the second row of \(E\).

The logic is simply

$$
R_2-2R_1
$$

$$
\Downarrow
$$

$$
-2R_1+1R_2
$$

$$
\Downarrow
$$

$$
[-2\quad1]
$$

$$
\Downarrow
$$

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$


## 9. Verify that it works

Now let's multiply \(E\) and \(A\):

$$
EA=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}.
$$

Look at the first row:

$$
[1\quad0]A=R_1.
$$

Therefore the first row remains

$$
[1\quad1].
$$

Now look at the second row:

$$
[-2\quad1]A=-2R_1+R_2.
$$

Since

$$
R_1=[1\quad1]
$$

and

$$
R_2=[2\quad3],
$$

we get

$$
-2[1\quad1]+[2\quad3].
$$

Therefore,

$$
[-2\quad-2]+[2\quad3]
=
[0\quad1].
$$

So

$$
EA=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

Exactly the matrix produced by ordinary elimination.


## 10. The general rule

Now suppose the number below the pivot is not \(2\), but some number \(m\).

The elimination operation would be

$$
R_2\leftarrow R_2-mR_1.
$$

Rewrite the new second row as

$$
-mR_1+R_2.
$$

Therefore the coefficients are

$$
[-m\quad1].
$$

Starting from

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix},
$$

replace the second row with

$$
[-m\quad1].
$$

This gives

$$
E=
\begin{bmatrix}
1&0\\
-m&1
\end{bmatrix}.
$$

Then

$$
EA
$$

performs the row operation

$$
R_2\leftarrow R_2-mR_1.
$$


## 11. What is the multiplier \(m\)?

Suppose

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}.
$$

We want to eliminate \(c\).

The first pivot is \(a\).

We ask:

> How many copies of the pivot \(a\) do we need to subtract from \(c\) to make it zero?

The answer is

$$
m=\frac{c}{a}.
$$

Because

$$
c-ma
=
c-\frac{c}{a}a
=
0.
$$

So the elimination operation is

$$
R_2\leftarrow R_2-\frac{c}{a}R_1.
$$

The corresponding elimination matrix is

$$
E=
\begin{bmatrix}
1&0\\
-\frac{c}{a}&1
\end{bmatrix}.
$$

This shows exactly where the multiplier comes from.


## 12. Why do we multiply on the left?

Notice that we write

$$
EA,
$$

not

$$
AE.
$$

This is important.

Left multiplication combines the **rows** of \(A\).

For example,

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

The first row says

$$
1R_1+0R_2.
$$

The second row says

$$
-2R_1+1R_2.
$$

Therefore,

$$
EA
=
\begin{bmatrix}
R_1\\
R_2-2R_1
\end{bmatrix}.
$$

So elementary row operations are performed by multiplying \(A\) from the **left**.


## 13. What happens to the right-hand side?

Remember that our original system is

$$
A\mathbf{x}=\mathbf{b}.
$$

If we perform elimination on \(A\), we must perform the same operation on \(\mathbf{b}\).

Multiply both sides by \(E\):

$$
E(A\mathbf{x})=E\mathbf{b}.
$$

Matrix multiplication is associative, so

$$
(EA)\mathbf{x}=E\mathbf{b}.
$$

If we call

$$
U=EA
$$

and

$$
\mathbf{c}=E\mathbf{b},
$$

then the transformed system is

$$
U\mathbf{x}=\mathbf{c}.
$$

The solution \(\mathbf{x}\) has not changed.

We have simply transformed the equations into a form that is easier to solve.


## 14. Apply it to our example

Recall

$$
A=
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix},
\qquad
\mathbf{b}
=
\begin{bmatrix}
3\\
8
\end{bmatrix}.
$$

Our elimination matrix is

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

We already found

$$
EA=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

Now apply \(E\) to \(\mathbf{b}\):

$$
E\mathbf{b}
=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}
\begin{bmatrix}
3\\
8
\end{bmatrix}.
$$

Therefore,

$$
E\mathbf{b}
=
\begin{bmatrix}
3\\
-2(3)+8
\end{bmatrix}
=
\begin{bmatrix}
3\\
2
\end{bmatrix}.
$$

So the original system

$$
A\mathbf{x}=\mathbf{b}
$$

has become

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

The second equation immediately gives

$$
x_2=2.
$$

Then the first equation gives

$$
x_1+x_2=3,
$$

so

$$
x_1=1.
$$


## 15. Now try a \(3\times3\) matrix

Consider

$$
A=
\begin{bmatrix}
1&2&1\\
2&5&2\\
-1&-1&1
\end{bmatrix}.
$$

We want to eliminate the entries below the first pivot.

The pivot is \(1\).


### Eliminate the \(2\)

For Row 2,

$$
R_2\leftarrow R_2-2R_1.
$$

So the new Row 2 is

$$
-2R_1+R_2.
$$

Its coefficients are

$$
[-2\quad1\quad0].
$$


### Eliminate the \(-1\)

For Row 3, we want

$$
R_3\leftarrow R_3+R_1.
$$

This can be written as

$$
R_1+R_3.
$$

Its coefficients are

$$
[1\quad0\quad1].
$$


## 16. Construct the matrix from the identity

Start with

$$
I=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}.
$$

Row 1 remains unchanged:

$$
[1\quad0\quad0].
$$

Row 2 becomes

$$
[-2\quad1\quad0].
$$

Row 3 becomes

$$
[1\quad0\quad1].
$$

Therefore,

$$
E_1=
\begin{bmatrix}
1&0&0\\
-2&1&0\\
1&0&1
\end{bmatrix}.
$$

Multiplying gives

$$
E_1A
=
\begin{bmatrix}
1&2&1\\
0&1&0\\
0&1&2
\end{bmatrix}.
$$

The entries below the first pivot are now zero.


## 17. A second elimination matrix

We still have a \(1\) below the second pivot:

$$
\begin{bmatrix}
1&2&1\\
0&1&0\\
0&1&2
\end{bmatrix}.
$$

We want

$$
R_3\leftarrow R_3-R_2.
$$

Start again with the identity matrix:

$$
I=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}.
$$

Rows 1 and 2 stay unchanged.

For Row 3 we want

$$
-R_2+R_3.
$$

So the third row should be

$$
[0\quad-1\quad1].
$$

Therefore,

$$
E_2=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&-1&1
\end{bmatrix}.
$$


## 18. Complete the elimination

The first elimination gave

$$
E_1A.
$$

Now apply \(E_2\):

$$
E_2(E_1A).
$$

By associativity,

$$
E_2E_1A.
$$

The result is

$$
E_2E_1A
=
\begin{bmatrix}
1&2&1\\
0&1&0\\
0&0&2
\end{bmatrix}.
$$

Call this upper-triangular matrix \(U\).

Then

$$
E_2E_1A=U.
$$

This equation summarizes the entire elimination process.


## 19. Order matters

Notice carefully:

$$
E_2E_1A.
$$

Which elimination matrix acts first?

It is \(E_1\), because it is closest to \(A\):

$$
A
\longrightarrow
E_1A
\longrightarrow
E_2E_1A.
$$

So matrix operations are read from **right to left** when we think about which transformation happens first.

This will become very important later when we multiply several matrices together.


## 20. Elimination matrices and inverses

There is another useful observation.

Suppose

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

This matrix performs

$$
R_2\leftarrow R_2-2R_1.
$$

How could we undo this operation?

We would add \(2R_1\) back:

$$
R_2\leftarrow R_2+2R_1.
$$

The matrix that performs this reverse operation is

$$
E^{-1}
=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Notice what happened:

$$
-2
\quad\longrightarrow\quad
+2.
$$

Indeed,

$$
E^{-1}E=I.
$$

So elimination matrices are invertible, and their inverses simply **undo the corresponding row operation**.


## 21. A preview of LU factorization

We found that

$$
E_2E_1A=U.
$$

This means elimination transforms \(A\) into an upper-triangular matrix \(U\).

If we multiply by the inverse elimination matrices, we can work backward:

$$
A=E_1^{-1}E_2^{-1}U.
$$

The product of these inverse elimination matrices will eventually lead us to a matrix called \(L\).

Then we will obtain one of the most important factorizations in linear algebra:

$$
A=LU.
$$

We will study this carefully later.

For now, the important point is that **LU factorization grows directly out of elimination**.


## Key idea

<div class="key-idea">

<div class="key-idea-title">
The main idea
</div>

An elimination matrix is not something we need to memorize or guess.

Start with the identity matrix and perform the desired row operation on it.

For example,

$$
R_2\leftarrow R_2-2R_1
$$

changes

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

into

$$
E=
\begin{bmatrix}
1&0\\
-2&1
\end{bmatrix}.
$$

Multiplying \(EA\) then performs the same row operation on \(A\).

</div>


## Try it yourself

Consider

$$
A=
\begin{bmatrix}
2&1\\
6&5
\end{bmatrix}.
$$

We want to eliminate the \(6\) below the first pivot.


### Question 1

What is the pivot?


### Question 2

What multiplier \(m\) should we use?


### Question 3

What row operation eliminates the \(6\)?


### Question 4

Construct the elimination matrix \(E\) from the identity matrix.


### Question 5

Calculate \(EA\).


<details>

<summary>Show solution</summary>

The pivot is

$$
2.
$$

The multiplier is

$$
m=\frac{6}{2}=3.
$$

Therefore the row operation is

$$
R_2\leftarrow R_2-3R_1.
$$

Start with

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

The new second row must represent

$$
-3R_1+R_2.
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
EA
=
\begin{bmatrix}
1&0\\
-3&1
\end{bmatrix}
\begin{bmatrix}
2&1\\
6&5
\end{bmatrix}.
$$

This gives

$$
EA=
\begin{bmatrix}
2&1\\
0&2
\end{bmatrix}.
$$

The \(6\) below the pivot has been eliminated.

</details>


## What should you remember?

There are four ideas worth carrying forward.

**First**, elimination is a row operation:

$$
R_2\leftarrow R_2-mR_1.
$$

**Second**, the multiplier is determined by

$$
m=
\frac{\text{entry to eliminate}}
{\text{pivot}}.
$$

**Third**, we construct the elimination matrix by applying the row operation to the identity matrix:

$$
I
\longrightarrow
E.
$$

**Fourth**, multiplying from the left performs that same operation on \(A\):

$$
EA.
$$

So we now have the connection

$$
\text{ordinary elimination}
\longrightarrow
\text{row operations}
\longrightarrow
\text{elimination matrices}
\longrightarrow
\text{matrix multiplication}.
$$


## What's next?

We now know how to transform a matrix using elimination.

But our original goal was to solve

$$
A\mathbf{x}=\mathbf{b}.
$$

In the next lesson, we will bring these ideas together and study **Solving \(A\mathbf{x}=\mathbf{b}\)**.

We will also begin to see why some systems have a unique solution, while others behave very differently.
