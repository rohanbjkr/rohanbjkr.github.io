---
layout: linear-algebra-lesson
title: "$A^{-1}$ and $A\mathbf{x}=\mathbf{b}$"
lesson_number: 7
module: "Matrix Algebra"
description: "Using the inverse matrix to understand and solve systems of linear equations."
permalink: /linear-algebra/axb-and-inverse/
---

# $A^{-1}$ and $A\mathbf{x}=\mathbf{b}$

In the previous lesson, we introduced the inverse matrix.

If $A$ is invertible, its inverse satisfies

$$
AA^{-1}=A^{-1}A=I.
$$

We interpreted $A^{-1}$ as the transformation that **undoes** the transformation performed by $A$.

Now we can connect that idea directly to one of the central equations of linear algebra:

$$
A\mathbf{x}=\mathbf{b}.
$$

The key result of this lesson is

<div class="math-scroll">

$$
\boxed{
A\mathbf{x}=\mathbf{b}
\quad\Longrightarrow\quad
\mathbf{x}=A^{-1}\mathbf{b}.
}
$$

</div>

But rather than treating this as just a formula, we want to understand **why it works, what it means, and when it is useful.**

---

## 1. Start with a familiar equation

Consider the ordinary equation

$$
5x=10.
$$

How do we solve it?

We multiply both sides by the reciprocal of $5$:

$$
\frac{1}{5}(5x)
=
\frac{1}{5}(10).
$$

Therefore,

$$
x=2.
$$

The important idea is that multiplication by $5$ can be undone by multiplication by

$$
\frac{1}{5}.
$$

In other words,

$$
\frac{1}{5}\cdot5=1.
$$

The number $1$ leaves $x$ unchanged:

$$
1x=x.
$$

---

## 2. The matrix version

Now consider

$$
A\mathbf{x}=\mathbf{b}.
$$

This looks similar to

$$
5x=10.
$$

The difference is that $A$ is a matrix and $\mathbf{x}$ and $\mathbf{b}$ are vectors.

We need something that plays the role of

$$
\frac{1}{5}.
$$

That something is the inverse matrix:

$$
A^{-1}.
$$

Recall that

$$
A^{-1}A=I.
$$

The identity matrix $I$ plays the role of the number $1$.

So we multiply both sides of

$$
A\mathbf{x}=\mathbf{b}
$$

by $A^{-1}$:

<div class="math-scroll">

$$
A^{-1}(A\mathbf{x})
=
A^{-1}\mathbf{b}.
$$

</div>

Using associativity,

$$
(A^{-1}A)\mathbf{x}
=
A^{-1}\mathbf{b}.
$$

Since

$$
A^{-1}A=I,
$$

we obtain

$$
I\mathbf{x}=A^{-1}\mathbf{b}.
$$

And because

$$
I\mathbf{x}=\mathbf{x},
$$

we finally get

<div class="math-scroll">

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf{b}.
}
$$

</div>

This is the matrix equivalent of dividing both sides of an ordinary equation by $5$.

---

# 3. What does $A^{-1}\mathbf{b}$ mean?

The expression

$$
A^{-1}\mathbf{b}
$$

may initially look abstract.

But remember what $A^{-1}$ does.

The matrix $A$ takes an input vector and transforms it:

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

Suppose the result is $\mathbf{b}$:

$$
\mathbf{x}
\xrightarrow{\;A\;}
\mathbf{b}.
$$

Then $A^{-1}$ reverses the transformation:

$$
\mathbf{b}
\xrightarrow{\;A^{-1}\;}
\mathbf{x}.
$$

So we have

<div class="math-scroll">

$$
\boxed{
\mathbf{x}
\;\xrightarrow{\;A\;}\;
\mathbf{b}
\;\xrightarrow{\;A^{-1}\;}\;
\mathbf{x}.
}
$$

</div>

Therefore,

$$
A^{-1}\mathbf{b}
$$

means:

> **Take $\mathbf b$ and reverse the transformation $A$.**

The result is the vector $\mathbf{x}$ that produced $\mathbf b$.

---

# 4. A complete numerical example

