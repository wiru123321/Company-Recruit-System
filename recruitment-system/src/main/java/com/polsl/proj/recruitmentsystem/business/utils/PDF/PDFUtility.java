package com.polsl.proj.recruitmentsystem.business.utils.PDF;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.*;

@Component
@AllArgsConstructor
public class PDFUtility {

    ContractTemplate contractTemplate;

    public ByteArrayInputStream createSimplePDFFile() {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Font headFont = FontFactory.getFont(FontFactory.TIMES_ROMAN, 25, Font.BOLD);
        try {
            PdfWriter.getInstance(document, out);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        BaseFont helvetica = null;
        try {
            helvetica = BaseFont.createFont(BaseFont.HELVETICA, BaseFont.CP1250, BaseFont.EMBEDDED);
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
        Font standardFont = new Font(helvetica, 12);
        Font boldFont = new Font(helvetica, 12,Font.BOLD);
        Font smallFont = new Font(helvetica, 9);


        Paragraph chunk = new Paragraph(contractTemplate.contractTitle(), headFont);
        innsertEmptyLines(2, chunk);
        chunk.setAlignment(Element.ALIGN_CENTER);
        Paragraph chunk2 = new Paragraph(contractTemplate.contractingPartiesInfo(), standardFont);
        chunk2.setAlignment(Element.ALIGN_JUSTIFIED);
        innsertEmptyLines(3, chunk2);

        Paragraph responsibilities = new Paragraph("Obowiązki Zleceniobiorcy", boldFont);

        Chunk bullet = new Chunk("\u2022");
        List list = new List(List.UNORDERED);
        list.setListSymbol(bullet);

        for (String responsibility : contractTemplate.employeeResponibilities()) {
            list.add(responsibility);
        }

        Paragraph obligations = new Paragraph();
        innsertEmptyLines(2, obligations);
        obligations.add(new Paragraph("Obowiązki Zleceniobiorcy", boldFont));

        Paragraph chunk3 = new Paragraph(contractTemplate.employerObligations(), standardFont);
        chunk3.setAlignment(Element.ALIGN_JUSTIFIED);
        innsertEmptyLines(3, chunk3);


        Paragraph chunkFinal = new Paragraph("data i podpis Zleceniodawcy                   data i podpis Zleceeniobiorcy",smallFont);
        chunkFinal.setAlignment(Element.ALIGN_RIGHT);


        document.open();
        try {
            document.add(chunk);
            document.add(chunk2);
            document.add(responsibilities);
            document.add(list);
            document.add(obligations);
            document.add(chunk3);
            document.add(chunkFinal);


        } catch (DocumentException e) {
            e.printStackTrace();
        }
        document.close();
        return new ByteArrayInputStream(out.toByteArray());
    }


    private void innsertEmptyLines(int count, Paragraph paragraph) {
        for (int i = 0; i < count; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }
}
