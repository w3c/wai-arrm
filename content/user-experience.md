---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "User Experience (UX) Designer Responsibilities Model"
nav_title: "UX Designer"
doc-note-type: draft
doc-note-message-md: This is an in-progress draft. We welcome comments via GitHub or email from the [links below](#helpimprove).

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
  path: content/user-experience.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/user-experience/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

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

UX Designers can potentially cover numerous related areas, from conceptualizing the user journey to partial front-end development. For the purposes of this resource, UX Design is defined by its core responsibilities, such as information architecture, creating wireframes (low fidelity screen mockups), and creating prototypes that define interactions.

<dl>
<dt>Key deliverable examples:</dt>
<dd>User journeys, wireframes, prototypes, interaction guidelines, information architecture</dd><dt>Tasks include:</dt>
<dd>User workflow / process maps, designing user experiences, user task and workflow mapping, creating and maintaining user personas</dd>
<dt>Example job titles for this role:</dt>
<dd>User Experience (UX) Designer, Product Designer, Web Designer, Service Designer</dd>
</dl>

## Activities Starter List

Below is a list of tasks for UX designers to get started. If these design tasks aren't met, your design can cause significant barriers to users with disabilities.

@@ This list is taken from the full list of UX Designtasks.

For all role tasks, see the [<a rel="nofollow" class="external text" href="https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Full_List%7CAccessibility"><s>Checkpoint</s>Activity Full List</a>]. 

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
      {% if starter and starter != "" and primary == "UX Design" %}
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

A good way to get familiar with the tasks is to do a short case study.  Think about how you might tackle the task in your role. 

Then, think of how meeting this task impacts an end user. 

### Task:

NAV-024: Setting the focus to a new element doesn't automatically trigger a context change, such as content updates or the opening of new windows.

### Primary Role: UX Designer

"As the primary owner of this task, I will add annotations to my design document(s).  They will identify which elements on the page receive keyboard focus.

I will include this instruction for Front-end developers: implement the interactive elements in a way that, when the element receives focus, it doesn't automatically trigger a context change on the page."

### Secondary Role: Visual Designer

The secondary owner of the task is the Visual Designer. They may have designed content to appear on the screen once a button receives focus and is selected. 

Explain the behaviour and functionality that you intend as the UX Designer and primary owner. For example, if the button receives focus, it shouldn't automatically show the content. It should be user-controlled; the user needs to select the button for it to display. 

Collaborating on the design together ensures that it's optimized for multiple end users.

### End user persona: Ilya, a senior staff member who is blind
@@update with new User Story}}
Ilya is blind and uses a screen reader (speech-to-text software) and keyboard to navigate web pages. She uses websites daily for research and financial transactions. This design task ensures she isn't confused by an unexpected behaviour, i.e., when her keyboard focus lands on a button for the first time and content is announced automatically or the button automatically opens another page. 

The intent of the task is to ensure that functionality is predictable as visitors navigate their way through a document.

This task helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Read [Ilya's full story](https://www.w3.org/WAI/people-use-web/user-stories/#accountant)@@update with new User Story}} and learn about other design tasks that benefit users like her.

### Resources

* Use the [Tips for Designing](https://www.w3.org/WAI/tips/designing/) to get started
* See the [WAI Tutorials](https://www.w3.org/WAI/tutorials/) for common web components and how to make them accessible
