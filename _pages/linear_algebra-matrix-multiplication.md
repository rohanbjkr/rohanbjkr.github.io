---
title: "Matrix Multiplication"

permalink: /linear-algebra/matrix-multiplication/

layout: linear-algebra-lesson

lesson_number: 5

module: "Module 2 · Matrix Algrbra"

description: "Understanding matrix multiplication through rows, columns, and linear transformations."
---


# Matrix Multiplication

So far, we have learned how to solve

$$
A\mathbf{x}=\mathbf{b}.
$$

We have seen how elimination transforms a system into a simpler triangular system, and how the solution can then be found by back substitution.

Now we want to understand the matrix $A$ itself.

What happens when we multiply two matrices?

At first, the rule for matrix multiplication can look strange. But there is a very natural idea underneath it:

**matrix multiplication is a way of combining linear transformations.**

---

## 1. Why do we multiply matrices?

Suppose a matrix $A$ takes a vector $\mathbf{x}$ and produces a new vector:

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

Now suppose another matrix $B$ acts on the result:

$$
A\mathbf{x}
\longrightarrow
B(A\mathbf{x}).
$$

We have applied two transformations, one after another.

We want one matrix that represents the entire process:

$$
B(A\mathbf{x})=(BA)\mathbf{x}.
$$

Therefore,

$$
BA
$$

is the matrix representing the combined transformation.

This is the central reason matrix multiplication exists.

---

## 2. A simple example

Consider

$$
A=
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
$$

and

$$
B=
\begin{bmatrix}
5 & 6\\
7 & 8
\end{bmatrix}.
$$

We want to calculate $AB$.

The answer is another matrix:

$$
AB=
\begin{bmatrix}
? & ?\\
? & ?
\end{bmatrix}.
$$

But how do we calculate each entry?

The rule is:

> **Take a row from $A$ and a column from $B$, and take their dot product.**

---

## 3. The row–column rule

The first entry of $AB$ comes from the first row of $A$ and the first column of $B$:

$$
(AB)_{11}
=
1(5)+2(7).
$$

Therefore,

$$
(AB)_{11}=19.
$$

The second entry in the first row comes from the first row of $A$ and the second column of $B$:

$$
(AB)_{12}
=
1(6)+2(8).
$$

So,

$$
(AB)_{12}=22.
$$

Similarly,

$$
(AB)_{21}
=
3(5)+4(7)
=
43,
$$

and

$$
(AB)_{22}
=
3(6)+4(8)
=
50.
$$

Therefore,

$$
AB=
\begin{bmatrix}
19 & 22\\
43 & 50
\end{bmatrix}.
$$

The rule is simple:

$$
\boxed{
\text{row of }A
\;\cdot\;
\text{column of }B
}
$$

---

## 4. See the row–column rule

The important part is not memorizing the multiplication procedure.

It is understanding where every number comes from.


::contentReference[oaicite:0]{index=0}


For example,

$$
(AB)_{12}
$$

means:

- row $1$ of $A$
- column $2$ of $B$
- take their dot product.

So,

$$
(AB)_{12}
=
a_{11}b_{12}
+
a_{12}b_{22}.
$$

---

## 5. The general rule

Suppose

$$
A=
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

and

$$
B=
\begin{bmatrix}
b_{11} & b_{12} & \cdots & b_{1p}\\
b_{21} & b_{22} & \cdots & b_{2p}\\
\vdots & \vdots & \ddots & \vdots\\
b_{n1} & b_{n2} & \cdots & b_{np}
\end{bmatrix}.
$$

Then $A$ is an $m\times n$ matrix and $B$ is an $n\times p$ matrix.

Their product is an $m\times p$ matrix:

$$
AB=C.
$$

Each entry of $C$ is

$$
c_{ij}
=
\sum_{k=1}^{n}a_{ik}b_{kj}.
$$

In other words,

$$
\boxed{
(AB)_{ij}
=
\text{row }i\text{ of }A
\cdot
\text{column }j\text{ of }B
}
$$

This is the fundamental formula for matrix multiplication.

---

## 6. When can two matrices be multiplied?

This is an important question.

Suppose

$$
A
\text{ is }m\times n
$$

and

$$
B
\text{ is }n\times p.
$$

Then

$$
AB
$$

exists and has dimensions

$$
m\times p.
$$

Notice the matching dimensions:

$$
\boxed{
(m\times n)(n\times p)
=
m\times p
}
$$

The two $n$'s in the middle must match.

