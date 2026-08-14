---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Tasks Involved in Accessibility"
nav_title: "Tasks"
lang: en                   # Change "en" to the translated-language shortcode
last_updated: 2026-06-05   # Keep the date of the English version
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome your comments via GitHub or email from the links below under [Help improve this page](#helpimprove). You are also welcome to join the [ARRM Community Group](https://www.w3.org/community/arrm/) to contribute.

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "IMG-" %}
        <tr>
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

## Semantic Structure

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "SEM-" %}
        <tr>
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

## Input Modalities

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "INP-" %}
        <tr>
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

## Form Interactions

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "FRM-" %}
        <tr>
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

## CSS and Presentation

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "CSS-" %}
        <tr>
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


## Navigation

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "NAV-" %}
        <tr>
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


## Data Tables

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "TAB-" %}
        <tr>
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


## Animation and Movement

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "ANM-" %}
        <tr>
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


## Static Content

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "SCT-" %}
        <tr>
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


## Dynamic Interactions

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
      {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
      {% if content_type contains "DYN-" %}
        <tr>
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
