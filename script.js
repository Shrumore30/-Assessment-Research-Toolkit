/* ===================================
   AI FOR ASSESSMENT & RESEARCH TOOLKIT
   JavaScript - Interactive Functions
   =================================== */

// Tab Navigation
function switchTab(tabName) {
    // Hide all tabs
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== ASSESSMENT FUNCTIONS =====

/**
 * Generate Assessment Questions
 * Creates AI prompts for generating questions
 */
function generateQuestions(e) {
    e.preventDefault();

    const topic = document.getElementById('topic').value;
    const gradeLevel = document.getElementById('gradeLevel').value;
    const numQuestions = document.getElementById('numQuestions').value;
    const questionType = document.getElementById('questionType').value;
    const instructions = document.getElementById('instructions').value;

    // Create AI Prompt
    const aiPrompt = `Create ${numQuestions} ${questionType} questions on "${topic}" for ${gradeLevel} students.
Questions should vary in difficulty from basic to intermediate.

Additional requirements: ${instructions || 'Standard assessment questions'}

For each question provide:
${questionType === 'Multiple Choice (MCQ)' ? 
  '- Question stem\n- 4 answer options (A-D)\n- Correct answer\n- Brief explanation\n- Note on misconception addressed (if applicable)' :
  '- Question\n- Expected answer\n- Sample rubric for evaluation'}

Format clearly and make questions aligned with curriculum standards.`;

    // Create output
    const output = `📝 ASSESSMENT QUESTION GENERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Topic: ${topic}
Grade Level: ${gradeLevel}
Number of Questions: ${numQuestions}
Question Type: ${questionType}

GENERATED AI PROMPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${aiPrompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO USE:
1. Copy the prompt above
2. Paste into ChatGPT, Claude, or Google Gemini
3. Review generated questions for accuracy
4. Edit as needed for your curriculum
5. Add to your assessment bank
6. Share with students or add to learning platform

TIPS FOR BEST RESULTS:
✓ Review AI output for factual accuracy
✓ Ensure questions align with learning objectives
✓ Check distractors target common misconceptions
✓ Adjust difficulty based on student level
✓ Test questions before using in actual assessment`;

    // Display output
    document.getElementById('questionsContent').textContent = output;
    document.getElementById('questionsOutput').style.display = 'block';
    showSuccessMessage('Questions prompt generated! Copy and use with ChatGPT, Claude, or Gemini.');
    
    // Scroll to output
    document.getElementById('questionsOutput').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Generate Assessment Rubric
 * Creates AI prompts for generating rubrics
 */
function generateRubric(e) {
    e.preventDefault();

    const rubricName = document.getElementById('rubricName').value;
    const criteria = document.getElementById('criteria').value.split(',').map(c => c.trim());
    const numCriteria = document.getElementById('numCriteria').value;
    const rubricLevels = document.getElementById('rubricLevels').value;

    // Parse rubric levels
    const levelInfo = rubricLevels.includes('4-Point') ? 
        'Excellent (4 points), Good (3 points), Fair (2 points), Poor (1 point)' :
        rubricLevels.includes('3-Point') ?
        'Advanced (3 points), Proficient (2 points), Developing (1 point)' :
        'Exceptional (5), Proficient (4), Developing (3), Beginning (2), Insufficient (1)';

    // Create AI Prompt
    const aiPrompt = `Create a detailed rubric for assessing "${rubricName}" for student learning.

Assessment Criteria:
${criteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}

Performance Levels: ${levelInfo}

For each criterion, provide:
${rubricLevels.includes('4-Point') ? 
  '- Excellent (4): Clear, specific descriptors\n- Good (3): Clear, specific descriptors\n- Fair (2): Clear, specific descriptors\n- Poor (1): Clear, specific descriptors' :
  'Performance level descriptors with observable, measurable criteria'}

Make descriptors specific, observable, and measurable. Include examples where helpful.
Format as a clear table or list for easy use.`;

    // Create output
    const output = `📊 ASSESSMENT RUBRIC GENERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Assessment: ${rubricName}
Number of Criteria: ${numCriteria}
Performance Levels: ${rubricLevels}

GENERATED AI PROMPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${aiPrompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO USE:
1. Copy the prompt above
2. Paste into ChatGPT or Claude
3. Request: "Format as a table" or "Format as PDF"
4. Review for clarity and alignment
5. Download or save as PDF
6. Share with students BEFORE assignment
7. Use for grading and feedback

BEST PRACTICES:
✓ Share rubric with students upfront
✓ Use same rubric for all students (consistency)
✓ Make descriptors specific and observable
✓ Pilot rubric and refine based on use
✓ Keep rubric to 1-2 pages maximum
✓ Use for formative feedback, not just grades`;

    // Display output
    document.getElementById('rubricContent').textContent = output;
    document.getElementById('rubricOutput').style.display = 'block';
    showSuccessMessage('Rubric prompt generated! Perfect for creating detailed assessment rubrics.');
    
    // Scroll to output
    document.getElementById('rubricOutput').scrollIntoView({ behavior: 'smooth' });
}

// ===== RESEARCH & WRITING FUNCTIONS =====

/**
 * Generate Writing Section
 * Creates AI prompts for writing paper sections
 */
function generateWritingSection(e) {
    e.preventDefault();

    const section = document.getElementById('paperSection').value;
    const style = document.getElementById('writingStyle').value;
    const mainPoints = document.getElementById('mainPoints').value;
    const wordCount = document.getElementById('wordCount').value;

    // Create AI Prompt
    const aiPrompt = `Write the ${section} section of an academic research paper (approximately ${wordCount} words).

Writing style: ${style}

Main points to cover:
${mainPoints}

Requirements:
✓ Use academic tone and formal language
✓ Include clear topic sentences
✓ Support ideas with evidence and examples
✓ Use transition phrases between ideas
✓ Include citations where needed (${section === 'Literature Review' ? 'multiple' : 'as appropriate'})
✓ Maintain logical flow and coherence

Additional notes:
- This is a draft for review and revision
- You will fact-check and add citations
- You will revise for voice and style
- You may trim, expand, or restructure

Generate the section now:`;

    // Create output
    const output = `📝 RESEARCH WRITING SECTION GENERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Paper Section: ${section}
Target Word Count: ${wordCount} words
Writing Style: ${style}

GENERATED AI PROMPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${aiPrompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO USE:
1. Copy the prompt above
2. Paste into ChatGPT or Claude
3. Review generated text for:
   ✓ Accuracy of information
   ✓ Proper citations/attribution
   ✓ Relevance to your research
   ✓ Alignment with your voice
4. Edit and customize as needed
5. Add specific citations and examples
6. Check grammar and formatting
7. Include in your paper

POST-GENERATION CHECKLIST:
□ Information is accurate
□ Sources are cited appropriately
□ Tone matches academic style
□ Connects to thesis/argument
□ Flows logically
□ Grammar is correct
□ Meets word count requirement
□ Includes transitions to next section`;

    // Display output
    document.getElementById('writingContent').textContent = output;
    document.getElementById('writingOutput').style.display = 'block';
    showSuccessMessage('Writing prompt generated! Perfect for drafting research sections.');
    
    // Scroll to output
    document.getElementById('writingOutput').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Generate Citation
 * Creates citations in various formats
 */
function generateCitation(e) {
    e.preventDefault();

    const style = document.getElementById('citationStyle').value;
    const sourceType = document.getElementById('sourceType').value;
    const details = document.getElementById('sourceDetails').value;

    // Parse citation style
    let citationExample = '';
    let instructions = '';

    if (style.includes('APA')) {
        citationExample = `Author, A. A. (Year). Title of work. Publisher.`;
        instructions = `APA 7th Edition format:
- Invert author name (Last, First Initial.)
- Capitalize only first word of title
- Include DOI or URL at end if available
- Use hanging indent in bibliography`;
    } else if (style.includes('MLA')) {
        citationExample = `Author. "Title of Work." Publisher, Year.`;
        instructions = `MLA 9th Edition format:
- Start with author's full name (Last, First)
- Use quotation marks for article titles
- Use italics for book/journal titles
- Include page numbers for quotes`;
    } else if (style.includes('Chicago')) {
        citationExample = `Author. Title of Work. Publisher, Year.`;
        instructions = `Chicago 17th Edition format:
- Use notes and bibliography system
- Full author name for first reference
- Include publication place
- Use shortened form for subsequent notes`;
    } else {
        citationExample = `Author, A. (Year) 'Title of Work', Journal Name, Volume(Issue), pp. XX-XX.`;
        instructions = `Harvard format:
- Author surname first, comma, initial(s)
- Year in parentheses after author
- Title in single quotes
- Journal/Publisher in italics`;
    }

    // Create output
    const output = `📚 CITATION GENERATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Citation Style: ${style}
Source Type: ${sourceType}

Source Details Provided:
${details}

SUGGESTED CITATION FORMAT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━

${citationExample}

DETAILED INSTRUCTIONS FOR ${style.toUpperCase()}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━

${instructions}

VERIFICATION CHECKLIST:
□ Author name spelled correctly
□ Publication year is accurate
□ Title matches source exactly
□ Publisher/Journal name is correct
□ Page numbers (if applicable) are accurate
□ URL/DOI is current and working
□ Format follows style guide exactly
□ Consistent with other citations in paper

RECOMMENDED TOOLS FOR CITATIONS:
✓ Zotero (Free, open-source)
✓ Mendeley (Free with cloud sync)
✓ EasyBib (Free with premium options)
✓ CitationMachine (Free online)
✓ Your institution's library database

NEXT STEPS:
1. Verify all citation details with original source
2. Add to your bibliography
3. Use consistent format throughout paper
4. Double-check formatting against style guide
5. Have peer review citation formatting`;

    // Display output
    document.getElementById('citationContent').textContent = output;
    document.getElementById('citationOutput').style.display = 'block';
    showSuccessMessage('Citation format provided! Always verify against the original source.');
    
    // Scroll to output
    document.getElementById('citationOutput').scrollIntoView({ behavior: 'smooth' });
}

// ===== UTILITY FUNCTIONS =====

/**
 * Copy content to clipboard
 */
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = '✓ Copied to Clipboard!';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Copy failed. Please try again.');
    });
}

