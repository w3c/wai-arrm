---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Front-End Developer Responsibilities Mapping"
title_html: "Front-End Developer <br><span style='font-size:75%'>Responsibilities Mapping</span>"
nav_title: "Front-End Developer"

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2024-03-12   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/front-end.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/front-end/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/front-end/    # Translators, do not change this
# changelog: /@@/changelog/
# acknowledgements: /@@/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. <!-- CHANGELOG. --></p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>.<!-- ACKNOWLEDGEMENTS lists additional contributors. --></p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).</p>

---


# Front-End Developer

Front end development typically builds the parts of a product that will be interacted with by the user - specifically, the user interface. For the purpose of this resource, front end development refers to the implementation or codification of the design in functional templates for a product using technologies such as HTML, CSS and JavaScript.

<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">
<p><b>Key Deliverables</b>
</p>
<ul><li>HTML and CSS files</li>
<li>Client-side scripting</li>
<li>JavaScript libraries and frameworks</li>
<li>Etc.</li></ul>
</div>
<div style="border: 1px solid #ccc; margin: 1em 0 0.5em; padding: 1em; border-left: 10px solid #ddd;">
<p><b>Tasks include</b>
</p>
<ul><li>Pattern libraries and prototypes</li>
<li>Template functionalities</li>
<li>Semantically-rich HTML document structures and widgets</li>
<li>Use and adapt frameworks and content management systems</li>
<li>Etc.</li></ul>
</div>
<div style="border: 1px solid #ccc; background: #eee; margin: 0 0 1em; padding: 1em; border-left: 10px solid #ddd;">
<p><b>Example job titles for this role</b>
</p><p>Front End Developer, Web Developer, Full-Stack Developer, UI/UX Developer, JavaScript Developer, UI/UX Engineer
</p>
</div>
<h2><span id="Front-End_Development_Checkpoints_.E2.80.93_Starter_List"></span><span class="mw-headline" id="Front-End_Development_Checkpoints_–_Starter_List">Front-End Development Checkpoints – Starter List </span></h2>
<p>Here is a list of checkpoints for front-end developers and engineers to get started.  If these checkpoints aren't met, your code can cause significant barriers to users.
</p><p>This list is taken from the full list of Front-end Development checkpoints.
</p><p>For all role checkpoints, see the [<a rel="nofollow" class="external text" href="https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Full_List%7CAccessibility">Checkpoint Full List</a>].
</p>
<table>
<tbody><tr>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">ID</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap;">WCAG SC</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Conformance Level</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Content Type</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap;">Checkpoint</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Main Role</th>
    <th colspan="3" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Role Ownership</th>
  </tr>
  <tr>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Primary</th>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Secondary</th>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Contributor(s)</th>
  </tr>
  <tr>
    <td id="SEM-002" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#SEM-002" title="Accessibility Checkpoint Full List">SEM-002</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Semantic Structure</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">HTML elements are used according to the HTML specification.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="SEM-008" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#SEM-008" title="Accessibility Checkpoint Full List">SEM-008</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Semantic Structure</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">HTML elements are used based on the semantics they provide, not based on what they look like.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="SEM-011" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#SEM-011" title="Accessibility Checkpoint Full List">SEM-011</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Semantic Structure</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Elements that act as headings are marked up as such.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left; white-space: nowrap;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="SEM-017" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#SEM-017" title="Accessibility Checkpoint Full List">SEM-017</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Document Structure</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">The source code (or DOM) order matches the suggested visual order of the design.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-004" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-004" title="Accessibility Checkpoint Full List">INP-004</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">All actionable elements can be reached, using only the keyboard.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-005" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-005" title="Accessibility Checkpoint Full List">INP-005</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">All active elements can be triggered, using only the keyboard.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-012" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-012" title="Accessibility Checkpoint Full List">INP-012</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Users can navigate away from all active elements, using only the keyboard.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-015" style="border: 1px solid #aaa; background: #eee; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-015" title="Accessibility Checkpoint Full List">INP-015</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Users can tab through active elements in an order that reflects the intended interaction order of the design.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design, Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-018" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-018" title="Accessibility Checkpoint Full List">INP-018</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Every element that receives keyboard focus displays a visible focus indicator.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="FRM-001" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-001" title="Accessibility Checkpoint Full List">FRM-001</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Text labels are marked up using the label element or other equivalent means.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="FRM-007" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-007" title="Accessibility Checkpoint Full List">FRM-007</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Instructions and messages are programmatically conveyed to assistive technologies.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="FRM-009" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-009" title="Accessibility Checkpoint Full List">FRM-009</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Required fields are programmatically conveyed as such to assistive technologies.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>

  <tr>
    <td id="NAV-012" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-012" title="Accessibility Checkpoint Full List">NAV-012</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">2.4.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Skip links and similar mechanisms point to the expected destination.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="DYN-003" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#DYN-003" title="Accessibility Checkpoint Full List">DYN-003</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#status-messages">4.1.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Dynamic Content</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Status, toast, or similar messages are programmatically determined through WAI-ARIA roles or properties, so they can be presented to assistive technology users without receiving focus.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="CSS-014" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#CSS-014" title="Accessibility Checkpoint Full List">CSS-014</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">CSS</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">CSS techniques are used to ensure that content doesn't overflow, overlap or get truncated as a result of increasing the text size.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Development_Role_Group" title="Role definition document">Development</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
  </tr>
