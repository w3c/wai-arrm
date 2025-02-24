---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Content Author Responsibilities Mapping"
title_html: "Content Author <br><span style='font-size:75%'>Responsibilities Mapping</span>"
nav_title: "Content Author"

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2025-02-24   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors'

github:
  repository: w3c/wai-arrm
  path: content/content-author.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/content-author/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/user-experience/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <strong>Status: Editors' DRAFT that is incomplete, unapproved, in progress </strong></p>
   <strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href=”https://www.w3.org/groups/wg/@@wg/participants”>participants of the @@WG</a>. ACKNOWLEDGEMENTS lists additional contributors.
   Developed with the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>).

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

@@ summary

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::options toc_levels="2" /}

{::nomarkdown}
{% include_cached toc.html type="start" title="Page Contents" class="full" %}
{:/}

-   TOC is created automatically.
{:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}

## Role summary

Content Creation is often used in marketing, but can also be a task assigned to a role within a product team. Content creation involves defining a content strategy, the writing or creation of the content or media for a product. The person who authors the content is responsible for making sure that content is accessible to people with disabilities.

**Key Deliverables**

*   Body copy, managed content, scripts
*   Taxonomies
*   Writing guidelines
*   Media files, including PDF, audio and video
*   Etc.

**Tasks include**

*   Content authoring
*   Media and documentation creation
*   Content strategies definition
*   Etc.

**Example job titles for this role**

Content Strategist, Content Creator, Content Designer, Content Author, Digital Copywriter, UX Writer, Content Producer, Technical Writer, Information Developer, Content Developer

  

## Content Author Tasks: Starter List

Here is a list of tasks for Content Authors to get started. If these design tasks aren't met, your content - and lack of accessible content like alt text, captions, transcripts etc. - can cause significant barriers to users.

This list is taken from the full list of Content Author tasks.

For all role tasks, see the [<a rel="nofollow" class="external text" href="https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Full_List%7CAccessibility">Tasks Full List</a>]. 

### Input Methods

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
      {% assign primary = row["Primary Ownership"] %}
      {% if starter and starter != "" and primary == "Content Authoring" %}
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

## Case Study: How to use the Starter List

A good way to get familiar with the tasks is to do a short case study. Think about how you might tackle the task in your role.

Then, think of how meeting this task impacts an end user.

### Task:

IMG-002: Informative images are described with a clear and meaningful text equivalent (alt attribute or other equivalent means).

### Primary Role: Content Author

"As the primary owner of this task, I will ensure that any images that contain information or represent an action or a symbol for the user, and are not just decorative - have a descriptive and meaningful text alternative that will be announced by screen reader software."

### Secondary Role: None

There is no secondary owner of this task.

### Contributor Role: None

There is no additional contributor for this task.

### End user persona: Ilya, a senior staff member who is blind

Ilya is blind and uses a screen reader (speech-to-text software) and keyboard to navigate web pages. She uses websites daily for research and financial transactions. This design checkpoint ensures she isn't confused by an unexpected behaviour, i.e., when her keyboard focus lands on a button for the first time and content is announced automatically or the button automatically opens another page.

The intent of the task is to ensure that functionality is predictable as visitors navigate their way through a document.

This task helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

[Read Ilya's full story](https://www.w3.org/WAI/people-use-web/user-stories/#accountant) and learn about other design tasks that benefit users like her.

### Resources

*   Use the [Alt Text Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) to help decide if an image needs a description.
*   Use the [Tips for Writing](https://www.w3.org/WAI/tips/writing/) to get started.
*   Review the [Images Tutorial](https://www.w3.org/WAI/tutorials/images/) for guidance on different types of images.
