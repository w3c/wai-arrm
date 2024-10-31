---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "User Experience (UX) Designer Responsibilities Mapping"
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

Below is a list of <s><s>checkpoint</s>activitys</s>activities for UX designers to get started. If these design <s><s>checkpoint</s>activitys</s>activities aren't met, your design can cause significant barriers to users with disabilities.

@@ This list is taken from the full list of UX Design <s><s>checkpoint</s>activitys</s>activities.
For all role <s><s>checkpoint</s>activitys</s>activities, see the [<a rel="nofollow" class="external text" href="https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Full_List%7CAccessibility"><s>Checkpoint</s>Activity Full List</a>]. 

### Input Methods

<table>
  <thead>
    <tr>
      <th>Activity</th>
      <th>Helps with</th>
      <th>Ownership</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Keyboard focus states are planned for every active element.</td>
      <td><a class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
      <td>Primary</td>
    </tr>
    <tr>
      <td>
        Behaviors for hover and focus states are planned and included with the design assets.
      </td>
      <td><a class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
      <td>Primary</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

<table>
   <tbody><tr>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">ID</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap;">WCAG SC</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Conformance Level</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Content Type</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap;"><s>Checkpoint</s>Activity</th>
    <th rowspan="2" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Main Role</th>
    <th colspan="3" style="background: #555; color: #fff; text-align: left; padding: 0.25em 0.5em; vertical-align: top;">Role Ownership</th>
  </tr>
  <tr>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Primary</th>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Secondary</th>
    <th style="border: 1px solid #aaa; background: #ccc; vertical-align: top; text-align: left; padding: 0.25em 0.5em;">Contributor(s)</th>
  </tr>
 <tr>
    <td id="INP-008" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-008" title="Accessibility Checkpoint Full List">INP-008</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Keyboard focus states are planned for every active element.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
  <tr>
    <td id="INP-007" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-007" title="Accessibility Checkpoint Full List">INP-007</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Behaviors for hover and focus states are planned and included with the design assets.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>  

<tr>
    <td id="NAV-014" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-014" title="Accessibility Checkpoint Full List">NAV-014</a></td> 
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A logical and predictable focus order is defined for complex interactions.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="INP-024" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#INP-024" title="Accessibility Checkpoint Full List">INP-024</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Input Methods</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Keyboard focus does not move automatically from one form control to the next.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="NAV-024" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-024" title="Accessibility Checkpoint Full List">NAV-024</a></td> 
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#on-focus">3.2.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Setting the focus to a new element doesn't automatically trigger a context change, such as content updates or the opening of new windows.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="DYN-002" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#DYN-002" title="Accessibility Checkpoint Full List">DYN-002</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">4.1.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Dynamic Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Status messages are announced by assistive technologies without affecting the focus.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="NAV-006" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-006" title="Accessibility Checkpoint Full List">NAV-006</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Users are given means to pause, stop or hide content that automatically updates.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">None</td>
  </tr>
 <tr>
    <td id="ANM-022" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#ANM-022" title="Accessibility Checkpoint Full List">ANM-022</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Audio Controls</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Multimedia player controls are provided to turn sound on and off.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
 <tr>
    <td id="NAV-009" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-009" title="Accessibility Checkpoint Full List">NAV-009</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">2.4.1</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Users can bypass blocks of content using skip links or similar mechanisms.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr> 
<tr>
    <td id="NAV-020" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-020" title="Accessibility Checkpoint Full List">NAV-020</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#multiple-ways">2.4.5</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Multiple mechanisms are provided for wayfinding, such as navigation menus, breadcrumbs, search features, site map, progress bar, steps, etc.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="NAV-026" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#NAV-026" title="Accessibility Checkpoint Full List">NAV-026</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Navigation mechanisms are repeated consistently throughout the site or application in the same relative order.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">None</td>
  </tr>
<tr>
    <td id="FRM-029" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-029" title="Accessibility Checkpoint Full List">FRM-029</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form controls are designed to have persistent visual labels.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
 <tr>
    <td id="FRM-020" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-020" title="Accessibility Checkpoint Full List">FRM-020</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">A</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; white-space: nowrap; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form interactions are not designed to include automatic changes of context upon input that would otherwise require explicit user action unless previously communicated.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Front-End Development</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
 <tr>
    <td id="FRM-036" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-036" title="Accessibility Checkpoint Full List">FRM-036</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.4</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Users are provided with means to prevent and correct form errors when legal, financial, or data information is involved.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Business Analyst</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
<tr>
    <td id="FRM-035" style="border: 1px solid #aaa; background: #eee; white-space: nowrap; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Accessibility_Checkpoint_Full_List#FRM-035" title="Accessibility Checkpoint Full List">FRM-035</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a rel="nofollow" class="external text" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">AA</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Form Interactions</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Text-based instructions are provided to help users correct errors.</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;"><a href="/WAI/EO/wiki/Role_definition_document#Design_Role_Group" title="Role definition document">Design</a></td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">UX Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">Content Authoring <br />Visual Design</td>
    <td style="border: 1px solid #aaa; padding: 0.25em 0.5em; vertical-align: top; text-align: left;">none</td>
  </tr>
</tbody></table>


## Case Study: How to use the Starter List

A good way to get familiar with the <s>checkpoint</s>activity is to do a short case study.  Think about how you might tackle the <s>checkpoint</s>activity in your role. 

Then, think of how meeting this <s>checkpoint</s>activity impacts an end user. 

### Activity:

NAV-024: Setting the focus to a new element doesn't automatically trigger a context change, such as content updates or the opening of new windows.

### Primary Role: UX Designer

"As the primary owner of this <s>checkpoint</s>activity, I will add annotations to my design document(s).  They will identify which elements on the page receive keyboard focus.

I will include this instruction for Front-end developers: implement the interactive elements in a way that, when the element receives focus, it doesn't automatically trigger a context change on the page."

### Secondary Role: Visual Designer

The secondary owner of the <s>checkpoint</s>activity is the Visual Designer. They may have designed content to appear on the screen once a button receives focus and is selected. 

Explain the behaviour and functionality that you intend as the UX Designer and primary owner. For example, if the button receives focus, it shouldn't automatically show the content. It should be user-controlled; the user needs to select the button for it to display. 

Collaborating on the design together ensures that it's optimized for multiple end users.

### End user persona: Ilya, a senior staff member who is blind
@@update with new User Story}}
Ilya is blind and uses a screen reader (speech-to-text software) and keyboard to navigate web pages. She uses websites daily for research and financial transactions. This design <s>checkpoint</s>activity ensures she isn't confused by an unexpected behaviour, i.e., when her keyboard focus lands on a button for the first time and content is announced automatically or the button automatically opens another page. 

The intent of the <s>checkpoint</s>activity is to ensure that functionality is predictable as visitors navigate their way through a document.

This <s>checkpoint</s>activity helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.

Read [Ilya's full story](https://www.w3.org/WAI/people-use-web/user-stories/#accountant)@@update with new User Story}} and learn about other design <s>checkpoint</s>activities that benefit users like her.

### Resources

* Use the [Tips for Designing](https://www.w3.org/WAI/tips/designing/) to get started
* See the [WAI Tutorials](https://www.w3.org/WAI/tutorials/) for common web components and how to make them accessible