Consider the system

<div class="math-scroll">

$$
\begin{aligned}
2x+y&=5,\\
x+y&=3.
\end{aligned}
$$

</div>

In matrix form,

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

Write this as

$$
A\mathbf{x}=\mathbf{b},
$$

where

<div class="math-scroll">

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix},
\qquad
\mathbf{x}=
\begin{bmatrix}
x\\
y
\end{bmatrix},
\qquad
\mathbf{b}=
\begin{bmatrix}
5\\
3
\end{bmatrix}.
$$

</div>

From the previous lesson, we know that

$$
A^{-1}
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}.
$$

Therefore,

$$
\mathbf{x}=A^{-1}\mathbf{b}.
$$

Substitute the matrices:

<div class="math-scroll">

$$
\mathbf{x}
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}
\begin{bmatrix}
5\\
3
\end{bmatrix}.
$$

</div>

Multiply:

<div class="math-scroll">

$$
\mathbf{x}
=
\begin{bmatrix}
1(5)+(-1)(3)\\
(-1)(5)+2(3)
\end{bmatrix}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

</div>

Therefore,

$$
\boxed{
x=2,\qquad y=1.
}
$$

---

# 5. Check the answer

We should always be able to check a solution.

The original system was

$$
2x+y=5
$$

and

$$
x+y=3.
$$

Substitute

$$
x=2,\qquad y=1.
$$

Then

$$
2(2)+1=5
$$

and

$$
2+1=3.
$$

Both equations are satisfied.

So

$$
\boxed{
\mathbf{x}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}
}
$$

is indeed the solution.

---

# 6. The inverse gives a formula for the solution

The previous example illustrates a general result.

If $A$ is invertible, then

$$
A\mathbf{x}=\mathbf{b}
$$

has the unique solution

<div class="math-scroll">

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf{b}.
}
$$

</div>

This means that once $A^{-1}$ is known, we can solve the system for any right-hand side $\mathbf b$.

That observation becomes especially important when $A$ stays fixed but $\mathbf b$ changes.

---

# 7. What if $\mathbf b$ changes?

Suppose the matrix $A$ stays fixed:

$$
A\mathbf{x}=\mathbf b.
$$

Imagine that we need to solve several systems:

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf b_1,
$$

$$
A\mathbf{x}_2=\mathbf b_2,
$$

$$
A\mathbf{x}_3=\mathbf b_3.
$$

</div>

If $A$ is invertible, then

<div class="math-scroll">

$$
\mathbf{x}_1=A^{-1}\mathbf b_1,
$$

$$
\mathbf{x}_2=A^{-1}\mathbf b_2,
$$

$$
\mathbf{x}_3=A^{-1}\mathbf b_3.
$$

</div>

The same inverse works for every right-hand side.

This is one reason the inverse is mathematically useful.

The matrix $A$ determines the transformation.

The vector $\mathbf b$ tells us the desired output.

The inverse tells us which input produces that output.

---

# 8. Think of $A$ as a machine

Here is another way to see the same idea.

Imagine that $A$ is a machine.

You put in $\mathbf{x}$:

$$
\mathbf{x}
\longrightarrow
A
\longrightarrow
\mathbf b.
$$

The equation

$$
A\mathbf{x}=\mathbf b
$$

asks:

> **Which input $\mathbf{x}$ produces the output $\mathbf b$?**

If $A$ is invertible, we can run the machine backward:

$$
\mathbf b
\longrightarrow
A^{-1}
\longrightarrow
\mathbf{x}.
$$

Therefore,

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf b.
}
$$

This interpretation will become increasingly important as we study linear transformations.

---

# 9. The columns of $A$ tell us something important

Suppose

$$
A=
\begin{bmatrix}
|&|\\
\mathbf a_1&\mathbf a_2\\
|&|
\end{bmatrix}.
$$

Then

$$
A
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix}
=
x_1\mathbf a_1+x_2\mathbf a_2.
$$

Therefore,

$$
A\mathbf{x}=\mathbf b
$$

can be written as

$$
x_1\mathbf a_1+x_2\mathbf a_2=\mathbf b.
$$

