---
title: "Linear Algebra from Zero"

permalink: /linear-algebra/

layout: default

description: "An intuitive, visual journey through linear algebra, inspired by the conceptual progression of MIT 18.06."
---

<style>

.linear-algebra-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 55px 32px 80px;
}

.course-hero {
  margin-bottom: 48px;
}

.course-eyebrow {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #64748b;
  margin-bottom: 10px;
}

.course-title {
  font-size: clamp(40px, 5vw, 58px);
  line-height: 1.08;
  letter-spacing: -1.8px;
  color: #0f172a;
  margin: 0 0 18px;
}

.course-description {
  max-width: 760px;
  font-size: 19px;
  line-height: 1.65;
  color: #64748b;
  margin: 0 0 25px;
}

.course-introduction {
  max-width: 760px;
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
}

.course-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 25px;
}

.course-stat {
  background: #f1f5f9;
  border-radius: 7px;
  padding: 8px 13px;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
}


/* =====================================================
   COURSE CONTENTS
   ===================================================== */

.course-contents-title {
  font-size: 30px;
  line-height: 1.25;
  color: #0f172a;
  margin: 0 0 8px;
}

.course-contents-description {
  color: #64748b;
  font-size: 16px;
  margin: 0 0 28px;
}


/* =====================================================
   MODULE
   ===================================================== */

.course-module {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 22px;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
}

.module-header {
  padding: 24px 30px 21px;
  border-bottom: 1px solid #e2e8f0;
}

.module-number {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #64748b;
  margin-bottom: 7px;
}

.module-title {
  font-size: 24px;
  line-height: 1.3;
  color: #0f172a;
  margin: 0;
}

.module-description {
  color: #64748b;
  font-size: 14px;
  line-height: 1.55;
  margin: 7px 0 0;
}


/* =====================================================
   LESSON
   ===================================================== */

.course-lesson {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 30px;
  border-bottom: 1px solid #edf0f3;
  transition:
    background .15s ease,
    padding-left .15s ease;
}

.course-lesson:last-child {
  border-bottom: none;
}

.course-lesson:hover {
  background: #f8fafc;
  padding-left: 34px;
}

.lesson-number {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: #475569;
}

.lesson-information {
  flex: 1;
  min-width: 0;
}

.lesson-title {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 3px;
}

.lesson-description {
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
}

.lesson-arrow {
  font-size: 20px;
  color: #94a3b8;
  margin-left: 15px;
}


/* =====================================================
   START COURSE
   ===================================================== */

.start-course {
  margin-top: 42px;
  padding: 26px 30px;
  background: #0f172a;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.start-course-text strong {
  display: block;
  font-size: 17px;
  margin-bottom: 3px;
}

.start-course-text span {
  font-size: 13px;
  color: #cbd5e1;
}

.start-course-button {
  display: inline-block;
  background: white;
  color: #0f172a;
  padding: 10px 17px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
}

.start-course-button:hover {
  background: #f1f5f9;
}


/* =====================================================
   MOBILE
   ===================================================== */

@media (max-width: 700px) {

  .linear-algebra-page {
    padding: 35px 18px 60px;
  }

  .course-title {
    font-size: 40px;
  }

  .course-description {
    font-size: 17px;
  }

  .module-header {
    padding: 20px 20px 18px;
  }

  .module-title {
    font-size: 21px;
  }

  .course-lesson {
    padding: 17px 20px;
    gap: 13px;
  }

  .course-lesson:hover {
    padding-left: 20px;
  }

  .lesson-number {
    width: 38px;
    height: 38px;
  }

  .lesson-title {
    font-size: 15px;
  }

  .lesson-description {
    font-size: 13px;
  }

  .lesson-arrow {
    display: none;
  }

  .start-course {
    flex-direction: column;
    align-items: flex-start;
  }

}

</style>


