---
layout: linear-algebra-lesson
title: 'LU Decomposition'
lesson_number: 8
module: "Module 2 · Matrix Algebra"
description: "Understanding LU decomposition by connecting it step by step to Gaussian elimination."
permalink: /linear-algebra/lu-factorization/
---

# LU Decomposition

In the previous lessons, we learned how to solve systems of linear equations using elimination.

We also learned that, when $A$ is invertible,

$$
A\mathbf{x}=\mathbf{b}
$$

has the solution

$$
\mathbf{x}=A^{-1}\mathbf{b}.
$$

But there is another important way to organize elimination.

Instead of thinking of elimination as a sequence of row operations, we can turn the entire process into a **matrix factorization**:

$$
A=LU.
$$

At first, this formula may look mysterious.

What are $L$ and $U$?

Why do we need two matrices?

Why is one called $L$ and the other $U$?

And most importantly:

> **How do we get $L$ and $U$ from the original matrix $A$?**

We will build the answer slowly.

---

# 1. Start where we already know how to work

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

Let

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

Then our system is simply

$$
A\mathbf{x}=\mathbf{b}.
$$

We already know how to solve this.

We use elimination.

---

# 2. Why do we use elimination?

The original matrix is

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

The problem is the $4$ below the first pivot.

We would like to turn it into zero.

Why?

Because a triangular system is much easier to solve.

If we can transform the matrix into

$$
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix},
$$

then the corresponding equations are

$$
2x+y=5
$$

and

$$
y=1.
$$

We immediately find

$$
y=1
$$

and then

$$
x=2.
$$

So elimination has a clear purpose:

> **We turn a complicated system into a triangular system that is easy to solve.**

---

# 3. Perform the first elimination

Start with

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

The first pivot is

$$
2.
$$

We want to eliminate the $4$ below it.

We ask:

> How many times does the pivot $2$ fit into the number $4$?

The answer is

$$
\frac{4}{2}=2.
$$

So our elimination multiplier is

$$
m_{21}=2.
$$

We use it to perform

$$
R_2\leftarrow R_2-2R_1.
$$

Let's calculate it explicitly.

The first row is

$$
R_1=
\begin{bmatrix}
2&1
\end{bmatrix}.
$$

Therefore,

$$
2R_1=
\begin{bmatrix}
4&2
\end{bmatrix}.
$$

The second row is

$$
R_2=
\begin{bmatrix}
4&3
\end{bmatrix}.
$$

Subtract:

$$
R_2-2R_1
=
\begin{bmatrix}
4&3
\end{bmatrix}
-
\begin{bmatrix}
4&2
\end{bmatrix}.
$$

Therefore,

$$
R_2=
\begin{bmatrix}
0&1
\end{bmatrix}.
$$

So

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

Excellent.

We have eliminated the entry below the pivot.

---

# 4. Why do we want this new matrix?

The new matrix is

$$
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Notice its shape.

Everything **below the main diagonal is zero**.

Such a matrix is called an **upper-triangular matrix**.

We give this matrix a name:

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Why the letter $U$?

Simply because it is **U**pper triangular.

So:

$$
U=
\text{the upper-triangular matrix produced by elimination}.
$$

This is the first important answer.

> **Why $U$? Because elimination turns $A$ into an upper-triangular matrix, and we call that matrix $U$.**

---

# 5. Why is an upper-triangular matrix useful?

Let's see why we care about the triangular form.

Suppose we have

<div class="math-scroll">

$$
U
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

That means

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

The equations are

$$
2x+y=5
$$

and

$$
y=1.
$$

We start with the second equation:

$$
y=1.
$$

Then substitute into the first:

$$
2x+1=5.
$$

Therefore,

$$
x=2.
$$

So triangular form allows us to solve the system from the bottom upward.

This is called **back substitution**.

Thus, $U$ is useful because it gives us a system that is easy to solve.

---

# 6. So what is the problem?

At this point, we have

$$
A
\longrightarrow
U.
$$

For our example,

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

We know how we got there.

We used the multiplier

$$
m_{21}=2.
$$

But after elimination, what happens to that number?

Usually, we simply move on.

But suppose we want to solve many systems involving the **same matrix $A$**.