This says something fundamental:

> We are looking for a combination of the columns of $A$ that produces $\mathbf b$.

The coefficients of that combination are the entries of $\mathbf{x}$.

So solving

$$
A\mathbf{x}=\mathbf b
$$

is also a question about the columns of $A$.

---

# 10. A two-dimensional example

Consider

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}.
$$

Its columns are

$$
\mathbf a_1=
\begin{bmatrix}
2\\
1
\end{bmatrix},
\qquad
\mathbf a_2=
\begin{bmatrix}
1\\
1
\end{bmatrix}.
$$

Suppose

$$
\mathbf{x}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}.
$$

Then

<div class="math-scroll">

$$
A\mathbf{x}
=
2
\begin{bmatrix}
2\\
1
\end{bmatrix}
+
1
\begin{bmatrix}
1\\
1
\end{bmatrix}
=
\begin{bmatrix}
5\\
3
\end{bmatrix}.
$$

</div>

So

$$
\mathbf b=
\begin{bmatrix}
5\\
3
\end{bmatrix}
$$

is produced by taking

$$
2\mathbf a_1+\mathbf a_2.
$$

The solution

$$
\mathbf{x}
=
\begin{bmatrix}
2\\
1
\end{bmatrix}
$$

contains exactly those coefficients.

This gives us another interpretation:

$$
\boxed{
A\mathbf{x}=\mathbf b
}
$$

asks:

> **Which linear combination of the columns of $A$ gives $\mathbf b$?**

---

# 11. What does the inverse do to the columns?

Now something interesting happens.

Let

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

Consider

$$
AX=I.
$$

Here $X$ is an unknown matrix.

We want to find the matrix $X$ that transforms $A$ into $I$.

Since

$$
A^{-1}A=I,
$$

we know that

$$
X=A^{-1}.
$$

Therefore,

$$
AA^{-1}=I.
$$

But let's look at this column by column.

Write

$$
A^{-1}
=
\begin{bmatrix}
|&|\\
\mathbf x_1&\mathbf x_2\\
|&|
\end{bmatrix}.
$$

Then

$$
AA^{-1}
=
\begin{bmatrix}
|&|\\
A\mathbf x_1&A\mathbf x_2\\
|&|
\end{bmatrix}.
$$

But

$$
AA^{-1}=I.
$$

Therefore,

$$
A\mathbf x_1=\mathbf e_1
$$

and

$$
A\mathbf x_2=\mathbf e_2,
$$

where

$$
\mathbf e_1=
\begin{bmatrix}
1\\
0
\end{bmatrix},
\qquad
\mathbf e_2=
\begin{bmatrix}
0\\
1
\end{bmatrix}.
$$

This gives us a beautiful interpretation of the inverse.

---

# 12. The columns of $A^{-1}$

The first column of $A^{-1}$ is the solution of

$$
A\mathbf x=\mathbf e_1.
$$

The second column of $A^{-1}$ is the solution of

$$
A\mathbf x=\mathbf e_2.
$$

More generally, for an $n\times n$ matrix,

$$
A^{-1}
=
\begin{bmatrix}
|&|&&|\\
\mathbf x_1&\mathbf x_2&\cdots&\mathbf x_n\\
|&|&&|
\end{bmatrix},
$$

where

$$
A\mathbf x_1=\mathbf e_1,
$$

$$
A\mathbf x_2=\mathbf e_2,
$$

and so on.

Therefore,

<div class="math-scroll">

$$
\boxed{
A^{-1}
=
\left[
\begin{array}{cccc}
|&|&&|\\
A^{-1}\mathbf e_1&
A^{-1}\mathbf e_2&
\cdots&
A^{-1}\mathbf e_n\\
|&|&&|
\end{array}
\right].
}
$$

</div>

This is a very useful way to understand where the inverse comes from.

---

# 13. Finding the inverse means solving many systems

This gives us a new perspective.

To find $A^{-1}$, we need to solve

$$
AX=I.
$$

Since $I$ has $n$ columns, this is equivalent to solving $n$ systems:

