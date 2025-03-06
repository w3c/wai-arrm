---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Content Author Responsibilities"
nav_title: "Content Author"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2025-03-06    # Keep the date of the English version

parent_in_h1:
  - ref: /planning/arrm/
    name: nav_title

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors'

github:
  path: content/content-author.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md

permalink: /planning/arrm/content-author/  # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/arrm/user-experience/    # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate the other words, including "Editors and contributors:"
# Translate the Community Group and Working Group names. Leave the acronyms in English.
footer: >
   <p><strong>Editors and contributors: See ACKNOWLEDGEMENTS.</strong></p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

This page lists some digital accessibility tasks that are usually the responsibility of content authors.

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

Content Strategist, Content Creator, Content Designer, Content Author, Digital Copywriter, UX Writer, Content Producer, Technical Writer, Information Developer, Content Developer.

## Tasks to get started

Below is a list of tasks for content authors to get started making your work more accessible to disabled people. If these tasks aren't met, your content can create barriers to users with disabilities.

You can also get the full list of [Tasks Involved in Accessibility as a web page](/planning/arrm/tasks/) with other roles, or download the [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}).

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG SC</th>
      <th>Level</th>
      <th>Task</th>
      <!-- <th>Main Role</th><th>Primary Ownership</th><th>Secondary Ownership</th><th>Contributor</th> -->
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign starter = row["Starter List"] %}
      {% assign primary = row["Primary Ownership"] %}
      {% if starter and starter != "" and primary == "Content Authoring" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
          <!-- <td>{{ row["Main Role"] }}</td><td>{{ row["Primary Ownership"] }}</td><td>{{ row["Secondary Ownership"] }}</td><td>{{ row["Contributor"] }}</td> -->
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

## Case study: How to use the tasks {#how-to-use-the-tasks}

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

### End user persona: Lakshmi, a senior accountant who is blind

Lakshmi is blind and uses a screen reader (speech-to-text software) and keyboard to navigate web pages. She uses websites daily for research and financial transactions. This design task ensures she isn't confused by an unexpected behaviour, i.e., when her keyboard focus lands on a button for the first time and content is announced automatically or the button automatically opens another page.

The intent of the task is to ensure that functionality is predictable as visitors navigate their way through a document.

This task helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

[Read Lakshmi's full story](/people-use-web/user-stories/story-three/) and learn about other design tasks that benefit users like her.

## Additional resources

*   Use the [Alt Text Decision Tree](/tutorials/images/decision-tree/) to help decide if an image needs a description.
*   Use the [Tips for Writing](/tips/writing/) to get started.
*   Review the [Images Tutorial](/tutorials/images/) for guidance on different types of images.

## Draft review questions

{::nomarkdown}
{% include box.html type="start" title="How do you want to use this page?" icon="comments"%}
{:/}

For the later iterations of this page, we could:
- Provide the 'Tasks to get started' as separate tables by content type — images and graphs, semantic structure, ... like the full [Tasks page](/planning/arrm/tasks/)
- Provide all the tasks, in addition to the tasks to get started
- Provide filters to select what to show

Would that be particulalry useful to you? Or, are you comfortable downloading the [CSV file]({{ "/content-assets/wai-arrm/arrm-all-tasks.csv" | relative_url }}) and using your spreadsheet software to see what you want?

We welcome your input by email or GitHub from the links below [Help improve this page](#helpimprove)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}