</tbody></table>
<h2><span class="mw-headline" id="Case_Study:_How_to_use_the_Starter_List">Case Study: How to use the Starter List</span></h2>
<p>A good way to get familiar with the checkpoints is to do a short case study.  Think about how you might tackle the checkpoint in your role. 
</p><p>Then, think of how meeting this checkpoint impacts an end user. 
</p>
<h3><span class="mw-headline" id="Checkpoint:">Checkpoint:</span></h3>
<p>INP-004: All actionable elements can be reached, using only the keyboard.
</p>
<h3><span class="mw-headline" id="Primary_Role:_Front-end_Developer">Primary Role: Front-end Developer</span></h3>
<p>As a front-end developer, I will code all functionality of the content, on a web page and/or within individual components and elements, to ensure it is operable through a keyboard interface only.  This also allows switch control systems to operate. 
</p>
<h3><span class="mw-headline" id="Secondary_Role:_UX_Designer">Secondary Role: UX Designer</span></h3>
<p>As the UX designer in support of the Front-end Developer, I will ensure to annotate my designs, wireframes and prototypes to clearly define the functionality of components on the page and the expected reading order to allow a keyboard user access to the page content.  
</p>
<h3><span id="End_User_persona_1:_Kaseem.2C_teenager_who_is_deaf_and_blind"></span><span class="mw-headline" id="End_User_persona_1:_Kaseem,_teenager_who_is_deaf_and_blind">End User persona 1: Kaseem, teenager who is deaf and blind</span></h3>
<p>Kaseem is a teenager who is deaf and recently became legally blind too, which means she can see only small portions of a screen and read text when it is significantly enlarged.  She uses screen magnification software to enlarge the text on websites to a suitable font size, displays text on a refreshable Braille device and a large computer screen with high resolution and high luminosity (brightness).
</p><p>The viewport, or area that Kaseem sees when the screen is magnified, is very small.  So the focus must be in or very close to that 'viewport' at all times. Shifting it unexpectedly to a completely different areas of the screen makes it very difficult to find and then move to that area, especially if she has no idea where the focus has landed.  The focus could move to another area on the page, or to a completely new page.   
</p>
<h3><span id="End_user_persona_2:_Alex.2C_reporter_with_repetitive_stress_injury"></span><span class="mw-headline" id="End_user_persona_2:_Alex,_reporter_with_repetitive_stress_injury">End user persona 2: Alex, reporter with repetitive stress injury</span></h3>
<p>Alex has worked as a reporter for more than 20 years and has developed a repetitive strain injury that makes it painful to use a mouse and to type for extended periods of time.  Alex encounters problems when websites and other online content cannot be navigated by keyboard commands alone. 
</p><p>If when navigating the web page, if the keyboard focus shifts unexpectedly, can Alex get back to the task he was doing? 
</p>
<h3><span id="End_user_persona_3:_Ilya.2C_senior_staff_member_who_is_blind"></span><span class="mw-headline" id="End_user_persona_3:_Ilya,_senior_staff_member_who_is_blind">End user persona 3: Ilya, senior staff member who is blind</span></h3>
<p>Ilya is blind. She is the chief accountant at an insurance company that uses web-based documents and forms over a corporate intranet and like many other blind computer users, she does not read Braille.
</p><p>Ilya relies on the screen reader assistive technology to let her know where she is on the web page. Moving the focus unexpectedly breaks the context of the page and her mental map or perception of the page. 
</p><p><a rel="nofollow" class="external text" href="https://www.w3.org/WAI/people-use-web/user-stories/#reporter">Read the full user stories</a>
</p>
<h3><span class="mw-headline" id="Resources">Resources</span></h3>
<ul><li>Use the <a rel="nofollow" class="external text" href="https://www.w3.org/WAI/tips/developing/">WAI Tips for Developing</a> to get started.</li>
<li>See the <a rel="nofollow" class="external text" href="https://www.w3.org/WAI/tutorials/">WAI Tutorials</a> for menus, tables, forms and more.</li>
<li>Review the <a rel="nofollow" class="external text" href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Practices Guide (APG)</a> for keyboard functionality for ARIA components.</li></ul>
<h2><span class="mw-headline" id="Exercise:_Role-based_Decision_Tree_Example">Exercise: Role-based Decision Tree Example</span></h2>
<h3><span id="Who_is_the_primary_owner_of_checkpoint_INP-004.3F"></span><span class="mw-headline" id="Who_is_the_primary_owner_of_checkpoint_INP-004?">Who is the primary owner of checkpoint INP-004?</span></h3>
<p>Let's get started on INP-004: All actionable elements can be reached, using only the keyboard. </p>
<p>Using the <a href="/WAI/EO/wiki/Role-Based_Decision_Tree" title="Role-Based Decision Tree">Role-based Decision Tree</a>, let's see how we might assign ownership.</p>
<div style="border: 1px solid #ccc; margin: 1em 0 0; padding: 1em 2em; border-left: 10px solid #ddd;">
<h4><span id="Step_A:_Is_this_checkpoint_business-related.3F"></span><span class="mw-headline" id="Step_A:_Is_this_checkpoint_business-related?">Step A: Is this checkpoint business-related?</span></h4>
<p>No. As it's a functional issue, a Business Analyst wouldn't be involved.</p>
<h4><span id="Step_B:_Is_this_checkpoint_about_content_authoring.3F"></span><span class="mw-headline" id="Step_B:_Is_this_checkpoint_about_content_authoring?">Step B: Is this checkpoint about content authoring?</span></h4>
<p>No. A Content Author provides the textual content and accessible content for the elements but is not directly involved in decisions about their functionality. </p>
<h4><span id="Step_C:_Is_this_checkpoint_about_UX_Design.3F"></span><span class="mw-headline" id="Step_C:_Is_this_checkpoint_about_UX_Design?">Step C: Is this checkpoint about UX Design?</span></h4>
<p>No. The UX Designer is the one to select the element type and have intentions about the behaviour and functionality of the element - for example, that it is accessible and operable by keyboard.  However, this checkpoint is about the implementation of the keyboard function.</p>
<h4><span id="Step_D:_Is_this_checkpoint_about_visual_design.3F"></span><span class="mw-headline" id="Step_D:_Is_this_checkpoint_about_visual_design?">Step D:  Is this checkpoint about visual design?</span></h4>
<p>No. A Visual Designer designs the look and feel (presentation) of the elements, but this checkpoint is related to their compatibility with assistive technology (i.e. keyboard and/or switch control functionality) and not with presentation.</p>
<h4><span id="Step_E:_Is_this_checkpoint_about_implementation.3F"></span><span class="mw-headline" id="Step_E:_Is_this_checkpoint_about_implementation?">Step E: Is this checkpoint about implementation?</span></h4>
<p>Yes. As their skillset is implementation and code, it is the responsibility of the Front-end Developer to build this into all actionable elements. </p>
<h4><span id="Step_F:_Is_this_checkpoint_about_testing.3F"></span><span class="mw-headline" id="Step_F:_Is_this_checkpoint_about_testing?">Step F: Is this checkpoint about testing?</span></h4>
<p>No.</p>
<p> The exercise ends at Question 5 because it's been determined that the <strong>primary owner</strong> of the checkpoint is the Front-end Developer.</p>
</div>
<div style="border: 1px solid #ccc; margin: 1em 0 0; padding: 1em 2em; border-left: 10px solid #ddd;">
<h3><span id="Does_this_checkpoint_require_a_secondary_owner.3F"></span><span class="mw-headline" id="Does_this_checkpoint_require_a_secondary_owner?"> Does this checkpoint require a secondary owner?</span></h3>
<p> Yes.  This checkpoint is about front-end implementation, however a UX Designer is also responsible for including the keyboard specifications for reading and tabbing order in their design documentation that is shared with the Front-end Developer.</p>
</div>
<div style="border: 1px solid #ccc; margin: 1em 0 0; padding: 1em 2em; border-left: 10px solid #ddd;">
<h3><span id="Does_this_checkpoint_require_a_contributor.3F"></span><span class="mw-headline" id="Does_this_checkpoint_require_a_contributor?"> Does this checkpoint require a contributor?</span></h3>
<p>No. </p>
</div>
<h3><span id="Try_it_for_yourself.21"></span><span class="mw-headline" id="Try_it_for_yourself!"> Try it for yourself! </span></h3> 
<p> Try the exercise with another checkpoint from the Starter List above.</p>