<div class="math-scroll">

$$
A\mathbf x_1=\mathbf e_1,
\qquad
A\mathbf x_2=\mathbf e_2,
\qquad
\ldots,
\qquad
A\mathbf x_n=\mathbf e_n.
$$

</div>

The solutions become the columns of $A^{-1}$.

So computing an inverse is really a collection of linear-system problems.

This connects our earlier lessons directly to the inverse.

---

# 14. Why $[A\mid I]$ works

This also explains the augmented-matrix method we saw in the previous lesson.

Start with

$$
[A\mid I].
$$

The goal is to transform the left side into $I$:

<div class="math-scroll">

$$
[A\mid I]
\quad\longrightarrow\quad
[I\mid A^{-1}].
$$

</div>

Why?

Because the row operations are effectively finding the matrix that transforms $A$ into $I$.

If the sequence of elementary matrices is

$$
E_k\cdots E_2E_1,
$$

then

<div class="math-scroll">

$$
E_k\cdots E_2E_1A=I.
$$

</div>

Therefore,

<div class="math-scroll">

$$
E_k\cdots E_2E_1=A^{-1}.
$$

</div>

Applying those same operations to $I$ gives the inverse.

That is why the algorithm works.

---

# 15. Inverse and uniqueness

Now we can understand why invertibility is closely connected to unique solutions.

Suppose

$$
A\mathbf{x}=\mathbf b
$$

and $A^{-1}$ exists.

Then

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

There is only one possible value for $\mathbf{x}$.

Therefore:

$$
\boxed{
A\text{ invertible}
\Longrightarrow
A\mathbf{x}=\mathbf b
\text{ has exactly one solution for every }\mathbf b.
}
$$

This is a major result.

An invertible matrix does not merely allow us to calculate a solution.

It guarantees that the solution is **unique**.

---

# 16. What happens if $A$ is singular?

Now consider a singular matrix:

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

Its columns are

$$
\mathbf a_1=
\begin{bmatrix}
1\\
2
\end{bmatrix}
$$

and

$$
\mathbf a_2=
\begin{bmatrix}
2\\
4
\end{bmatrix}.
$$

Notice:

$$
\mathbf a_2=2\mathbf a_1.
$$

So the columns point in the same direction.

They do not provide two independent directions.

Now consider

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
b_1\\
b_2
\end{bmatrix}.
$$

The left side is

<div class="math-scroll">

$$
x
\begin{bmatrix}
1\\
2
\end{bmatrix}
+
y
\begin{bmatrix}
2\\
4
\end{bmatrix}
=
(x+2y)
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$

</div>

Every output lies on the same line.

Therefore, a vector such as

$$
\begin{bmatrix}
1\\
3
\end{bmatrix}
$$

cannot be produced.

So the system

$$
A\mathbf{x}
=
\begin{bmatrix}
1\\
3
\end{bmatrix}
$$

has **no solution**.

---

# 17. But singular can also mean infinitely many solutions

Consider instead

$$
\mathbf b=
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$

Then

$$
A\mathbf{x}=\mathbf b
$$

becomes

<div class="math-scroll">

$$
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
1\\
2
\end{bmatrix}.
$$

</div>

The two equations are

$$
x+2y=1
$$

and

$$
2x+4y=2.
$$

But the second equation is simply twice the first.

So we really have only one independent equation:

$$
x+2y=1.
$$

There are infinitely many solutions.

For example,

$$
y=0
\quad\Longrightarrow\quad
x=1,
$$

while

$$
y=1
\quad\Longrightarrow\quad
x=-1.
$$

Both work.

So a singular matrix can lead to:

- no solution, or
- infinitely many solutions.

But it cannot give exactly one solution for every $\mathbf b$.

---

# 18. The three possibilities

For a square system

$$
A\mathbf{x}=\mathbf b,
$$

there are three possibilities:

### One solution

The matrix $A$ is invertible.

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf b
}
$$

for every $\mathbf b$.

### No solution

The vector $\mathbf b$ is not reachable by the columns of $A$.

### Infinitely many solutions

