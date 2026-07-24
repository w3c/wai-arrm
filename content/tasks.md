---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Tasks Involved in Accessibility"
nav_title: "Tasks"
lang: en                   # Change "en" to the translated-language shortcode
last_updated: 2026-06-05   # Keep the date of the English version

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title

# translators:        # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

permalink: /planning/arrm/tasks/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/tasks/        # Do not change this

custom_changelog: /planning/arrm/changelog/

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

inline_css: | 
  /* Only display navigation toggle at breakpoints where navigation appears */
  .showhidebutton[data-target=".sidenav"] {
    display: none;
  }

  .task-status {
    color: var(--dk-grey);
    font-size: 0.85em;
  }

  /* 1. Hide the toggle button by default (no-JS fallback) */
  .arrm-toggle-tasks {
    display: none;
  }

  /* 2. When JS is enabled, show the button and hide non-starter tasks */
  .arrm-js .arrm-toggle-tasks {
    display: inline-block;
  }

  @media (min-width: 60em) {
    .showhidebutton[data-target=".sidenav"] {
      display: inline;
    }

    /* Only widen main content when sidenav is hidden */
    body:has(.sidenav[hidden]) #main {
      grid-column: navigation-start / content-end;
    }
    .sidenav[hidden] {
      /* Override breakpoint's display: block */
      display: none;
    }
  }
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page provides an approach to addressing accessibility requirements in WCAG as tasks for specific roles.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2,3" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Introduction

{::nomarkdown}
{% include box.html type="start" title="Important" icon="warning" id="important" %}
{:/}

This is not a definitive or complete list of accessibility tasks. 

ARRM is a practical implementation resource, not a normative interpretation of WCAG. Its tasks are intended to help teams move closer to WCAG conformance by translating success criteria into actionable activities and highlighting recommended best practices. They do not replace the normative WCAG specification or the informative Understanding WCAG documents, nor should they be interpreted as definitive or exhaustive requirements. 

While each task is associated with a relevant success criterion, some associations are stronger than others. In some cases, a task reflects a recommended practice that supports accessibility rather than a direct requirement of the referenced success criterion. When questions arise, WCAG and its supporting documentation remain the authoritative source.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

These tasks offer a starting point for a role-based approach to addressing Web Content Accessibility Guidelines ([WCAG](/standards-guidelines/wcag/)) 2.2 success criteria (SC). 

This information is also available to download as a [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}).

{% include showhidebutton.html showtext="Show navigation" hidetext="Show tables full width, hide navigation" target=".sidenav" default="show" %}

## Images and Graphs

<div class="arrm-task-list arrm-show-starter-only" id="task-table-img">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "IMG-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-img"
  data-section-name="Images and Graphs tasks">
  Show all Images and Graphs tasks
</button>

## Semantic Structure

<div class="arrm-task-list arrm-show-starter-only" id="task-table-semantic">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "SEM-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-semantic"
  data-section-name="Semantic Structure tasks">
  Show all Semantic Structure tasks
</button>

## Input Modalities

<div class="arrm-task-list arrm-show-starter-only" id="task-table-input">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "INP-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-input"
  data-section-name="Input Modalities">
  Show all Input Modalities tasks
</button>

## Form Interactions

<div class="arrm-task-list arrm-show-starter-only" id="task-table-form">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "FRM-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-form"
  data-section-name="Form Interactions">
  Show all Form Interactions tasks
</button>

## CSS and Presentation

<div class="arrm-task-list arrm-show-starter-only" id="task-table-css">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "CSS-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-css"
  data-section-name="CSS and Presentation">
  Show all CSS and Presentation tasks
</button>

## Navigation

<div class="arrm-task-list arrm-show-starter-only" id="task-table-navigation">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "NAV-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-navigation"
  data-section-name="Navigation">
  Show all Navigation tasks
</button>

## Data Tables

<div class="arrm-task-list arrm-show-starter-only" id="task-table-data">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "TAB-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-data"
  data-section-name="Data Tables">
  Show all Data Tables tasks
</button>

## Animation and Movement

<div class="arrm-task-list arrm-show-starter-only" id="task-table-animation">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "ANM-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-animation"
  data-section-name="Animation and Movement">
  Show all Animation and Movement tasks
</button>

## Static Content

<div class="arrm-task-list arrm-show-starter-only" id="task-table-static">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "SCT-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-static"
  data-section-name="Static Content">
  Show all Static Content tasks
</button>

## Dynamic Interactions

