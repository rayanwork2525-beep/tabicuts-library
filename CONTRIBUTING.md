# Share a resource

1. Search existing listings and open proposals first.
2. Fork this repository, create a branch, and append an entry to the `projects` array in `projects.json`. Preserve existing entries and their IDs.
3. Use the format below. Run `node validate.cjs` with Node 22 or check the automatic GitHub validation.
4. Open a pull request explaining what the resource teaches, who created it, and why you may share it. Maintainers review before merging. There is a second owner review before website publication.

```json
{
  "id": "my-original-physics-notes",
  "title": "Mechanics Revision Notes",
  "description": "Original worked examples for A Level mechanics.",
  "author": "Your public creator name",
  "type": "pdf",
  "subject": "Physics",
  "language": "English",
  "level": "A Level",
  "tags": ["Physics", "Mechanics"],
  "license": "CC BY-NC-SA 4.0",
  "source": "https://YOUR-RESOURCE-PAGE",
  "download": "https://YOUR-PUBLIC-FILE-LINK"
}
```

Replace example links. Supported `type` values: `project`, `pdf`, `anki`, `guide`, `course`, `other`. PDFs and Anki decks require `download`; `.apkg` is a typical Anki deck format. `source` means a resource/instructions page, not necessarily public source code. Optional `demo` can link to a live tool. All links must be public HTTPS without tokens or embedded credentials. Use 1–8 tags of at most 40 characters each. Include import/build instructions where needed.

For original educational content, we recommend CC BY-NC-SA 4.0. State terms explicitly for each resource. Do not apply a CC license to code or change another creator's license. You must own or have permission to redistribute every included component, including images and audio. By submitting a listing, you authorize its public display with attribution under the terms you specify; you retain ownership. Submission does not transfer ownership.

Do not include personal records, paid copyrighted resources without permission, malware, executable installers, secrets, or advertising disguised as study material. Keep files small and reviewable. Use Releases or another stable public host for large files. The current importer reads metadata only; it does not scan downloads.

For a correction or removal, identify the entry by ID and open an issue. For sensitive rights concerns, use https://tabicuts.com/#contact instead of posting private evidence publicly.

## Trusted contributors

The owner decides who receives write access here. Public contributors can always use forks and pull requests without write access. Trust here does not grant access to the private website, BrainForge, DNS, or hosting. Do not merge your own listing without owner review. CODEOWNERS requests a reviewer, but only enabled branch protection/rulesets can enforce reviews. The repository owner must configure those separately.