The columns of $A$ do not provide enough independent directions, but $\mathbf b$ is still reachable.

This gives us the basic picture:

<div class="math-scroll">

$$
\boxed{
\begin{array}{c|c}
\text{Matrix }A & \text{Solutions of }A\mathbf{x}=\mathbf b\\
\hline
\text{Invertible} & \text{Exactly one for every }\mathbf b\\
\text{Singular} & \text{None or infinitely many}
\end{array}
}
$$

</div>

---

# 19. Why can an invertible matrix never have two solutions?

Suppose $A$ is invertible and somehow

$$
A\mathbf{x}_1=\mathbf b
$$

and

$$
A\mathbf{x}_2=\mathbf b.
$$

Then

$$
A\mathbf{x}_1=A\mathbf{x}_2.
$$

Subtract:

$$
A(\mathbf{x}_1-\mathbf{x}_2)=\mathbf0.
$$

Now multiply by $A^{-1}$:

<div class="math-scroll">

$$
A^{-1}A(\mathbf{x}_1-\mathbf{x}_2)
=
A^{-1}\mathbf0.
$$

</div>

Therefore,

$$
\mathbf{x}_1-\mathbf{x}_2=\mathbf0.
$$

So

$$
\boxed{
\mathbf{x}_1=\mathbf{x}_2.
}
$$

Thus two different solutions are impossible.

This proves uniqueness.

---

# 20. The homogeneous system

There is a particularly important special case:

$$
A\mathbf{x}=\mathbf0.
$$

This is called the **homogeneous system**.

There is always at least one solution:

$$
\mathbf{x}=\mathbf0.
$$

Why?

Because

$$
A\mathbf0=\mathbf0.
$$

But the important question is:

> Is the zero vector the only solution?

If $A$ is invertible, multiply by $A^{-1}$:

$$
A^{-1}A\mathbf{x}
=
A^{-1}\mathbf0.
$$

Therefore,

$$
\mathbf{x}=\mathbf0.
$$

So an invertible matrix satisfies

$$
\boxed{
A\mathbf{x}=\mathbf0
\quad\Longrightarrow\quad
\mathbf{x}=\mathbf0.
}
$$

This fact will become extremely important when we study **linear independence**.

---

# 21. The inverse and the columns of $A$

Recall that

$$
A\mathbf{x}
=
x_1\mathbf a_1
+
x_2\mathbf a_2
+
\cdots
+
x_n\mathbf a_n.
$$

If

$$
A\mathbf{x}=\mathbf b,
$$

then solving the system means finding coefficients

$$
x_1,x_2,\ldots,x_n
$$

that express $\mathbf b$ as a combination of the columns of $A$.

If $A$ is invertible, those coefficients are unique.

Therefore:

> **An invertible matrix has columns that can uniquely represent every vector in $\mathbb R^n$.**

This is a deeper interpretation of the inverse.

It connects inverse matrices to the ideas we will study later:

- linear combinations,
- span,
- linear independence,
- column space,
- basis.

---

# 22. One inverse, many right-hand sides

Suppose we have the same matrix $A$ but many different right-hand sides:

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

If $A^{-1}$ exists, then

<div class="math-scroll">

$$
\mathbf{x}_1=A^{-1}\mathbf b_1,
\qquad
\mathbf{x}_2=A^{-1}\mathbf b_2,
\qquad
\ldots,
\qquad
\mathbf{x}_k=A^{-1}\mathbf b_k.
$$

</div>

We can put all the right-hand sides into one matrix:

$$
B=
\begin{bmatrix}
|&|&&|\\
\mathbf b_1&\mathbf b_2&\cdots&\mathbf b_k\\
|&|&&|
\end{bmatrix}.
$$

Similarly, put all the solutions into

$$
X=
\begin{bmatrix}
|&|&&|\\
\mathbf x_1&\mathbf x_2&\cdots&\mathbf x_k\\
|&|&&|
\end{bmatrix}.
$$

Then all the systems can be written at once:

$$
AX=B.
$$

Multiply by $A^{-1}$:

<div class="math-scroll">

$$
A^{-1}AX=A^{-1}B.
$$