For example,

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf{b}_1,
\qquad
A\mathbf{x}_2=\mathbf{b}_2,
\qquad
A\mathbf{x}_3=\mathbf{b}_3.
$$

</div>

We would like to avoid repeating the same elimination work.

That means we need to remember the elimination process.

And that is where $L$ enters.

---

# 7. The number we used during elimination

Let's return to our multiplier:

$$
m_{21}=2.
$$

What did this number tell us?

It told us that we used

$$
2R_1
$$

to eliminate the entry in row 2.

In other words,

$$
R_2\leftarrow R_2-2R_1.
$$

So the number $2$ contains information about **how the elimination was performed**.

If we want to remember the elimination process, we should save this number.

But where?

---

# 8. Where should we put the multiplier?

The multiplier $m_{21}$ was associated with:

- row 2,
- pivot column 1.

So we put it in position $(2,1)$.

That gives

$$
\begin{bmatrix}
?&?\\
2&?
\end{bmatrix}.
$$

We also put zeros above the diagonal and ones on the diagonal.

So we obtain

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Notice where our multiplier went:

$$
\boxed{m_{21}=2}
$$

is now stored below the diagonal.

This is not an arbitrary placement.

It reflects the location where the elimination multiplier was used.

---

# 9. Why is it called $L$?

Look at

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Everything above the diagonal is zero.

Therefore, it is a **lower-triangular matrix**.

Why the letter $L$?

Because it is **L**ower triangular.

So now we have:

$$
L=
\text{lower-triangular matrix containing the elimination multipliers}.
$$

And

$$
U=
\text{upper-triangular matrix produced by elimination}.
$$

This gives us the two pieces:

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

But we still have not explained why these two matrices give us back $A$.

That is the crucial step.

---

# 10. Let's multiply $L$ and $U$

We have

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

Multiply them:

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
\end{bmatrix}.
$$

</div>

Let's calculate each entry.

Top-left:

$$
1(2)+0(0)=2.
$$

Top-right:

$$
1(1)+0(1)=1.
$$

Bottom-left:

$$
2(2)+1(0)=4.
$$

Bottom-right:

$$
2(1)+1(1)=3.
$$

Therefore,

$$
LU=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

But this is our original matrix:

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

Therefore,

$$
A=LU.
$$

---

# 11. Don't memorize $A=LU$ yet

At this point, don't think of

$$
A=LU
$$

as a formula to memorize.

Instead, understand what happened.

We started with $A$.

We used elimination to produce $U$.

During elimination, we used a multiplier.

We saved that multiplier in $L$.

Then $L$ and $U$ together reconstruct the original matrix:

$$
A=LU.
$$

So LU decomposition is essentially:

> **Elimination, with the elimination information saved.**

That is the main idea.

---

# 12. Why does multiplication reconstruct $A$?

Let's look more carefully at the example.

We had

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

The second row became

$$
\begin{bmatrix}
0&1
\end{bmatrix}
$$

because we performed

$$
R_2-2R_1.
$$

Now look at $L$:

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

Its second row is

$$
\begin{bmatrix}
2&1
\end{bmatrix}.
$$

When this row multiplies $U$, we get

$$
2R_1(U)+1R_2(U).
$$

That is,

$$
2
\begin{bmatrix}
2&1
\end{bmatrix}
+
\begin{bmatrix}
0&1
\end{bmatrix}.
$$

Therefore,

$$
\begin{bmatrix}
4&3
\end{bmatrix}.
$$

That is exactly the original second row of $A$.

So $L$ is reconstructing the information that elimination removed.

This is why the factorization works.

---

# 13. One small example contains the whole idea

Let's summarize our $2\times2$ example.

### Original matrix

$$
A=
\begin{bmatrix}
2&1\\
4&3
\end{bmatrix}.
$$

### Elimination multiplier

$$
m_{21}=2.
$$

### Elimination

$$
R_2\leftarrow R_2-2R_1.
$$

### Result

$$
U=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

### Save the multiplier

$$
L=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}.
$$

### Multiply

$$
LU=A.
$$

Therefore,

$$
A=LU.
$$

We have now discovered LU decomposition.

---

# 14. Now let's move to a $3\times3$ matrix

The $2\times2$ example was simple enough to see the basic idea.

