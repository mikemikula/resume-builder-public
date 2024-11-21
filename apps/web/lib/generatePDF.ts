import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export const generatePDF = async () => {
  // Hide elements that shouldn't be in the PDF
  const noPrintElements = document.querySelectorAll('.no-print')
  noPrintElements.forEach(el => (el as HTMLElement).style.display = 'none')

  try {
    const content = document.getElementById('resume-content')
    if (!content) throw new Error('Resume content not found')

    // Force light theme and add PDF class for styling
    document.documentElement.classList.add('light', 'generating-pdf')

    // Add print styles
    const style = document.createElement('style')
    style.innerHTML = `
      .generating-pdf {
        --page-padding: 40px;
      }
      .generating-pdf #resume-content {
        max-width: 1200px !important;
        margin: 0 auto !important;
        padding: var(--page-padding) !important;
        background: white !important;
      }
      .generating-pdf .card {
        background: white !important;
        box-shadow: none !important;
        border: none !important;
        padding: 24px 0 !important;
        margin-bottom: 32px !important;
      }
      .generating-pdf h1 { 
        font-size: 42px !important;
        margin-bottom: 16px !important;
        color: #1a1a1a !important;
        font-weight: 700 !important;
        background: none !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
      .generating-pdf h2 { 
        font-size: 32px !important;
        margin-bottom: 20px !important;
        color: #4f46e5 !important;
        border-bottom: 2px solid #4f46e5 !important;
        padding-bottom: 8px !important;
        font-weight: 600 !important;
        background: none !important;
        -webkit-text-fill-color: #4f46e5 !important;
      }
      .generating-pdf h3 { 
        font-size: 24px !important;
        margin-bottom: 12px !important;
        color: #1e293b !important;
        font-weight: 600 !important;
        background: none !important;
        -webkit-text-fill-color: #1e293b !important;
      }
      .generating-pdf p, 
      .generating-pdf span, 
      .generating-pdf li { 
        font-size: 14px !important;
        line-height: 1.8 !important;
        color: #1e293b !important;
        background: none !important;
        -webkit-text-fill-color: #1e293b !important;
      }
      .generating-pdf .section-title {
        margin-top: 24px !important;
        margin-bottom: 20px !important;
        font-size: 32px !important;
        color: #4f46e5 !important;
        border-bottom: 2px solid #4f46e5 !important;
        padding-bottom: 8px !important;
        background: none !important;
        -webkit-text-fill-color: #4f46e5 !important;
      }
      .generating-pdf .badge {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        color: #1e293b !important;
        padding: 4px 12px !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        -webkit-text-fill-color: #1e293b !important;
      }
      .generating-pdf .bg-surface-hover\\/20 {
        background: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
        padding: 16px !important;
        margin-bottom: 12px !important;
      }
      .generating-pdf .text-text-primary {
        color: #1e293b !important;
        -webkit-text-fill-color: #1e293b !important;
      }
      .generating-pdf .text-text-secondary {
        color: #475569 !important;
        -webkit-text-fill-color: #475569 !important;
      }
      .generating-pdf .text-accent {
        color: #4f46e5 !important;
        -webkit-text-fill-color: #4f46e5 !important;
      }
      .generating-pdf [class*="bg-gradient-to-r"],
      .generating-pdf [class*="bg-clip-text"],
      .generating-pdf [class*="text-transparent"] {
        background: none !important;
        background-clip: unset !important;
        -webkit-background-clip: unset !important;
        color: #1a1a1a !important;
        -webkit-text-fill-color: #1a1a1a !important;
      }
      .generating-pdf .text-2xl.font-bold {
        color: #4f46e5 !important;
        -webkit-text-fill-color: #4f46e5 !important;
        background: none !important;
      }
      .generating-pdf ul {
        margin-left: 20px !important;
      }
      .generating-pdf li {
        margin-bottom: 8px !important;
      }
      .generating-pdf .flex {
        display: flex !important;
        gap: 12px !important;
        align-items: center !important;
      }
      .generating-pdf .border-b {
        border-bottom: 1px solid #e2e8f0 !important;
        padding-bottom: 24px !important;
        margin-bottom: 24px !important;
      }
    `
    document.head.appendChild(style)

    // Wait for styles to apply
    await new Promise(resolve => setTimeout(resolve, 500))

    // Create canvas
    const canvas = await html2canvas(content, {
      scale: 2, // Higher resolution
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: content.offsetWidth,
      height: content.offsetHeight,
      windowWidth: content.offsetWidth,
      windowHeight: content.offsetHeight,
      onclone: (clonedDoc) => {
        const clonedStyle = clonedDoc.createElement('style')
        clonedStyle.innerHTML = style.innerHTML
        clonedDoc.head.appendChild(clonedStyle)
      }
    })

    // Create PDF with custom dimensions
    const imgWidth = 210 // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [imgWidth, imgHeight + 20] // Add some padding
    })

    // Add image
    pdf.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0,
      10, // Top margin
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    )

    // Save PDF
    pdf.save('michael-mikula-resume.pdf')
  } catch (error) {
    console.error('Error generating PDF:', error)
  } finally {
    // Cleanup
    noPrintElements.forEach(el => (el as HTMLElement).style.display = '')
    document.documentElement.classList.remove('light', 'generating-pdf')
    const tempStyle = document.querySelector('style:last-child')
    if (tempStyle) tempStyle.remove()
  }
} 