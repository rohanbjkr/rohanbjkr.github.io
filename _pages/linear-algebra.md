---
title: "Linear Algebra from Zero"
permalink: /linear-algebra/
layout: default
---

<style>

.linear-algebra-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 55px 32px 80px;
}


/* =====================================================
   HERO
   ===================================================== */

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
  line-height: 1.6;
  color: #64748b;
  margin: 0 0 25px;
}

.course-stats {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 25px 0 50px;
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
   CONTENTS
   ===================================================== */

.contents-title {
  font-size: 30px;
  line-height: 1.25;
  color: #0f172a;
  margin: 0 0 8px;
}

.contents-description {
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
}

.module-title {
  font-size: 24px;
  line-height: 1.3;
  color: #0f172a;
  margin: 6px 0;
}

.module-description {
  font-size: 14px;
  line-height: 1.55;
  color: #64748b;
  margin: 0;
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
  text-decoration: none;
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
  display: block;
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
  padding: 25px 30px;
  background: #0f172a;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.start-course strong {
  display: block;
  font-size: 17px;
  margin-bottom: 3px;
}

.start-course span {
  font-size: 13px;
  color: #cbd5e1;
}

.start-button {
  background: white;
  color: #0f172a;
  padding: 10px 17px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}

.start-button:hover {
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
    padding: 20px;
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

  <div class="course-eyebrow">
    A Linear Algebra Course
  </div>


  <h1 class="course-title">
    {{ site.data.linear_algebra.title }}
  </h1>


  <p class="course-description">
    {{ site.data.linear_algebra.description }}
  </p>


  {% assign total_lessons = 0 %}

  {% for module in site.data.linear_algebra.modules %}
    {% assign total_lessons =
      total_lessons | plus: module.lessons.size %}
  {% endfor %}


  <div class="course-stats">

    <div class="course-stat">
      {{ site.data.linear_algebra.modules.size }} Modules
    </div>

    <div class="course-stat">
      {{ total_lessons }} Lessons
    </div>

    <div class="course-stat">
      Visual & Intuitive
    </div>

    <div class="course-stat">
      Self-Paced
    </div>

  </div>


  <!-- =================================================
       CONTENTS
       ================================================= -->

  <h2 class="contents-title">
    Course Contents
  </h2>


  <p class="contents-description">
    Work through the modules in order, or jump directly
    to a topic you're interested in.
  </p>


  <!-- =================================================
       DYNAMIC MODULES
       ================================================= -->

  {% for module in site.data.linear_algebra.modules %}


    <div class="course-module">


      <div class="module-header">

        <div class="module-number">
          Module {{ module.number }}
        </div>


        <h3 class="module-title">
          {{ module.title }}
        </h3>


        <p class="module-description">
          {{ module.description }}
        </p>

      </div>


      <!-- DYNAMIC LESSONS -->

      {% for lesson in module.lessons %}


        <a
          href="{{ lesson.url | relative_url }}"
          class="course-lesson">


          <div class="lesson-number">

            {% if lesson.number < 10 %}
              0{{ lesson.number }}
            {% else %}
              {{ lesson.number }}
            {% endif %}

          </div>


          <div class="lesson-information">

            <span class="lesson-title">
              {{ lesson.title }}
            </span>


            <span class="lesson-description">
              {{ lesson.description }}
            </span>

          </div>


          <div class="lesson-arrow">
            →
          </div>


        </a>


      {% endfor %}


    </div>


  {% endfor %}


  <!-- =================================================
       START COURSE
       ================================================= -->

  <div class="start-course">


    <div>

      <strong>
        Ready to begin?
      </strong>


      <span>
        Start with the geometry of linear equations.
      </span>

    </div>


    <a
      href="{{ site.data.linear_algebra.modules[0].lessons[0].url | relative_url }}"
      class="start-button">

      Start Lesson 1 →

    </a>


  </div>


</div>
