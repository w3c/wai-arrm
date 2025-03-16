---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria"
nav_title: "WCAG Success Criteria"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-15   # Keep the date of the English version

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
  path: content/wcag-sc.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/wcag-sc/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/wcag-sc/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>
---

This page provides an approach for assigning which roles have primary (P), secondary (S), or contributor (C) responsibilities for meeting Web Content Accessibility Guidelines ([WCAG](/standards-guidelines/wcag/)) 2.1 success criteria (SC). A later iteration will include the success criteria added in WCAG 2.2.

You can download the information from the table as a [CSV file]({{ "/content-assets/wai-arrm/arrm-wcag-sc.csv" | relative_url }}).

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Business</th>
      <th>Content Authoring</th>
      <th>Visual Design</th>
      <th>User Experience (UX) Design</th>
      <th>Front-End Development</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-wcag-sc %}
        <tr>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Business"] }}</td>
          <td>{{ row["Content Authoring"] }}</td>
          <td>{{ row["Visual Design"] }}</td>
          <td>{{ row["User Experience (UX) Design"] }}</td>
          <td>{{ row["Front-End Development"] }}</td>
        </tr>
    {% endfor %}
  </tbody>
</table>



