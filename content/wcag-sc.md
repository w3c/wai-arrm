---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria"
nav_title: "WCAG Success Criteria"
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

permalink: /planning/arrm/wcag-sc/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/wcag-sc/        # Do not change this

custom_changelog: /planning/arrm/changelog/

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>). You are also welcome to join the <a href="https://www.w3.org/community/arrm/">ARRM Community Group</a> to contribute.</p>


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

This page provides an approach for assigning which roles have primary (P), secondary (S), or contributor (C) responsibilities for meeting Web Content Accessibility Guidelines ([WCAG](/standards-guidelines/wcag/)) 2.2 success criteria.

You can download the information from the table as a [CSV file]({{ "/content-assets/wai-arrm/arrm-wcag-sc.csv" | relative_url }}).

{% include showhidebutton.html showtext="Show navigation" hidetext="Show tables full width, hide navigation" target=".sidenav" default="show" %}

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>WCAG success criterion</th>
      <th>Business</th>
      <th>Content Authoring</th>
      <th>Visual Design</th>
      <th>User Experience (UX) Design</th>
      <th>Front-End Development</th>
    </tr>
  </thead>
<tbody>
  {% capture padded_rows %}
    {% for row in site.data.arrm.arrm-wcag-sc %}
      {% comment %} 
        Split SC '2.4.11' into [2, 4, 11], pad with zeros to '02.04.11', 
        then prepend it to the loop index to ensure a unique, sortable string.
      {% endcomment %}
      {% assign parts = row["WCAG SC"] | split: "." %}
      {% capture sortable_sc %}{% for part in parts %}{{ part | prepend: "00" | slice: -2, 2 }}.{% endfor %}{% endcapture %}
      {{ sortable_sc }}|{{ forloop.index0 }}{% unless forloop.last %}^{% endunless %}
    {% endfor %}
  {% endcapture %}

  {% assign sorted_indices = padded_rows | split: "^" | sort %}

  {% for item in sorted_indices %}
    {% assign index = item | split: "|" | last | plus: 0 %}
    {% assign row = site.data.arrm.arrm-wcag-sc[index] %}
    {% assign wcag_entry = site.data.wcag22.successcriteria | find: "num", row["WCAG SC"] %}
    
    <tr>
      <td>
        {% if wcag_entry %}
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/{{ wcag_entry.id }}">
        {% endif %}
        {{ row["WCAG SC"] }} {{ wcag_entry.handle }} ({{ row["Level"] }})
        {% if wcag_entry %}</a>{% endif %}
      </td>
      <td>{{ row["Business"] }}</td>
      <td>{{ row["Content Authoring"] }}</td>
      <td>{{ row["Visual Design"] }}</td>
      <td>{{ row["User Experience (UX) Design"] }}</td>
      <td>{{ row["Front-End Development"] }}</td>
    </tr>
  {% endfor %}
</tbody>



