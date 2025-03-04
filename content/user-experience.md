---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "User Experience (UX) Designer Responsibilities"
nav_title: "UX Designer"
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
  path: content/user-experience.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/user-experience/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

ref: /planning/arrm/user-experience/    # Translators, do not change this
# changelog: /@@/changelog/
acknowledgements: /planning/arrm/acknowledgements/
license: creative-commons

# description:  @@ a 150ish-character-description for social media   # translate the description
# image: @@ /content-images/wai-arrm/social.png

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
   <p><strong>Editors and contributors:</strong> See ACKNOWLEDGEMENTS.</p>
   <p>Developed through the <a href="https://www.w3.org/community/arrm/">Accessibility Roles and Responsibilities Mapping (ARRM) Community Group</a> at W3C. Initially developed with the Accessibility Education and Outreach Working Group (<a href="https://www.w3.org/WAI/about/groups/eowg/">EOWG</a>).</p>

---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

This page lists some digital accessibility tasks that are usually the responsibility of UX designers.

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

UX Designers can potentially cover numerous related areas, from conceptualizing the user journey to partial front-end development. For the purposes of this resource, UX Design is defined by its core responsibilities, such as information architecture, creating wireframes (low fidelity screen mockups), and creating prototypes that define interactions.

<dl>
<dt>Key deliverable examples:</dt>
<dd>User journeys, wireframes, prototypes, interaction guidelines, information architecture</dd><dt>Tasks include:</dt>
<dd>User workflow / process maps, designing user experiences, user task and workflow mapping, creating and maintaining user personas</dd>
<dt>Example job titles for this role:</dt>
<dd>User Experience (UX) Designer, Product Designer, Web Designer, Service Designer</dd>
</dl>

## Tasks to get started

Below is a list of tasks for UX designers to get started making your work more accessible to disabled people. If these design tasks aren't met, your designs can create barriers to users with disabilities.

You can also get the full list of [Tasks Involved in Accessibility as a web page](/WAI/planning/arrm/tasks) with other roles, or download the [CSV file](https://raw.githubusercontent.com/w3c/wai-arrm/refs/heads/master/_data/arrm-full-checklist.csv).

<table>
  <thead>
    <tr>
      <!-- Only include specific columns in the header - exclude: Starter List -->
      <th>ID</th>
      <th>WCAG</th>
      <th>Level</th>
      <th>Task</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.arrm-all-tasks %}
      <!-- Only display rows where 'Starter List' is not null or empty -->
      {% assign starter = row["Starter List"] %}
      {% assign primary = row["Primary Ownership"] %}
      {% if starter and starter != "" and primary == "User Experience (UX) Design" %}
        <tr>
          <td>{{ row["ID"] }}</td>
          <td>{{ row["WCAG SC"] }}</td>
          <td>{{ row["Level"] }}</td>
          <td>{{ row["Task"] }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


## Case study: How to use the tasks

A good way to get familiar with the tasks is to do a short case study. Think about how you might tackle the task in your role. Then, think of how meeting this task impacts an end user. 

### Task

NAV-024: Setting the focus to a new element doesn't automatically trigger a context change, such as content updates or the opening of new windows.

### Primary Role: UX Designer

"As the primary owner of this task, I will add annotations to my design document(s). They will identify which elements on the page receive keyboard focus.

I will include this instruction for Front-end developers: implement the interactive elements in a way that, when the element receives focus, it doesn't automatically trigger a context change on the page."

### Secondary Role: Visual Designer

The secondary owner of the task is the Visual Designer. They may have designed content to appear on the screen once a button receives focus and is selected. 

Explain the behaviour and functionality that you intend as the UX Designer and primary owner. For example, if the button receives focus, it shouldn't automatically show the content. It should be user-controlled; the user needs to select the button for it to display. 

Collaborating on the design together ensures that it's optimized for multiple end users.

### End user persona: Lakshmi, a senior staff member who is blind
Lakshmi is blind and uses a screen reader (speech-to-text software) and keyboard to navigate web pages. She uses websites daily for research and financial transactions. This design task ensures she isn't confused by an unexpected behaviour, i.e., when her keyboard focus lands on a button for the first time and content is announced automatically or the button automatically opens another page. 

The intent of the task is to ensure that functionality is predictable as visitors navigate their way through a document.

This task helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Read [Lakshmi's full story](https://www.w3.org/WAI/people-use-web/user-stories/story-three/) and learn about other design tasks that benefit users like her.

## Additional resources

* Use the [Tips for Designing](https://www.w3.org/WAI/tips/designing/) to get started
* See the [WAI Tutorials](https://www.w3.org/WAI/tutorials/) for common web components and how to make them accessible

## Draft review questions

{::nomarkdown}
{% include box.html type="start" title="How do you want to use this page?" icon="comments"%}
{:/}

For the later iterations of this page, we could:
- Provide the 'Tasks to get started' as separate tables by content type — images and graphs, semantic structure, ... like the full [Tasks page](/WAI/planning/arrm/tasks)
- Provide all the tasks, in addition to the tasks to get started
- Provide filters to select what to show

Would that be particulalry useful to you? Or, are you comfortable downloading the [CSV file](https://raw.githubusercontent.com/w3c/wai-arrm/refs/heads/master/_data/arrm-full-checklist.csv) and using your spreadsheet software to see what you want?

We welcome your input by email or GitHub from the links below [Help improve this page](#helpimprove)

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}