Now let's see what happens when there are more elimination steps.

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

Our goal is exactly the same as before:

> Use elimination to turn $A$ into an upper-triangular matrix.

---

# 15. First pivot

The first pivot is

$$
2.
$$

We have two entries below it:

$$
4
$$

and

$$
6.
$$

We need to eliminate both.

For the $4$:

$$
m_{21}
=
\frac{4}{2}
=
2.
$$

For the $6$:

$$
m_{31}
=
\frac{6}{2}
=
3.
$$

So we have two elimination multipliers:

$$
m_{21}=2,
\qquad
m_{31}=3.
$$

---

# 16. First elimination

First eliminate the $4$:

$$
R_2\leftarrow R_2-2R_1.
$$

Then eliminate the $6$:

$$
R_3\leftarrow R_3-3R_1.
$$

After these two operations:

<div class="math-scroll">

$$
\begin{bmatrix}
2&1&1\\
4&3&3\\
6&4&5
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&1&2
\end{bmatrix}.
$$

</div>

The first column below the pivot is now zero.

---

# 17. Second pivot

Now we look at the second pivot.

It is

$$
1.
$$

There is one entry below it:

$$
1.
$$

The multiplier is

$$
m_{32}
=
\frac{1}{1}
=
1.
$$

So we perform

$$
R_3\leftarrow R_3-R_2.
$$

The result is

$$
U=
\begin{bmatrix}
2&1&1\\
0&1&1\\
0&0&1
\end{bmatrix}.
$$

We have now completed elimination.

---

# 18. Where did all the multipliers go?

During elimination we used:

$$
m_{21}=2,
$$

$$
m_{31}=3,
$$

and

$$
m_{32}=1.
$$

We now save them.

Put them in the corresponding positions below the diagonal:

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

Notice the pattern.

The first column contains the multipliers used to eliminate entries below the first pivot:

$$
m_{21},\quad m_{31}.
$$

The second column contains the multiplier used to eliminate the entry below the second pivot:

$$
m_{32}.
$$

The diagonal contains $1$'s.

---

# 19. Our proposed decomposition

We now have

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
$$

</div>

and

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

We claim that

$$
A=LU.
$$

Let's verify it.

---

# 20. Multiply $L$ and $U$

We have

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

The first row is easy:

$$
1
\begin{bmatrix}
2&1&1
\end{bmatrix}
=
\begin{bmatrix}
2&1&1
\end{bmatrix}.
$$

For the second row:

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

For the third row:

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

So indeed,

$$
A=LU.
$$

---

# 21. What exactly are $L$ and $U$?

We can now give precise definitions.

## $U$: the result of elimination

$U$ is the upper-triangular matrix obtained after carrying out Gaussian elimination on $A$.

For example,

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

The zeros below the diagonal are created by elimination.

---

## $L$: the record of elimination

$L$ is a lower-triangular matrix containing the elimination multipliers.

For a $3\times3$ system,

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

The numbers below the diagonal tell us which multipliers were used during elimination.

---

# 22. Why are the multipliers below the diagonal?

There is a very simple pattern.

The multiplier $m_{21}$ was used to eliminate the entry in row 2, column 1.

So it goes in position $(2,1)$.

The multiplier $m_{31}$ was used to eliminate the entry in row 3, column 1.

So it goes in position $(3,1)$.

The multiplier $m_{32}$ was used to eliminate the entry in row 3, column 2.

So it goes in position $(3,2)$.

Thus:

<div class="math-scroll">

$$
\begin{array}{c|c}
\text{Elimination multiplier} & \text{Position in }L\\
\hline
m_{21}&(2,1)\\
m_{31}&(3,1)\\
m_{32}&(3,2)
\end{array}
$$

</div>

This is why the multipliers naturally form a lower-triangular pattern.

---

# 23. Why are the diagonal entries of $L$ equal to 1?

The diagonal entries are set to $1$ by convention.

For a $3\times3$ matrix,

$$
L=
\begin{bmatrix}
1&0&0\\
m_{21}&1&0\\
m_{31}&m_{32}&1
\end{bmatrix}.
$$

This particular choice is called a **unit lower-triangular matrix**.

The $1$'s are important because they allow the rows of $L$ to combine the rows of $U$ in exactly the way needed to reconstruct the original matrix.