<div class="arrm-task-list arrm-show-starter-only" id="task-table-dynamic">
<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th style="width:13%">ID / Status</th>
      <th style="width:8%">WCAG SC</th>
      <th style="width:34%">Task</th>
      <th style="width:15%">Primary Ownership</th>
      <th style="width:15%">Secondary Ownership</th>
      <th style="width:15%">Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% assign starter = row["Starter List"] %}
      {% assign starter_flag = row["Starter List"] | downcase | strip %}
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "DYN-" %}
        <tr class="{% if starter_flag == 'x' %}starter-task{% else %}non-starter-task{% endif %}">
          <td style="white-space:nowrap;">{{ row["ID"] }} <br /><span class="notes task-status">{{ row["Status"] }}</span></td>
          <td>
            {%- if wcag_entry -%}
              <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
            {%- endif -%}
            {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
            {%- if wcag_entry -%}</a>{%- endif %}
          </td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>

<button type="button"
  class="arrm-toggle-tasks"
  aria-expanded="false"
  aria-controls="task-table-dynamic"
  data-section-name="Dynamic Interactions">
  Show all Dynamic Interactions tasks
</button>



{::nomarkdown}
<style>
  /* Ensure hidden rows stay hidden */
  tr.arrm-row-hidden { display: none !important; }
  
  /* CRITICAL: Override the theme CSS to allow JS to show non-starter rows up to 15 */
  .arrm-show-starter-only tr.non-starter-task:not(.arrm-row-hidden) {
    display: table-row !important;
  }
  
  /* Bold starter rows to make them stand out */
  tr.arrm-starter-bold,
  tr.arrm-starter-bold td,
  tr.arrm-starter-bold th { 
    font-weight: bold !important; 
  }
</style>

<script>
(function () {
  function initToggleTasks() {
    // Flag that JS is active
    document.documentElement.classList.add('arrm-js');

    const STARTER_CLASS = 'starter-task'; 
    const MIN_ROWS_TOTAL = 15;

    // Find all toggle buttons across all category tables on tasks.md
    document.querySelectorAll('.arrm-toggle-tasks').forEach((button) => {
      if (button.dataset.initialized) return;
      button.dataset.initialized = 'true';

      const targetId = button.getAttribute('aria-controls');
      const tableWrapper = document.getElementById(targetId);
      if (!tableWrapper) return;

      const sectionName = button.dataset.sectionName || 'tasks';

      function updateTableVisibility(isCondensedView) {
        const tbody = tableWrapper.querySelector('tbody');
        if (!tbody) return;

        const allRows = Array.from(tbody.querySelectorAll('tr'));
        const starterRows = allRows.filter(row => row.classList.contains(STARTER_CLASS));

        if (isCondensedView) {
          tableWrapper.classList.add('arrm-show-starter-only');

          // 1. Calculate how many non-starters are needed to reach 15 total rows
          const startersCount = starterRows.length;
          let nonStartersNeeded = Math.max(0, MIN_ROWS_TOTAL - startersCount);
          let nonStartersShown = 0;

          // 2. Loop sequentially through all rows to preserve natural DOM order
          allRows.forEach(row => {
            const isStarter = row.classList.contains(STARTER_CLASS);

            if (isStarter) {
              row.classList.remove('arrm-row-hidden');
              row.classList.add('arrm-starter-bold');
            } else {
              row.classList.remove('arrm-starter-bold');
              if (nonStartersShown < nonStartersNeeded) {
                row.classList.remove('arrm-row-hidden');
                nonStartersShown++;
              } else {
                row.classList.add('arrm-row-hidden');
              }
            }
          });
        } else {
          tableWrapper.classList.remove('arrm-show-starter-only');

          // Show all rows, keeping starter rows bold
          allRows.forEach(row => {
            row.classList.remove('arrm-row-hidden');
            if (row.classList.contains(STARTER_CLASS)) {
              row.classList.add('arrm-starter-bold');
            } else {
              row.classList.remove('arrm-starter-bold');
            }
          });
        }

        // Sync ARIA states and button text
        button.setAttribute('aria-expanded', String(!isCondensedView));
        button.textContent = isCondensedView
          ? `Show all ${sectionName}`
          : `Show starter ${sectionName} only`;
      }

      // Initial execution on load: Default to condensed view (15-row fill)
      const startInCondensedView = button.getAttribute('aria-expanded') !== 'true';
      updateTableVisibility(startInCondensedView);

      // Click handler
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const currentlyExpanded = button.getAttribute('aria-expanded') === 'true';
        updateTableVisibility(currentlyExpanded);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggleTasks);
  } else {
    initToggleTasks();
  }
})();
</script>
{:/}
