package com.polsl.proj.recruitmentsystem.business.utils.PDF;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ContractPOJO;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.*;

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PDFUtility {

    @Autowired
    private ContractTemplate contractTemplate = new ContractTemplate();

    private static Font headFont = FontFactory.getFont(FontFactory.TIMES_ROMAN, 25, Font.BOLD);
    private static Font standardFont, boldFont, smallFont;
    private BaseFont helvetica;
    {
        try {
            helvetica = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.CP1250, BaseFont.EMBEDDED);
            smallFont = new Font(helvetica, 9);
            standardFont = new Font(helvetica, 12);
            boldFont = new Font(helvetica, 12, Font.BOLD);
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
    }

    public ByteArrayInputStream createSimplePDFFile() {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            PdfWriter.getInstance(document, out);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        document.open();
        try {
            addHeader(document);
            addInitials(document);
            addEmployeeDuties(document);
            addEmployerObligations(document);
            addLawIssues(document);
            addFinals(document);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        document.close();
        return new ByteArrayInputStream(out.toByteArray());
    }

    private void addHeader(Document document) throws DocumentException {
        Paragraph chunk = new Paragraph(contractTemplate.getEmploymnetType(), headFont);
        insertEmptyLines(2, chunk);
        chunk.setAlignment(Element.ALIGN_CENTER);
        document.add(chunk);
    }

    private void addInitials(Document document) throws DocumentException {
        Paragraph chunk2 = new Paragraph(contractTemplate.contractingPartiesInfo(), standardFont);
        chunk2.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk2);
        document.add(chunk2);
    }

    private void addEmployeeDuties(Document document) throws DocumentException {
        Paragraph responsibilities = new Paragraph("Obowiązki Zleceniobiorcy", boldFont);

        Chunk bullet = new Chunk("\u2022");
        List list = new List(List.UNORDERED);
        list.setListSymbol(bullet);
        for (String responsibility : contractTemplate.employeeResponibilities()) {
            list.add(responsibility);
        }
        document.add(responsibilities);
        document.add(list);
    }

    private void addEmployerObligations(Document document) throws DocumentException {
        Paragraph obligations = new Paragraph();
        insertEmptyLines(2, obligations);
        obligations.add(new Paragraph("Zobowiązania Zleceniodawcy", boldFont));

        Paragraph chunk3 = new Paragraph(contractTemplate.employerObligations(), standardFont);
        chunk3.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk3);
        document.add(obligations);
        document.add(chunk3);
    }

    private void addLawIssues(Document document) throws DocumentException {
        Paragraph warningsHeader = new Paragraph();
        insertEmptyLines(2, warningsHeader);
        warningsHeader.add(new Paragraph("Obostrzenia prawne", boldFont));

        Paragraph chunk4 = new Paragraph(contractTemplate.warnings(), standardFont);
        chunk4.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk4);
        document.add(warningsHeader);
        document.add(chunk4);
    }

    private void addFinals(Document document) throws DocumentException {
        Paragraph chunkFinal = new Paragraph("data i podpis Zleceniodawcy                   data i podpis Zleceeniobiorcy", smallFont);
        chunkFinal.setAlignment(Element.ALIGN_RIGHT);
        document.add(chunkFinal);
    }

    private void insertEmptyLines(int count, Paragraph paragraph) {
        for (int i = 0; i < count; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }

    public void setContractParams(ContractPOJO dto, String name) {
        contractTemplate.selectOptions(dto,name);
    }
}