For example, the second row of $L$ is

$$
\begin{bmatrix}
m_{21}&1&0
\end{bmatrix}.
$$

When it multiplies $U$, it creates

$$
m_{21}(\text{row 1 of }U)
+
1(\text{row 2 of }U).
$$

That is exactly what is needed to reconstruct the original second row.

---

# 24. So why does $A=LU$?

We can now understand the equation instead of memorizing it.

Elimination takes

$$
A
$$

and produces

$$
U.
$$

But elimination uses multipliers.

Those multipliers are stored in $L$.

When $L$ multiplies $U$, it combines the rows of $U$ using those multipliers.

That reconstructs the original rows of $A$.

Therefore,

$$
A=LU.
$$

So the equation

$$
A=LU
$$

means:

> **The original matrix $A$ can be reconstructed from the upper-triangular matrix $U$ using the elimination information stored in $L$.**

---

# 25. Now use LU to solve $A\mathbf{x}=\mathbf b$

We have learned how to obtain $L$ and $U$.

Now we need to understand why this decomposition is useful.

Suppose

$$
A\mathbf{x}=\mathbf b.
$$

Since

$$
A=LU,
$$

we can substitute:

$$
LU\mathbf{x}=\mathbf b.
$$

Because matrix multiplication is associative,

$$
L(U\mathbf{x})=\mathbf b.
$$

This suggests that we should solve the problem in two stages.

Define

$$
\mathbf y=U\mathbf{x}.
$$

Then

$$
L\mathbf y=\mathbf b.
$$

Once we know $\mathbf y$, we solve

$$
U\mathbf{x}=\mathbf y.
$$

So:

<div class="math-scroll">

$$
\begin{aligned}
L\mathbf y&=\mathbf b,\\
U\mathbf x&=\mathbf y.
\end{aligned}
$$

</div>

---

# 26. Why is this useful?

Because both $L$ and $U$ are triangular.

We already know how to solve triangular systems.

For

$$
L\mathbf y=\mathbf b,
$$

we solve from the top downward.

This is **forward substitution**.

For

$$
U\mathbf x=\mathbf y,
$$

we solve from the bottom upward.

This is **back substitution**.

Therefore:

$$
A\mathbf{x}=\mathbf b
$$

has been converted into two simple triangular systems.

---

# 27. Complete numerical example

Let's use the same matrix:

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

We already found

<div class="math-scroll">

$$
L=
\begin{bmatrix}
1&0&0\\
2&1&0\\
3&1&1
\end{bmatrix}
$$

</div>

and

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

Suppose we want to solve

<div class="math-scroll">

$$
A
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
5\\
11\\
17
\end{bmatrix}.
$$

</div>

Since

$$
A=LU,
$$

we solve

$$
L\mathbf y=\mathbf b.
$$

---

# 28. Step 1: solve $L\mathbf y=\mathbf b$

We have

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

This gives:

$$
y_1=5,
$$

$$
2y_1+y_2=11,
$$

and

$$
3y_1+y_2+y_3=17.
$$

Start with the first equation:

$$
y_1=5.
$$

Then:

$$
2(5)+y_2=11.
$$

Therefore,

$$
y_2=1.
$$

Finally:

$$
3(5)+1+y_3=17.
$$

Therefore,

$$
y_3=1.
$$

So

$$
\mathbf y=
\begin{bmatrix}
5\\
1\\
1
\end{bmatrix}.
$$

---

# 29. Step 2: solve $U\mathbf x=\mathbf y$

Now solve

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

Then:

$$
x_2+x_3=1.
$$

Therefore,

$$
x_2=0.
$$

Finally:

$$
2x_1+x_2+x_3=5.
$$

Therefore,

$$
2x_1+0+1=5.
$$

So

$$
x_1=2.
$$

Therefore,

$$
\mathbf{x}
=
\begin{bmatrix}
2\\
0\\
1
\end{bmatrix}.
$$

---

# 30. Check the solution

Let's verify using the original system.

We have

$$
\mathbf{x}
=
\begin{bmatrix}
2\\
0\\
1
\end{bmatrix}.
$$

Calculate:

<div class="math-scroll">