</div>

Therefore,

$$
\boxed{
X=A^{-1}B.
}
$$

This is one of the reasons matrix notation is so powerful.

A whole collection of linear systems can be represented by one matrix equation.

---

# 23. A numerical example with multiple right-hand sides

Suppose

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix}
$$

and

$$
A^{-1}
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}.
$$

Suppose we want to solve two systems at once:

<div class="math-scroll">

$$
A
\begin{bmatrix}
x_1&x_2\\
y_1&y_2
\end{bmatrix}
=
\begin{bmatrix}
5&7\\
3&4
\end{bmatrix}.
$$

</div>

Call the unknown matrix $X$ and the right-hand side matrix $B$:

$$
AX=B.
$$

Then

$$
X=A^{-1}B.
$$

Therefore,

<div class="math-scroll">

$$
X
=
\begin{bmatrix}
1&-1\\
-1&2
\end{bmatrix}
\begin{bmatrix}
5&7\\
3&4
\end{bmatrix}.
$$

</div>

Multiply:

<div class="math-scroll">

$$
X
=
\begin{bmatrix}
2&3\\
1&1
\end{bmatrix}.
$$

</div>

So the two solutions are

$$
\mathbf{x}_1=
\begin{bmatrix}
2\\
1
\end{bmatrix}
$$

and

$$
\mathbf{x}_2=
\begin{bmatrix}
3\\
1
\end{bmatrix}.
$$

The same inverse solved both systems.

---

# 24. A practical warning

At this point, it may seem that the best way to solve every system is:

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

Mathematically, this is completely correct.

But computationally, we usually **do not explicitly calculate $A^{-1}$** just to solve one system.

Instead, we typically solve

$$
A\mathbf{x}=\mathbf b
$$

directly using elimination or related methods.

Why?

Because calculating the entire inverse can require substantially more work than solving one system.

For example, if we only need one solution,

$$
A\mathbf{x}=\mathbf b,
$$

there is usually no reason to calculate every column of $A^{-1}$.

We can simply use elimination.

So there are two different ideas:

### Mathematical viewpoint

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf b
}
$$

is extremely useful for understanding the structure of the problem.

### Computational viewpoint

We usually solve

$$
\boxed{
A\mathbf{x}=\mathbf b
}
$$

directly.

This distinction becomes important as matrices become large.

---

# 25. Why elimination is still important

This explains why we have not abandoned elimination.

Elimination solves

$$
A\mathbf{x}=\mathbf b
$$

without necessarily forming $A^{-1}$.

In fact, elimination is one of the main computational methods for solving linear systems.

The inverse gives us a **conceptual description** of the solution:

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

Elimination gives us an **efficient procedure** for actually finding $\mathbf{x}$.

The two viewpoints are closely connected.

---

# 26. Inverse versus elimination

It is useful to compare them.

| Question | Inverse | Elimination |
|---|---|---|
| What is the solution? | $A^{-1}\mathbf b$ | Back substitution after elimination |
| What does it emphasize? | Structure | Computation |
| Need to form $A^{-1}$? | Yes, if used directly | No |
| Useful for many right-hand sides? | Yes conceptually | Yes, especially after factorization |
| Connection to transformations? | Very strong | Strong |
| Numerical computation? | Often not preferred | Usually preferred |

The important lesson is:

> **The inverse tells us what the solution is; elimination gives us an efficient way to find it.**

---

# 27. A deeper connection: $A^{-1}A=I$

Let's return to the equation

$$
A^{-1}A=I.
$$

What does this mean geometrically?

Suppose

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

Then applying $A^{-1}$ gives

$$
A\mathbf{x}
\longrightarrow
A^{-1}A\mathbf{x}.
$$

But

$$
A^{-1}A=I,
$$

so

$$
A^{-1}A\mathbf{x}
=
I\mathbf{x}
=
\mathbf{x}.
$$

Therefore,

<div class="math-scroll">

$$
\boxed{
\mathbf{x}
\xrightarrow{\;A\;}
A\mathbf{x}
\xrightarrow{\;A^{-1}\;}
\mathbf{x}.
}
$$