<div class="linear-algebra-page">


  <!-- =================================================
       HERO
       ================================================= -->

  <section class="course-hero">

    <div class="course-eyebrow">
      A Linear Algebra Course
    </div>

    <h1 class="course-title">
      Linear Algebra from Zero
    </h1>

    <p class="course-description">
      An intuitive and visual journey through the central
      ideas of linear algebra.
    </p>

    <p class="course-introduction">
      We begin with the fundamental problem
      $A\mathbf{x}=\mathbf{b}$ and gradually build the
      language of vectors, matrices, vector spaces,
      orthogonality, determinants, eigenvalues, and
      linear transformations.
    </p>

    <div class="course-stats">

      <div class="course-stat">
        9 Modules
      </div>

      <div class="course-stat">
        48 Lessons
      </div>

      <div class="course-stat">
        Visual & Intuitive
      </div>

      <div class="course-stat">
        Self-Paced
      </div>

    </div>

  </section>


  <!-- =================================================
       COURSE CONTENTS
       ================================================= -->

  <section>

    <h2 class="course-contents-title">
      Course Contents
    </h2>

    <p class="course-contents-description">
      Work through the modules in order, or jump directly
      to a topic you're interested in.
    </p>


    <!-- =================================================
         MODULE 1
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 1
        </div>

        <h3 class="module-title">
          The Geometry of Linear Equations
        </h3>

        <p class="module-description">
          Three ways to understand the fundamental problem
          $A\mathbf{x}=\mathbf{b}$.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/geometry-of-linear-equations/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          01
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            The Geometry of Linear Equations
          </span>

          <span class="lesson-description">
            The row picture, column picture, and matrix picture.
          </span>

        </div>

        <div class="lesson-arrow">
          →
        </div>

      </a>


      <a
        href="{{ '/linear-algebra/elimination/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          02
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Elimination
          </span>

          <span class="lesson-description">
            How systematic elimination solves a system of equations.
          </span>

        </div>

        <div class="lesson-arrow">
          →
        </div>

      </a>


      <a
        href="{{ '/linear-algebra/elimination-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          03
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Elimination Matrices
          </span>

          <span class="lesson-description">
            Seeing elimination as multiplication by matrices.
          </span>

        </div>

        <div class="lesson-arrow">
          →
        </div>

      </a>


      <a
        href="{{ '/linear-algebra/solving-axb/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          04
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Solving $A\mathbf{x}=\mathbf{b}$
          </span>

          <span class="lesson-description">
            What it means for a system to have zero, one, or many solutions.
          </span>

        </div>

        <div class="lesson-arrow">
          →
        </div>

      </a>

    </div>


    <!-- =================================================
         MODULE 2
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 2
        </div>

        <h3 class="module-title">
          Matrix Algebra
        </h3>

        <p class="module-description">
          The algebra of matrices and the structure behind
          solving linear systems.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/matrix-multiplication/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          05
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Matrix Multiplication
          </span>

          <span class="lesson-description">
            Why matrix multiplication works the way it does.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/inverse-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          06
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Inverse Matrices
          </span>

          <span class="lesson-description">
            Undoing a matrix transformation.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/axb-and-inverse/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          07
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            $A^{-1}$ and $A\mathbf{x}=\mathbf{b}$
          </span>

          <span class="lesson-description">
            Connecting inverse matrices to solutions.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/lu-factorization/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          08
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            LU Factorization
          </span>

          <span class="lesson-description">
            Factoring a matrix into lower and upper triangular matrices.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 3
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 3
        </div>

        <h3 class="module-title">
          Vector Spaces
        </h3>

        <p class="module-description">
          Moving from individual vectors to the spaces they generate.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/vectors/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          09
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Vectors in $\mathbb{R}^n$
          </span>

          <span class="lesson-description">
            Vectors, components, magnitude, and direction.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/linear-combinations/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          10
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Linear Combinations
          </span>

          <span class="lesson-description">
            Building new vectors from existing vectors.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/vector-spaces/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          11
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Vector Spaces
          </span>

          <span class="lesson-description">
            The structure that unifies many different examples.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/column-space/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          12
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Column Space
          </span>

          <span class="lesson-description">
            The set of vectors a matrix can produce.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/nullspace/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          13
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Nullspace
          </span>

          <span class="lesson-description">
            Understanding all solutions to $A\mathbf{x}=\mathbf{0}$.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 4
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 4
        </div>

        <h3 class="module-title">
          Independence, Basis & Dimension
        </h3>

        <p class="module-description">
          The fundamental ideas that describe the structure of vector spaces.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/special-solutions/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          14
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Special Solutions
          </span>

          <span class="lesson-description">
            Finding the building blocks of the solution space.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/linear-independence/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          15
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Linear Independence
          </span>

          <span class="lesson-description">
            When vectors contain genuinely new information.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/basis/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          16
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Basis
          </span>

          <span class="lesson-description">
            A minimal set of vectors that builds a space.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/dimension/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          17
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Dimension
          </span>

          <span class="lesson-description">
            Counting the independent directions in a vector space.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/four-fundamental-subspaces/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          18
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            The Four Fundamental Subspaces
          </span>

          <span class="lesson-description">
            Column space, nullspace, row space, and left nullspace.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 5
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 5
        </div>

        <h3 class="module-title">
          Orthogonality & Least Squares
        </h3>

        <p class="module-description">
          Geometry, projections, approximation, and orthogonal bases.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/orthogonal-vectors/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          19
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Orthogonal Vectors
          </span>

          <span class="lesson-description">
            Perpendicularity through the dot product.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/projections/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          20
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Projections
          </span>

          <span class="lesson-description">
            Finding the closest point on a line or subspace.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/least-squares/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          21
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Least Squares
          </span>

          <span class="lesson-description">
            Solving systems that have no exact solution.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/gram-schmidt/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          22
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Gram–Schmidt
          </span>

          <span class="lesson-description">
            Turning independent vectors into an orthogonal basis.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/qr-factorization/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          23
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            QR Factorization
          </span>

          <span class="lesson-description">
            Matrix factorization built from orthogonal vectors.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 6
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 6
        </div>

        <h3 class="module-title">
          Determinants
        </h3>

        <p class="module-description">
          A number that captures scaling, orientation, and invertibility.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/determinants/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          24
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            What Is a Determinant?
          </span>

          <span class="lesson-description">
            Area, volume, and the geometry of a matrix.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/determinant-properties/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          25
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Properties of Determinants
          </span>

          <span class="lesson-description">
            How row operations change determinants.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/cofactors/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          26
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Cofactors
          </span>

          <span class="lesson-description">
            Expanding determinants and understanding their structure.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/determinants-volume/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          27
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Determinants and Volume
          </span>

          <span class="lesson-description">
            Determinants as geometric scaling factors.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 7
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 7
        </div>

        <h3 class="module-title">
          Eigenvalues & Eigenvectors
        </h3>

        <p class="module-description">
          The special directions that reveal the internal structure of a matrix.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/eigenvalues/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          28
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Eigenvalues and Eigenvectors
          </span>

          <span class="lesson-description">
            Directions that a matrix does not rotate.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/diagonalization/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          29
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Diagonalization
          </span>

          <span class="lesson-description">
            Simplifying matrices using eigenvectors.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/powers-of-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          30
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Powers of a Matrix
          </span>

          <span class="lesson-description">
            Using eigenvalues to understand repeated matrix operations.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/symmetric-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          31
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Symmetric Matrices
          </span>

          <span class="lesson-description">
            Orthogonal eigenvectors and the special structure of symmetric matrices.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/positive-definite-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          32
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Positive Definite Matrices
          </span>

          <span class="lesson-description">
            Quadratic forms, energy, and stability.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 8
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 8
        </div>

        <h3 class="module-title">
          Linear Transformations
        </h3>

        <p class="module-description">
          Matrices as transformations and changes of coordinates.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/linear-transformations/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          33
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Linear Transformations
          </span>

          <span class="lesson-description">
            Thinking of matrices as functions between vector spaces.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/matrices-of-transformations/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          34
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Matrices of Linear Transformations
          </span>

          <span class="lesson-description">
            Representing transformations using matrices.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/change-of-basis/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          35
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Change of Basis
          </span>

          <span class="lesson-description">
            Describing the same vector in different coordinate systems.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/similar-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          36
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Similar Matrices
          </span>

          <span class="lesson-description">
            Different matrix representations of the same transformation.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/svd/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          37
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Singular Value Decomposition
          </span>

          <span class="lesson-description">
            A powerful decomposition of any matrix.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


    <!-- =================================================
         MODULE 9
         ================================================= -->

    <div class="course-module">

      <div class="module-header">

        <div class="module-number">
          Module 9
        </div>

        <h3 class="module-title">
          Applications
        </h3>

        <p class="module-description">
          Seeing linear algebra at work in real mathematical problems.
        </p>

      </div>


      <a
        href="{{ '/linear-algebra/graphs-and-networks/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          38
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Graphs and Networks
          </span>

          <span class="lesson-description">
            Using matrices to represent networks.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/markov-matrices/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          39
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Markov Matrices
          </span>

          <span class="lesson-description">
            Linear algebra and long-run probabilities.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/differential-equations/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          40
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Differential Equations and Eigenvalues
          </span>

          <span class="lesson-description">
            Using eigenvalues to understand dynamic systems.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/fourier/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          41
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Fourier Ideas
          </span>

          <span class="lesson-description">
            Decomposing complicated signals into simpler components.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>


      <a
        href="{{ '/linear-algebra/course-review/' | relative_url }}"
        class="course-lesson">

        <div class="lesson-number">
          42
        </div>

        <div class="lesson-information">

          <span class="lesson-title">
            Putting It All Together
          </span>

          <span class="lesson-description">
            Connecting the major ideas of linear algebra.
          </span>

        </div>

        <div class="lesson-arrow">→</div>

      </a>

    </div>


  </section>


  <!-- =================================================
       START COURSE
       ================================================= -->

  <div class="start-course">

    <div class="start-course-text">

      <strong>
        Ready to begin?
      </strong>

      <span>
        Start with the geometry of linear equations.
      </span>

    </div>


    <a
      href="{{ '/linear-algebra/geometry-of-linear-equations/' | relative_url }}"
      class="start-course-button">

      Start Lesson 1 →

    </a>

  </div>


</div>
