---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "WCAG Success Criteria"
nav_title: "WCAG Success Criteria"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome your comments via GitHub or email from the links below under [Help improve this page](#helpimprove). You are also welcome to join the [ARRM Community Group](https://www.w3.org/community/arrm/) to contribute.

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title
    
lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2025-03-06   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/table.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/table/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

ref: /planning/arrm/table/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

---

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <th>Main Role</th>
      <th>Primary Ownership</th>
      <th>Secondary Ownership</th>
      <th>Contributor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm-full-checklist %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign starter = row["Starter List"] %}
      {% if starter and starter != "" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <td>{{ row["Main Role"] }}</td>
          <td>{{ row["Primary Ownership"] }}</td>
          <td>{{ row["Secondary Ownership"] }}</td>
          <td>{{ row["Contributor"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