For example,

$$
(2\times3)(3\times4)
$$

is possible, and the answer is a

$$
2\times4
$$

matrix.

But

$$
(2\times3)(2\times4)
$$

is not possible.

The inner dimensions are $3$ and $2$, so they do not match.

---

## 7. Why do the dimensions work this way?

There is a deeper reason behind the rule

$$
(m\times n)(n\times p)=m\times p.
$$

To see it, we first need one new idea:

**a matrix can be viewed as a machine that takes vectors as inputs and produces vectors as outputs.**

---

### A matrix as a transformation

Consider a $2\times3$ matrix:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}
\end{bmatrix}.
$$

It has **3 columns** and **2 rows**.

When we multiply $A$ by a vector, that vector must have 3 components:

$$
\mathbf{x}
=
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}.
$$

Why?

Because each row of $A$ must be able to take a dot product with $\mathbf{x}$:

$$
A\mathbf{x}
=
\begin{bmatrix}
a_{11}x_1+a_{12}x_2+a_{13}x_3\\
a_{21}x_1+a_{22}x_2+a_{23}x_3
\end{bmatrix}.
$$

The result has **2 components**, one for each row of $A$.

So a $2\times3$ matrix takes

$$
\mathbb{R}^3
\longrightarrow
\mathbb{R}^2.
$$

In words:

> A $2\times3$ matrix takes a 3-dimensional vector and produces a 2-dimensional vector.

This is what the notation

$$
A:\mathbb{R}^3\rightarrow\mathbb{R}^2
$$

means.

---

### Now consider another matrix

Suppose

$$
B
$$

is a $3\times4$ matrix.

It has 4 columns and 3 rows.

Therefore, $B$ takes a vector with 4 components and produces a vector with 3 components:

$$
B:\mathbb{R}^4\rightarrow\mathbb{R}^3.
$$

So we can think of $B$ as another machine:

$$
\mathbf{x}\in\mathbb{R}^4
\quad\longrightarrow\quad
B\mathbf{x}\in\mathbb{R}^3.
$$

---

### Now the important part

We have two machines:

$$
B:\mathbb{R}^4\rightarrow\mathbb{R}^3
$$

and

$$
A:\mathbb{R}^3\rightarrow\mathbb{R}^2.
$$

Look carefully at the output of $B$.

It is a vector in

$$
\mathbb{R}^3.
$$

Now look at the input required by $A$.

It must also be a vector in

$$
\mathbb{R}^3.
$$

**They match!**

Therefore, we can feed the output of $B$ directly into $A$.

The process is

$$
\mathbb{R}^4
\xrightarrow{\;B\;}
\mathbb{R}^3
\xrightarrow{\;A\;}
\mathbb{R}^2.
$$

Start with a vector

$$
\mathbf{x}\in\mathbb{R}^4.
$$

First apply $B$:

$$
\mathbf{x}
\longrightarrow
B\mathbf{x}.
$$

Now $B\mathbf{x}$ has 3 components, so it can be used as an input to $A$:

$$
B\mathbf{x}
\longrightarrow
A(B\mathbf{x}).
$$

Therefore the entire process is

$$
\mathbf{x}
\longrightarrow
B\mathbf{x}
\longrightarrow
A(B\mathbf{x}).
$$

And we write the final result as

$$
A(B\mathbf{x})=(AB)\mathbf{x}.
$$

So the matrix $AB$ represents the **combined transformation**.

---

### This explains the dimensions

We started with

$$
A\quad\text{is }2\times3
$$

and

$$
B\quad\text{is }3\times4.
$$

The transformations were

$$
\mathbb{R}^4
\xrightarrow{\;B\;}
\mathbb{R}^3
\xrightarrow{\;A\;}
\mathbb{R}^2.
$$

Therefore the combined transformation

$$
AB
$$

takes

$$
\mathbb{R}^4\rightarrow\mathbb{R}^2.
$$

So $AB$ must be a

$$
2\times4
$$

matrix.

That is exactly the dimension rule:

$$
\boxed{
(2\times3)(3\times4)=2\times4
}
$$

The two middle numbers match because the output dimension of $B$ must match the input dimension of $A$.

---

### Why can't we multiply the other way?

Now suppose we try to calculate

$$
BA.
$$

Remember:

$$
A:\mathbb{R}^3\rightarrow\mathbb{R}^2
$$

and

$$
B:\mathbb{R}^4\rightarrow\mathbb{R}^3.
$$