</div>

The transformation is completely reversible.

This is exactly what it means for $A$ to be invertible.

---

# 28. The big picture

We can now put together the ideas from the last several lessons.

We began with a system of equations:

$$
A\mathbf{x}=\mathbf b.
$$

We learned elimination as a method for solving it.

Then we learned matrix multiplication and viewed matrices as transformations.

Now we have introduced the inverse:

$$
AA^{-1}=A^{-1}A=I.
$$

The inverse reverses the transformation:

$$
\mathbf{x}
\rightarrow
A\mathbf{x}
\rightarrow
A^{-1}A\mathbf{x}
=
\mathbf{x}.
$$

And therefore:

<div class="math-scroll">

$$
\boxed{
A\mathbf{x}=\mathbf b
\quad\Longrightarrow\quad
\mathbf{x}=A^{-1}\mathbf b.
}
$$

</div>

But there is an even deeper interpretation.

The equation

$$
A\mathbf{x}=\mathbf b
$$

asks whether $\mathbf b$ can be constructed from the columns of $A$.

If $A$ is invertible, every $\mathbf b$ has exactly one set of coefficients.

That means the columns of $A$ have a special structure.

We will return to that structure later when we study **linear combinations, span, and linear independence**.

---

# Key idea

The inverse matrix is the operation that reverses $A$.

For an invertible matrix,

$$
AA^{-1}=A^{-1}A=I.
$$

Therefore, the system

<div class="math-scroll">

$$
A\mathbf{x}=\mathbf b
$$

</div>

has the unique solution

<div class="math-scroll">

$$
\boxed{
\mathbf{x}=A^{-1}\mathbf b.
}
$$

</div>

But the inverse is more than a formula.

It tells us that:

> **Every output $\mathbf b$ comes from exactly one input $\mathbf x$.**

That is the fundamental meaning of an invertible matrix.

---

# Try it yourself

## Exercise 1 — Direct use of the inverse

Let

$$
A=
\begin{bmatrix}
3&1\\
2&1
\end{bmatrix}.
$$

Find $A^{-1}$.

Then use it to solve

<div class="math-scroll">

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
8\\
5
\end{bmatrix}.
$$

</div>

---

## Exercise 2 — Verify

For

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix},
$$

verify that

$$
AA^{-1}=I.
$$

Also verify that

$$
A^{-1}A=I.
$$

---

## Exercise 3 — Think in columns

Let

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}.
$$

Write the equation

$$
A\mathbf{x}=\mathbf b
$$

as a linear combination of the columns of $A$.

What do the entries of $\mathbf{x}$ represent?

---

## Exercise 4 — Invertibility

Consider

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}.
$$

Does $A^{-1}$ exist?

What does this imply about the possible number of solutions to

$$
A\mathbf{x}=\mathbf b?
$$

Can you give an example of a $\mathbf b$ for which there is no solution?

Can you give an example for which there are infinitely many solutions?

---

## Exercise 5 — Homogeneous systems

Suppose $A$ is invertible.

Show that

$$
A\mathbf{x}=\mathbf0
$$

has only the solution

$$
\mathbf{x}=\mathbf0.
$$

---

## Exercise 6 — Multiple right-hand sides

Suppose

$$
AX=B.
$$

Show that if $A$ is invertible, then

$$
X=A^{-1}B.
$$

What does this tell us about solving several systems with the same coefficient matrix?

---

# What is next?

We now know that

$$
A^{-1}
$$

can solve

$$
A\mathbf{x}=\mathbf b.
$$

But there is an important computational question:

> **How can we organize elimination so that solving systems becomes more efficient?**

In the earlier lessons, we performed elimination step by step.

Now we will collect those elimination steps into matrices.

This leads to the factorization

<div class="math-scroll">

$$
\boxed{
A=LU.
}
$$

</div>

where:

- $L$ records the elimination steps,
- $U$ is the resulting upper-triangular matrix.

This is **LU Factorization**.

It will give us a powerful connection between elimination, matrix multiplication, and solving $A\mathbf{x}=\mathbf b$.