/**
 * Show success message
 */
function showSuccessMessage(message) {
    // Create container if it doesn't exist
    let messageContainer = document.querySelector('.message-container');
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        messageContainer.style.position = 'fixed';
        messageContainer.style.top = '20px';
        messageContainer.style.right = '20px';
        messageContainer.style.zIndex = '9999';
        document.body.appendChild(messageContainer);
    }

    const successMsg = document.createElement('div');
    successMsg.className = 'success-message show';
    successMsg.textContent = '✓ ' + message;
    messageContainer.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.classList.remove('show');
        setTimeout(() => successMsg.remove(), 300);
    }, 3000);
}

/**
 * Initialize on document load
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('AI Assessment & Research Toolkit loaded successfully');
    
    // Set up form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Form handlers are already set via onsubmit in HTML
        });
    });
});

/**
 * Keyboard shortcut support
 * Alt+1 = Assessment, Alt+2 = Research, Alt+3 = Tools, Alt+4 = Prompts
 */
document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        switch(event.key) {
            case '1':
                switchTab('assessment');
                event.preventDefault();
                break;
            case '2':
                switchTab('research');
                event.preventDefault();
                break;
            case '3':
                switchTab('tools');
                event.preventDefault();
                break;
            case '4':
                switchTab('prompts');
                event.preventDefault();
                break;
        }
    }
});

/**
 * Export data to JSON (future enhancement)
 */
function exportToJSON() {
    const data = {
        timestamp: new Date().toISOString(),
        toolkit: 'AI Assessment & Research Toolkit',
        version: '1.0'
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'toolkit-data.json';
    link.click();
}

/**
 * Print current view
 */
function printToolkit() {
    window.print();
}

// Make functions available globally
window.switchTab = switchTab;
window.generateQuestions = generateQuestions;
window.generateRubric = generateRubric;
window.generateWritingSection = generateWritingSection;
window.generateCitation = generateCitation;
window.copyToClipboard = copyToClipboard;
window.showSuccessMessage = showSuccessMessage;
window.exportToJSON = exportToJSON;
window.printToolkit = printToolkit;