$$
A\mathbf{x}
=
\begin{bmatrix}
2&1&1\\
4&3&3\\
6&4&5
\end{bmatrix}
\begin{bmatrix}
2\\
0\\
1
\end{bmatrix}.
$$

</div>

The result is

$$
\begin{bmatrix}
5\\
11\\
17
\end{bmatrix}.
$$

So our solution is correct.

---

# 31. Why not just use elimination every time?

This is where the real computational advantage of LU appears.

Suppose $A$ stays fixed.

We have already performed elimination and obtained

$$
A=LU.
$$

Now suppose tomorrow we receive a different vector $\mathbf b$.

We do **not** need to repeat the elimination of $A$.

We already know $L$ and $U$.

We simply solve:

$$
L\mathbf y=\mathbf b
$$

and then

$$
U\mathbf x=\mathbf y.
$$

If we receive another $\mathbf b$, we do the same thing again.

The factorization is reusable.

---

# 32. Many systems with the same $A$

Suppose we have

<div class="math-scroll">

$$
A\mathbf{x}_1=\mathbf b_1,
$$

$$
A\mathbf{x}_2=\mathbf b_2,
$$

$$
A\mathbf{x}_3=\mathbf b_3,
$$

$$
\vdots
$$

$$
A\mathbf{x}_k=\mathbf b_k.
$$

</div>

The matrix $A$ is the same in every system.

We factorize it once:

$$
A=LU.
$$

Then for every $i$:

$$
L\mathbf y_i=\mathbf b_i
$$

followed by

$$
U\mathbf x_i=\mathbf y_i.
$$

This is much more efficient than repeating the entire elimination process.

---

# 33. LU and the inverse

We previously learned that if $A$ is invertible,

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

LU gives us another route.

Since

$$
A=LU,
$$

we have

$$
A^{-1}=U^{-1}L^{-1}.
$$

Therefore,

$$
\mathbf{x}
=
U^{-1}L^{-1}\mathbf b.
$$

But we do not actually need to calculate the inverses.

Instead, we calculate $\mathbf y$ from

$$
L\mathbf y=\mathbf b.
$$

This gives

$$
\mathbf y=L^{-1}\mathbf b.
$$

Then calculate $\mathbf x$ from

$$
U\mathbf x=\mathbf y.
$$

This gives

$$
\mathbf x=U^{-1}\mathbf y.
$$

Therefore,

$$
\mathbf x=U^{-1}L^{-1}\mathbf b.
$$

which is exactly

$$
\mathbf x=A^{-1}\mathbf b.
$$

So LU decomposition gives us a practical way to obtain the same solution without explicitly calculating $A^{-1}$.

---

# 34. LU is not a completely different method

It is important not to think of LU as a completely new algorithm.

We have simply organized something we already know.

We already know:

**Gaussian elimination**

$$
A\longrightarrow U.
$$

We now save the multipliers:

$$
m_{21},m_{31},m_{32},\ldots
$$

inside $L$.

Then:

$$
A=LU.
$$

So:

> **LU decomposition is Gaussian elimination with the elimination information recorded.**

This is the central connection.

---

# 35. A general $3\times3$ picture

Suppose elimination produces

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

Suppose the elimination multipliers were

$$
m_{21},
\qquad
m_{31},
\qquad
m_{32}.
$$

Then we construct

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

The original matrix is then reconstructed through

$$
A=LU.
$$

So when you perform elimination on a matrix, you should now pay attention to **two things**:

1. What matrix do I obtain after elimination?
2. What multipliers did I use along the way?

The first gives you $U$.

The second gives you $L$.

---

# 36. How to find $L$ and $U$

Here is the complete procedure.

### Step 1

Start with

$$
A.
$$

### Step 2

Perform Gaussian elimination.

At every step, calculate the multiplier used to eliminate an entry.

### Step 3

When elimination is complete, the resulting upper-triangular matrix is

$$
U.
$$

### Step 4

Place the elimination multipliers below the diagonal.

Put $1$'s on the diagonal.

This gives

$$
L.
$$

### Step 5

You now have

$$
A=LU.
$$

### Step 6

If you want to solve

$$
A\mathbf{x}=\mathbf b,
$$

solve:

$$
L\mathbf y=\mathbf b
$$

followed by

$$
U\mathbf x=\mathbf y.
$$

