---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "ARRM Decision Tree for Accessibility Roles and Responsibilities Mapping"
title_html: "ARRM Decision Tree <br><span style='font-size:75%'>for Accessibility Roles and Responsibilities Mapping</span>"
nav_title: "Decision Tree"

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-arrm
  path: content/decision-tree.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /planning/arrm/decision-tree/  # Add the language shortcode to the end, with no slash at end, for example: /planning/arrm/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/

ref: /planning/arrm/decision-tree/    # Translators, do not change this
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

## Ownership levels

The role-based decision tree is a framework to help anyone define an accessibility matrix of their own within their organization. It is a process to help teams define and distribute ownership and responsibility of accessibility requirements in the project lifecycle. Using this framework, a team should more easily define who ultimately owns specific requirements and who else is actively involved (those that contribute to the successful implementation of the checkpoints in the lifecycle).

The framework defines three levels of ownership for accessibility requirements, based on commonly agreed upon [RACI matrix principles](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix#Key_responsibility_roles_(RACI_model)):

1.  **[Primary ownership](#Can_this_role_be_involved_as_a_Primary_Owner.3F "Role-Based Decision Tree")**  
    Those who are **accountable** for an accessibility task. Primary owners typically drive the decision-making process, have direct interaction with the secondary owner(s) discussing issues, delegate the work to other roles or team members (as needed), lead the task to completion, have final sign-off authority (if/when used), and are ultimately accountable for the outcome of checkpoint or design decisions regardless of when they occur in the process. The last few points emphasize that the primary role is ultimately accountable. This is why there can only be **one primary owner for each checkpoint**.
2.  **[Secondary ownership](#Can_this_role_be_involved_as_a_Secondary_Owner.3F "Role-Based Decision Tree")**  
    Those who are **responsible** to help complete an accessibility task. Secondary owners typically directly support the primary owner, are actively involved in the decision-making process, have active interest and participation in the outcomes, may work to complete the task, but ultimately defer final decisions to the primary owner.
3.  **[Contributors](#Can_this_role_be_involved_as_a_Contributor.3F "Role-Based Decision Tree")**  
    Those who need to be **consulted** in order to successfully complete an accessibility task. Contributors are typically not actively involved in the decision-making process, will typically provide initial input or requirements, and may be asked to provide additional information as needed to ensure successful task completion. Contributors may have limited participation by providing initial design input (such as branding guidance or business requirements) with little or no subsequent interaction. In those cases, the communication may be input only with little or no concern of being kept "informed" of the result (relying on the expertise of other owners).

### Ownership to RACI Role Mapping

Ownership role levels are very similar to the RACI responsibility roles. For those familiar with RACI definitions these can be helpful in understanding ownership levels but are not necessary. Accessibility ownership roles to RACI responsibility can be mapped to ownership levels like this:

-   Primary -> Accountable
-   Secondary -> Responsible
-   Contributor -> Consulted

Since all accessibility ownership roles provide some input to the design they are “informed.”

## STEP 1. Primary Ownership

### Can this role be involved as a Primary Owner?

Since there must be one (and only one) primary owner for all tasks, picking them is a key first step. This section identifies a 7-step process through which a team can identify which role should be the primary owner for each of the checkpoints defined in the [Accessibility Checkpoint Master List](https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Master_List "Accessibility Checkpoint Master List") (work in progress). This section identifies the steps in identifying those roles who may be involved with each checkpoint as primary owners.

It is vital that in determining primary ownership, the team either ensures that someone for each of the required roles can act as primary owner. As an example, if a project team exists without actively engaged UX professionals this is the opportunity to make sure that said individuals are in place for potential work ahead or that some other mechanism is in place to handle tasks owned by such individuals. Similarly, if some tasks are provided by labor outside of the primary team, the project should potentially revisit ownership or consider adjustments to team makeup. This avoids bottlenecks caused by relying on individuals not directly accountable to the primary team working on this effort.

### Decision tree framework for primary ownership

The steps in the decision tree assume evaluation of checkpoints (or checkpoints in a checklist) used to evaluate the accessibility of an existing product. In such cases, many design decisions have already been made, possibly documented and implemented. There are significant ownership differences when assigning ownership when reviewing design documents or even WCAG success criteria.

A.

Step A.  
Is this checkpoint driven by [Business](/planning/arrm/roles/#Business_Analysis "Role definition document") or non-functional requirements?

-   If **"Yes"**, then primary ownership should be **Business** - Business Analysis
-   If **"No"**, then move on to step B.

**Business analysis examples include:**

-   Providing functional business requirements and features,
-   Specifying additional technical requirements (legal, financial, security, etc.),
-   Administering branding guidance and standards,
-   Defining core features and high-level product functionalities,
-   Etc.

Business Analysis as Primary Owner  
The Business Analyst role is the primary owner for items dictated by business requirements including branding guidance, core features and high-level product functionality, and contractual or legal requirements. After initiating the project, the role is typically hands-off.

B.

Step B.  
Is this checkpoint about [Content Authoring](/planning/arrm/roles/#Content_Authoring "Role definition document")?

-   If **"Yes"**, then primary ownership of this checkpoint should be **Design** - Content Authoring
-   If **"No"**, then move on to step C.

**Content authoring examples include:**

-   Authoring copydecks and other related documents that manage content,
-   Composing content semantics and general document structure,
-   Defining static content such as taxonomy or labels and main body copy,
-   Writing multimedia alternatives such as text transcripts, captions, descriptive audio, etc.
-   Etc.

Content Authoring as Primary Owner  
Content Authors are involved any time there is text or text-based content. This includes the spoken part of a video or audio media as well as downloadable documents (such as PDFs). This often includes checkpoints derived from writing guidelines and standards, taxonomies and terminology, translations and body copy.

C.

Step D.  
Is this checkpoint about [UX Design](/planning/arrm/roles/#User_Experience_Design "Role definition document")?

-   If **"Yes"**, then primary ownership of this checkpoint should be **Design** - User Experience Design
-   If **"No"**, then move on to step D.

**UX Design examples include:**

-   Design lo-fidelity wireframes and structural decisions related to templates, data visualizations, etc.,
-   Making decisions related to UI component interactions and product features,
-   Define general page regions such as header, navigation, footer, etc.,
-   Improving interactions based on usability testing with users with disabilities,
-   Etc.

UX Design as Primary Owner  
UX Designers are often primary owners for accessibility tasks that relate to interactions since they define many of the features and operation of the product. Interaction-related checkpoints that come before implementation typically live within the UX Designers' set of responsibilities.

D.

Step C.  
Is this checkpoint about [Visual Design](/planning/arrm/roles/#Visual_Design "Role definition document")?

-   If **"Yes"**, then primary ownership of this checkpoint should be **Design** - Visual Design
-   If **"No"**, then move on to step E.

**Visual design examples include:**

-   Making presentation choices such as color, font, layout, spacing, etc.,
-   Adapting branding guidelines and related brand variations,
-   Documenting and defining presentation through styleguides,
-   Designing hi-fidelity mock ups and comprehensive layouts (comps),
-   Etc.

Visual Design as Primary Owner  
Nearly any decision about final presentation design is likely to have the visual designer as a primary owner. The more they purely design (such as color selection), the more likely they are to be the primary owner. The most overlap for primary ownership tends to be with the UX Designer. In such cases, the final choice should be made on how essential the visual aspect is to the checkpoint.

E.

Step E.  
Is this checkpoint about [Development](/planning/arrm/roles/#Front_End_Development "Role definition document")?

-   If **"Yes"**, then primary ownership of this checkpoint should be **Development** - Front-End Development
-   If **"No"**, then move on to step F.

**Development examples include:**

-   Making document structure decisions related to HTML and the use of WAI-ARIA,
-   Defining visual content layout, related to the use of CSS presentation,
-   Scripting interaction behaviors related to features and functionalities,
-   Etc.

Front-End Development as Primary Owner  
Front-End Developers are typically the primary owners when the tasks relate to implementation or the coding of the page. They typically are not primary owners when they follow instructions defined in requirements created by other stakeholders in early design phases.

It's a frequent misconception that front-end developers should own most, if not all checkpoints. But since most of the decisions that impact accessibility take place earlier in the process, other roles will have already made the decisions. Developers should only be an owner when they have direct decision-making input. For more details, consult the ARRM's [Frequently Asked Questions](https://www.w3.org/WAI/EO/wiki/ARRM_Frequently_Asked_Questions "ARRM Frequently Asked Questions") page.

F.

Step F.  
Is this checkpoint about [Testing](/planning/arrm/roles/#Testing_roles "Role definition document")?

-   If **"Yes"**, confirm that one or more of the following is true before assigning to the tester:
    -   Checkpoint is about running testing tools,
    -   Checkpoint is related to test protocols, or
    -   Resolution of the checkpoint can be done directly and completely by the tester alone.
-   Otherwise, the answer is **"No"**. Move on to step G.

**Testing examples include:**

-   Running automated testing tools to discover accessibility issues that are easier to identify,
-   Running standard QA or feature testing to dive deeper into accessibility issues,
-   Executing test scripts and protocols to validate accessibility conformance.

**Note:**  
Testing is not a role that makes or owns decisions that directly impact accessibility in the delivered product. The testing role is meant to confirm that the design or implementation meets accessibility requirements; however, the tester could be defined as a Contributor since they are responsible for providing the outcomes from validation of a design or implementation that takes place through testing.

QA Testing as Primary Owner  
QA Testers are not typically part of the design or implementation process. Though they are essential or key to returning findings or feedback to respective owners for remediation, they are not likely to be identified as primary owners for any specific accessibility task, except actual testing.

G.

Step G.  
IF NONE OF THE ABOVE, then it becomes a [Administrative](/planning/arrm/roles/#Administrative_Roles "Role definition document") concern.

If one of the main roles has not been assigned, it's up to management to decide ownership. This should only happen when roles are not clearly defined, or were not assigned in an earlier step. Management should review the checkpoint and assign as seems appropriate, based upon the roles on the team, using the guidance above. Management should run the decision tree again and identify the closest fit for ownership.

**Note:**  
Business Administration is not a role that makes or owns decisions that directly impact accessibility in the delivered product, but is meant to oversee the delivery process and that the product meets accessibility requirements.

### Decision tree application examples

To understand how to apply the steps in the decision tree, examples are helpful. The following are step-by-step examples using the Decision Tree framework to assign primary ownership for several checkpoints for two roles:

-   Implementation - [Front-End Development examples](https://www.w3.org/WAI/EO/wiki/Decision_Tree_Examples#Implementation_.28Front-End_Developer.29 "Decision Tree Examples")
-   Design - [Content authors examples](https://www.w3.org/WAI/EO/wiki/Decision_Tree_Examples#Design_.28Content_Author.29 "Decision Tree Examples")

The resulting body of ownership guidance using this framework can then compiled in a role-specific master list, for all three levels of ownership (primary, secondary, contributor). This, in turn, can help create accessibility roles and responsibility mappings that can better help teams break down accessibility by roles. For an example, see this [Accessibility Checkpoint Master List](https://www.w3.org/WAI/EO/wiki/Accessibility_Checkpoint_Master_List "Accessibility Checkpoint Master List").

[![Pdf.png](https://www.w3.org/WAI/EO/wiki/images/thumb/6/6b/Pdf.png/75px-Pdf.png)](https://www.w3.org/WAI/EO/wiki/File:Pdf.png)

### Role-Based Decision Tree Visual Representation

The following is a [visual representation of the ARRM Role-Based Decision Tree (version 1.0)](https://drive.google.com/file/d/1kUstLR6DwLOgIro3WwO_TcNLQVuIN-YJ/view?usp=sharing), to help teams better understand how to approach this resource (PDF, xx-kb).

## STEP 2: Secondary ownership

### Can this role be involved as a Secondary Owner?

This section identifies the steps in identifying those roles who, after the primary owner, may be involved with each checkpoint as secondary owners. After selecting the primary owner for each checkpoint, reconsider the expected level of involvement of the remaining roles. The following section provides support in determining when each role might be expected to act as a secondary owner. Note that some checkpoints might require more than one secondary owner. For each role, ask if this role likely to actively work with or play a key supporting role to the primary owner in addressing the checkpoint?

-   If the answer is "yes," add the role as a Secondary Owner.
-   If the answer is "no," consider this role as a potential Contributor to the checkpoint (covered in Step 3.)

  

Business Analysis as Secondary Owner  
Business Analysts are not typically secondary owners. The role might be a secondary owner if there are active discussions that need review and approval for changes to items that are part of the requirements, variation to branding guidance, core features and high-level product functionality, or contractual or legal requirements and review determined by them as primary owners. After initiating the project, the role is typically hands-off.

Content Authoring as Secondary Owner  
Unless they are already involved on a given checkpoint as primary owners, it is fair to assume that whenever text is involved, Content Authors will be identified as secondary owners to support in that capacity. This typically occurs when the Visual or UX Designers are the primary owners, but need considerable input from the Content Author.

UX Design as Secondary Owner  
As a secondary owner, the UX Designer may be needed by the primary owner to answer questions about the intended use or purpose of items in the requirements, specifications, user stories or other documentation provided. Since UX Designers oversee the entire design, they are likely to want to review any decisions that may affect the final experience.

Visual Design as Secondary Owner  
It's rare for Visual Designers to be a secondary owner as they are typically involved as primary owners of presentation tasks, or simply informed about any variations to their work. This typically occurs when the UX Designer is the primary owner, but needs considerable input from the Visual Designer.

Front-End Development as Secondary Owner  
In early design phases Developers are most likely to be secondary owners working with the primary to identify what is possible to implement (when the requirements are vague or challenging). In testing and remediation work this situation may reoccur where the primary owner needs to work with Development to identify which implementations are possible to make a final decision. As a result, it's not uncommon for the Developer role to be a secondary owner.

QA Testing as Secondary Owner  
QA Testers are not typically part of the design or implementation processes. This extends to secondary ownership, where secondary ownership might apply if testing is tightly integrated into the design or implementation processes.

  

## STEP 3: Contributor

### Can this role be involved as a Contributor?

If the roles do not qualify as primary or secondary owners, then consider the interest or need of these roles to be informed or consulted on the decisions made by the primary and secondary owners. Can they be expected to provide input to the decision? As with secondary owners, depending on the nature of the checkpoint there can sometimes be more than one contributing role. The following section provides support in determining when each role might be expected to act as a contributor. For each role, ask does this decision typically need preliminary input from this role, or does this role need to be informed on the outcome?

-   If the answer is "yes," to either question, add the role as a Contributor.
-   If the answer is "no", then the role may not be involved at all.

  

Business Analysis as a Contributor  
In practice business typically more of an contributor by providing key additional initial requirements or documentation (such as brand guidelines) but little little else. As mentioned earlier, this role the role is typically hands-off after initiating the project.

Content Authoring as a Contributor  
When not a primary or secondary owner, Content Authors are usually not involved. The few cases where they might be an impact owner and need to be informed about decisions are in checkpoints where the management or presentation of text changes.

UX Design as a Contributor  
Due to the UX Designer's typical involvement in overseeing the overarching design and structure of a project or product to ensure the final design meets the intended goals, it is rarer, though possible, for UX Designers to find themsleves involved as Contributors. One such example might be video content, where the UX Designer might be critical in defining the page structure and features of the video player, but would not be much involved in the content itself.

Visual Design as a Contributor  
A Visual Designer is likely to want to know the outcomes of decisions that impact the final presentation when they are not the primary owner. Examples of this are when simple text or operation changes lead to cases not be clearly covered in style guides or comps.

Front-End Development as a Contributor  
Since Developers are so integral to the final delivered product they are typically primary and secondary owners. There are fewer cases where the Developer is an impact owner. These cases are where a decision may require additional information beyond the standard updated requirements, user stories or specifications.

QA Testing as a Contributor  
Many teams will view QA Testers as obvious Contributors on every single requirement since they are so deeply involved with all aspects of validating the deliverable. However, if the details affecting accessibility are fully covered with other stakeholders in the lifecycle, they are likely to simply be identified as an additional step in the process, beyond the scope of the roles and responsibility mapping. With that said, QA Testers are likely to still be identified as Contributors when it comes to testing tool capabilities, testing protocols and methodologies, or changes to the details needed by the QA tester to complete the tests.
