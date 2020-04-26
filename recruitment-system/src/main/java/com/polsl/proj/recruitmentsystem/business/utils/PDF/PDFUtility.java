package com.polsl.proj.recruitmentsystem.business.utils.PDF;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ContractPOJO;
import lombok.*;
import org.springframework.stereotype.Component;

import java.io.*;

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PDFUtility {

    private final ContractTemplate contractTemplate = new ContractTemplate();
    private  ByteArrayInputStream contractFile;
    private Document document = new Document();

    public ByteArrayInputStream createSimplePDFFile() {
        Document  document = new Document();
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

        Paragraph chunk = new Paragraph(contractTemplate.getEmploymnetType(), headFont);
        insertEmptyLines(2, chunk);
        chunk.setAlignment(Element.ALIGN_CENTER);
        Paragraph chunk2 = new Paragraph(contractTemplate.contractingPartiesInfo(), standardFont);
        chunk2.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk2);

        Paragraph responsibilities = new Paragraph("Obowiązki Zleceniobiorcy", boldFont);

        Chunk bullet = new Chunk("\u2022");
        List list = new List(List.UNORDERED);
        list.setListSymbol(bullet);

        for (String responsibility : contractTemplate.employeeResponibilities()) {
            list.add(responsibility);
        }

        Paragraph obligations = new Paragraph();
        insertEmptyLines(2, obligations);
        obligations.add(new Paragraph("Obowiązki Zleceniobiorcy", boldFont));

        Paragraph chunk3 = new Paragraph(contractTemplate.employerObligations(), standardFont);
        chunk3.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk3);

        Paragraph warningsHeader = new Paragraph();
        insertEmptyLines(2, warningsHeader);
        warningsHeader.add(new Paragraph("Obowiązki Zleceniobiorcy", boldFont));

        Paragraph chunk4 = new Paragraph(contractTemplate.warnings(), standardFont);
        chunk4.setAlignment(Element.ALIGN_JUSTIFIED);
        insertEmptyLines(3, chunk4);

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
            document.add(chunk4);
            document.add(chunk4);
            document.add(chunkFinal);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        document.close();
        return new ByteArrayInputStream(out.toByteArray());
    }


    private void insertEmptyLines(int count, Paragraph paragraph) {
        for (int i = 0; i < count; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }

    public void setContractParams(ContractPOJO dto) {
        contractTemplate.selectOptions(dto);
    }
}
