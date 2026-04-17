import{_ as l,o as i,c as t,ak as s,j as e,a}from"./chunks/framework.EL9thYp0.js";const m=JSON.parse('{"title":"Templating Guide","description":"","frontmatter":{},"headers":[],"relativePath":"templating.md","filePath":"templating.md"}'),p={name:"templating.md"};function r(o,n,c,u,d,g){return i(),t("div",null,[...n[0]||(n[0]=[s('<h1 id="templating-guide" tabindex="-1">Templating Guide <a class="header-anchor" href="#templating-guide" aria-label="Permalink to “Templating Guide”">​</a></h1><p>Learn how to create custom report templates for Kryvea using DOCX files with dynamic placeholders. The report generation relies on the <a href="https://github.com/JJJJJJack/go-template-docx" target="_blank" rel="noreferrer">go-template-docx</a> library, which is built upon Go&#39;s standard <a href="http://pkg.go.dev/text/template" target="_blank" rel="noreferrer">text/template</a> package. If you want to try a ready-to-use template, you can use <a href="https://github.com/Kryvea/Kryvea/blob/main/app/data/report-template-example.docx" target="_blank" rel="noreferrer">this</a>.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to “Overview”">​</a></h2><p>Kryvea uses Go template syntax within DOCX files to generate dynamic reports. Templates support:</p><ul><li>Variable substitution</li><li>Conditional logic</li><li>Loops for vulnerabilities</li></ul><h2 id="template-variables" tabindex="-1">Template Variables <a class="header-anchor" href="#template-variables" aria-label="Permalink to “Template Variables”">​</a></h2><h3 id="customer-variables" tabindex="-1">Customer Variables <a class="header-anchor" href="#customer-variables" aria-label="Permalink to “Customer Variables”">​</a></h3>',7),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{.Customer.Name}}             # Customer name")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Customer.Language}}         # Customer language (en/it)")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Customer.LogoReference}}    # Logo image path")])])])])],-1),e("h3",{id:"assessment-variables",tabindex:"-1"},[a("Assessment Variables "),e("a",{class:"header-anchor",href:"#assessment-variables","aria-label":"Permalink to “Assessment Variables”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{.Assessment.Name}}                    # Assessment name")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Type.Short}}              # Type short name (VAPT, MAPT)")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Type.Full}}               # Type full name")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Language}}                # Report language")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.StartDateTime}}           # Start date/time")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.EndDateTime}}             # End date/time")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.KickoffDateTime}}         # Kickoff date/time")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Status}}                  # Status (On Hold, In Progress, Completed)")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Environment}}             # Environment")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.TestingType}}             # Testing type")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.OSSTMMVector}}            # OSSTMM vector")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.VulnerabilityCount}}      # Total vulnerabilities")])])])])],-1),e("h3",{id:"vulnerability-loop",tabindex:"-1"},[a("Vulnerability Loop "),e("a",{class:"header-anchor",href:"#vulnerability-loop","aria-label":"Permalink to “Vulnerability Loop”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{range .Vulnerabilities}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Category.Name}}            # Category name")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Subcategory.Name}}            # Subcategory name")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.DetailedTitle}}            # Vulnerability title")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Status}}                   # Status")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.GenericDescription.Text}}  # Category vulnerability description")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Description}}              # Description")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.GenericRemediation.Text}}  # Category vulnerability remediation")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Remediation}}              # Remediation")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Target.FQDN}}              # Target name")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.Target.IPv4}}              # Target IPv4")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"  # CVSS Scores")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv31.Score}}          # CVSS v3.1 score")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv31.Vector}}         # CVSS v3.1 vector")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv31.Severity.Label}} # Severity label")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv4.Score}}           # CVSS v4.0 score")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv4.Vector}}          # CVSS v4.0 vector")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{.CVSSv4.Severity.Label}}  # Severity label")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"  # PoCs")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{range .Poc.Pocs}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    # Request/Response")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.Description}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{range .RequestHighlighted}}     # HTTP request highlighted")]),a(`
`),e("span",{class:"line"},[e("span",null,"      {{preserveNewline (shadeTextBg .Text .Color)}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{range .ResponseHighlighted}}    # HTTP response highlighted")]),a(`
`),e("span",{class:"line"},[e("span",null,"      {{preserveNewline (shadeTextBg .Text .Color)}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{end}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"    # Image")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{image .ImageReference}}         # Image")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.ImageCaption}}                 # Image caption")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"    # Text")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{range .TextHighlighted}}        # Text highlighted")]),a(`
`),e("span",{class:"line"},[e("span",null,"      {{preserveNewline (shadeTextBg .Text .Color)}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{end}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"  # References")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{range .Category.References}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.}}                             # Category References")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{range .References}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.}}                             # Each reference")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),e("h3",{id:"aggregated-vulnerabilities-loop",tabindex:"-1"},[a("Aggregated Vulnerabilities Loop "),e("a",{class:"header-anchor",href:"#aggregated-vulnerabilities-loop","aria-label":"Permalink to “Aggregated Vulnerabilities Loop”"},"​")],-1),e("p",null,"Aggregated vulnerabilities are always available.",-1),e("p",null,"They are grouped by category, and for each category, all related targets and proofs of concept (PoCs) are merged into a single entry.",-1),e("p",null,"The structure of each aggregated vulnerability is identical to the standard vulnerability object. The only difference lies in the loop over targets, which now iterates through all targets aggregated under the same category.",-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{range .AggregatedVulnerabilities}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{range .Targets}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.FQDN}}              # Target name")]),a(`
`),e("span",{class:"line"},[e("span",null,"    {{.IPv4}}              # Target IPv4")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),s('<h2 id="creating-templates" tabindex="-1">Creating Templates <a class="header-anchor" href="#creating-templates" aria-label="Permalink to “Creating Templates”">​</a></h2><h3 id="step-1-create-base-docx" tabindex="-1">Step 1: Create Base DOCX <a class="header-anchor" href="#step-1-create-base-docx" aria-label="Permalink to “Step 1: Create Base DOCX”">​</a></h3><ol><li>Open Microsoft Word</li><li>Design your report layout</li><li>Add customer branding placeholders</li><li>Style headings, tables, etc.</li></ol><h3 id="step-2-add-placeholders" tabindex="-1">Step 2: Add Placeholders <a class="header-anchor" href="#step-2-add-placeholders" aria-label="Permalink to “Step 2: Add Placeholders”">​</a></h3><p>Insert template variables in double curly braces:</p>',5),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"Assessment Name: {{.Assessment.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Customer: {{.Customer.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Date: {{formatDate .Assessment.StartDateTime}}")])])])])],-1),e("h3",{id:"step-3-add-vulnerability-loop",tabindex:"-1"},[a("Step 3: Add Vulnerability Loop "),e("a",{class:"header-anchor",href:"#step-3-add-vulnerability-loop","aria-label":"Permalink to “Step 3: Add Vulnerability Loop”"},"​")],-1),e("p",null,"For vulnerability listings:",-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{range .Vulnerabilities}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Category Identfier:	{{.Category.Identifier}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Name: {{.Category.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Subcategory: {{.Category.Subcategory}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Detailed Title: {{.DetailedTitle}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Severity: {{.CVSSv31.Severity.Label}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Score: {{.CVSSv31.Score}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Description:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Description}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Remediation:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Remediation}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),s('<h3 id="step-4-upload-template" tabindex="-1">Step 4: Upload Template <a class="header-anchor" href="#step-4-upload-template" aria-label="Permalink to “Step 4: Upload Template”">​</a></h3><p><strong>Global template (Admin):</strong></p><ul><li>Navigate to Templates -&gt; Upload</li><li>Select DOCX or XLSX file</li></ul><p><strong>Customer template:</strong></p><ul><li>Navigate to Customer -&gt; Upload Template</li><li>Select DOCX or XLSX file</li></ul><h2 id="template-functions" tabindex="-1">Template Functions <a class="header-anchor" href="#template-functions" aria-label="Permalink to “Template Functions”">​</a></h2><h3 id="date-formatting" tabindex="-1">Date Formatting <a class="header-anchor" href="#date-formatting" aria-label="Permalink to “Date Formatting”">​</a></h3>',7),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{formatDate .Assessment.StartDateTime}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"# Output: DD/MM/YYYY")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{formatDateTime .Assessment.StartDateTime "UTC" "US}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"# Output: MM/DD/YYYY")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{formatTime .Assessment.StartDateTime "UTC" "ISO"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"# Output: YYYY-MM-DD")])])])])],-1),e("h3",{id:"conditionals",tabindex:"-1"},[a("Conditionals "),e("a",{class:"header-anchor",href:"#conditionals","aria-label":"Permalink to “Conditionals”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{if .Assessment.OSSTMMVector}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  OSSTMM Vector: {{.Assessment.OSSTMMVector}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{if eq .Assessment.Status "Completed"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"  This assessment is complete.")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{else}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  This assessment is ongoing.")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),e("h3",{id:"filtering-vulnerabilities",tabindex:"-1"},[a("Filtering Vulnerabilities "),e("a",{class:"header-anchor",href:"#filtering-vulnerabilities","aria-label":"Permalink to “Filtering Vulnerabilities”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{range .Vulnerabilities}}")]),a(`
`),e("span",{class:"line"},[e("span",null,'  {{if eq .Status "Open"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"    # Only show open vulnerabilities")]),a(`
`),e("span",{class:"line"},[e("span",null,"    Title: {{.DetailedTitle}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"  {{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),e("h2",{id:"examples",tabindex:"-1"},[a("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":"Permalink to “Examples”"},"​")],-1),e("h3",{id:"executive-summary-template",tabindex:"-1"},[a("Executive Summary Template "),e("a",{class:"header-anchor",href:"#executive-summary-template","aria-label":"Permalink to “Executive Summary Template”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"EXECUTIVE SUMMARY")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Client: {{.Customer.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Assessment: {{.Assessment.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Period: {{formatDate .Assessment.StartDateTime}} - {{formatDate .Assessment.EndDateTime}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Status: {{.Assessment.Status}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Total Findings: {{.Assessment.VulnerabilityCount}}")])])])])],-1),e("h3",{id:"detailed-findings-template",tabindex:"-1"},[a("Detailed Findings Template "),e("a",{class:"header-anchor",href:"#detailed-findings-template","aria-label":"Permalink to “Detailed Findings Template”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"DETAILED FINDINGS")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{range $index, $vuln := .Vulnerabilities}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{$vuln.DetailedTitle}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Category: {{$vuln.Category.Name}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Subcategory: {{$vuln.Category.Subcategory}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Severity: {{$vuln.CVSSv31.Severity}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"CVSSv3.1 Score: {{$vuln.CVSSv31.Score}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"CVSSv3.1 Vector: {{$vuln.CVSSv31.Vector}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"CVSSv4.0 Score: {{$vuln.CVSSv4.Score}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"CVSSv4.0 Vector: {{$vuln.CVSSv4.Vector}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Status: {{$vuln.Status}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Affected Target: {{$vuln.Target.FQDN}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Description:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{breakParagraph $vuln.Description}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{range $vuln.Poc.Pocs}}{{if eq .Type "request/response"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"{{preserveNewline .Description}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.URI}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"HTTP Request")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{range .RequestHighlighted}}{{preserveNewline (shadeTextBg .Text .Color)}}{{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"HTTP Response")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{range .ResponseHighlighted}}{{preserveNewline (shadeTextBg .Text .Color)}}{{end}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{end}}{{if eq .Type "image"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"{{preserveNewline .Description}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.URI}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{image .ImageReference}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Figure 1 - {{.ImageCaption}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,'{{end}}{{if eq .Type "text"}}')]),a(`
`),e("span",{class:"line"},[e("span",null,"{{preserveNewline .Description}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.URI}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{range .TextHighlighted}}{{preserveNewline (shadeTextBg .Text .Color)}}{{end}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}{{end}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Remediation:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{breakParagraph $vuln.GenericRemediation.Text}} {{breakParagraph $vuln.Remediation}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"References:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{range .Category.References}}{{.}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}{{range .References}}{{.}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}} ")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{end}}")])])])])],-1),e("h3",{id:"cover-page-template",tabindex:"-1"},[a("Cover Page Template "),e("a",{class:"header-anchor",href:"#cover-page-template","aria-label":"Permalink to “Cover Page Template”"},"​")],-1),e("div",null,[e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0",dir:"ltr","v-pre":""},[e("code",null,[e("span",{class:"line"},[e("span",null,"{{.Customer.LogoReference}}   # Insert customer logo")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Assessment.Type.Full}} Report")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{.Customer.Name}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Assessment Period:")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{formatDate .Assessment.StartDateTime}} to")]),a(`
`),e("span",{class:"line"},[e("span",null,"{{formatDate .Assessment.EndDateTime}}")]),a(`
`),e("span",{class:"line"},[e("span")]),a(`
`),e("span",{class:"line"},[e("span",null,"Prepared by: [Your Company Name]")]),a(`
`),e("span",{class:"line"},[e("span",null,"Date: {{formatDate .DeliveryDateTime}}")]),a(`
`),e("span",{class:"line"},[e("span",null,"Status: {{.Assessment.Status}}")])])])])],-1),s('<h2 id="troubleshooting-templates" tabindex="-1">Troubleshooting Templates <a class="header-anchor" href="#troubleshooting-templates" aria-label="Permalink to “Troubleshooting Templates”">​</a></h2><h3 id="template-rendering-fails" tabindex="-1">Template Rendering Fails <a class="header-anchor" href="#template-rendering-fails" aria-label="Permalink to “Template Rendering Fails”">​</a></h3><p><strong>Error:</strong> &quot;Template execution failed&quot;</p><p><strong>Solutions:</strong></p><ul><li>Check for unclosed tags: <code>{{range}}</code> and <code>{{if}}</code> needs <code>{{end}}</code></li><li>Verify variable names match exactly</li><li>Remove special characters from Word formatting</li><li>Save as .docx, not .doc</li></ul><h3 id="formatting-issues" tabindex="-1">Formatting Issues <a class="header-anchor" href="#formatting-issues" aria-label="Permalink to “Formatting Issues”">​</a></h3><p><strong>Error:</strong> Output formatting is broken</p><p><strong>Solutions:</strong></p><ul><li>Keep template syntax on single lines</li><li>Don&#39;t split <code>{{</code> <code>}}</code> across paragraphs</li></ul><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to “Next Steps”">​</a></h2><ul><li><strong><a href="/docs/usage">Usage Guide</a></strong> - Learn the workflow</li></ul>',11)])])}const b=l(p,[["render",r]]);export{m as __pageData,b as default};