---

# 37. What if we have to exchange rows?

There is one important complication.

Sometimes the pivot is zero.

For example,

$$
A=
\begin{bmatrix}
0&1\\
2&3
\end{bmatrix}.
$$

We cannot use $0$ as the first pivot.

So we first exchange the rows.

Row exchanges are represented by a **permutation matrix** $P$.

In the more general case, the factorization becomes

$$
PA=LU.
$$

For now, we will focus on the simpler case where no row exchanges are needed.

Later, when we study pivoting more carefully, we will return to the more general form.

---

# 38. A useful mental picture

Think of $A$ as the original matrix.

Then elimination does this:

$$
A
\quad\xrightarrow{\text{elimination}}\quad
U.
$$

During the process, we generate multipliers.

We save those multipliers in $L$:

$$
\text{multipliers}
\quad\longrightarrow\quad
L.
$$

Therefore:

<div class="math-scroll">

$$
\boxed{
\text{Original matrix}
=
\text{Elimination information}
\times
\text{Eliminated matrix}
}
$$

</div>

or, more formally,

$$
A=LU.
$$

This is the idea you should keep in your head.

---

# 39. Connection with what we already know

We have now built a chain of ideas.

### Solving equations

We began with

$$
A\mathbf{x}=\mathbf b.
$$

### Elimination

We learned to transform $A$ into $U$.

$$
A\longrightarrow U.
$$

### Inverse

We learned that, if $A$ is invertible,

$$
\mathbf{x}=A^{-1}\mathbf b.
$$

### LU decomposition

We now save the elimination information:

$$
A=LU.
$$

Then solving the system becomes

$$
L\mathbf y=\mathbf b
$$

followed by

$$
U\mathbf x=\mathbf y.
$$

Each idea is connected to the previous one.

---

# Key idea

Do not memorize LU as simply

$$
A=LU.
$$

Instead remember the story.

We start with $A$.

We perform elimination because an upper-triangular matrix is easy to solve.

The matrix produced by elimination is called $U$.

During elimination, we use multipliers.

We save those multipliers below the diagonal in a lower-triangular matrix $L$.

The two matrices satisfy

$$
A=LU.
$$

Then

$$
A\mathbf{x}=\mathbf b
$$

becomes

<div class="math-scroll">

$$
L\mathbf y=\mathbf b,
\qquad
U\mathbf x=\mathbf y.
$$

</div>

So:

> **$U$ remembers where elimination ended.**

> **$L$ remembers how elimination got there.**

That is the heart of LU decomposition.

---

# Try it yourself

## Exercise 1 — Find the first multiplier

Consider

$$
A=
\begin{bmatrix}
3&1\\
6&4
\end{bmatrix}.
$$

What is the first pivot?

What multiplier do you need to eliminate the $6$?

---

## Exercise 2 — Find $U$

Perform the elimination from Exercise 1 and find $U$.

---

## Exercise 3 — Find $L$

Use the multiplier from Exercise 1 to construct $L$.

Then verify that

$$
A=LU.
$$

---

## Exercise 4 — A $3\times3$ example

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

First perform the elimination slowly.

Write down every multiplier.

Then construct $L$.

Finally verify that

$$
A=LU.
$$

---

## Exercise 5 — Solve using the decomposition

Suppose you have found

$$
A=LU.
$$

Explain why solving

$$
A\mathbf{x}=\mathbf b
$$

can be replaced by solving

$$
L\mathbf y=\mathbf b
$$

and then

$$
U\mathbf x=\mathbf y.
$$

---

# What is next?

We now know how elimination can be written as

$$
A=LU.
$$

We also know that

$$
A\mathbf{x}=\mathbf b
$$

can be understood in terms of the columns of $A$:

$$
A\mathbf{x}
=
x_1\mathbf a_1
+x_2\mathbf a_2
+\cdots
+x_n\mathbf a_n.
$$

This means that solving a system is fundamentally about asking:

> **What can we create using the columns of $A$?**

Can one vector be created from them?

Can every vector be created?

Is the representation unique?

What happens when one column can be constructed from the others?

To answer these questions, we now move away from elimination and begin studying the structure of vectors themselves.

The next chapter introduces:

**Linear Combinations, Span, and Linear Independence.**
