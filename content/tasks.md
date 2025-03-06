---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Tasks Involved in Accessibility"
nav_title: "Tasks"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-06   # Keep the date of the English version

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  path: content/tasks.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/tasks/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/tasks/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

inline_css: | 
  .sidenav { 
    display: none; 
  } 
  #main { 
    grid-column: navigation-start / content-end; 
  }
  #main > *:not(table, header) {
    /* max-width: 50em; */
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
{% include box.html type="start" title="Important" icon="warning" %}
{:/}

This is not a definitive or complete list of accessibility tasks.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

These tasks offer a starting point for a role-based approach to addressing Web Content Accessibility Guidelines ([WCAG](/standards-guidelines/wcag/)) 2.1 success criteria (SC). A later iteration will include the success criteria added in WCAG 2.2.

This information is also available to download as a [single CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}).

## Images and Graphs

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "IMG-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## Semantic Structure

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "SEM-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## Input Modalities

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "INP-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## Form Interactions

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "FRM-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## CSS and Presentation

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "CSS-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Navigation

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "NAV-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Data Tables

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "TAB-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Animation and Movement

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "ANM-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Static Content

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "SCT-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Dynamic Interactions

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign content_type = row["ID"] %}
      {% if content_type contains "DYN-" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