For $BA$, $A$ would have to act first:

$$
\mathbb{R}^3
\xrightarrow{\;A\;}
\mathbb{R}^2.
$$

But $B$ requires a vector with **4 components** as its input.

We only have a vector with **2 components**.

So we cannot feed the output of $A$ into $B$.

The dimensions do not match:

$$
\mathbb{R}^3
\xrightarrow{\;A\;}
\mathbb{R}^2
\qquad
\not\longrightarrow
\qquad
\mathbb{R}^4.
$$

Therefore $BA$ is not defined.

This is why

$$
AB
$$

may exist even when

$$
BA
$$

does not.

---

### The big idea

The dimension rule is not just a trick for multiplying matrices.

It tells us whether two transformations can be connected.

Think of a matrix as a machine:

$$
\boxed{
\text{input}
\longrightarrow
\text{matrix}
\longrightarrow
\text{output}
}
$$

The output of the first machine must have the right number of components to become the input of the second machine.

For

$$
A_{2\times3}
\quad\text{and}\quad
B_{3\times4},
$$

we have

$$
\boxed{
\mathbb{R}^4
\xrightarrow{\;B\;}
\mathbb{R}^3
\xrightarrow{\;A\;}
\mathbb{R}^2
}
$$

and therefore

$$
\boxed{
AB:\mathbb{R}^4\rightarrow\mathbb{R}^2.
}
$$

This is the deeper meaning behind

$$
\boxed{
(m\times n)(n\times p)=m\times p.
}
$$
---

## 8. Matrix multiplication and columns

There is another extremely useful way to understand $AB$.

Write $B$ in terms of its columns:

$$
B=
\begin{bmatrix}
| & | & & |\\
\mathbf b_1 & \mathbf b_2 & \cdots & \mathbf b_p\\
| & | & & |
\end{bmatrix}.
$$

Then

$$
AB
=
\begin{bmatrix}
| & | & & |\\
A\mathbf b_1 & A\mathbf b_2 & \cdots & A\mathbf b_p\\
| & | & & |
\end{bmatrix}.
$$

So the columns of $AB$ are simply $A$ multiplied by the columns of $B$.

In other words,

$$
\boxed{
AB
=
[A\mathbf b_1\;\;A\mathbf b_2\;\;\cdots\;\;A\mathbf b_p]
}
$$

This gives matrix multiplication a beautiful interpretation.

**The matrix $A$ transforms every column of $B$.**

---

## 9. Matrix multiplication as composition

This brings us back to our original idea.

Suppose

$$
\mathbf{x}
\longrightarrow
B\mathbf{x}
$$

and then

$$
B\mathbf{x}
\longrightarrow
A(B\mathbf{x}).
$$

The combined transformation is

$$
A(B\mathbf{x})
=
(AB)\mathbf{x}.
$$

Therefore,

$$
\boxed{
AB
\text{ represents applying }B\text{ first and }A\text{ second.}
}
$$

This order is important.

The matrix closest to the vector acts first.

---

## 10. Why $AB\neq BA$ in general

Numbers usually satisfy

$$
ab=ba.
$$

For example,

$$
2(3)=3(2)=6.
$$

It is tempting to think matrices should behave the same way.

They don't.

Consider again

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
$$

and

$$
B=
\begin{bmatrix}
5&6\\
7&8
\end{bmatrix}.
$$

We already found

$$
AB=
\begin{bmatrix}
19&22\\
43&50
\end{bmatrix}.
$$

But reversing the order gives

$$
BA=
\begin{bmatrix}
23&34\\
31&46
\end{bmatrix}.
$$

Therefore,

$$
AB\neq BA.
$$

This is not a strange accident.

It reflects the fact that **doing transformation $B$ and then $A$ is generally different from doing $A$ and then $B$.**

For this reason, matrix multiplication is called **non-commutative**.

---

## 11. Associativity

Although matrix multiplication is not commutative, it is associative.

That means

$$
(AB)C=A(BC).
$$

This makes sense from the transformation perspective.

Suppose we apply three transformations:

$$
\mathbf{x}
\longrightarrow
C\mathbf{x}
\longrightarrow
B(C\mathbf{x})
\longrightarrow
A(B(C\mathbf{x})).
$$

Whether we combine $A$ and $B$ first or $B$ and $C$ first, the final transformation is the same:

$$
(AB)C\mathbf{x}
=
A(BC)\mathbf{x}.
$$

Therefore,

$$
\boxed{
(AB)C=A(BC)
}
$$

---

## 12. Matrix multiplication and the identity matrix

We have already encountered the identity matrix:

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

It leaves every vector unchanged:

$$
I\mathbf{x}=\mathbf{x}.
$$

Therefore, multiplying by $I$ does nothing:

$$
AI=A
$$

and

$$
IA=A.
$$

The identity matrix plays the same role for matrices that the number $1$ plays for ordinary multiplication.

---

## 13. A useful way to remember the whole idea

There are three equivalent ways to think about $AB$.

### Entry viewpoint

Each entry is a row–column dot product:

$$
(AB)_{ij}
=
\sum_k a_{ik}b_{kj}.
$$

### Column viewpoint

Each column of $AB$ is $A$ applied to a column of $B$:

$$
AB
=
[A\mathbf b_1\;\;A\mathbf b_2\;\;\cdots].
$$

### Transformation viewpoint

$AB$ represents applying $B$ first and $A$ second:

$$
\mathbf{x}
\rightarrow
B\mathbf{x}
\rightarrow
A(B\mathbf{x}).
$$

These are not three different rules.

They are three ways of seeing the **same matrix multiplication**.

---

## 14. Connection to $A\mathbf{x}=\mathbf{b}$

We began this course with systems of equations:

$$
A\mathbf{x}=\mathbf{b}.
$$

Now we can see this equation from a different perspective.

The matrix $A$ represents a transformation.

It takes the vector $\mathbf{x}$ and produces

$$
A\mathbf{x}.
$$

Solving

$$
A\mathbf{x}=\mathbf{b}
$$

therefore asks:

> **Which input vector $\mathbf{x}$ does the transformation $A$ send to $\mathbf{b}$?**

Matrix multiplication tells us how transformations combine.

This viewpoint will become especially important when we study inverse matrices.

---

## 15. The inverse is the next natural question

Suppose $A$ transforms

$$
\mathbf{x}
\longrightarrow
A\mathbf{x}.
$$

Can we undo that transformation?

We want another matrix $A^{-1}$ such that

$$
A^{-1}A\mathbf{x}
=
\mathbf{x}.
$$

Since

$$
A^{-1}A=I,
$$

the inverse transformation takes us back to where we started.

This leads naturally to our next chapter:

**Inverse matrices.**

We will ask when an inverse exists, how to calculate it, and why the inverse is closely connected to solving

$$
A\mathbf{x}=\mathbf{b}.
$$

---

## What to remember

The most important ideas from this lesson are:

1. Matrix multiplication combines linear transformations.

2. The product $AB$ is formed by taking rows of $A$ and columns of $B$.

3. If

$$
A\text{ is }m\times n
\quad\text{and}\quad
B\text{ is }n\times p,
$$

then

$$
AB\text{ is }m\times p.
$$

4. Matrix multiplication is generally **not commutative**:

$$
AB\neq BA.
$$

5. Matrix multiplication **is associative**:

$$
(AB)C=A(BC).
$$

6. The columns of $AB$ are obtained by applying $A$ to the columns of $B$.

7. Most importantly,

$$
\boxed{
AB\text{ means: apply }B\text{ first, then }A.
}
$$

---

## Practice

### Exercise 1

Calculate

$$
A=
\begin{bmatrix}
2&1\\
0&3
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
1&4\\
2&5
\end{bmatrix}.
$$

Find $AB$.

---

### Exercise 2

For the same matrices, calculate $BA$.

Is

$$
AB=BA?
$$

---

### Exercise 3

Determine whether the following multiplication is possible:

$$
(3\times2)(2\times4).
$$

If it is possible, what are the dimensions of the resulting matrix?

---

### Exercise 4

Suppose

$$
A
$$

is a $4\times3$ matrix and

$$
B
$$

is a $3\times2$ matrix.

What are the dimensions of $AB$?

What are the dimensions of $BA$? Is $BA$ even defined?

---

### Exercise 5

Explain in your own words why

$$
AB\neq BA
$$

in general.

Think about the order in which two transformations are applied.

---

## What's next?

Matrix multiplication gives us the language for combining transformations.

Now we can ask the natural reverse question:

**Can a transformation be undone?**

If $A$ takes $\mathbf{x}$ to $A\mathbf{x}$, can another matrix take us back from $A\mathbf{x}$ to $\mathbf{x}$?

That matrix, when it exists, is the **inverse matrix**.

Next, we will study:

**Inverse Matrices.**
